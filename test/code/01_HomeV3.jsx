// 01 · Home — 상단 — V3
// Figma 노드 ID: 4211:223
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4211-223
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.
//      실제 사용 시 SVG/PNG로 export해서 로컬 경로로 교체해야 해요.
//      배경 잎사귀, 아이콘 등은 별도로 SVG 추출 권장.

const imgGroup13 = "https://www.figma.com/api/mcp/asset/c5be3e81-6193-46a6-86b5-0ae80b01c753";
const imgFrame = "https://www.figma.com/api/mcp/asset/31cf4e76-d386-45b8-88b7-52237dbd1509";
const imgVector = "https://www.figma.com/api/mcp/asset/a544b5b8-fb3d-4def-ae11-217f35a5a9de";
const imgVector1 = "https://www.figma.com/api/mcp/asset/37497c40-e92c-491c-910c-c4f80710ee9a";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/ca632553-869f-4712-89a3-7b55f1ea5bad";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/83455b5f-262b-4abf-a3dd-14a8f463b3f3";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/10d9f251-f089-44cc-9e3c-a5dd9cf0e429";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/350a4eda-639b-4b32-af93-c3e18937692c";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/6062e6b7-631b-4227-a8ba-99ca27f675d4";
const imgEllipse = "https://www.figma.com/api/mcp/asset/c4dc64ea-296e-4ddf-9758-7ab3c7c4230b";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/c287fd85-0dd1-4e5a-8d89-9724b340087e";

