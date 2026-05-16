// 01 · Home — 하단
// Figma 노드 ID: 4041:285
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4041-285
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.
//      실제 사용 시 SVG/PNG로 export해서 로컬 경로로 교체하세요.

const imgFrame = "https://www.figma.com/api/mcp/asset/cee042c0-2dc3-4e86-84e2-7dcb8c576d1e";
const imgEllipse = "https://www.figma.com/api/mcp/asset/89442e09-bc23-4351-aab4-756b97677f6f";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/329f8e1a-9dc7-4f52-a1fc-af83a9033059";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/f6ec6645-33c7-4d98-a27e-49b5d6dbd79d";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/a1aec460-0de2-4c2a-b2c5-f93082f82d43";
const imgWifi = "https://www.figma.com/api/mcp/asset/0c11fc40-d177-4f86-a1d5-ce6bcdec1223";
const imgBattery = "https://www.figma.com/api/mcp/asset/677d1738-92c6-4b26-a4f1-d91e12a60908";
const imgVector = "https://www.figma.com/api/mcp/asset/527aec02-c4a2-4028-a388-c98c1c508e60";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/5318a6d8-6665-43ea-b863-c9fa3f9e5974";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/4623ac2c-dc2b-4cbe-b53a-eabe756483d2";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/dcf853bb-c7d2-45fb-8ec7-2f2b711c4bc8";
const imgFrame6 = "https://www.figma.com/api/mcp/asset/72f94b3a-7bc2-4799-9d05-191664947ad8";
const imgFrame7 = "https://www.figma.com/api/mcp/asset/6948df5d-629c-4621-b3f5-c83a171bc7d2";
const imgGroup13 = "https://www.figma.com/api/mcp/asset/1e969458-1d13-4d13-b8a1-2fff47d4f2bb";
const imgFrame8 = "https://www.figma.com/api/mcp/asset/b3072bbf-def6-4057-809f-89df23d3fb4b";
const imgVector1 = "https://www.figma.com/api/mcp/asset/00df0c94-1161-4404-9d3d-ed3b0c28de11";

