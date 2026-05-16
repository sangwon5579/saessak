// 05 · Rewards — 상단 — V3 (리워드 마켓)
// Figma 노드 ID: 4177:222
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4177-222
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.
//      이 화면은 복잡한 카드들이 많아 raw 코드 그대로 저장됩니다.
//      개발자가 컴포넌트 분리해서 사용하길 권장합니다.

const imgVector = "https://www.figma.com/api/mcp/asset/0b39b946-f666-48e5-815f-f0feb57096a4";
const imgImage18 = "https://www.figma.com/api/mcp/asset/7fc17716-2172-4e44-bc27-009f055dd239";
const imgImage9 = "https://www.figma.com/api/mcp/asset/3dd6af73-cbb2-4087-a274-d1994a1f9596";
const imgImage7 = "https://www.figma.com/api/mcp/asset/9f1272af-a009-4d7d-9a20-a8e178d46d1f";
const imgGroup20 = "https://www.figma.com/api/mcp/asset/47f24c8a-ec29-4b54-8d00-255e9bf11f8f";
const imgMdiInformationOutline = "https://www.figma.com/api/mcp/asset/d11764d5-fac0-4924-a0fe-a6af1ca85d66";
const imgGroup26 = "https://www.figma.com/api/mcp/asset/078f21f2-ee64-4013-9731-2119bc9a0a04";
const imgGroup15 = "https://www.figma.com/api/mcp/asset/b2932f33-d022-4bf3-8cb0-228fb43bfb75";
const imgEllipse = "https://www.figma.com/api/mcp/asset/895e2b76-4256-4afd-a299-8e67c9a7bad0";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/1bac6c06-30d2-45a3-8cf2-86d208c204a3";
const imgWifi = "https://www.figma.com/api/mcp/asset/475f7fc8-d7a6-4e21-b89d-1002f617290c";
const imgBattery = "https://www.figma.com/api/mcp/asset/d7ccebf7-fcf6-46e5-8483-4f3e162513a1";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/3a0144a9-bf53-4ce6-bbc2-692ac2555df4";
const imgVector1 = "https://www.figma.com/api/mcp/asset/27b20898-c895-438f-9328-d33b7a8ec507";
const imgFrame = "https://www.figma.com/api/mcp/asset/33c235c9-1f5d-42ee-93d4-6e93d6f9ea2a";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/81237bf9-4eb7-4888-88d2-34b6918e4706";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/3e892120-bcc7-4d9b-8612-47c26baf2207";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/cddd993d-1f33-40bd-bc77-dffd2dd62a6e";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/5d9e9b84-7bd3-4058-a198-d2cafc48f3f0";