export default function HomeV3() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      {/* 헤더 */}
      <p className="absolute font-['Noto_Sans_KR'] font-bold left-[33px] text-[#1b3a25] text-[24px] top-[70px] whitespace-nowrap">
        내 디지털 탄소 🌱
      </p>
      <p className="absolute font-['Noto_Sans_KR'] font-medium left-[33px] text-[#5d6b62] text-[12px] top-[104px] whitespace-nowrap">
        오늘도 정리하고 탄소를 줄여봐요
      </p>

      {/* 프로필 원형 */}
      <div className="absolute left-[328.5px] size-[40px] top-[66px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
      </div>
      <p className="absolute font-['Inter'] font-bold left-[340.5px] text-[17px] text-white top-[76px] whitespace-nowrap">
        영
      </p>

      {/* 다크 그린 히어로 카드: 오늘 아낀 탄소 */}
      <div
        className="absolute h-[160px] left-[33px] overflow-clip rounded-[24px] shadow-[0px_12px_28px_0px_rgba(27,94,46,0.22)] top-[140px] w-[336px]"
        style={{ backgroundImage: "linear-gradient(154deg, rgb(45,122,63) 0%, rgb(27,94,46) 71%)" }}
      >
        <div className="absolute left-[220px] size-[180px] top-[-30px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
        </div>
        <p className="absolute font-['Noto_Sans_KR'] font-medium left-[22px] text-[13px] text-[rgba(255,255,255,0.9)] top-[22px] whitespace-nowrap">
          🌱 오늘 아낀 탄소
        </p>
        <p className="absolute font-['Inter'] font-extrabold left-[22px] text-[56px] text-white top-[50px] tracking-[-2px] whitespace-nowrap">
          2.4
        </p>
        <p className="absolute font-['Inter'] font-bold left-[120px] text-[22px] text-[rgba(255,255,255,0.95)] top-[78px]">
          g CO₂
        </p>
        <p className="absolute font-['Noto_Sans_KR'] left-[22px] text-[11px] text-[rgba(255,255,255,0.7)] top-[124px] whitespace-nowrap">
          실시간 누적 · 자정에 초기화
        </p>
        <p className="absolute font-['Inter'] left-[210px] opacity-20 text-[#1b4332] text-[110px] top-[35px] whitespace-nowrap">
          🌱
        </p>
      </div>

      {/* 라면 환산 + 메트릭 카드 (2분할) */}
      <div className="absolute flex flex-wrap gap-x-[12px] gap-y-[14px] items-start left-[33px] top-[316px] w-[336px]">
        {/* 라면 환산 카드 */}
        <div className="bg-white drop-shadow-[0px_6px_9px_rgba(15,26,20,0.05)] flex flex-col h-[74px] items-start px-[24px] py-[17px] rounded-[18px] w-[335px]">
          <div className="flex gap-[20px] items-center whitespace-nowrap">
            <p className="font-['Inter'] font-semibold text-[40px] text-black">🍜</p>
            <div className="flex gap-[10px] items-end">
              <p className="font-['Noto_Sans_KR'] font-semibold text-[#ff7100] text-[14px]">라면</p>
              <div className="inline-grid leading-none place-items-start">
                <p className="col-start-1 row-start-1 font-['Inter'] font-extrabold leading-[24px] text-[#1b4332] text-[22px] tracking-[-0.44px]">
                  1
                </p>
                <p className="col-start-1 row-start-1 font-['Noto_Sans_KR'] font-semibold ml-[15px] mt-[8px] text-[#7c8a80] text-[12px]">
                  개 끓일 수 있는 탄소를 아꼈어요
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 메트릭 카드 2개 */}
        <div className="flex items-center justify-between leading-none w-[336px] whitespace-nowrap">
          {/* 오늘 모은 새싹 */}
          <div className="bg-white h-[92px] overflow-clip relative rounded-[18px] shadow-[0px_4px_12px_0px_rgba(15,26,20,0.05)] w-[162px]">
            <p className="absolute font-['Noto_Sans_KR'] font-medium left-[14px] text-[#5d6b62] text-[11px] top-[14px]">
              🌱 오늘 모은 새싹
            </p>
            <p className="absolute font-['Inter'] font-extrabold left-[14px] text-[#84ba99] text-[32px] top-[33px]">
              24
            </p>
            <p className="absolute font-['Noto_Sans_KR'] font-bold left-[60px] text-[#5d6b62] text-[13px] top-[47px]">
              새싹
            </p>
            <p className="absolute font-['Noto_Sans_KR'] font-medium left-[14px] text-[#9aa89f] text-[10px] top-[72px]">
              + 어제보다 8
            </p>
          </div>
          {/* 총 새싹 */}
          <div className="bg-white h-[92px] overflow-clip relative rounded-[18px] shadow-[0px_4px_12px_0px_rgba(15,26,20,0.05)] w-[162px]">
            <p className="absolute font-['Noto_Sans_KR'] font-medium left-[14px] text-[#5d6b62] text-[11px] top-[14px]">
              🌱 총 새싹
            </p>
            <p className="absolute font-['Inter'] font-medium left-[140px] text-[#9aa89f] text-[14px] top-[12px]">›</p>
            <p className="absolute font-['Inter'] font-extrabold left-[14px] text-[#2d6a4f] text-[28px] top-[33px]">
              2,340
            </p>
            <p className="absolute font-['Noto_Sans_KR'] font-bold left-[99px] text-[#5d6b62] text-[13px] top-[46px]">
              새싹
            </p>
            <p className="absolute font-['Noto_Sans_KR'] font-medium left-[14px] text-[#9aa89f] text-[10px] top-[72px]">
              어린잎 단계
            </p>
          </div>
        </div>
      </div>

      {/* 영역별 진척률 섹션 */}
      <div className="absolute flex flex-col gap-[14px] items-start left-[33.5px] top-[518px] w-[335.5px]">
        <div className="flex flex-col gap-[3px]">
          <p className="font-['Inter','Noto_Sans_KR'] font-extrabold text-[#1b4332] text-[16px] tracking-[-0.16px]">
            영역별 진척률
          </p>
          <p className="font-['Inter','Noto_Sans_KR'] font-medium text-[#7c8a80] text-[12px]">
            AI가 분석한 3가지 디지털 공간
          </p>
        </div>

        <div className="flex flex-col gap-[14px] w-full">
          {/* 이메일 카드 */}
          <ProgressCard
            iconColor="#ed9864"
            iconSrc={imgGroup13}
            label="이메일"
            percent={45}
            saving="- 0.8 g"
            items="1,842개 항목"
          />
          {/* Cloud 사진 카드 */}
          <ProgressCard
            iconColor="#84ba99"
            iconSrc={imgFrame}
            label="Cloud 사진"
            percent={45}
            saving="- 0.8 g"
            items="1,842개 항목"
          />
          {/* Cloud 파일 카드 */}
          <ProgressCard
            iconColor="#2d6a4f"
            iconSrc={imgVector}
            label="Cloud 파일"
            percent={45}
            saving="- 0.8 g"
            items="1,842개 항목"
          />
        </div>
      </div>

      {/* 하단 페이드 그라데이션 */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[143px] left-0 top-[811px] w-[402px]" />

      {/* 하단 네비게이션 */}
      <div className="absolute bg-white drop-shadow-[0px_16px_18px_rgba(15,26,20,0.1)] flex h-[56px] items-center left-[25.5px] px-[24px] rounded-[28px] top-[793px] w-[351px]">
        <div className="flex gap-[47px] items-center">
          {[
            { label: "홈", icon: imgFrame1, active: true },
            { label: "분석", icon: imgFrame2, active: false },
            { label: "정리", icon: imgFrame3, active: false },
            { label: "리워드", icon: imgFrame4, active: false },
            { label: "연결", icon: imgFrame5, active: false },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-[4px] items-center">
              <div className="size-[22px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={item.icon} />
              </div>
              <p
                className={`font-['Inter','Noto_Sans_KR'] font-bold text-[10px] text-center ${
                  item.active ? "text-[#1b4332]" : "text-[#9aa89f]"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar (iOS) */}
      <StatusBar />
    </div>
  );
}

// 진척률 카드 컴포넌트
function ProgressCard({ iconColor, iconSrc, label, percent, saving, items }) {
  return (
    <div className="bg-white flex flex-col items-start overflow-clip px-[16px] py-[17px] rounded-[20px] shadow-[0px_8px_12px_0px_rgba(15,26,20,0.06)] w-full">
      <div className="flex gap-[18px] items-center justify-center w-full">
        {/* 아이콘 영역 */}
        <div className="flex flex-col gap-[7px] items-center justify-center w-[32px]">
          <div
            className="flex h-[32px] items-start p-[5px] rounded-[10px] w-full"
            style={{ backgroundColor: iconColor }}
          >
            <div className="relative size-[22px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={iconSrc} />
            </div>
          </div>
          <p className="font-['Inter','Noto_Sans_KR'] font-medium text-[11px] text-black text-center w-full">
            {label}
          </p>
        </div>
        {/* 퍼센트 + 진행 바 */}
        <div className="flex flex-col gap-[12px] items-end leading-none w-[149px]">
          <div className="inline-grid place-items-start text-[#1b4332] whitespace-nowrap">
            <p className="col-start-1 row-start-1 font-['Inter'] font-extrabold text-[24px] tracking-[-0.48px]">
              {percent}
            </p>
            <p className="col-start-1 row-start-1 font-['Inter'] font-semibold ml-[35px] mt-[10px] opacity-70 text-[13px]">
              %
            </p>
          </div>
          <div className="inline-grid place-items-start">
            <div className="bg-[#eff1e8] col-start-1 row-start-1 h-[4px] rounded-[2px] w-[149px]" />
            <div
              className="bg-[#52b788] col-start-1 row-start-1 h-[4px] rounded-[2px]"
              style={{ width: `${(percent / 100) * 149}px` }}
            />
          </div>
        </div>
        {/* 절감량 + 항목 수 */}
        <div className="flex flex-col gap-[12px] items-center w-[57px]">
          <div className="bg-[#d8eedf] flex h-[16px] items-center justify-center px-[3px] rounded-[8px] w-[42px]">
            <p className="font-['Inter'] font-bold text-[#1b4332] text-[9px] text-center whitespace-nowrap">
              {saving}
            </p>
          </div>
          <p className="font-['Inter','Noto_Sans_KR'] font-medium text-[#7c8a80] text-[10px] whitespace-nowrap">
            {items}
          </p>
        </div>
      </div>
    </div>
  );
}

// iOS 상태바 (Dynamic Island)
function StatusBar() {
  return (
    <div className="absolute left-[13.5px] top-0">
      <div className="absolute bg-black h-[34px] left-[174.5px] rounded-[24px] top-[11px] w-[120px]" />
      <div className="flex flex-col h-[54px] items-start pt-[21px] w-[375px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 flex items-center justify-center px-[16px]">
            <p className="font-['SF_Pro'] text-[17px] text-black text-center">9:41</p>
          </div>
          <div className="h-[10px] w-[124px]" />
          <div className="flex-1 flex gap-[7px] items-center justify-center px-[16px]">
            <span className="text-[12px]">📶</span>
            <span className="text-[12px]">📡</span>
            <span className="text-[12px]">🔋</span>
          </div>
        </div>
      </div>
    </div>
  );
}
