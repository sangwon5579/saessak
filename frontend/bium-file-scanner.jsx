// 비움/새싹 — PC folder scanner. All analysis runs locally in the
// browser; nothing about the user's files leaves the device.
// (backend/main.py still exists for server-side reuse — e.g. a future
// mobile client — but is not called from this UI.)

const { useRef: useRefScanner, useState: useStateScanner } = React;

// ─── Helpers (format / metadata) ──────────────────────────────────
function getBiumExtension(name) {
  const parts = name.split('.');
  return parts.length > 1 ? parts.pop().toLowerCase() : '';
}

function formatBiumSize(savedMb, savedBytes) {
  let bytes;
  if (typeof savedBytes === 'number' && isFinite(savedBytes)) bytes = savedBytes;
  else bytes = (Number(savedMb) || 0) * 1024 * 1024;
  bytes = Math.max(0, bytes);
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  if (bytes >= 1024)         return (bytes / 1024).toFixed(1) + ' KB';
  return Math.round(bytes) + ' B';
}

function formatBiumCo2(co2Gram) {
  const g = Math.max(0, Number(co2Gram) || 0);
  if (g >= 1)     return g.toFixed(2) + ' g';
  if (g >= 0.001) return g.toFixed(3) + ' g';
  return (g * 1000).toFixed(1) + ' mg';
}

function toBiumMetadata(file, relativePath) {
  return {
    name:         file.name,
    sizeBytes:    file.size,
    lastModified: new Date(file.lastModified).toISOString(),
    type:         file.type,
    relativePath: relativePath || file.webkitRelativePath || file.name,
    extension:    getBiumExtension(file.name),
  };
}

// ═══════════════════════════════════════════════════════════════════
// Local analysis — 1:1 port of `backend/main.py`
// Keeps the same response shape so the rest of the UI is unchanged.
// ═══════════════════════════════════════════════════════════════════

const DUPLICATE_KEYWORDS = ['copy', 'copied', 'duplicate', '복사본', '사본', 'final_final', '수정본'];
const ONE_YEAR_MS         = 365 * 24 * 60 * 60 * 1000;
const LARGE_FILE_BYTES    = 100 * 1024 * 1024;       // 100 MB
const CO2_GRAM_PER_MB     = 4.0;                     // 1MB ≈ 4g CO₂
const BYTES_PER_POINT     = 100 * 1024;              // 100KB → 1 새싹
const CO2_GRAM_PER_RAMEN  = 1000.0;                  // 라면 1개 ≈ 1,000g CO₂

function round6(n) { return Math.round(n * 1e6) / 1e6; }

function splitName(name) {
  const i = (name || '').lastIndexOf('.');
  if (i < 0) return [name || '', ''];
  return [name.slice(0, i), name.slice(i + 1).toLowerCase()];
}

function hasDuplicateKeyword(name) {
  const lower = (name || '').toLowerCase();
  return DUPLICATE_KEYWORDS.some(k => lower.includes(k));
}

function normalizedDuplicateKey(file) {
  const [baseRaw, extRaw] = splitName((file.name || '').toLowerCase());
  let base = baseRaw
    .replace(/\s*\(\d+\)$/, '')
    .replace(/[\s._-]+copy(?:\s*\d+)?$/, '')
    .replace(/[\s._-]+copied(?:\s*\d+)?$/, '')
    .replace(/[\s._-]+duplicate(?:\s*\d+)?$/, '')
    .split('final_final').join('final')
    .split('복사본').join('')
    .split('사본').join('')
    .split('수정본').join('')
    .replace(/[\s._-]+/g, ' ')
    .trim();
  const ext = ((file.extension || extRaw || '') + '').toLowerCase().replace(/^\.+/, '');
  return `${base}.${ext}`;
}

