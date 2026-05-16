// 05 · Rewards — 상단 — V3 (교환 상세)
// Figma 노드 ID: 4185:222
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4185-222
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.

const imgEllipse = "https://www.figma.com/api/mcp/asset/f39c48d1-e35b-4ef2-832e-0967a0c3fbae";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/526da044-0b6e-475f-8a05-39e9d75b01ea";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/9869adf2-f4e4-446e-aa7a-e78eec8a4c97";
const imgGroup26 = "https://www.figma.com/api/mcp/asset/f4873f67-0d72-4a0b-8134-31347bc8f2a7";
const imgGroup20 = "https://www.figma.com/api/mcp/asset/dfa1b851-2c7e-4f63-a7e7-12e8f426a678";
const imgGroup25 = "https://www.figma.com/api/mcp/asset/910170a5-61c1-4efa-9c4a-815bccdd1828";
const imgFrame = "https://www.figma.com/api/mcp/asset/a88f39db-4104-44c5-94b0-7bc9583f8985";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/4089bdf8-2e48-456f-88bf-da406c2c2f8d";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/f5e23803-4838-47fb-b859-9efb01536e3a";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/788be71d-b521-4e60-98f9-c0cc70112aa0";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/0ada35d8-ae5f-4ec8-baf7-b2a7251afad4";