export default function RewardsMarket() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      <p className="absolute font-bold left-[33px] text-[#1b3a25] text-[26px] top-[70px] whitespace-nowrap">리워드 마켓</p>
      <p className="absolute font-medium left-[33px] text-[#5d6b62] text-[12px] top-[104px] whitespace-nowrap">모은 새싹을 쿠폰으로 바꿔보세요</p>

      {/* 새싹 통장 히어로 카드 (그린 그라데이션) */}
      <div className="absolute h-[220px] left-[33px] overflow-clip rounded-[24px] shadow-[0px_16px_32px_0px_rgba(33,115,51,0.25)] top-[136px] w-[336px]" style={{ backgroundImage: "linear-gradient(147deg, rgb(46,166,71) 0%, rgb(27,94,46) 71%)" }}>
        <div className="absolute bg-[rgba(255,255,255,0.1)] border-[0.4px] border-[rgba(255,255,255,0.49)] flex h-[127px] items-start left-[217px] py-[16px] px-[17px] rounded-[25px] top-[13px] w-[100px]">
          <div className="h-[72.41px] w-[66px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup20} /></div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.18)] flex h-[20px] items-center justify-center left-[226px] px-[13px] rounded-full top-[112px] w-[81px]">
          <p className="font-medium text-[9px] text-center text-white">어린잎</p>
        </div>
        <p className="absolute font-medium left-[22px] text-[11px] text-[rgba(255,255,255,0.85)] top-[26px]">내 새싹 잔액</p>
        <p className="absolute font-extrabold left-[22px] text-[44px] text-white tracking-[-1px] top-[60px]">2,340</p>
        <p className="absolute font-bold left-[165px] text-[16px] text-[rgba(255,255,255,0.95)] top-[97px]">새싹</p>

        {/* 다음 단계 진행률 박스 */}
        <div className="absolute bg-[rgba(255,255,255,0.12)] flex flex-col gap-[10px] h-[52px] items-start left-[20px] py-[10px] px-[14px] rounded-[14px] top-[150px] w-[296px]">
          <div className="h-[14px] w-[268px] relative">
            <div className="flex gap-[2px] items-center">
              <p className="font-normal text-[11px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">다음 단계 · 잎무성</p>
              <div className="size-[8px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMdiInformationOutline} /></div>
            </div>
            <p className="absolute font-bold h-[14px] right-0 text-[11px] text-right text-white top-0">660 새싹 남음</p>
          </div>
          <div className="inline-grid place-items-start">
            <div className="bg-[rgba(255,255,255,0.2)] col-start-1 row-start-1 h-[6px] rounded-full w-[268px]" />
            <div className="bg-gradient-to-r col-start-1 row-start-1 from-[#b8e6c5] h-[6px] rounded-full to-white w-[209px]" />
          </div>
        </div>
      </div>

      {/* 내 쿠폰함 빠른 진입 카드 */}
      <div className="absolute bg-white border border-[rgba(46,166,71,0.1)] h-[70px] left-[33px] overflow-clip rounded-[18px] shadow-[0px_4px_12px_0px_rgba(15,26,20,0.06)] top-[372px] w-[336px]">
        <p className="absolute font-bold left-[69px] text-[#1b3a25] text-[14px] top-[18px] whitespace-nowrap">내 쿠폰함</p>
        <p className="absolute font-normal left-[69px] text-[#5d6b62] text-[11px] top-[38px]">받은 쿠폰 3장  · 지금 확인하기</p>
        <p className="absolute font-medium left-[305px] text-[18px] text-black top-[33px]">›</p>
        <div className="absolute left-[20px] size-[30px] top-[18px]"><img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage18} /></div>
      </div>

      {/* 섹션 헤더: 교환 가능 리워드 14개 */}
      <div className="absolute flex gap-[7px] items-center left-[33px] top-[466px]">
        <p className="font-bold text-[#1b3a25] text-[17px] whitespace-nowrap">교환 가능 리워드</p>
        <div className="bg-[rgba(46,166,71,0.08)] flex h-[20px] items-center justify-center px-[8px] rounded-full w-[43px]">
          <p className="font-bold text-[#2ea647] text-[11px] text-center">14개</p>
        </div>
      </div>
      <p className="absolute font-medium left-[330px] text-[#5d6b62] text-[12px] top-[468px]">전체</p>
      <p className="absolute font-medium left-[359px] text-[#5d6b62] text-[18px] top-[463px]">›</p>

      {/* 카테고리 필터 (전체/식음료/뷰티/쇼핑/교통/기부) */}
      <div className="absolute flex gap-[13px] items-center left-[33px] top-[500px] w-[336px] overflow-x-auto">
        {[
          { label: "전체", active: true, w: 59 },
          { label: "식음료", active: false, w: 68 },
          { label: "뷰티", active: false, w: 51 },
          { label: "쇼핑", active: false, w: 51 },
          { label: "교통", active: false, w: 51 },
          { label: "기부", active: false, w: 51 },
        ].map((cat) => (
          <div
            key={cat.label}
            className={`${cat.active ? "bg-[#1b4332]" : "bg-white"} flex h-[32px] items-center justify-center px-[14px] rounded-full shadow-[0px_4px_6px_0px_rgba(15,26,20,0.05)]`}
            style={{ width: `${cat.w}px`, flexShrink: 0 }}
          >
            <p className={`font-semibold text-[12px] whitespace-nowrap ${cat.active ? "text-white" : "text-[#3b4a40]"}`}>{cat.label}</p>
          </div>
        ))}
      </div>

      {/* 인기 #1 추천 카드 */}
      <div className="absolute bg-white border border-[rgba(46,166,71,0.08)] h-[140px] left-[33px] overflow-clip rounded-[20px] shadow-[0px_6px_16px_0px_rgba(33,115,51,0.08)] top-[556px] w-[336px]">
        <div className="absolute bg-gradient-to-r from-[#ff6b3d] h-[22px] left-[-1px] to-[#ff8f5a] top-[13px] w-[80px]" />
        <p className="absolute font-bold left-[13px] text-[9px] text-white top-[18px] tracking-[0.5px] whitespace-nowrap">⚡ 인기 #1</p>

        <div className="absolute left-[19px] rounded-[16px] size-[72px] top-[45px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255,242,227) 0%, rgb(255,224,194) 71%)" }} />
        <div className="absolute h-[22.5px] left-[40px] top-[70px] w-[30px]"><img alt="" className="block max-w-none size-full" src={imgGroup26} /></div>

        <p className="absolute font-medium left-[103px] text-[#808c94] text-[10px] top-[49px] tracking-[0.5px] whitespace-nowrap">MORNING COFFEE</p>
        <p className="absolute font-bold left-[103px] text-[#1b3a25] text-[15px] top-[63px] whitespace-nowrap">아메리카노 Tall</p>
        <div className="absolute flex gap-[5px] items-center left-[103px] top-[89px] whitespace-nowrap">
          <p className="text-[13px]">🌱</p>
          <p className="font-extrabold text-[#2ea647] text-[16px]">1,500</p>
          <p className="font-normal text-[#808c94] text-[10px]">새싹 </p>
        </div>

        <div className="absolute bg-[#2ea647] flex h-[40px] items-center justify-center left-[233px] rounded-[32px] shadow-[0px_4px_5px_0px_rgba(46,166,71,0.25)] top-[63px] w-[82px]">
          <p className="font-bold text-[12px] text-center text-white whitespace-nowrap">교환하기</p>
        </div>
      </div>

      {/* 그리드 상품 카드 2개 (환경단체 기부 + 올리브영) */}
      <div className="absolute flex gap-[15px] items-center left-1/2 -translate-x-1/2 top-[710px] w-[335.5px]">
        {/* 환경단체 기부 카드 */}
        <div className="bg-white flex h-[208px] items-start pb-[12px] rounded-[22px] shadow-[0px_8px_12px_0px_rgba(15,26,20,0.06)] w-[160px]">
          <div className="flex flex-col gap-[8px] items-center w-[160px]">
            <div className="relative h-[96px] w-full">
              <div className="absolute flex h-[96px] items-center justify-center left-0 px-[59px] rounded-tl-[22px] rounded-tr-[22px] top-0 w-[160px]" style={{ backgroundImage: "linear-gradient(149deg, rgb(214,216,232) 15%, rgb(255,232,130) 85%)" }}>
                <div className="h-[77px] w-[116px]"><img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage9} /></div>
              </div>
              <div className="absolute bg-white flex h-[18px] items-center justify-center left-[15px] px-[8px] rounded-full top-[10px] w-[35px]">
                <p className="font-bold text-[#1b4332] text-[10px] whitespace-nowrap">기부</p>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-start w-[136px]">
              <div className="flex flex-col gap-[9px] items-start w-full">
                <p className="font-bold text-[#1b4332] text-[12.5px] tracking-[-0.0625px]">환경단체 기부</p>
                <div className="flex gap-[5px] items-center whitespace-nowrap">
                  <p className="text-[13px]">🌱</p>
                  <p className="font-extrabold text-[#2ea647] text-[16px]">1,500</p>
                  <p className="font-normal text-[#808c94] text-[10px]">새싹 </p>
                </div>
              </div>
              <div className="flex h-[34px] items-center justify-center rounded-full shadow-[0px_4px_5px_0px_rgba(27,67,50,0.25)] w-full" style={{ backgroundImage: "linear-gradient(166deg, rgb(27,67,50) 15%, rgb(20,48,40) 85%)" }}>
                <p className="font-bold text-[12px] text-white whitespace-nowrap">교환하기</p>
              </div>
            </div>
          </div>
        </div>

        {/* 올리브영 카드 */}
        <div className="bg-white flex h-[208px] items-start pb-[12px] rounded-[22px] shadow-[0px_8px_12px_0px_rgba(15,26,20,0.06)] w-[160px]">
          <div className="flex flex-col gap-[8px] items-center w-[160px]">
            <div className="relative h-[96px] w-full">
              <div className="absolute flex h-[96px] items-center justify-center left-0 px-[59px] rounded-tl-[22px] rounded-tr-[22px] top-0 w-[160px]" style={{ backgroundImage: "linear-gradient(149deg, rgb(227,232,203) 15%, rgb(116,198,157) 85%)" }}>
                <div className="h-[20px] w-[107px] overflow-hidden relative">
                  <img alt="" className="absolute h-[535.71%] left-0 max-w-none top-[-215%] w-full" src={imgImage7} />
                </div>
              </div>
              <div className="absolute bg-white flex h-[18px] items-center justify-center left-[14px] px-[8px] rounded-full top-[10px] w-[35px]">
                <p className="font-bold text-[#1b4332] text-[10px] text-center">쇼핑</p>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-start w-[136px]">
              <div className="flex flex-col gap-[9px] items-start whitespace-nowrap">
                <p className="font-bold text-[#1b4332] text-[12.5px] tracking-[-0.0625px]">올리브영 2만 원권</p>
                <div className="flex gap-[5px] items-center">
                  <p className="text-[13px]">🌱</p>
                  <p className="font-extrabold text-[#2ea647] text-[16px]">1,500</p>
                  <p className="font-normal text-[#808c94] text-[10px]">새싹 </p>
                </div>
              </div>
              <div className="flex h-[34px] items-center justify-center rounded-full shadow-[0px_4px_5px_0px_rgba(27,67,50,0.25)] w-full" style={{ backgroundImage: "linear-gradient(166deg, rgb(27,67,50) 15%, rgb(20,48,40) 85%)" }}>
                <p className="font-bold text-[12px] text-white whitespace-nowrap">교환하기</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 우상단 아이콘 (검색 + 알림) */}
      <div className="absolute left-[277px] size-[36px] top-[65px]"><img alt="" className="block max-w-none size-full" src={imgEllipse1} /></div>
      <div className="absolute inset-[8.47%_24.03%_89.31%_71.14%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} /></div>
      <div className="absolute left-[329px] size-[36px] top-[65px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup15} /></div>
      <div className="absolute left-[353px] size-[16px] top-[64px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
      <p className="absolute font-bold left-[353px] text-[8px] text-center text-white top-[67px] w-[16px]">3</p>
      <div className="absolute flex items-center justify-center left-[335px] px-[3px] py-[2px] top-[71px]">
        <div className="h-[20.002px] w-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} /></div>
      </div>

      {/* Status Bar */}
      <div className="absolute right-0 top-0">
        <div className="absolute bg-black h-[34px] left-[174.5px] rounded-[24px] top-[11px] w-[120px]" />
        <div className="flex flex-col h-[54px] items-start pt-[21px] w-[375px] left-[27px] relative">
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

      {/* 하단 네비 (리워드 활성) */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[122px] left-[17px] top-[778px] w-[375px]" />
      <div className="absolute bg-white h-[56px] left-[25px] rounded-[28px] shadow-[0px_16px_36px_0px_rgba(15,26,20,0.1)] top-[793px] w-[351px]" />
      <div className="absolute flex gap-[47px] items-center left-[49px] top-[803px]">
        {[
          { label: "홈", icon: imgFrame, active: false },
          { label: "분석", icon: imgFrame1, active: false },
          { label: "정리", icon: imgFrame2, active: false },
          { label: "리워드", icon: imgFrame3, active: true },
          { label: "연결", icon: imgFrame4, active: false },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-[4px] items-center w-[22px]">
            <div className="size-[22px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={item.icon} /></div>
            <p className={`font-bold text-[10px] text-center ${item.active ? "text-[#1b4332]" : "text-[#9aa89f]"}`}>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="absolute bg-[rgba(15,26,20,0.25)] h-[5px] left-[131px] rounded-full top-[864px] w-[139px]" />
    </div>
  );
}
