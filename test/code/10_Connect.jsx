// 06 · Connect — 상단 — V2
// Figma 노드 ID: 4147:702
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4147-702
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.

const imgEllipse = "https://www.figma.com/api/mcp/asset/2f2082b4-dd4e-4ed9-b396-b6d197514eb9";
const imgFrame = "https://www.figma.com/api/mcp/asset/19eb2a92-f4c6-4734-aebd-b321f06a2196";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/f0b03e4b-faef-412e-a27b-94f5c85e951c";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/1428f258-41b8-4845-a00c-8c2d558348e9";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/f2c1dd77-65af-4f14-8ad4-088ed0fc680e";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/2c9a664b-8536-4c96-8fee-1c432e14b154";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/de352ad9-7efb-4b37-9ff4-2147328f7409";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/c8b4bebd-c868-4043-a2c9-a202d8468a11";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/f1dfd75b-d4a3-4946-beee-0c6785ebff87";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/516145ec-a231-4d1d-9216-9e9e76e0bf2c";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/1d6790a7-7172-4dc6-93c4-91c6e1081465";
const imgWifi = "https://www.figma.com/api/mcp/asset/ac1ac1c5-bff0-4787-ae87-65db10af0e34";
const imgBattery = "https://www.figma.com/api/mcp/asset/de93494b-97a6-4d1f-b781-0a6591995909";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/5f641bd5-62dd-4606-8377-4c95e022d389";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/f61bc82c-7964-424d-ace4-c87ac52d33b8";
const imgFrame6 = "https://www.figma.com/api/mcp/asset/5a684b5d-2ac0-46cb-a72e-f405c5e9953b";
const imgFrame7 = "https://www.figma.com/api/mcp/asset/f52f1eeb-0764-4dfe-b99e-0a9ec81ca88e";
const imgFrame8 = "https://www.figma.com/api/mcp/asset/69664546-ba9e-40ef-b254-cd91e7d0551f";
const imgGroup13 = "https://www.figma.com/api/mcp/asset/08cb50a7-ebe1-4216-9986-f4ca9b9324f1";
const imgFrame9 = "https://www.figma.com/api/mcp/asset/52a6c24c-1ce7-4371-8fad-9a8f42bd45c8";

