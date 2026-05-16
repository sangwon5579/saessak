// 03 · Clean — 상단
// Figma 노드 ID: 4041:641
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4041-641
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.
//      이 화면은 카드 스택 + AI 분석 박스 등 복잡한 구조라 raw 형태로 저장됩니다.
//      개발자가 컴포넌트 분리해서 사용하길 권장합니다.

const imgFrame = "https://www.figma.com/api/mcp/asset/8d4e3df5-58ce-4f69-bc09-eac26bc89082";
const imgEllipse = "https://www.figma.com/api/mcp/asset/699c07fe-2db9-44ea-bf4f-84c00dd5d27d";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/cd7da94d-02f5-489e-8ff9-8f6f78d44204";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/350805dc-ea08-44ad-a4d6-8337072a07f1";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/6e304785-0208-48e9-8bdf-fdd4bad4fe05";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/e53d5822-48d7-446d-a920-d43815f67139";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/eae1b121-e913-4e32-82f6-e232ee410ad1";
const imgFrame6 = "https://www.figma.com/api/mcp/asset/a105b5ed-969c-4153-9c2c-d617060447f2";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/dfe1a167-f2cd-42b1-9700-973e8a8d075c";
const imgWifi = "https://www.figma.com/api/mcp/asset/fb0b8db5-5e6d-4a9f-bcd8-8fc73a1cd11d";
const imgBattery = "https://www.figma.com/api/mcp/asset/c2292b48-369c-4955-bdbb-b3d2e9f65a3a";
const imgFrame7 = "https://www.figma.com/api/mcp/asset/8a9d09bf-d013-4149-9650-4e30b5b23620";
const imgFrame8 = "https://www.figma.com/api/mcp/asset/e04bfad6-977e-4c12-862d-21a6848b75b7";
const imgFrame9 = "https://www.figma.com/api/mcp/asset/8a26665d-c449-418e-be94-a8e198adb428";
const imgFrame10 = "https://www.figma.com/api/mcp/asset/220ef45d-a926-4350-bebe-6aedbca52107";
const imgFrame11 = "https://www.figma.com/api/mcp/asset/be196bbd-9895-4a7e-b1e0-304a57e35847";
const imgTrashBinButtonBg = "https://www.figma.com/api/mcp/asset/843e6f0c-93e5-4604-972a-4d724208c45e";
const imgTrashIcon = "https://www.figma.com/api/mcp/asset/bdb4714f-4359-4d78-b41c-b411ffd1c5ab";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/e1b98e3b-75c7-4726-beb5-0cc8036f1560";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/1b684e65-58df-441c-af96-4e777e9198c5";
const imgFrame12 = "https://www.figma.com/api/mcp/asset/6c98e3b3-73cf-4d18-8848-f673952b65e2";