function detectDuplicateIndexes(files) {
  const dup = new Set();

  // 1) exact match — same name (case-insensitive) + same size
  const exactGroups = new Map();
  files.forEach((f, idx) => {
    const key = `${(f.name || '').toLowerCase()}|${f.sizeBytes}`;
    if (!exactGroups.has(key)) exactGroups.set(key, []);
    exactGroups.get(key).push(idx);
  });
  exactGroups.forEach((indexes) => {
    if (indexes.length > 1) for (let i = 1; i < indexes.length; i++) dup.add(indexes[i]);
  });

  // 2) similar name (normalized) + size within 2%
  const similarGroups = new Map();
  files.forEach((f, idx) => {
    const key = normalizedDuplicateKey(f);
    if (!similarGroups.has(key)) similarGroups.set(key, []);
    similarGroups.get(key).push(idx);
  });
  similarGroups.forEach((indexes) => {
    if (indexes.length < 2) return;
    // pick the "original": one WITHOUT a duplicate keyword, lowest index.
    const sorted = [...indexes].sort((a, b) => {
      const ak = hasDuplicateKeyword(files[a].name) ? 1 : 0;
      const bk = hasDuplicateKeyword(files[b].name) ? 1 : 0;
      return ak !== bk ? ak - bk : a - b;
    });
    const originalIdx = sorted[0];
    for (const idx of indexes) {
      if (idx === originalIdx || dup.has(idx)) continue;
      for (const otherIdx of indexes) {
        if (otherIdx === idx) continue;
        const bigger  = Math.max(files[idx].sizeBytes, files[otherIdx].sizeBytes, 1);
        const smaller = Math.min(files[idx].sizeBytes, files[otherIdx].sizeBytes);
        if (smaller / bigger >= 0.98) { dup.add(idx); break; }
      }
    }
  });

  // 3) anything with a duplicate keyword in its name
  files.forEach((f, idx) => { if (hasDuplicateKeyword(f.name)) dup.add(idx); });

  return dup;
}

function candidateReason(category) {
  if (category === 'DUPLICATE_CANDIDATE') return '이름 또는 용량이 유사한 중복 후보입니다.';
  if (category === 'OLD_LARGE_FILE')      return '1년 이상 수정되지 않았고 100MB 이상인 대용량 파일입니다.';
  if (category === 'LARGE_FILE')          return '100MB 이상인 대용량 파일입니다.';
  return '1년 이상 수정되지 않은 파일입니다.';
}

function riskLevel(category) { return category === 'OLD_LARGE_FILE' ? 'MEDIUM' : 'LOW'; }

function analyzeBiumFiles(files) {
  const now = Date.now();
  const dup = detectDuplicateIndexes(files);
  const candidates = [];

  files.forEach((file, idx) => {
    const modifiedMs = file.lastModified ? Date.parse(file.lastModified) : NaN;
    const isOld       = Number.isFinite(modifiedMs) && (now - modifiedMs) >= ONE_YEAR_MS;
    const isLarge     = file.sizeBytes >= LARGE_FILE_BYTES;
    const isDuplicate = dup.has(idx);

    let category = null;
    if (isDuplicate)           category = 'DUPLICATE_CANDIDATE';
    else if (isOld && isLarge) category = 'OLD_LARGE_FILE';
    else if (isLarge)          category = 'LARGE_FILE';
    else if (isOld)            category = 'OLD_FILE';

    if (!category) return;

    const savedBytes = file.sizeBytes;
    const savedMbRaw = savedBytes / 1024 / 1024;
    const co2GramRaw = savedMbRaw * CO2_GRAM_PER_MB;
    const point = Math.max(1, Math.round(savedBytes / BYTES_PER_POINT));

    candidates.push({
      name:           file.name,
      relativePath:   file.relativePath || file.name,
      category,
      riskLevel:      riskLevel(category),
      recommendation: '직접 확인 후 삭제 추천',
      reason:         candidateReason(category),
      savedBytes,
      savedMb:        round6(savedMbRaw),
      co2Gram:        round6(co2GramRaw),
      point,
      seed:           point,
    });
  });

  const totalBytes        = candidates.reduce((s, c) => s + c.savedBytes, 0);
  const estimatedSavedMb  = round6(totalBytes / 1024 / 1024);
  const estimatedCo2Gram  = round6(totalBytes / 1024 / 1024 * CO2_GRAM_PER_MB);
  const totalSeed         = candidates.reduce((s, c) => s + c.point, 0);
  const ramenCount        = Math.round(estimatedCo2Gram / CO2_GRAM_PER_RAMEN * 10) / 10;

  return {
    summary: {
      totalFiles:          files.length,
      cleanableFiles:      candidates.length,
      estimatedSavedBytes: totalBytes,
      estimatedSavedMb,
      estimatedCo2Gram,
      earnedPoint:         totalSeed,
      earnedSeed:          totalSeed,
      ramenCount,
    },
    candidates,
  };
}