export default function RewardsDetail() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      {/* Status Bar */}
      <div className="absolute h-[54px] left-0 overflow-clip top-0 w-[402px]">
        <div className="absolute bg-black h-[34px] left-[141px] rounded-[24px] top-[11px] w-[120px]" />
        <p className="absolute font-semibold left-[33px] text-[17px] text-black top-[21px]">9:41</p>
      </div>

      {/* 상단 타이틀바: 뒤로가기 + 타이틀 */}
      <p className="absolute font-bold left-[33px] text-[#1b4332] text-[24px] top-[75px] whitespace-nowrap">←</p>
      <p className="absolute font-bold h-[24px] left-[0] text-[#1b3a25] text-[15px] text-center top-[78px] w-[402px]">새싹으로 교환하기</p>

      {/* 히어로 상품 카드 (그린 그라데이션 + 커피컵 일러스트) */}
      <div className="absolute h-[210px] left-[33px] overflow-clip rounded-[24px] shadow-[0px_16px_32px_0px_rgba(33,115,51,0.25)] top-[122px] w-[336px]" style={{ backgroundImage: "linear-gradient(148deg, rgb(46,166,71) 0%, rgb(20,87,35) 71%)" }}>
        <div className="absolute left-[156px] size-[240px] top-[-60px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
        <div className="absolute left-[-40px] size-[180px] top-[110px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>

        {/* MORNING COFFEE 태그 */}
        <div className="absolute bg-[rgba(255,255,255,0.95)] h-[26px] left-[22px] rounded-full top-[22px] w-[140px]" />
        <p className="absolute font-bold left-[22px] text-[#1b3a25] text-[10px] text-center top-[30px] tracking-[0.6px] w-[140px]">MORNING COFFEE</p>

        {/* 재고 충분 뱃지 */}
        <div className="absolute bg-[rgba(255,255,255,0.15)] h-[26px] left-[222px] rounded-full top-[22px] w-[92px]" />
        <div className="absolute flex gap-[6px] items-center left-[242px] top-[29px]">
          <div className="size-[6px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
          <p className="font-medium text-[10px] text-white whitespace-nowrap">재고 충분</p>
        </div>

        {/* 상품명 */}
        <p className="absolute font-extrabold left-[22px] text-[28px] text-white top-[100px] tracking-[-0.5px] whitespace-nowrap">Americano Tall</p>
        <p className="absolute font-medium left-[22px] text-[12px] text-[rgba(255,255,255,0.9)] top-[138px] whitespace-nowrap">모닝커피 디지털 쿠폰 · Tall 사이즈</p>

        {/* 커피컵 일러스트 */}
        <div className="absolute left-[226px] overflow-clip size-[110px] top-[90px]">
          <div className="absolute h-[54px] left-[13px] top-[38px] w-[72px]"><img alt="" className="block max-w-none size-full" src={imgGroup26} /></div>
        </div>
      </div>

      {/* 교환 시각화 섹션 (현재 → 교환 후 + 차감) */}
      <div className="absolute bg-white h-[190px] left-[33px] overflow-clip rounded-[20px] shadow-[0px_4px_12px_0px_rgba(15,26,20,0.05)] top-[350px] w-[336px]">
        <div className="absolute bg-[#2ea647] h-[14px] left-[18px] rounded-[2px] top-[18px] w-[3px]" />
        <p className="absolute font-bold left-[28px] text-[#1b3a25] text-[13px] top-[18px] whitespace-nowrap">교환 후 내 새싹</p>

        {/* 현재 카드 (어린잎 2,340) */}
        <div className="absolute bg-[#f3f9f3] border-[#e0eee3] border-[1.5px] flex flex-col h-[90px] items-start left-[23px] py-[7px] rounded-[14px] top-[50px] w-[120px]">
          <div className="flex flex-col gap-[3px] items-center w-full">
            <p className="font-bold text-[#808c94] text-[9px] text-center tracking-[0.4px]">현재</p>
            <div className="h-[24.187px] w-[26.808px]"><img alt="" className="block max-w-none size-full" src={imgGroup20} /></div>
            <p className="font-bold text-[#1b3a25] text-[9px] text-center">어린잎</p>
            <p className="font-extrabold text-[#2ea647] text-[13px] text-center">🌱 2,340</p>
          </div>
        </div>

        {/* 화살표 */}
        <p className="absolute font-medium h-[22px] left-[168px] text-[#1b4332] text-[20px] text-center top-[86px] w-[20px]">→</p>

        {/* 교환 후 카드 (새싹 840) */}
        <div className="absolute bg-[#fffaf2] border border-[#ffb84a] border-dashed h-[90px] left-[193px] rounded-[14px] top-[50px] w-[120px]" />
        <div className="absolute flex flex-col items-start left-[178px] top-[57px] w-[145px]">
          <div className="flex flex-col gap-[6px] items-start w-full">
            <p className="font-bold text-[#808c94] text-[9px] text-center tracking-[0.4px] w-full">교환 후</p>
            <div className="flex flex-col gap-[2px] items-center w-full">
              <div className="h-[24.522px] w-[8px]"><img alt="" className="block max-w-none size-full" src={imgGroup25} /></div>
              <p className="font-bold text-[#b8842c] text-[9px] text-center">새싹</p>
            </div>
          </div>
          <p className="font-extrabold text-[#b8842c] text-[13px] text-center w-full">🌱 840</p>
        </div>

        {/* 차감 새싹 띠 */}
        <div className="absolute bg-[#fff5e9] h-[28px] left-[18px] rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] top-[152px] w-[300px]" />
        <p className="absolute font-medium left-[50px] text-[#5d6b62] text-[11px] top-[159px] whitespace-nowrap">차감되는 새싹</p>
        <p className="absolute font-extrabold h-[14px] left-[202px] text-[#d97706] text-[12px] text-right top-[158px] w-[84px]">- 1,500 새싹</p>
      </div>

      {/* 안내 카드 1: 발급 즉시 사용 가능 */}
      <div className="absolute bg-white border border-[rgba(15,26,20,0.04)] h-[54px] left-[33px] rounded-[14px] top-[558px] w-[336px]" />
      <div className="absolute bg-[#f0f6f1] left-[45px] rounded-[8px] size-[28px] top-[571px]" />
      <p className="absolute font-normal h-[16px] left-[45px] text-[14px] text-black text-center top-[578px] w-[28px]">⚡</p>
      <p className="absolute font-bold left-[83px] text-[#1b3a25] text-[12px] top-[571px] whitespace-nowrap">발급 즉시 사용 가능</p>
      <p className="absolute font-normal left-[83px] text-[#5d6b62] text-[11px] top-[588px] whitespace-nowrap">모닝커피 앱에서 바로 쓸 수 있어요</p>

      {/* 안내 카드 2: 유효기간 60일 */}
      <div className="absolute bg-white border border-[rgba(15,26,20,0.04)] h-[54px] left-[33px] rounded-[14px] top-[622px] w-[336px]" />
      <div className="absolute bg-[#f0f6f1] left-[45px] rounded-[8px] size-[28px] top-[635px]" />
      <p className="absolute font-normal h-[16px] left-[45px] text-[14px] text-black text-center top-[642px] w-[28px]">📅</p>
      <p className="absolute font-bold left-[83px] text-[#1b3a25] text-[12px] top-[635px] whitespace-nowrap">유효기간 60일</p>
      <p className="absolute font-normal left-[83px] text-[#5d6b62] text-[11px] top-[652px] whitespace-nowrap">발급일로부터 60일 이내 사용</p>

      {/* CTA 버튼 (좌우 분할: 비용 + 액션) */}
      <div className="absolute h-[62px] left-[33px] rounded-[31px] shadow-[0px_12px_28px_0px_rgba(46,166,71,0.4)] top-[708px] w-[336px]" style={{ backgroundImage: "linear-gradient(170deg, rgb(46,166,71) 0%, rgb(27,107,48) 71%)" }} />
      <p className="absolute font-medium left-[53px] text-[10px] text-[rgba(255,255,255,0.85)] top-[720px] tracking-[0.4px] whitespace-nowrap">교환 비용</p>
      <p className="absolute font-extrabold left-[53px] text-[16px] text-white top-[736px] whitespace-nowrap">🌱 1,500 새싹</p>
      <div className="absolute bg-[rgba(255,255,255,0.18)] h-[32px] left-[235px] rounded-full top-[723px] w-[114px]" />
      <p className="absolute font-bold h-[14px] left-[235px] text-[13px] text-center text-white top-[732px] w-[114px]">교환하기 →</p>

      {/* 하단 네비 (연결 활성) */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[122px] left-[13.5px] top-[720px] w-[375px]" />
      <div className="absolute bg-white h-[56px] left-[25.5px] rounded-[28px] shadow-[0px_16px_36px_0px_rgba(15,26,20,0.1)] top-[792px] w-[351px]" />
      <div className="absolute flex gap-[47px] items-center left-[49.5px] top-[802px]">
        {[
          { label: "홈", icon: imgFrame, active: false },
          { label: "분석", icon: imgFrame1, active: false },
          { label: "정리", icon: imgFrame2, active: false },
          { label: "리워드", icon: imgFrame3, active: false },
          { label: "연결", icon: imgFrame4, active: true },
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
