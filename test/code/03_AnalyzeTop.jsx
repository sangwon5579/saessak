// 02 · Analyze — 상단
// Figma 노드 ID: 4041:412
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4041-412
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.
//      실제 사용 시 SVG/PNG로 export해서 로컬 경로로 교체하세요.
//
// 이 파일은 피그마에서 자동 생성된 코드입니다. 깔끔하게 다듬으려면
// 01_HomeV3.jsx 같이 컴포넌트 분리를 권장합니다.

const imgFrame = "https://www.figma.com/api/mcp/asset/6603eed4-64f9-4c7e-8635-0094cf499ffd";
const imgEllipse = "https://www.figma.com/api/mcp/asset/3a3df3e6-80f0-48db-a58e-208140b2ebee";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/aefb373e-654b-43a4-8c59-f0465658f43d";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/34e4f582-0156-451a-9ea1-ad31ba73a0c9";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/c9da68e1-5071-423b-9944-f97ed345a33e";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/e331c953-aa26-4dcb-8993-4fd318878781";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/dacad4c0-8bf6-4a1e-b6c8-b38dd40fb045";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/91b50596-e57d-40b6-a3c8-6dcf0bd41fff";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/46e59404-bb39-4baa-8021-ad19b43d9d00";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/fe5ca126-e2da-4873-8493-92214d585c73";
const imgWifi = "https://www.figma.com/api/mcp/asset/b97d6849-99e5-4a41-924a-e91d73c2368a";
const imgBattery = "https://www.figma.com/api/mcp/asset/4bff24bd-8ddf-431b-982a-d2534e2710ad";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/73e6e59d-ff4c-403c-976d-a02b561e6f9e";
const imgFrame6 = "https://www.figma.com/api/mcp/asset/10859fbb-43db-4ca5-9d40-4ff0f708d2c3";
const imgFrame7 = "https://www.figma.com/api/mcp/asset/d96e99d6-a303-4bef-8a2e-e1dead05cd44";
const imgFrame8 = "https://www.figma.com/api/mcp/asset/e78a259b-3fb1-4550-8334-5f6dc482a1ee";
const imgFrame9 = "https://www.figma.com/api/mcp/asset/d9d8b8ba-6341-4fe3-ad9e-31c185cce5ad";