async function collectBiumDirectoryFiles(directoryHandle, basePath, entries) {
  for await (const [name, handle] of directoryHandle.entries()) {
    const relativePath = basePath ? `${basePath}/${name}` : name;
    if (handle.kind === 'file') {
      const file = await handle.getFile();
      entries.push({ file, relativePath, parentHandle: directoryHandle, name });
    } else if (handle.kind === 'directory') {
      await collectBiumDirectoryFiles(handle, relativePath, entries);
    }
  }
}

async function ensureBiumWritePermission(directoryHandle) {
  if (!directoryHandle || !directoryHandle.queryPermission || !directoryHandle.requestPermission) return false;
  const options = { mode: 'readwrite' };
  if ((await directoryHandle.queryPermission(options)) === 'granted') return true;
  return (await directoryHandle.requestPermission(options)) === 'granted';
}

// ─── category → human label / palette ──────────────────────────────
const CAT_META = {
  DUPLICATE_CANDIDATE: { kind: '중복 후보',    glyph: '📑', tint: ['#FFD9A8', '#F4A261'] },
  OLD_LARGE_FILE:      { kind: '오래된 대용량', glyph: '📦', tint: ['#FCE5CB', '#A85A1F'] },
  LARGE_FILE:          { kind: '대용량 파일',   glyph: '💾', tint: ['#D8EEDF', '#2D6A4F'] },
  OLD_FILE:            { kind: '오래된 파일',   glyph: '🗂', tint: ['#E5EAFF', '#3A55A3'] },
};
function metaFor(cat)   { return CAT_META[cat] || { kind: cat || '후보', glyph: '🗃', tint: ['#EFF1E8', '#7C8A80'] }; }
function safetyPct(risk){ return risk === 'MEDIUM' ? 85 : 96; }

