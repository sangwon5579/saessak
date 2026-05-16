// 02 · Analyze — 하단
// Figma 노드 ID: 4041:526
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4041-526
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.

const imgFrame = "https://www.figma.com/api/mcp/asset/974c13fd-c292-48d8-8181-efdc7822dfe3";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/194e524c-6f75-423d-9dc7-bcd91c139c0a";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/7bd98cdf-982f-4aeb-ab9c-8adf2a3f43d7";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/7d4eb4f3-55ab-4366-a986-39981553a27b";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/c6f267ae-34cb-4937-badc-8b50927a32a1";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/7f6725b8-a7fa-4f3d-9422-67db1c9aecaf";
const imgEllipse = "https://www.figma.com/api/mcp/asset/c1302e3b-8bd3-4164-a15a-09febcaa2af5";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/8bcdcfc6-68f7-4e07-8c27-d5cac3c9b76a";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/738a584a-9c05-49a8-8c04-2d907e50cb40";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/64b248a9-848f-4ea7-a3c6-a3fbcb8f93a8";
const imgFrame6 = "https://www.figma.com/api/mcp/asset/04ed0f93-5a72-43cd-aea2-f8cc40225409";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/6b9b45bf-d5e8-4810-bd36-4c04adb8e118";
const imgFrame7 = "https://www.figma.com/api/mcp/asset/04152a06-49d8-4cd8-8054-73b644a18095";
const imgFrame8 = "https://www.figma.com/api/mcp/asset/9e6f870b-929e-4f88-aa2c-7ea40eb710ce";
const imgFrame9 = "https://www.figma.com/api/mcp/asset/2e6d7265-6e75-48c7-bed5-d5afd6790d1c";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/409c2c94-64da-4d25-9b18-f4b651359002";
const imgWifi = "https://www.figma.com/api/mcp/asset/359838cd-423b-4b00-8efe-eab9a7c05642";
const imgBattery = "https://www.figma.com/api/mcp/asset/caeb35ff-ec8e-4468-ab35-3d6a996ba415";

