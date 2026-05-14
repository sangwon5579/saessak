const { useRef: useRefScanner, useState: useStateScanner } = React;

const BIUM_ANALYZE_ENDPOINTS = [
  '/api/bium/files/analyze',
  'http://localhost:8080/api/bium/files/analyze',
];

function getBiumExtension(name) {
  const parts = name.split('.');
  return parts.length > 1 ? parts.pop().toLowerCase() : '';
}

function toBiumMetadata(file, relativePath) {
  return {
    name: file.name,
    sizeBytes: file.size,
    lastModified: new Date(file.lastModified).toISOString(),
    type: file.type,
    relativePath: relativePath || file.webkitRelativePath || file.name,
    extension: getBiumExtension(file.name),
  };
}

async function analyzeBiumFiles(files) {
  let lastError = null;

  for (const endpoint of BIUM_ANALYZE_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files }),
      });

      if (!response.ok) {
        throw new Error(`Analyze API failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Analyze API request failed');
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
  if (!directoryHandle || !directoryHandle.queryPermission || !directoryHandle.requestPermission) {
    return false;
  }

  const options = { mode: 'readwrite' };
  if ((await directoryHandle.queryPermission(options)) === 'granted') {
    return true;
  }

  return (await directoryHandle.requestPermission(options)) === 'granted';
}

function updateBiumSummaryAfterDelete(summary, candidate) {
  const nextCleanable = Math.max(0, summary.cleanableFiles - 1);
  const nextSaved = Math.max(0, Number((summary.estimatedSavedMb - candidate.savedMb).toFixed(2)));
  const nextCo2 = Math.max(0, Number((summary.estimatedCo2Gram - candidate.co2Gram).toFixed(2)));
  const nextPoint = Math.max(0, summary.earnedPoint - candidate.point);

  return {
    ...summary,
    cleanableFiles: nextCleanable,
    estimatedSavedMb: nextSaved,
    estimatedCo2Gram: nextCo2,
    earnedPoint: nextPoint,
  };
}

function BiumFileScanner() {
  const inputRef = useRefScanner(null);
  const fileEntryMapRef = useRefScanner(new Map());
  const directoryHandleRef = useRefScanner(null);
  const [selectedCount, setSelectedCount] = useStateScanner(0);
  const [result, setResult] = useStateScanner(null);
  const [error, setError] = useStateScanner('');
  const [notice, setNotice] = useStateScanner('');
  const [loading, setLoading] = useStateScanner(false);
  const [deletingPath, setDeletingPath] = useStateScanner('');
  const [candidateDrag, setCandidateDrag] = useStateScanner({ x: 0, y: 0, on: false });
  const [deletedCount, setDeletedCount] = useStateScanner(0);
  const candidateDragRef = useRefScanner({ startX: 0, startY: 0, dragging: false });
  const canPickDirectory = typeof window.showDirectoryPicker === 'function';

  const analyzeEntries = async (entries) => {
    setSelectedCount(entries.length);
    setResult(null);
    setError('');
    setNotice('');
    setDeletedCount(0);
    setCandidateDrag({ x: 0, y: 0, on: false });

    if (entries.length === 0) {
      return;
    }

    const metadata = entries.map((entry) => toBiumMetadata(entry.file, entry.relativePath));
    fileEntryMapRef.current = new Map(entries.map((entry) => [entry.relativePath, entry]));
    setLoading(true);

    try {
      const analysis = await analyzeBiumFiles(metadata);
      setResult(analysis);
    } catch (err) {
      setError('분석 API 요청에 실패했습니다. 백엔드가 실행 중인지 확인해주세요.');
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
      if (err && err.name === 'AbortError') {
        return;
      }
      setError('폴더를 읽는 중 문제가 발생했습니다.');
    }
  };

  const handleFiles = async (event) => {
    const files = Array.from(event.target.files || []);
    directoryHandleRef.current = null;
    fileEntryMapRef.current = new Map();
    await analyzeEntries(files.map((file) => ({
      file,
      relativePath: file.webkitRelativePath || file.name,
      parentHandle: null,
      name: file.name,
    })));
    event.target.value = '';
  };

  const handleDeleteCandidate = async (candidate) => {
    const relativePath = candidate.relativePath || candidate.name;
    const entry = fileEntryMapRef.current.get(relativePath);

    if (!entry || !entry.parentHandle || !directoryHandleRef.current) {
      setError('이 항목은 삭제 권한이 없습니다. Chrome 또는 Edge에서 폴더 선택 권한을 허용해주세요.');
      return;
    }

    const confirmed = window.confirm(`${relativePath}\n\n이 파일을 실제로 삭제할까요? 이 작업은 되돌릴 수 없습니다.`);
    if (!confirmed) {
      return;
    }

    setDeletingPath(relativePath);
    setError('');
    setNotice('');

    try {
      const permitted = await ensureBiumWritePermission(directoryHandleRef.current);
      if (!permitted) {
        throw new Error('WRITE_PERMISSION_DENIED');
      }

      await entry.parentHandle.removeEntry(entry.name);
      fileEntryMapRef.current.delete(relativePath);
      setDeletedCount((count) => count + 1);
      setNotice('파일을 삭제했습니다.');
      setResult((previous) => {
        if (!previous) {
          return previous;
        }

        return {
          summary: updateBiumSummaryAfterDelete(previous.summary, candidate),
          candidates: previous.candidates.filter((item) => (item.relativePath || item.name) !== relativePath),
        };
      });
    } catch (err) {
      setError(err && err.message === 'WRITE_PERMISSION_DENIED'
        ? '삭제 권한이 거부되었습니다. 폴더 권한을 다시 허용해주세요.'
        : '파일 삭제에 실패했습니다. 이미 삭제되었거나 권한이 부족할 수 있습니다.');
    } finally {
      setDeletingPath('');
      setCandidateDrag({ x: 0, y: 0, on: false });
    }
  };

  const rotateCandidate = () => {
    setCandidateDrag({ x: 0, y: 0, on: false });
    setResult((previous) => {
      if (!previous || previous.candidates.length < 2) {
        return previous;
      }

      return {
        ...previous,
        candidates: [...previous.candidates.slice(1), previous.candidates[0]],
      };
    });
  };

  const commitCandidateSlide = (direction) => {
    const candidate = result && result.candidates[0];
    if (!candidate) {
      return;
    }

    if (direction === 'right') {
      handleDeleteCandidate(candidate);
      return;
    }

    rotateCandidate();
  };

  const handleCandidatePointerStart = (event) => {
    candidateDragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      dragging: true,
    };
    setCandidateDrag((drag) => ({ ...drag, on: true }));
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleCandidatePointerMove = (event) => {
    if (!candidateDragRef.current.dragging) {
      return;
    }

    setCandidateDrag({
      x: event.clientX - candidateDragRef.current.startX,
      y: event.clientY - candidateDragRef.current.startY,
      on: true,
    });
  };

  const handleCandidatePointerEnd = () => {
    candidateDragRef.current.dragging = false;
    if (candidateDrag.x > 90) {
      commitCandidateSlide('right');
    } else if (candidateDrag.x < -90) {
      commitCandidateSlide('left');
    } else {
      setCandidateDrag({ x: 0, y: 0, on: false });
    }
  };

  const renderCandidateCard = (candidate, options = {}) => {
    if (!candidate) {
      return null;
    }

    const relativePath = candidate.relativePath || candidate.name;
    const isDeleting = deletingPath === relativePath;
    const live = Boolean(options.live);
    const cardStyle = {
      ...options.style,
      ...(live ? {
        transform: `translate(${candidateDrag.x}px, ${candidateDrag.y * 0.35}px) rotate(${candidateDrag.x * 0.05}deg)`,
        transition: candidateDrag.on ? 'none' : 'transform .25s cubic-bezier(.22,.61,.36,1)',
        touchAction: 'none',
        cursor: candidateDrag.on ? 'grabbing' : 'grab',
      } : {}),
    };

    const pointerProps = live ? {
      onPointerDown: handleCandidatePointerStart,
      onPointerMove: handleCandidatePointerMove,
      onPointerUp: handleCandidatePointerEnd,
      onPointerCancel: handleCandidatePointerEnd,
    } : {};

    return (
      <div
        key={`${relativePath}-${options.index || 0}`}
        className="absolute left-0 right-0 rounded-[24px] bg-white p-4 shadow-pop"
        style={{ border: `1px solid ${C.border}`, minHeight: 330, ...cardStyle }}
        {...pointerProps}
      >
        <div className="flex items-center justify-between">
          <Pill tone="paper">{candidate.category}</Pill>
          <Pill tone={candidate.riskLevel === 'MEDIUM' ? 'earth' : 'sage'} icon={<IconShield size={11}/>}>
            {candidate.riskLevel}
          </Pill>
        </div>

        <div className="mt-5">
          <div className="w-14 h-14 rounded-2xl grid place-items-center text-white"
               style={{ background: 'linear-gradient(135deg,#1B4332,#2D6A4F)' }}>
            <IconTrash size={25}/>
          </div>
          <div className="mt-4 text-[18px] font-extrabold text-deep tracking-tight truncate">{candidate.name}</div>
          <div className="mt-1 text-[11px] text-mute truncate">{relativePath}</div>
          <div className="mt-3 text-[12px] leading-relaxed text-ink2">{candidate.reason}</div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-[11px] num">
          <div className="rounded-xl bg-paper2 px-2 py-2"><b>{candidate.savedMb}</b> MB</div>
          <div className="rounded-xl bg-paper2 px-2 py-2"><b>{candidate.co2Gram}</b> gCO₂e</div>
          <div className="rounded-xl bg-paper2 px-2 py-2"><b>+{candidate.point}</b> P</div>
        </div>

        {live && (
          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              className="rounded-[14px] bg-paper2 px-3 py-3 text-[12px] font-bold text-mute active:scale-[0.98] transition-transform"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={rotateCandidate}
              disabled={isDeleting}
            >
              보류하고 넘기기
            </button>
            <button
              className="rounded-[14px] px-3 py-3 text-[12px] font-bold text-white active:scale-[0.98] transition-transform disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg,#E07A2C,#F4A261)' }}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => handleDeleteCandidate(candidate)}
              disabled={!deleteEnabled || isDeleting}
            >
              {isDeleting ? '삭제 중...' : deleteEnabled ? '삭제하기' : '권한 없음'}
            </button>
          </div>
        )}
      </div>
    );
  };

  const summary = result && result.summary;
  const deleteEnabled = canPickDirectory && Boolean(directoryHandleRef.current);
  const topCandidate = result && result.candidates[0];
  const secondCandidate = result && result.candidates[1];
  const thirdCandidate = result && result.candidates[2];

  return (
    <div className="screen-in pb-6">
      <div className="px-5 pt-4">
        <div className="text-[13px] text-mute">PC 폴더 파일 분석</div>
        <div className="text-[22px] font-bold text-deep tracking-tight mt-0.5 leading-tight">PC 비움 스캔</div>
        <div className="text-[12.5px] text-mute mt-2 leading-relaxed">
          선택한 폴더의 파일을 분석해 중복, 대용량, 오래된 파일을 찾아드립니다.
        </div>
      </div>

      <div className="mx-5 mt-4 rounded-[24px] bg-white p-5 shadow-card">
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple
          webkitdirectory=""
          onChange={handleFiles}
        />
        <button
          className="w-full rounded-[18px] px-4 py-3.5 text-[14px] font-bold text-white active:scale-[0.99] transition-transform disabled:opacity-60"
          style={{ background: 'linear-gradient(135deg,#1B4332,#2D6A4F)' }}
          onClick={handlePickFolder}
          disabled={loading}
        >
          {loading ? '분석 중...' : 'PC 폴더 분석하기'}
        </button>

        <div className="mt-4 rounded-[18px] p-3 flex gap-2 text-[11.5px] leading-relaxed"
             style={{ background: '#F0F5EE', color: '#3B4A40', border: '1px solid #B7E4C7' }}>
          <span className="font-bold text-deep">안내</span>
          <span>
            파일 원본은 업로드되지 않습니다. 파일명, 용량, 수정일 등 최소 메타데이터만 분석하며,
            삭제는 브라우저가 허용한 선택 폴더 안에서만 실행됩니다.
          </span>
        </div>

        {!loading && !result && !error && (
          <div className="mt-4 text-[12px] text-mute">
            아직 선택한 폴더가 없습니다. 버튼을 눌러 분석할 폴더를 선택해주세요.
          </div>
        )}

        {selectedCount > 0 && (
          <div className="mt-3 text-[11.5px] text-mute num">
            선택한 파일 {selectedCount.toLocaleString()}개
            {deletedCount > 0 ? ` · 삭제 완료 ${deletedCount.toLocaleString()}개` : ''}
          </div>
        )}

        {notice && (
          <div className="mt-4 rounded-[16px] bg-[#F0F5EE] px-3 py-2.5 text-[12px] font-semibold text-deep">
            {notice}
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-[16px] bg-red-50 px-3 py-2.5 text-[12px] font-semibold text-red-700">
            {error}
          </div>
        )}
      </div>

      {summary && (
        <div className="px-5 mt-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[20px] bg-white p-4 shadow-card">
              <div className="text-[11px] text-mute">총 분석 파일</div>
              <div className="text-[17px] font-extrabold text-deep mt-1 num leading-tight">{summary.totalFiles}개 분석</div>
            </div>
            <div className="rounded-[20px] bg-white p-4 shadow-card">
              <div className="text-[11px] text-mute">정리 후보</div>
              <div className="text-[17px] font-extrabold text-deep mt-1 num leading-tight">{summary.cleanableFiles}개 발견</div>
            </div>
            <div className="rounded-[20px] bg-white p-4 shadow-card">
              <div className="text-[11px] text-mute">절감 용량</div>
              <div className="text-[17px] font-extrabold text-deep mt-1 num leading-tight">{summary.estimatedSavedMb} MB</div>
            </div>
            <div className="rounded-[20px] bg-white p-4 shadow-card">
              <div className="text-[11px] text-mute">탄소 · 포인트</div>
              <div className="text-[17px] font-extrabold text-deep mt-1 num leading-tight">{summary.estimatedCo2Gram} gCO₂e</div>
              <div className="text-[13px] font-bold text-[#A85A1F] mt-1 num">+{summary.earnedPoint} P</div>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="px-5 mt-5">
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-[15px] font-bold text-deep tracking-tight">정리 후보 리스트</div>
              <div className="text-[12px] text-mute mt-0.5">
                {deleteEnabled ? '확인 후 선택한 파일을 바로 삭제할 수 있습니다.' : '현재 브라우저에서는 후보 확인만 가능합니다.'}
              </div>
            </div>
          </div>

          {result.candidates.length === 0 ? (
            <div className="rounded-[22px] bg-white p-5 shadow-card text-[13px] text-mute">
              정리 후보가 없습니다.
            </div>
          ) : (
            <>
              <div className="relative" style={{ minHeight: 388 }}>
                {candidateDrag.on && candidateDrag.x < -25 && (
                  <div className="absolute top-24 left-2 z-20 rotate-[-10deg] px-3 py-1.5 rounded-full bg-white shadow text-mute font-bold text-[13px] border"
                       style={{ borderColor: C.border }}>
                    보류
                  </div>
                )}
                {candidateDrag.on && candidateDrag.x > 25 && (
                  <div className="absolute top-24 right-2 z-20 rotate-[10deg] px-3 py-1.5 rounded-full text-white font-bold text-[13px]"
                       style={{ background: C.earth, boxShadow: '0 8px 24px rgba(244,162,97,.5)' }}>
                    삭제
                  </div>
                )}
                {thirdCandidate && renderCandidateCard(thirdCandidate, {
                  index: 2,
                  style: { transform: 'translateY(20px) scale(.92)', opacity: .5 },
                })}
                {secondCandidate && renderCandidateCard(secondCandidate, {
                  index: 1,
                  style: { transform: 'translateY(10px) scale(.96)', opacity: .82 },
                })}
                {topCandidate && renderCandidateCard(topCandidate, { live: true })}
              </div>
              <div className="hidden">
              {result.candidates.map((candidate, index) => {
                const relativePath = candidate.relativePath || candidate.name;
                const isDeleting = deletingPath === relativePath;

                return (
                  <div key={`${relativePath}-${index}`} className="rounded-[20px] bg-white p-4 shadow-card">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-[13.5px] font-bold text-deep truncate">{candidate.name}</div>
                        <div className="text-[11px] text-mute mt-1 truncate">{relativePath}</div>
                        <div className="text-[11px] text-mute mt-1">{candidate.reason}</div>
                      </div>
                      <span className="shrink-0 rounded-full px-2 py-1 text-[10px] font-bold bg-paper2 text-deep">
                        {candidate.riskLevel}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5 text-[10.5px] font-semibold">
                      <span className="rounded-full bg-[#D8EEDF] px-2 py-1 text-deep">{candidate.category}</span>
                      <span className="rounded-full bg-[#FCE5CB] px-2 py-1 text-[#A85A1F]">{candidate.recommendation}</span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] num">
                      <div className="rounded-xl bg-paper2 px-2 py-2"><b>{candidate.savedMb}</b> MB</div>
                      <div className="rounded-xl bg-paper2 px-2 py-2"><b>{candidate.co2Gram}</b> gCO₂e</div>
                      <div className="rounded-xl bg-paper2 px-2 py-2"><b>+{candidate.point}</b> P</div>
                    </div>
                    <button
                      className="mt-3 w-full rounded-[14px] bg-paper2 px-3 py-2 text-[12px] font-bold text-deep disabled:opacity-50"
                      onClick={() => handleDeleteCandidate(candidate)}
                      disabled={!deleteEnabled || isDeleting}
                    >
                      {isDeleting ? '삭제 중...' : deleteEnabled ? '실제 파일 삭제하기' : '삭제 권한 없음'}
                    </button>
                  </div>
                );
              })}
            </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { BiumFileScanner, analyzeBiumFiles });