export default function CleanTop() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      <p className="absolute font-extrabold left-[33.5px] text-[#1b4332] text-[22px] top-[64px] tracking-[-0.44px] whitespace-nowrap">정리해볼까요?</p>
      <p className="absolute font-medium left-[33.5px] text-[#7c8a80] text-[13px] top-[98px] whitespace-nowrap">AI가 고른 삭제 후보예요</p>

      {/* 3개 남음 뱃지 */}
      <div className="absolute bg-[#eff1e8] flex gap-[3px] h-[19px] items-center left-[290px] px-[8px] rounded-full top-[122px] w-[79px]">
        <div className="size-[11px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} /></div>
        <p className="font-bold text-[#3b4a40] text-[11px] whitespace-nowrap">3개 남음</p>
      </div>

      {/* 카테고리 필터 */}
      <div className="absolute bg-[#eff1e8] flex flex-col h-[38px] items-start left-[33.5px] pl-[4px] py-[4px] rounded-[16px] top-[150px] w-[335px]">
        <div className="flex gap-[9px] items-center">
          {[
            { label: "전체", active: true, w: 50 },
            { label: "이메일", active: false, w: 60 },
            { label: "Cloud 파일", active: false, w: 89 },
            { label: "Cloud 사진", active: false },
          ].map((tab) => (
            <div key={tab.label} className={`${tab.active ? "bg-white" : ""} flex h-[30px] items-center justify-center px-[19px] rounded-[15px] shadow-[0px_2px_3px_0px_rgba(15,26,20,0.06)]`} style={tab.w ? { width: `${tab.w}px` } : {}}>
              <p className="font-bold text-[#1b4332] text-[12.5px] text-center whitespace-nowrap">{tab.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 카드 스택 (3장: 뒤쪽 두 장은 살짝 보임) */}
      <div className="absolute bg-white border border-[#e4e7dd] h-[380px] left-[49.5px] opacity-55 rounded-[28px] top-[240px] w-[303px]" />
      <div className="absolute bg-white border border-[#e4e7dd] h-[380px] left-[41.5px] opacity-85 rounded-[28px] top-[230px] w-[319px]" />
      <div className="absolute bg-white border border-[#e4e7dd] h-[380px] left-[33.5px] rounded-[28px] shadow-[0px_24px_48px_0px_rgba(15,26,20,0.1)] top-[220px] w-[335px]" />

      {/* 카드 상단 뱃지: 이메일 + 안전 98% */}
      <div className="absolute bg-[#eff1e8] flex gap-[10px] h-[22px] items-center justify-center left-[54px] px-[13px] rounded-full top-[240px] w-[72px]">
        <div className="size-[5px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
        <p className="font-bold text-[#3b4a40] text-[11px] whitespace-nowrap">이메일</p>
      </div>
      <div className="absolute bg-[#d8eedf] flex h-[22px] items-center left-[271px] px-[8px] rounded-full top-[240px] w-[78px]">
        <div className="flex gap-[4px] items-end">
          <div className="size-[11px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} /></div>
          <p className="font-bold text-[#1b4332] text-[11px] whitespace-nowrap">안전 98%</p>
        </div>
      </div>

      {/* 이메일 정보 */}
      <p className="absolute font-extrabold left-[121.5px] text-[#1b4332] text-[17px] top-[292px] tracking-[-0.255px] whitespace-nowrap">쿠팡 광고 메일 234통</p>
      <p className="absolute font-medium left-[121.5px] text-[#7c8a80] text-[11px] top-[316px] whitespace-nowrap">no-reply@coupang.com</p>

      {/* 이메일 아이콘 (큰 원) */}
      <div className="absolute left-[53.5px] size-[56px] top-[282px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
      <div className="absolute left-[67.5px] size-[28px] top-[296px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame12} /></div>

      {/* AI 분석 박스 */}
      <div className="absolute bg-[#f6f8f3] h-[74px] left-[53.5px] rounded-[16px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.1)] top-[358px] w-[295px]" />
      <div className="absolute left-[67.5px] size-[12px] top-[369px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} /></div>
      <p className="absolute font-bold left-[83.5px] text-[#3a3ca3] text-[11px] top-[368px] whitespace-nowrap">AI 분석</p>
      <p className="absolute font-medium leading-[18px] left-[67.5px] text-[#3b4a40] text-[12px] top-[388px] w-[267px]">
        지난 1년간 234통 발송되었지만 한 번도 읽지 않았어요. 정리해도 안전합니다.
      </p>

      {/* 3개 메트릭 박스: 용량 / 열람률 / 1년치 발송 */}
      {[
        { left: 53.5, value: "47 MB", label: "용량", valueLeft: 79, labelLeft: 89.5 },
        { left: 155, value: "0%", label: "열람률", valueLeft: 192, labelLeft: 187 },
        { left: 255.5, value: "234통", label: "1년치 발송", valueLeft: 282.5, labelLeft: 280 },
      ].map((m, i) => (
        <div key={i}>
          <div className="absolute bg-[#fafbf7] h-[50px] rounded-[12px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.1)] top-[446px] w-[93px]" style={{ left: `${m.left}px` }} />
          <p className="absolute font-bold leading-[14px] text-[#1b4332] text-[11.5px] top-[454px] whitespace-nowrap" style={{ left: `${m.valueLeft}px` }}>{m.value}</p>
          <p className="absolute font-medium leading-[12px] text-[#7c8a80] text-[10px] top-[473px] whitespace-nowrap" style={{ left: `${m.labelLeft}px` }}>{m.label}</p>
        </div>
      ))}

      {/* 보상 미리보기 (오렌지 박스) */}
      <div
        className="absolute h-[44px] left-[53.5px] rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] top-[536px] w-[295px]"
        style={{ backgroundImage: "linear-gradient(165deg, rgb(255,245,235) 13%, rgb(255,228,214) 87%)" }}
      />
      <p className="absolute font-bold left-[67.5px] text-[#a85a1f] text-[11px] top-[551px] tracking-[-0.11px] whitespace-nowrap">보상 미리보기</p>
      <div className="absolute flex items-center left-[173.5px] top-[549px]">
        <p className="font-extrabold text-[#2d6a4f] text-[14px] tracking-[-0.14px] whitespace-nowrap">
          <span className="font-semibold">+</span> 12 <span className="font-semibold">새싹</span>
        </p>
      </div>
      <div className="absolute flex gap-[4px] items-center left-[266.5px] top-[551px]">
        <div className="size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} /></div>
        <p className="font-bold text-[#1b4332] text-[12px] whitespace-nowrap">- 0.05kg</p>
      </div>
      <p className="absolute font-bold left-[232px] text-[10px] text-black top-[554px] whitespace-nowrap">🌱</p>

      {/* 휴지통 아이콘 (우상단) */}
      <a className="absolute block left-[332px] size-[40px] top-[68px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrashBinButtonBg} />
      </a>
      <div className="absolute left-[343px] size-[18px] top-[79px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrashIcon} /></div>
      <div className="absolute left-[358px] size-[16px] top-[64px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>
      <p className="absolute font-bold left-[358px] text-[8px] text-center text-white top-[67px] w-[16px]">89</p>

      {/* 하단 액션 버튼 3개 (보관 / 미루기 / 확인) */}
      <div className="absolute flex gap-[40px] items-center left-1/2 -translate-x-1/2 top-[646px]">
        <div className="bg-white flex items-start p-[15px] rounded-[26px] shadow-[0px_6px_9px_0px_rgba(15,26,20,0.08)] size-[52px]">
          <div className="size-[22px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} /></div>
        </div>
        <div className="bg-white flex items-start p-[12px] rounded-[22px] shadow-[0px_6px_9px_0px_rgba(15,26,20,0.08)] size-[44px]">
          <div className="size-[20px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame5} /></div>
        </div>
        <div className="flex items-start p-[18px] rounded-[32px] shadow-[0px_16px_16px_0px_rgba(244,162,97,0.45)] size-[64px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(244,162,97) 15%, rgb(231,138,69) 85%)" }}>
          <div className="size-[28px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame6} /></div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="absolute left-[13.5px] top-0">
        <div className="absolute bg-black h-[34px] left-[174.5px] rounded-[24px] top-[11px] w-[120px]" />
        <div className="flex flex-col h-[54px] items-start pt-[21px] w-[375px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1 flex items-center justify-center px-[16px]">
              <p className="font-['SF_Pro',sans-serif] text-[17px] text-black text-center">9:41</p>
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

      {/* 하단 네비 (정리 활성) */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[122px] left-[13.5px] top-[720px] w-[375px]" />
      <div className="absolute bg-white h-[56px] left-[25.5px] rounded-[28px] shadow-[0px_16px_36px_0px_rgba(15,26,20,0.1)] top-[792px] w-[351px]" />
      <div className="absolute flex gap-[47px] items-center left-[49.5px] top-[802px]">
        {[
          { label: "홈", icon: imgFrame7, active: false },
          { label: "분석", icon: imgFrame8, active: false },
          { label: "정리", icon: imgFrame9, active: true },
          { label: "리워드", icon: imgFrame10, active: false },
          { label: "연결", icon: imgFrame11, active: false },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-[4px] items-center w-[22px]">
            <div className="size-[22px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={item.icon} /></div>
            <p className={`font-bold text-[10px] text-center ${item.active ? "text-[#1b4332]" : "text-[#9aa89f]"}`}>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="absolute bg-[rgba(15,26,20,0.25)] h-[5px] left-[131.5px] rounded-full top-[863px] w-[139px]" />
    </div>
  );
}