export default function HomeBottom() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      <p className="absolute font-['Inter:Extra_Bold','Noto_Sans_KR:Bold',sans-serif] font-extrabold left-[33.5px] text-[#1b4332] text-[26px] top-[-274px] tracking-[-0.52px] whitespace-nowrap">
        내 디지털 탄소
      </p>
      <div className="absolute left-[191.5px] size-[18px] top-[-268px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
      </div>
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium left-[33.5px] text-[#7c8a80] text-[13px] top-[-236px] whitespace-nowrap">
        오늘도 정리하고 탄소를 줄여봐요
      </p>
      <div className="absolute left-[345.25px] size-[40px] top-[-272px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
      </div>
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold left-[357.25px] text-[17px] text-white top-[-262px] tracking-[-0.68px] whitespace-nowrap">
        영
      </p>

      {/* 큰 그린 그라데이션 카드 */}
      <div
        className="absolute h-[160px] left-[33.5px] rounded-[28px] shadow-[0px_18px_40px_0px_rgba(20,48,40,0.3)] top-[-198px] w-[335px]"
        style={{ backgroundImage: "linear-gradient(167deg, rgb(45,106,79) 12%, rgb(27,67,50) 54%, rgb(20,48,40) 88%)" }}
      />
      <div className="absolute left-[188.5px] size-[170px] top-[-208px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
      </div>
      <div className="absolute left-[49.5px] size-[18px] top-[-177px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
      </div>
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium left-[71.5px] text-[13px] text-[rgba(183,228,199,0.95)] top-[-176px] whitespace-nowrap">
        오늘 아낀 탄소
      </p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold left-[49.5px] text-[80px] text-white top-[-154px] tracking-[-4px] whitespace-nowrap leading-none">
        <span>2</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal">.</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold">6</span>
      </p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[173.5px] text-[22px] text-[rgba(255,255,255,0.85)] top-[-110px] whitespace-nowrap">
        kg CO₂
      </p>
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium left-[274.25px] text-[8px] text-[rgba(183,228,199,0.85)] top-[-56px] whitespace-nowrap">
        실시간 누적 · 자정에 초기화
      </p>

      {/* Status Bar */}
      <div className="absolute left-[13.5px] top-0">
        <div className="absolute bg-black h-[34px] left-[174.5px] rounded-[24px] top-[11px] w-[120px]" />
        <div className="flex flex-col h-[54px] items-start pt-[21px] w-[375px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1 flex items-center justify-center px-[16px]">
              <p className="font-['SF_Pro',sans-serif] text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>9:41</p>
            </div>
            <div className="h-[10px] w-[124px]" />
            <div className="flex-1 flex gap-[7px] items-center justify-center px-[16px]">
              <div className="h-[12.226px] w-[19.2px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} /></div>
              <div className="h-[12.328px] w-[17.142px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} /></div>
              <div className="h-[13px] w-[27.328px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} /></div>
            </div>
          </div>
        </div>
      </div>

      {/* 영역별 진척률 섹션 */}
      <p className="absolute font-['Inter:Extra_Bold','Noto_Sans_KR:Bold',sans-serif] font-extrabold left-[33.5px] text-[#1b4332] text-[16px] top-[60px] tracking-[-0.16px] whitespace-nowrap">
        영역별 진척률
      </p>
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium left-[33.5px] text-[#7c8a80] text-[12px] top-[82px] whitespace-nowrap">
        AI가 분석한 3가지 디지털 공간
      </p>

      <div className="absolute flex flex-col gap-[14px] items-start left-[34px] top-[111px] w-[335px]">
        {/* 이메일 카드 */}
        <ProgressCard iconBg="#ed9864" iconSrc={imgGroup13} label="이메일" />
        {/* Cloud 사진 카드 */}
        <ProgressCard iconBg="#84ba99" iconSrc={imgFrame8} label="Cloud 사진" />
        {/* Cloud 파일 카드 */}
        <ProgressCard iconBg="#2d6a4f" iconSrc={imgVector1} label="Cloud 파일" />
      </div>

      {/* 지금 정리 시작하기 버튼 */}
      <div className="absolute flex flex-col items-start left-[24px] p-[10px] top-[436px] w-[355px]">
        <div
          className="h-[60px] rounded-[28px] shadow-[0px_14px_30px_0px_rgba(27,94,46,0.35)] w-full"
          style={{ backgroundImage: "linear-gradient(170deg, rgb(27,94,46) 15%, rgb(15,46,24) 85%)" }}
        />
      </div>
      <div className="absolute flex gap-[25px] items-center left-[143px] top-[467px]">
        <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-[15px] text-white tracking-[-0.15px] whitespace-nowrap">
          지금 정리 시작하기
        </p>
        <div className="h-[9px] w-[10.5px]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>

      {/* 하단 페이드 그라데이션 + 네비게이션 */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[122px] left-[13.5px] top-[720px] w-[375px]" />
      <div className="absolute bg-white h-[56px] left-[25.5px] rounded-[28px] shadow-[0px_16px_36px_0px_rgba(15,26,20,0.1)] top-[792px] w-[351px]" />
      <div className="absolute flex gap-[47px] items-center left-[49.5px] top-[802px]">
        {[
          { label: "홈", icon: imgFrame3, active: true },
          { label: "분석", icon: imgFrame4, active: false },
          { label: "정리", icon: imgFrame5, active: false },
          { label: "리워드", icon: imgFrame6, active: false },
          { label: "연결", icon: imgFrame7, active: false },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-[4px] items-center w-[22px]">
            <div className="size-[22px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={item.icon} />
            </div>
            <p className={`font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-[10px] text-center ${item.active ? "text-[#1b4332]" : "text-[#9aa89f]"}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bg-[rgba(15,26,20,0.25)] h-[5px] left-[131.5px] rounded-[100px] top-[863px] w-[139px]" />
    </div>
  );
}

function ProgressCard({ iconBg, iconSrc, label, percent = 45, saving = "- 0.8 g", items = "1,842개 항목" }) {
  return (
    <div className="bg-white flex flex-col items-start overflow-clip px-[16px] py-[17px] rounded-[20px] shadow-[0px_8px_12px_0px_rgba(15,26,20,0.06)] w-full">
      <div className="flex gap-[18px] items-center justify-center w-full">
        <div className="flex flex-col gap-[7px] items-center justify-center w-[32px]">
          <div className="flex h-[32px] items-start p-[5px] rounded-[10px] w-full" style={{ backgroundColor: iconBg }}>
            <div className="relative size-[22px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={iconSrc} />
            </div>
          </div>
          <p className="font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium text-[11px] text-black text-center w-full">
            {label}
          </p>
        </div>
        <div className="flex flex-col gap-[12px] items-end leading-none w-[149px]">
          <div className="inline-grid place-items-start text-[#1b4332] whitespace-nowrap">
            <p className="col-start-1 row-start-1 font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[24px] tracking-[-0.48px]">
              {percent}
            </p>
            <p className="col-start-1 row-start-1 font-['Inter:Semi_Bold',sans-serif] font-semibold ml-[35px] mt-[10px] opacity-70 text-[13px]">
              %
            </p>
          </div>
          <div className="inline-grid place-items-start">
            <div className="bg-[#eff1e8] col-start-1 row-start-1 h-[4px] rounded-[2px] w-[149px]" />
            <div className="bg-[#52b788] col-start-1 row-start-1 h-[4px] rounded-[2px]" style={{ width: `${(percent / 100) * 149}px` }} />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] items-center w-[57px]">
          <div className="bg-[#d8eedf] flex h-[16px] items-center justify-center px-[3px] rounded-[8px] w-[42px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[#1b4332] text-[9px] text-center whitespace-nowrap">
              {saving}
            </p>
          </div>
          <p className="font-['Inter:Medium','Noto_Sans_KR:Regular',sans-serif] font-medium text-[#7c8a80] text-[10px] whitespace-nowrap">
            {items}
          </p>
        </div>
      </div>
    </div>
  );
}
