// 04 · Clean Complete — 상단
// Figma 노드 ID: 4041:845
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4041-845
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.

const imgGroup = "https://www.figma.com/api/mcp/asset/fe4d2344-a2f7-401a-b3df-554f8379e33d";
const imgFrame = "https://www.figma.com/api/mcp/asset/370c5e20-1242-4448-9a29-43c60de55743";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/c3b7b3c9-52fa-4e8f-bebf-c958365ecdde";
const imgWifi = "https://www.figma.com/api/mcp/asset/aa368af6-dc07-42cc-b414-8d74d9378cc5";
const imgBattery = "https://www.figma.com/api/mcp/asset/67cbc82d-8fe5-4d8c-bbf6-1c869eb2a6de";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/f142530b-99a1-4d88-ab11-b945619cd4dd";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/7e138da2-0c53-43a1-a9d5-e4638bf74ed2";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/80273ec8-9ab9-4ab8-9fbb-5a3c0572b43b";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/7b7bfc9d-a2bd-44ae-9bfc-a7f1ce9fefc0";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/b1d4953e-d6be-40f5-9084-cba329ed01c1";
const imgVector = "https://www.figma.com/api/mcp/asset/f3f07f21-b32b-4ffc-8d78-cc58854dafb4";

export default function CleanComplete() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      {/* 축하 파티클 (점들) */}
      <div className="absolute bg-[#74c69d] size-[8px] rounded-full left-[73.5px] top-[130px]" />
      <div className="absolute bg-[#f4a261] size-[6px] rounded-full left-[333.5px] top-[110px]" />
      <div className="absolute bg-[#f4a261] size-[6px] rounded-full left-[143.5px] top-[160px]" />
      <div className="absolute bg-[#b7e4c7] size-[10px] rounded-full left-[303.5px] top-[200px]" />
      <div className="absolute bg-[#f4a261] size-[7px] rounded-full left-[83.5px] top-[240px]" />
      <div className="absolute bg-[#f4a261] size-[7px] rounded-full left-[293.5px] top-[150px]" />

      {/* 축하 막대 */}
      <div className="absolute bg-[#f4a261] h-[14px] left-[113.5px] rounded-[2px] top-[90px] w-[4px]" />
      <div className="absolute bg-[#f4a261] h-[14px] left-[238.44px] rounded-[2px] top-[111.77px] w-[4px] -rotate-[120deg]" />
      <div className="absolute bg-[#74c69d] h-[14px] left-[203.5px] rounded-[2px] top-[230px] w-[4px]" />
      <div className="absolute bg-[#74c69d] h-[14px] left-[169.47px] rounded-[2px] top-[120.35px] w-[4px] -rotate-[40deg]" />
      <div className="absolute bg-[#74c69d] h-[4px] left-[63.5px] rounded-[2px] top-[180px] w-[14px]" />
      <div className="absolute bg-[#f4a261] h-[4px] left-[253.66px] rounded-[2px] top-[216px] w-[14px] rotate-[36deg]" />

      {/* 잎사귀 일러스트 */}
      <div className="absolute drop-shadow-[0px_4px_5.35px_rgba(0,0,0,0.25)] left-[157.5px] size-[87px] top-[135px]">
        <div className="absolute inset-[10%_17%_12%_11%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
        </div>
      </div>

      {/* 메인 텍스트 */}
      <p className="absolute font-semibold left-[148px] text-[#7c8a80] text-[15px] top-[260px] whitespace-nowrap">오늘 정리 완료!</p>
      <p className="absolute font-extrabold leading-[84px] left-[90px] text-[#1b4332] text-[84px] top-[296px] tracking-[-4.2px] whitespace-nowrap">0.42</p>
      <p className="absolute font-bold left-[282px] text-[24px] text-[rgba(27,67,50,0.8)] top-[334px] whitespace-nowrap">kg</p>
      <p className="absolute font-semibold left-[145px] text-[#1b4332] text-[15px] top-[386px] whitespace-nowrap">CO₂ 절감했어요</p>

      {/* 라면 환산 카드 */}
      <div className="absolute bg-white flex h-[74px] items-start left-1/2 -translate-x-1/2 px-[24px] py-[17px] rounded-[18px] shadow-[0px_6px_9px_0px_rgba(15,26,20,0.05)] top-[426px] w-[331px]">
        <div className="flex gap-[20px] items-center">
          <p className="font-semibold text-[40px] text-black">🍜</p>
          <div className="flex gap-[10px] items-end">
            <p className="font-semibold text-[#ff7100] text-[14px]">라면</p>
            <div className="inline-grid leading-none place-items-start">
              <p className="col-start-1 row-start-1 font-extrabold leading-[24px] text-[#1b4332] text-[22px] tracking-[-0.44px]">2</p>
              <p className="col-start-1 row-start-1 font-semibold ml-[20px] mt-[8px] text-[#7c8a80] text-[12px]">개 끓일 수 있는 탄소를 아꼈어요</p>
            </div>
          </div>
        </div>
      </div>

      {/* 새싹 적립 알림 (오렌지) */}
      <div className="absolute bg-[rgba(244,162,97,0.72)] h-[64px] left-[41.5px] rounded-[28px] shadow-[0px_10px_24px_0px_rgba(244,162,97,0.35)] top-[530px] w-[319px]" />
      <div className="absolute left-[61.5px] size-[22px] top-[552px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} /></div>
      <p className="absolute font-semibold left-[97.5px] text-[#1b4332] text-[13px] top-[545px] whitespace-nowrap">총 + 150 새싹 🌱 적립됨</p>
      <p className="absolute font-medium left-[97.5px] text-[#1b4332] text-[11px] top-[564px] whitespace-nowrap">리워드 마켓에서 사용 가능</p>

      {/* 리워드 마켓 가기 버튼 (다크그린) */}
      <div
        className="absolute h-[56px] left-[41.5px] rounded-[28px] shadow-[0px_12px_28px_0px_rgba(27,67,50,0.3)] top-[622px] w-[319px]"
        style={{ backgroundImage: "linear-gradient(170deg, rgb(27,67,50) 15%, rgb(20,48,40) 85%)" }}
      />
      <p className="absolute font-bold left-[142.5px] text-[15px] text-white top-[641px] tracking-[-0.15px] whitespace-nowrap">리워드 마켓 가기</p>
      <div className="absolute h-[9px] left-[263px] top-[645px] w-[10.5px]"><img alt="" className="block max-w-none size-full" src={imgVector} /></div>

      {/* 홈으로 돌아가기 텍스트 */}
      <p className="absolute font-semibold left-[152px] text-[#7c8a80] text-[13px] top-[700px] tracking-[-0.13px] whitespace-nowrap">홈으로 돌아가기</p>

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
          { label: "홈", icon: imgFrame1, active: false },
          { label: "분석", icon: imgFrame2, active: false },
          { label: "정리", icon: imgFrame3, active: true },
          { label: "리워드", icon: imgFrame4, active: false },
          { label: "연결", icon: imgFrame5, active: false },
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