export default function AnalyzeBottom() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      {/* 월별 추이 섹션 */}
      <p className="absolute font-bold left-[33.5px] text-[#1b4332] text-[14px] top-[58px] tracking-[-0.07px] whitespace-nowrap">월별 추이</p>
      <p className="absolute font-medium left-[240.5px] text-[#7c8a80] text-[11px] top-[60px] whitespace-nowrap">총 발생량 </p>
      <p className="absolute font-bold left-[288.5px] text-[#1b4332] text-[11px] top-[60px] whitespace-nowrap">32.7 kg CO₂</p>

      <div className="absolute bg-white h-[200px] left-[33.5px] rounded-[22px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[84px] w-[335px]" />
      <div className="absolute bg-[#e4e7dd] h-px left-[47.5px] top-[136.5px] w-[287px]" />
      <div className="absolute bg-[#e4e7dd] h-px left-[47.5px] top-[169px] w-[287px]" />
      <div className="absolute bg-[#e4e7dd] h-px left-[47.5px] top-[201.5px] w-[287px]" />

      {/* 월별 바: 12월~4월 */}
      {[
        { x: 58.42, h: 60.997, top: 173, label: "12월", labelX: 60.92 },
        { x: 106.25, h: 76.246, top: 157.75, label: "1월", labelX: 111.75 },
        { x: 154.08, h: 72.434, top: 161.57, label: "2월", labelX: 158.58 },
        { x: 201.92, h: 89.589, top: 144.41, label: "3월", labelX: 206.42 },
        { x: 249.75, h: 102.933, top: 131.07, label: "4월", labelX: 254.25 },
      ].map((bar, i) => (
        <div key={i}>
          <div
            className="absolute bg-gradient-to-b from-[#b7e4c7] to-[#74c69d] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[8px] rounded-tr-[8px] w-[26px]"
            style={{ left: `${bar.x}px`, top: `${bar.top}px`, height: `${bar.h}px` }}
          />
          <p className="absolute font-medium text-[#7c8a80] text-[10px] top-[242px] whitespace-nowrap" style={{ left: `${bar.labelX}px` }}>
            {bar.label}
          </p>
        </div>
      ))}

      {/* 이번 달 바 (강조) */}
      <div className="absolute bg-gradient-to-b from-[#1b4332] h-[118.182px] left-[297.58px] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[8px] rounded-tr-[8px] to-[#2d6a4f] top-[115.82px] w-[26px]" />
      <p className="absolute font-bold left-[293.08px] text-[#1b4332] text-[10.5px] top-[97.82px] whitespace-nowrap">12.4kg</p>
      <p className="absolute font-bold left-[293.58px] text-[#1b4332] text-[10px] top-[242px] whitespace-nowrap">이번 달</p>

      {/* 이번 달 정리 진척률 */}
      <p className="absolute font-bold left-[33.5px] text-[#1b4332] text-[14px] top-[308px] tracking-[-0.07px] whitespace-nowrap">이번 달 정리 진척률</p>

      {/* 정리한 양 카드 (다크그린) */}
      <div
        className="absolute h-[130px] left-[33.5px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(27,67,50,0.25)] top-[334px] w-[161px]"
        style={{ backgroundImage: "linear-gradient(159deg, rgb(45,106,79) 12%, rgb(27,67,50) 88%)" }}
      />
      <p className="absolute font-semibold left-[49.5px] text-[11px] text-[rgba(183,228,199,0.95)] top-[352px] whitespace-nowrap">정리한 양</p>
      <p className="absolute font-extrabold leading-[38px] left-[49.5px] text-[36px] text-white top-[372px] tracking-[-0.72px]">4.8</p>
      <p className="absolute font-bold left-[109.5px] text-[14px] text-[rgba(255,255,255,0.85)] top-[392px]">kg</p>
      <div className="absolute bg-white h-[22px] left-[49.5px] rounded-full top-[426px] w-[55px]" />
      <p className="absolute font-bold left-[58.5px] text-[#1b4332] text-[11px] top-[430px] whitespace-nowrap">↓ 절감</p>

      {/* 남은 양 카드 */}
      <div className="absolute bg-white h-[130px] left-[207.5px] rounded-[20px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[334px] w-[161px]" />
      <p className="absolute font-semibold left-[223.5px] text-[#7c8a80] text-[11px] top-[352px] whitespace-nowrap">남은 양</p>
      <p className="absolute font-extrabold leading-[38px] left-[223.5px] text-[#1b4332] text-[36px] top-[372px] tracking-[-0.72px] whitespace-nowrap">7.9</p>
      <p className="absolute font-bold left-[283.5px] text-[#7c8a80] text-[14px] top-[392px] whitespace-nowrap">kg</p>
      <div className="absolute bg-[#fce5cb] h-[22px] left-[223.5px] rounded-full top-[426px] w-[67px]" />
      <div className="absolute flex items-center left-[232.5px] top-[430px]">
        <p className="font-bold text-[#a85a1f] text-[11px] mr-[-7px] w-[49px]">정리하기</p>
        <div className="size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame9} /></div>
      </div>

      {/* 추천 카드: 안 보는 메일 */}
      <div className="absolute bg-[#f0f5ee] border border-[#b7e4c7] border-dashed h-[80px] left-[33.5px] rounded-[22px] shadow-[0px_4px_7.6px_0px_rgba(0,0,0,0.1)] top-[488px] w-[335px]" />
      <div className="absolute left-[49.5px] size-[40px] top-[508px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} /></div>
      <div className="absolute left-[59.5px] size-[20px] top-[518px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame7} /></div>
      <p className="absolute font-bold left-[101.5px] text-[#1b4332] text-[13px] top-[506px] tracking-[-0.13px] whitespace-nowrap">안 보는 메일이 절반 이상이에요</p>
      <p className="absolute font-medium left-[101.5px] text-[#3b4a40] text-[12px] top-[526px] whitespace-nowrap">
        구독 해지로 즉시 <span className="font-bold">새싹 🌱</span> 받기
      </p>
      <div className="absolute left-[333.5px] size-[14px] top-[521px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame8} /></div>

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

      {/* 하단 네비 (분석 활성) */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[122px] left-[13.5px] top-[720px] w-[375px]" />
      <div className="absolute bg-white h-[56px] left-[25.5px] rounded-[28px] shadow-[0px_16px_36px_0px_rgba(15,26,20,0.1)] top-[792px] w-[351px]" />
      <div className="absolute flex gap-[47px] items-center left-[49.5px] top-[802px]">
        {[
          { label: "홈", icon: imgFrame, active: false },
          { label: "분석", icon: imgFrame1, active: true },
          { label: "정리", icon: imgFrame2, active: false },
          { label: "리워드", icon: imgFrame3, active: false },
          { label: "연결", icon: imgFrame4, active: false },
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