export default function AnalyzeTop() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      <p className="absolute font-medium left-[33.5px] text-[#7c8a80] text-[13px] top-[64px] whitespace-nowrap">디지털 탄소 분석</p>
      <p className="absolute font-bold left-[33.5px] text-[#1b4332] text-[18px] top-[84px] tracking-[-0.27px] whitespace-nowrap">내 탄소가 어디서 나오는지 확인해요</p>
      <p className="absolute font-bold left-[33.5px] text-[#1b4332] text-[14px] top-[128px] tracking-[-0.07px] whitespace-nowrap">이번 달 발생량</p>

      <div className="absolute bg-white h-[218px] left-[33.5px] rounded-[22px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[154px] w-[335px]" />
      <div className="absolute left-[49.5px] size-[148px] top-[174px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} /></div>
      <p className="absolute font-medium left-[103.5px] text-[#7c8a80] text-[10px] top-[218px] whitespace-nowrap">총 발생량</p>
      <p className="absolute font-extrabold leading-[30px] left-[95.5px] text-[#1b4332] text-[28px] top-[232px] tracking-[-0.56px] whitespace-nowrap">32.7</p>
      <p className="absolute font-medium left-[107px] text-[#7c8a80] text-[10px] top-[266px] whitespace-nowrap">kg / 5월</p>

      {/* 카테고리 범례 */}
      <div className="absolute flex flex-col gap-[11px] items-start left-[213.5px] top-[211px]">
        <div className="flex gap-[36px] items-start justify-end w-[141px]">
          <div className="flex gap-[8px] items-center">
            <div className="size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
            <p className="font-semibold text-[#3b4a40] text-[12.5px] whitespace-nowrap">Cloud 파일 </p>
          </div>
          <p className="font-bold text-[#1b4332] text-[12.5px] whitespace-nowrap">51%</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[8px] items-center">
            <div className="size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>
            <p className="font-semibold text-[#3b4a40] text-[12.5px] whitespace-nowrap">이메일</p>
          </div>
          <p className="font-bold text-[#1b4332] text-[12.5px] whitespace-nowrap">31%</p>
        </div>
        <div className="flex gap-[35px] items-center w-full">
          <div className="flex gap-[8px] items-center">
            <div className="size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
            <p className="font-semibold text-[#3b4a40] text-[12.5px] whitespace-nowrap">Cloud 사진</p>
          </div>
          <p className="font-bold text-[#1b4332] text-[12.5px] whitespace-nowrap">18%</p>
        </div>
      </div>

      {/* 지난달 대비 */}
      <div className="absolute flex flex-wrap gap-[3px] items-end left-[49.5px] top-[334px] w-[303px]">
        <div className="bg-[#e4e7dd] h-px w-[303px]" />
        <div className="size-[14px] mt-[11px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} /></div>
        <p className="font-medium text-[#3b4a40] text-[12px] whitespace-nowrap mt-[11px]">지난달보다 </p>
        <p className="font-bold text-[#1b4332] text-[12px] whitespace-nowrap mt-[11px]">2.1kg</p>
        <p className="font-medium text-[#3b4a40] text-[12px] whitespace-nowrap mt-[11px]"> 줄었어요!</p>
      </div>

      <p className="absolute font-bold left-[33.5px] text-[#1b4332] text-[14px] top-[396px] tracking-[-0.07px] whitespace-nowrap">월별 추이</p>
      <p className="absolute font-medium left-[240.5px] text-[#7c8a80] text-[11px] top-[398px] whitespace-nowrap">총 발생량 </p>
      <p className="absolute font-bold left-[288.5px] text-[#1b4332] text-[11px] top-[398px] whitespace-nowrap">32.7 kg CO₂</p>

      {/* 월별 바 차트 */}
      <div className="absolute bg-white h-[200px] left-[33.5px] rounded-[22px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[422px] w-[335px]" />
      <div className="absolute bg-[#e4e7dd] h-px left-[47.5px] top-[474.5px] w-[287px]" />
      <div className="absolute bg-[#e4e7dd] h-px left-[47.5px] top-[507px] w-[287px]" />
      <div className="absolute bg-[#e4e7dd] h-px left-[47.5px] top-[539.5px] w-[287px]" />

      {/* 월별 바: 12월~4월 (그라데이션) */}
      {[
        { x: 58.42, h: 60.997, top: 511, label: "12월", labelX: 60.92 },
        { x: 106.25, h: 76.246, top: 495.75, label: "1월", labelX: 111.75 },
        { x: 154.08, h: 72.434, top: 499.57, label: "2월", labelX: 158.58 },
        { x: 201.92, h: 89.589, top: 482.41, label: "3월", labelX: 206.42 },
        { x: 249.75, h: 102.933, top: 469.07, label: "4월", labelX: 254.25 },
      ].map((bar, i) => (
        <div key={i}>
          <div
            className="absolute bg-gradient-to-b from-[#b7e4c7] to-[#70c098] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[8px] rounded-tr-[8px] w-[26px]"
            style={{ left: `${bar.x}px`, top: `${bar.top}px`, height: `${bar.h}px` }}
          />
          <p className="absolute font-medium text-[#7c8a80] text-[10px] top-[580px] whitespace-nowrap" style={{ left: `${bar.labelX}px` }}>
            {bar.label}
          </p>
        </div>
      ))}

      {/* 이번 달 바 (강조) */}
      <div className="absolute bg-gradient-to-b from-[#1b4332] h-[118.182px] left-[297.58px] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[8px] rounded-tr-[8px] to-[#2d6a4f] top-[453.82px] w-[26px]" />
      <p className="absolute font-bold left-[293.08px] text-[#1b4332] text-[10.5px] top-[435.82px] whitespace-nowrap">12.4kg</p>
      <p className="absolute font-bold left-[293.58px] text-[#1b4332] text-[10px] top-[580px] whitespace-nowrap">이번 달</p>

      {/* 이번 달 정리 진척률 섹션 */}
      <p className="absolute font-bold left-[33.5px] text-[#1b4332] text-[14px] top-[646px] tracking-[-0.07px] whitespace-nowrap">이번 달 정리 진척률</p>

      {/* 정리한 양 카드 (다크그린) */}
      <div
        className="absolute h-[130px] left-[33.5px] rounded-[20px] shadow-[0px_10px_24px_0px_rgba(27,67,50,0.25)] top-[672px] w-[161px]"
        style={{ backgroundImage: "linear-gradient(159deg, rgb(45,106,79) 12%, rgb(27,67,50) 88%)" }}
      />
      <p className="absolute font-semibold left-[49.5px] text-[11px] text-[rgba(183,228,199,0.95)] top-[690px] whitespace-nowrap">정리한 양</p>
      <p className="absolute font-extrabold leading-[38px] left-[49.5px] text-[36px] text-white top-[710px] tracking-[-0.72px] whitespace-nowrap">4.8</p>
      <p className="absolute font-bold left-[109.5px] text-[14px] text-[rgba(255,255,255,0.85)] top-[730px] whitespace-nowrap">kg</p>
      <div className="absolute bg-white h-[22px] left-[49.5px] rounded-full top-[764px] w-[55px]" />
      <p className="absolute font-bold left-[58.5px] text-[#1b4332] text-[11px] top-[768px] whitespace-nowrap">↓ 절감</p>

      {/* 남은 양 카드 */}
      <div className="absolute bg-white h-[130px] left-[207.5px] rounded-[20px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[672px] w-[161px]" />
      <p className="absolute font-semibold left-[223.5px] text-[#7c8a80] text-[11px] top-[690px] whitespace-nowrap">남은 양</p>
      <p className="absolute font-extrabold leading-[38px] left-[223.5px] text-[#1b4332] text-[36px] top-[710px] tracking-[-0.72px] whitespace-nowrap">7.9</p>
      <p className="absolute font-bold left-[283.5px] text-[#7c8a80] text-[14px] top-[730px] whitespace-nowrap">kg</p>
      <div className="absolute bg-[#fce5cb] h-[22px] left-[223.5px] rounded-full top-[764px] w-[67px]" />

      {/* 추천 카드: 안 보는 메일 */}
      <div className="absolute bg-[#f0f5ee] border border-[#b7e4c7] border-dashed h-[80px] left-[33.5px] rounded-[22px] shadow-[0px_4px_7.6px_0px_rgba(0,0,0,0.1)] top-[826px] w-[335px]" />
      <div className="absolute left-[49.5px] size-[40px] top-[846px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} /></div>
      <div className="absolute left-[59.5px] size-[20px] top-[856px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} /></div>
      <p className="absolute font-bold left-[101.5px] text-[#1b4332] text-[13px] top-[844px] tracking-[-0.13px] whitespace-nowrap">안 보는 메일이 절반 이상이에요</p>
      <p className="absolute font-medium left-[101.5px] text-[#3b4a40] text-[12px] top-[864px] whitespace-nowrap">
        구독 해지로 즉시 <span className="font-bold">새싹 🌱</span> 받기
      </p>
      <div className="absolute left-[333.5px] size-[14px] top-[859px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} /></div>
      <div className="absolute flex items-center left-[232.5px] top-[768px]">
        <p className="font-bold text-[#a85a1f] text-[11px] mr-[-7px] w-[49px]">정리하기</p>
        <div className="size-[10px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} /></div>
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

      {/* 하단 페이드 + 네비게이션 (분석 활성) */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[122px] left-[13.5px] top-[740px] w-[375px]" />
      <div className="absolute bg-white h-[56px] left-[25.5px] rounded-[28px] shadow-[0px_16px_36px_0px_rgba(15,26,20,0.1)] top-[792px] w-[351px]" />
      <div className="absolute flex gap-[47px] items-center left-[49.5px] top-[802px]">
        {[
          { label: "홈", icon: imgFrame5, active: false },
          { label: "분석", icon: imgFrame6, active: true },
          { label: "정리", icon: imgFrame7, active: false },
          { label: "리워드", icon: imgFrame8, active: false },
          { label: "연결", icon: imgFrame9, active: false },
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