// ─── Main component ──────────────────────────────────────────────
function BiumFileScanner({ onBack, onCleaned, onComplete }) {
  const inputRef           = useRefScanner(null);
  const fileEntryMapRef    = useRefScanner(new Map());
  const directoryHandleRef = useRefScanner(null);
  const dragRef            = useRefScanner({ startX: 0, startY: 0, dragging: false });

  const [selectedCount, setSelectedCount] = useStateScanner(0);
  const [result, setResult]               = useStateScanner(null);
  const [error, setError]                 = useStateScanner('');
  const [notice, setNotice]               = useStateScanner('');
  const [loading, setLoading]             = useStateScanner(false);
  const [deletingPath, setDeletingPath]   = useStateScanner('');
  const [drag, setDrag]                   = useStateScanner({ x: 0, y: 0, on: false });
  const [burst, setBurst]                 = useStateScanner(null);
  const [popSeed, setPopSeed]             = useStateScanner(null);
  const [deletedCount, setDeletedCount]   = useStateScanner(0);
  const [earnedSeed, setEarnedSeed]       = useStateScanner(() => {
    try {
      const saved = parseInt(window.localStorage.getItem('biumEarnedSeed') ||
                             window.localStorage.getItem('biumEarnedPoints') || '0', 10);
      return Number.isFinite(saved) && saved > 0 ? saved : 0;
    } catch { return 0; }
  });

  const canPickDirectory = typeof window.showDirectoryPicker === 'function';

  // ─── analysis flow ─────────────────────────────────
  const analyzeEntries = async (entries) => {
    setSelectedCount(entries.length);
    setResult(null);
    setError('');
    setNotice('');
    setDeletedCount(0);
    setDrag({ x: 0, y: 0, on: false });

    if (entries.length === 0) return;

    const metadata = entries.map((entry) => toBiumMetadata(entry.file, entry.relativePath));
    fileEntryMapRef.current = new Map(entries.map((entry) => [entry.relativePath, entry]));
    setLoading(true);
    // Yield once so the loading state can paint before the (potentially
    // heavy) duplicate-detection loop runs on the same thread.
    await new Promise((r) => setTimeout(r, 0));
    try {
      const analysis = analyzeBiumFiles(metadata);
      setResult(analysis);
    } catch {
      setError('분석 중 문제가 발생했습니다. 다른 폴더로 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handlePickFolder = async () => {
    if (!canPickDirectory) {
      setNotice('이 브라우저는 직접 삭제 권한을 지원하지 않아 분석만 가능합니다. Chrome 또는 Edge에서 다시 시도해주세요.');
      inputRef.current && inputRef.current.click();
      return;
    }
    try {
      const directoryHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
      const entries = [];
      await collectBiumDirectoryFiles(directoryHandle, '', entries);
      directoryHandleRef.current = directoryHandle;
      await analyzeEntries(entries);
    } catch (err) {
      if (err && err.name === 'AbortError') return;
      setError('폴더를 읽는 중 문제가 발생했습니다.');
    }
  };

  const handleFiles = async (event) => {
    const files = Array.from(event.target.files || []);
    directoryHandleRef.current = null;
    fileEntryMapRef.current    = new Map();
    await analyzeEntries(files.map((file) => ({
      file,
      relativePath: file.webkitRelativePath || file.name,
      parentHandle: null,
      name: file.name,
    })));
    event.target.value = '';
  };

  // ─── card actions ─────────────────────────────────
  const removeTopCard = (mutator) => {
    setResult((previous) => {
      if (!previous) return previous;
      const [, ...rest] = previous.candidates;
      const nextSummary = mutator ? mutator(previous.summary, previous.candidates[0]) : previous.summary;
      return { summary: nextSummary, candidates: rest };
    });
    setDrag({ x: 0, y: 0, on: false });
  };

  // "나중에 정리하기" — 현재 카드를 후보 목록 맨 뒤로 보낸다.
  // 결정을 잠시 미룰 뿐 카운트나 누적 새싹에는 영향 없음.
  const postponeTopCard = () => {
    setResult((previous) => {
      if (!previous || previous.candidates.length < 2) return previous;
      const [first, ...rest] = previous.candidates;
      return { ...previous, candidates: [...rest, first] };
    });
    setDrag({ x: 0, y: 0, on: false });
  };

  const updateSummaryAfterDelete = (summary, candidate) => {
    if (!summary || !candidate) return summary;
    return {
      ...summary,
      cleanableFiles:     Math.max(0, (summary.cleanableFiles     ?? 0) - 1),
      estimatedSavedBytes:Math.max(0, (summary.estimatedSavedBytes?? 0) - (candidate.savedBytes ?? 0)),
      estimatedSavedMb:   Math.max(0, +(((summary.estimatedSavedMb ?? 0) - (candidate.savedMb ?? 0))).toFixed(6)),
      estimatedCo2Gram:   Math.max(0, +(((summary.estimatedCo2Gram ?? 0) - (candidate.co2Gram ?? 0))).toFixed(6)),
    };
  };

  const handleDeleteCandidate = async (candidate) => {
    const relativePath = candidate.relativePath || candidate.name;
    const entry = fileEntryMapRef.current.get(relativePath);
    const earn  = candidate.seed ?? candidate.point ?? 1;
    const co2g  = candidate.co2Gram ?? 0;

    // Browser-only mode (no real delete) — still award seeds for the demo
    if (!entry || !entry.parentHandle || !directoryHandleRef.current) {
      setBurst(Date.now());
      setPopSeed({ amount: earn, ts: Date.now() });
      setEarnedSeed((v) => {
        const next = v + earn;
        try { window.localStorage.setItem('biumEarnedSeed', String(next)); } catch {}
        return next;
      });
      setDeletedCount((c) => c + 1);
      onCleaned && onCleaned(earn, +(co2g / 1000).toFixed(3));
      removeTopCard(updateSummaryAfterDelete);
      return;
    }

    const confirmed = window.confirm(`${relativePath}\n\n이 파일을 실제로 삭제할까요? 이 작업은 되돌릴 수 없습니다.`);
    if (!confirmed) {
      setDrag({ x: 0, y: 0, on: false });
      return;
    }

    setDeletingPath(relativePath);
    setError('');
    setNotice('');
    try {
      const permitted = await ensureBiumWritePermission(directoryHandleRef.current);
      if (!permitted) throw new Error('WRITE_PERMISSION_DENIED');

      await entry.parentHandle.removeEntry(entry.name);
      fileEntryMapRef.current.delete(relativePath);

      setBurst(Date.now());
      setPopSeed({ amount: earn, ts: Date.now() });
      setEarnedSeed((v) => {
        const next = v + earn;
        try { window.localStorage.setItem('biumEarnedSeed', String(next)); } catch {}
        return next;
      });
      setDeletedCount((c) => c + 1);
      setNotice(`파일을 삭제해 +${earn} 새싹을 획득했어요`);
      onCleaned && onCleaned(earn, +(co2g / 1000).toFixed(3));
      removeTopCard(updateSummaryAfterDelete);
    } catch (err) {
      setError(err && err.message === 'WRITE_PERMISSION_DENIED'
        ? '삭제 권한이 거부되었습니다. 폴더 권한을 다시 허용해주세요.'
        : '파일 삭제에 실패했습니다. 이미 삭제되었거나 권한이 부족할 수 있습니다.');
    } finally {
      setDeletingPath('');
      setDrag({ x: 0, y: 0, on: false });
    }
  };

  const skipTop = () => removeTopCard();

  // pointer dragging
  const pStart = (e) => {
    dragRef.current = { startX: e.clientX, startY: e.clientY, dragging: true };
    setDrag(d => ({ ...d, on: true }));
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const pMove = (e) => {
    if (!dragRef.current.dragging) return;
    setDrag({ x: e.clientX - dragRef.current.startX, y: e.clientY - dragRef.current.startY, on: true });
  };
  const pEnd = () => {
    dragRef.current.dragging = false;
    if (drag.x > 90)       handleDeleteCandidate(result && result.candidates[0]);
    else if (drag.x < -90) skipTop();
    else                   setDrag({ x: 0, y: 0, on: false });
  };

  // ─── render ──────────────────────────────────────
  const top = result && result.candidates[0];
  const second = result && result.candidates[1];
  const third = result && result.candidates[2];
  const remaining = (result && result.candidates.length) || 0;

  return (
    <div className="screen-in pb-8 relative">
      {/* ─── header (matches CleanScreen) ─── */}
      <div className="px-[26px] pt-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <button onClick={onBack}
            className="text-[22px] font-bold leading-none mr-1"
            style={{ color: C.primary }}>←</button>
          <div>
            <div className="text-[22px] font-extrabold tracking-tight"
                 style={{ color: C.primary, letterSpacing: '-0.44px' }}>
              PC 폴더 정리
            </div>
            <div className="text-[13px] mt-1 font-medium" style={{ color: C.text4 }}>
              AI가 고른 삭제 후보예요
            </div>
          </div>
        </div>
        <button
          className="relative px-3 h-9 rounded-full bg-white grid place-items-center"
          style={{ boxShadow: '0px 4px 12px rgba(15,26,20,0.05)' }}>
          <span className="text-[11px] font-bold num flex items-center gap-1.5"
                style={{ color: C.orDark }}>
            🌱 {earnedSeed.toLocaleString()}
          </span>
        </button>
      </div>

      {/* ─── 남은 개수 뱃지 + 폴더 다시 선택 ─── */}
      {result && (
        <div className="px-[26px] mt-3 flex items-center justify-between">
          <button onClick={handlePickFolder}
            className="rounded-full px-3 py-1 text-[11px] font-bold inline-flex items-center gap-1"
            style={{ background: C.bg2, color: C.text2 }}>
            <IconFolder size={11}/> 폴더 다시 선택
          </button>
          <Pill tone="paper" icon={<IconBolt size={11}/>}>{remaining}개 남음</Pill>
        </div>
      )}

      {/* ─── empty state (no result yet) ─── */}
      {!result && (
        <div className="px-[26px] mt-5">
          <input ref={inputRef} type="file" className="hidden"
                 multiple webkitdirectory="" onChange={handleFiles}/>

          <div className="bg-white rounded-[20px] p-5"
               style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
            <div className="w-12 h-12 rounded-2xl grid place-items-center text-white mb-3"
                 style={{ background: G.greenBtn }}>
              <IconCpu size={22}/>
            </div>
            <div className="text-[15px] font-bold" style={{ color: C.primary }}>
              PC 폴더 분석 시작
            </div>
            <div className="text-[12px] mt-1 leading-relaxed font-medium" style={{ color: C.text3 }}>
              선택한 폴더 안의 중복, 대용량, 오래된 파일을 AI가 찾아드려요. 모든 분석은 브라우저 안에서만 실행되고, 파일명·용량·수정일을 포함한 어떤 정보도 외부로 전송되지 않아요.
            </div>
            <button onClick={handlePickFolder} disabled={loading}
              className="mt-4 w-full rounded-[18px] px-4 py-3.5 text-[13px] font-bold text-white disabled:opacity-60"
              style={{ background: G.greenBtn, boxShadow: '0px 10px 24px rgba(27,67,50,0.18)' }}>
              {loading ? '분석 중…' : 'PC 폴더 분석하기'}
            </button>
            {!canPickDirectory && (
              <div className="text-[11px] mt-2 font-medium" style={{ color: C.text4 }}>
                Chrome 또는 Edge에서 폴더 직접 삭제가 지원됩니다. 다른 브라우저는 분석만 가능합니다.
              </div>
            )}
          </div>

          {error && (
            <div className="mt-3 rounded-[14px] bg-red-50 px-3 py-2.5 text-[12px] font-bold text-red-700">
              {error}
            </div>
          )}
          {notice && (
            <div className="mt-3 rounded-[14px] px-3 py-2.5 text-[12px] font-bold"
                 style={{ background: C.bg3, color: C.primary }}>
              {notice}
            </div>
          )}
        </div>
      )}

      {/* ─── result: card stack ─── */}
      {result && (
        <div className="relative mt-4 px-[26px]" style={{ height: 440 }}>
          <LeafBurst run={burst} originX={170} originY={300}/>

          {drag.on && drag.x < -25 && (
            <div className="absolute top-32 left-9 z-10 rotate-[-12deg] px-3 py-1.5 rounded-full bg-white border font-bold text-[13px]"
                 style={{ borderColor: C.divider, color: C.text4,
                          boxShadow: '0 8px 18px rgba(15,26,20,.08)' }}>
              ← 보류
            </div>
          )}
          {drag.on && drag.x > 25 && (
            <div className="absolute top-32 right-9 z-10 rotate-[12deg] px-3 py-1.5 rounded-full text-white font-bold text-[13px]"
                 style={{ background: C.orAcc, boxShadow: '0 8px 24px rgba(244,162,97,.5)' }}>
              삭제 →
            </div>
          )}

          {third  && <ScannerCard candidate={third}  style={{ transform: 'translateY(20px) scale(.92)', opacity: .55 }}/>}
          {second && <ScannerCard candidate={second} style={{ transform: 'translateY(10px) scale(.96)', opacity: .85 }}/>}
          {top && (
            <div onPointerDown={pStart} onPointerMove={pMove} onPointerUp={pEnd} onPointerCancel={pEnd}
                 style={{
                   transform: `translate(${drag.x}px, ${drag.y * 0.4}px) rotate(${drag.x * 0.06}deg)`,
                   transition: drag.on ? 'none' : 'transform .25s cubic-bezier(.22,.61,.36,1)',
                   touchAction: 'none',
                   cursor: drag.on ? 'grabbing' : 'grab',
                 }}>
              <ScannerCard candidate={top}/>
            </div>
          )}
          {!top && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="w-20 h-20 rounded-full grid place-items-center"
                   style={{ background: C.bg3, color: C.primary }}>
                <IconCheck size={36}/>
              </div>
              <div className="mt-4 text-[18px] font-bold" style={{ color: C.primary }}>
                정리 완료!
              </div>
              <div className="text-[13px] mt-1" style={{ color: C.text4 }}>
                {deletedCount === 0
                  ? '해당 폴더에는 정리 대상 파일이 없어요'
                  : `${deletedCount.toLocaleString()}개를 정리해 +${earnedSeed.toLocaleString()} 새싹을 모았어요 🌱`}
              </div>
              <button onClick={onComplete}
                className="mt-4 rounded-[20px] px-5 py-3 text-[13px] font-bold text-white"
                style={{ background: G.greenBtn, boxShadow: '0px 10px 24px rgba(27,67,50,0.18)' }}>
                결과 확인하기
              </button>
            </div>
          )}

          {popSeed && (
            <div key={popSeed.ts}
                 className="absolute left-1/2 -translate-x-1/2 top-[200px] lp-pop pointer-events-none z-40"
                 onAnimationEnd={() => setPopSeed(null)}>
              <div className="px-4 py-2 rounded-full text-white font-extrabold num text-[18px] flex items-center gap-1.5"
                   style={{ background: G.orangeBtn, boxShadow: '0 12px 30px rgba(244,162,97,.5)' }}>
                <span>🌱</span> +{popSeed.amount} 새싹
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─── action buttons ─── */}
      {top && (
        <div className="px-7 pb-4 flex items-center justify-center gap-10">
          <button onClick={skipTop}
            className="w-[52px] h-[52px] rounded-[26px] bg-white grid place-items-center active:scale-95 transition-transform"
            style={{ boxShadow: '0px 6px 9px rgba(15,26,20,0.08)', color: C.text4 }}>
            <IconArchive size={22}/>
          </button>
          <button onClick={postponeTopCard}
            title="나중에 정리하기"
            disabled={!result || result.candidates.length < 2}
            className="w-[44px] h-[44px] rounded-[22px] bg-white grid place-items-center active:scale-95 transition-transform disabled:opacity-40"
            style={{ boxShadow: '0px 6px 9px rgba(15,26,20,0.08)', color: C.primary }}>
            <IconClock size={20}/>
          </button>
          <button onClick={() => handleDeleteCandidate(top)}
            disabled={Boolean(deletingPath)}
            className="w-[64px] h-[64px] rounded-[32px] grid place-items-center text-white active:scale-95 transition-transform disabled:opacity-60"
            style={{ background: G.orangeBtn, boxShadow: '0px 16px 16px rgba(244,162,97,0.45)' }}>
            <IconTrash size={26}/>
          </button>
        </div>
      )}

      {error && result && (
        <div className="mx-[26px] mb-3 rounded-[14px] bg-red-50 px-3 py-2.5 text-[12px] font-bold text-red-700">
          {error}
        </div>
      )}
    </div>
  );
}

// ─── one card (mirrors the 05_CleanTop card design) ─────────
function ScannerCard({ candidate, style }) {
  const m = metaFor(candidate.category);
  const safe = safetyPct(candidate.riskLevel);
  const relativePath = candidate.relativePath || candidate.name;
  const earn = candidate.seed ?? candidate.point ?? 1;
  const co2g = candidate.co2Gram ?? 0;
  const sizeText = formatBiumSize(candidate.savedMb, candidate.savedBytes);

  return (
    <div className="absolute left-[26px] right-[26px] rounded-[28px] bg-white"
         style={{ ...style, height: 420, border: `1px solid ${C.divider}`,
                  boxShadow: '0px 24px 48px rgba(15,26,20,0.1)' }}>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <Pill tone="paper">{m.kind}</Pill>
          <Pill tone="sage" icon={<IconShield size={11}/>}>안전 {safe}%</Pill>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <BrandMark glyph={m.glyph} palette={m.tint} size={56} ring/>
          <div className="flex-1 min-w-0">
            <div className="text-[17px] font-extrabold tracking-tight truncate"
                 style={{ color: C.primary, letterSpacing: '-0.25px' }}>
              {candidate.name}
            </div>
            <div className="text-[11px] mt-0.5 truncate font-medium" style={{ color: C.text4 }}>
              {relativePath}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[16px] p-3.5" style={{ background: C.infoBg }}>
          <div className="flex items-center gap-1.5">
            <IconSparkles size={12} style={{ color: '#3A3CA3' }}/>
            <span className="text-[11px] font-bold" style={{ color: '#3A3CA3' }}>AI 분석</span>
          </div>
          <div className="mt-1.5 text-[12px] leading-[18px] font-medium" style={{ color: C.text2 }}>
            {candidate.reason}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <ScannerMetric v={sizeText}                 l="용량"/>
          <ScannerMetric v={formatBiumCo2(co2g)}      l="탄소"/>
          <ScannerMetric v={`+${earn} 🌱`}            l="획득 새싹"/>
        </div>

        <div className="absolute left-5 right-5 bottom-5">
          <div className="rounded-[16px] px-3 py-2.5 flex items-center justify-between gap-2"
               style={{ background: G.rewardOrange,
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.06)' }}>
            <span className="text-[10px] font-bold whitespace-nowrap shrink-0"
                  style={{ color: C.orDark }}>
              보상 미리보기
            </span>
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="num font-extrabold text-[12px] whitespace-nowrap"
                    style={{ color: C.mid }}>
                +{earn} 🌱 새싹
              </span>
              <span className="text-[11px] font-bold whitespace-nowrap" style={{ color: C.primary }}>
                · {formatBiumCo2(co2g)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScannerMetric({ v, l }) {
  return (
    <div className="rounded-[12px] py-2 text-center"
         style={{ background: '#FAFBF7',
                  boxShadow: '0px 1px 5px rgba(0,0,0,0.06)' }}>
      <div className="text-[11.5px] font-bold num leading-tight"
           style={{ color: C.primary }}>{v}</div>
      <div className="text-[10px] mt-0.5 leading-tight font-medium"
           style={{ color: C.text4 }}>{l}</div>
    </div>
  );
}

Object.assign(window, { BiumFileScanner, analyzeBiumFiles });