export default function Connect() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      <p className="absolute font-extrabold left-[33.5px] text-[#1b4332] text-[22px] top-[64px] tracking-[-0.44px] whitespace-nowrap">연결 계정</p>
      <p className="absolute font-medium left-[33.5px] text-[#7c8a80] text-[13px] top-[98px] whitespace-nowrap">연결할수록 탄소 측정이 정확해져요</p>

      {/* 진행률 헤더 카드 */}
      <div className="absolute bg-[#f0f5ee] border border-[#b7e4c7] h-[88px] left-[33.5px] rounded-[22px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] top-[134px] w-[335px]" />
      <div className="absolute left-[49.5px] size-[44px] top-[156px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
      <div className="absolute left-[60.5px] size-[22px] top-[167px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} /></div>
      <p className="absolute font-extrabold left-[105.5px] text-[#1b4332] text-[14px] top-[156px] tracking-[-0.14px] whitespace-nowrap">3 / 5개 연결됨</p>
      <p className="absolute font-medium left-[105.5px] text-[#3b4a40] text-[12px] top-[178px] whitespace-nowrap">완주하면 +2,000 새싹을 받아요</p>

      {/* 진행 점 5개 (3개 채움 + 2개 빈) */}
      <div className="absolute left-[105.5px] size-[8px] top-[200px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
      <div className="absolute left-[121.5px] size-[8px] top-[200px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
      <div className="absolute left-[137.5px] size-[8px] top-[200px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
      <div className="absolute left-[153.5px] size-[8px] top-[200px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} /></div>
      <div className="absolute left-[169.5px] size-[8px] top-[200px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} /></div>

      {/* +2,000 새싹 뱃지 */}
      <div className="absolute bg-[#fce5cb] h-[22px] left-[257px] rounded-full top-[148px] w-[97px]" />
      <p className="absolute font-bold left-[269.5px] text-[#a85a1f] text-[10.5px] top-[153px] whitespace-nowrap">+2,000 새싹 🌱</p>

      {/* 이메일 섹션 헤더 */}
      <div className="absolute flex gap-[8px] items-center left-[50.5px] top-[258px]">
        <div className="bg-[#ed9864] flex items-start p-[5px] rounded-[10px] size-[32px]">
          <div className="size-[22px] overflow-clip relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} /></div>
        </div>
        <p className="font-extrabold text-[#1b4332] text-[14px] tracking-[-0.14px] whitespace-nowrap">이메일</p>
        <div className="bg-[#d8eedf] flex h-[18px] items-center justify-center px-[8px] rounded-full w-[70px]">
          <p className="font-bold text-[#1b4332] text-[10.5px] text-center whitespace-nowrap">2개 연결됨</p>
        </div>
      </div>

      {/* 이메일 카드 (Gmail + Outlook + 추가하기) */}
      <div className="absolute bg-white h-[236px] left-[33.5px] rounded-[20px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[242px] w-[335px]" />
      <div className="absolute left-[333.5px] size-[16px] top-[264px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} /></div>
      <div className="absolute bg-[#e4e7dd] h-px left-[49.5px] top-[302px] w-[303px]" />

      {/* Gmail 항목 */}
      <div className="absolute left-[49.5px] size-[36px] top-[316px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} /></div>
      <p className="absolute font-bold left-[68px] text-[#ea4335] text-[14px] text-center top-[326px]">G</p>
      <p className="absolute font-bold left-[95.5px] text-[#1b4332] text-[13px] top-[316px] tracking-[-0.065px] whitespace-nowrap">Gmail</p>
      <p className="absolute font-medium left-[95.5px] text-[#7c8a80] text-[11px] top-[334px] whitespace-nowrap">likelion@gmail.com</p>
      {/* 토글 ON */}
      <div className="absolute bg-[#1b4332] h-[26px] left-[310.5px] rounded-full top-[320px] w-[44px]" />
      <div className="absolute bg-white left-[330.5px] rounded-full size-[22px] top-[322px]" />

      <div className="absolute bg-[#e4e7dd] h-px left-[49.5px] top-[362px] w-[303px]" />

      {/* Outlook 항목 */}
      <div className="absolute left-[49.5px] size-[36px] top-[380px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} /></div>
      <p className="absolute font-bold left-[68px] text-[#0327c7] text-[14px] text-center top-[390px]">O</p>
      <p className="absolute font-bold left-[95.5px] text-[#1b4332] text-[13px] top-[380px] tracking-[-0.065px] whitespace-nowrap">outlook</p>
      <p className="absolute font-medium left-[95.5px] text-[#7c8a80] text-[11px] top-[398px] whitespace-nowrap">likelion@outlook.com</p>
      <div className="absolute bg-[#1b4332] h-[26px] left-[310.5px] rounded-full top-[384px] w-[44px]" />
      <div className="absolute bg-white left-[330.5px] rounded-full size-[22px] top-[386px]" />

      <div className="absolute bg-[#e4e7dd] h-px left-[49.5px] top-[426px] w-[303px]" />

      {/* 메일 계정 추가하기 */}
      <div className="absolute left-[49.5px] size-[14px] top-[448px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} /></div>
      <p className="absolute font-bold left-[73.5px] text-[#1b4332] text-[12.5px] top-[445px] tracking-[-0.0625px] whitespace-nowrap">메일 계정 추가하기</p>

      {/* Cloud 사진 섹션 헤더 */}
      <div className="absolute flex gap-[8px] items-center left-[50.5px] top-[508px]">
        <div className="bg-[#84ba99] flex items-start p-[5px] rounded-[10px] size-[32px]">
          <div className="size-[22px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame9} /></div>
        </div>
        <p className="font-extrabold text-[#1b4332] text-[14px] tracking-[-0.14px] whitespace-nowrap">Cloud 사진</p>
        <div className="bg-[#d8eedf] flex h-[18px] items-center justify-center px-[8px] rounded-full w-[70px]">
          <p className="font-bold text-[#1b4332] text-[10.5px] text-center whitespace-nowrap">1개 연결됨</p>
        </div>
      </div>

      {/* Cloud 사진 카드 */}
      <div className="absolute bg-white h-[172px] left-[33.5px] rounded-[20px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[490px] w-[335px]" />
      <div className="absolute left-[333.5px] size-[16px] top-[512px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} /></div>
      <div className="absolute bg-[#e4e7dd] h-px left-[49.5px] top-[550px] w-[303px]" />

      {/* iCloud 사진 항목 */}
      <div className="absolute left-[49.5px] size-[36px] top-[564px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} /></div>
      <p className="absolute font-bold left-[65.5px] text-[#3a55a3] text-[14px] top-[573.5px]">i</p>
      <p className="absolute font-bold left-[95.5px] text-[#1b4332] text-[13px] top-[564px] tracking-[-0.065px] whitespace-nowrap">iCloud 사진</p>
      <p className="absolute font-medium left-[95.5px] text-[#7c8a80] text-[11px] top-[582px] whitespace-nowrap">4,832장 분석 중</p>
      <div className="absolute bg-[#1b4332] h-[26px] left-[310.5px] rounded-full top-[568px] w-[44px]" />
      <div className="absolute bg-white left-[330.5px] rounded-full size-[22px] top-[570px]" />

      <div className="absolute bg-[#e4e7dd] h-px left-[49.5px] top-[610px] w-[303px]" />

      {/* 사진 계정 추가하기 */}
      <div className="absolute left-[49.5px] size-[14px] top-[632px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} /></div>
      <p className="absolute font-bold left-[73.5px] text-[#1b4332] text-[12.5px] top-[629px] tracking-[-0.0625px] whitespace-nowrap">사진 계정 추가하기</p>

      {/* Cloud 파일 섹션 헤더 (접힌 상태) */}
      <div className="absolute flex gap-[8px] items-center left-[50.5px] top-[688px]">
        <div className="bg-[#2d6a4f] flex items-start p-[5px] rounded-[10px] size-[32px]" />
        <p className="font-extrabold text-[#1b4332] text-[14px] tracking-[-0.14px] whitespace-nowrap">Cloud 파일</p>
        <div className="bg-[#d8eedf] flex h-[18px] items-center justify-center px-[8px] rounded-full w-[70px]">
          <p className="font-bold text-[#1b4332] text-[10.5px] text-center whitespace-nowrap">1개 연결됨</p>
        </div>
      </div>

      {/* Cloud 파일 카드 (접힌 상태) */}
      <div className="absolute bg-white h-[60px] left-[33.5px] rounded-[20px] shadow-[0px_8px_24px_0px_rgba(15,26,20,0.06)] top-[674px] w-[335px]" />
      <div className="absolute left-[333.5px] size-[16px] top-[696px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} /></div>

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

      {/* 하단 네비 (연결 활성) */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[122px] left-[13.5px] top-[720px] w-[375px]" />
      <div className="absolute bg-white h-[56px] left-[25.5px] rounded-[28px] shadow-[0px_16px_36px_0px_rgba(15,26,20,0.1)] top-[792px] w-[351px]" />
      <div className="absolute flex gap-[47px] items-center left-[49.5px] top-[802px]">
        {[
          { label: "홈", icon: imgFrame4, active: false },
          { label: "분석", icon: imgFrame5, active: false },
          { label: "정리", icon: imgFrame6, active: false },
          { label: "리워드", icon: imgFrame7, active: false },
          { label: "연결", icon: imgFrame8, active: true },
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
