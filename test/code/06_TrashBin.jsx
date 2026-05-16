// 09 · 휴지통 — 상단
// Figma 노드 ID: 4126:189
// Figma 링크: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0/?node-id=4126-189
//
// 주의: 이미지 URL(figma.com/api/mcp/asset/...)은 7일 후 만료됩니다.

const imgFrame = "https://www.figma.com/api/mcp/asset/2c05c6d1-5f01-4130-9773-e687f24d996d";
const imgEllipse = "https://www.figma.com/api/mcp/asset/3c621ed2-dc64-4ff9-8dff-d03bbdb0b478";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/44ade96e-806f-47db-8447-f6bb12a5bcbd";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/6950dbcf-1bb4-40d9-9fdc-407887a0a071";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/d5a262bb-dc85-4f8f-b3b3-1026b44c4d85";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/afe269df-36a2-4ddc-b167-1751720806d8";
const imgFrame3 = "https://www.figma.com/api/mcp/asset/978d02db-b79d-4659-86c3-bb3971ab7c21";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/9dd3510a-08a2-4d6b-92cf-915e261fa0e1";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/e843295c-707b-4920-a944-1af876d62aa2";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/81e1d114-95b1-44f3-b5b8-8da11248525f";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/7e28bf9a-6dce-454c-9a9d-355c8ed85013";
const imgWifi = "https://www.figma.com/api/mcp/asset/4fa9f11b-e996-4a13-8519-dd993e7155a4";
const imgBattery = "https://www.figma.com/api/mcp/asset/7e80fc27-8936-4c45-ad69-bdc5b16a46a5";

export default function TrashBin() {
  return (
    <div className="bg-[#f8f9f4] overflow-clip relative rounded-[48px] shadow-[0px_40px_80px_0px_rgba(15,26,20,0.18)] size-full">
      {/* 상단바: 뒤로가기 + 타이틀 */}
      <p className="absolute font-bold left-[33px] text-[#1b4332] text-[24px] top-[75px] whitespace-nowrap">←</p>
      <p className="absolute font-bold left-1/2 -translate-x-1/2 text-[#1b4332] text-[17px] text-center top-[80px]">휴지통</p>

      {/* 다크그린 메인 카드: 89개 항목 + 휴지통 일러스트 */}
      <div
        className="absolute bg-gradient-to-r from-[#2d6a4f] to-[#143028] h-[168px] left-[33px] rounded-[28px] shadow-[0px_18px_40px_0px_rgba(20,48,2,0.3)] top-[130px] w-[336px]"
      />
      <div className="absolute left-[240px] size-[120px] top-[158px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
      </div>
      <p className="absolute font-medium left-[63px] text-[#b7e4c7] text-[11px] top-[155px] tracking-[1px] whitespace-nowrap">보관 중</p>
      <p className="absolute font-extrabold left-[53px] text-[56px] text-white top-[174px] tracking-[-1.68px] whitespace-nowrap">89</p>
      <p className="absolute font-bold left-[130px] text-[#b7e4c7] text-[16px] top-[210px] whitespace-nowrap">개 항목</p>
      <p className="absolute font-semibold left-[53px] text-[#fcbf5e] text-[12px] top-[250px] whitespace-nowrap">✨ 영구삭제 시 -1.2kg CO₂ </p>

      {/* AI 안내 박스 */}
      <div className="absolute bg-[rgba(216,243,220,0.52)] border border-[#95d5b2] border-dashed h-[70px] left-[33px] rounded-[27px] shadow-[0px_4px_11.4px_0px_rgba(0,0,0,0.1)] top-[322px] w-[336px]" />
      <div className="absolute left-[49px] size-[38px] top-[338px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
      <div className="absolute left-[58px] size-[20px] top-[347px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} /></div>
      <div className="absolute left-[94.5px] size-[12px] top-[339px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame5} /></div>
      <p className="absolute font-bold left-[108px] text-[#1b4332] text-[13px] top-[338px] whitespace-nowrap">AI가 친환경 시간에 자동 영구삭제해요</p>
      <p className="absolute font-medium left-[100px] text-[#2d6a4f] text-[11px] top-[358px] tracking-[-0.44px] whitespace-nowrap">재생에너지 비중 높은 새벽 02:00 실행 · 탄소 60% 절감</p>

      {/* 섹션 헤더 */}
      <p className="absolute font-bold left-[33px] text-[#7c8a80] text-[12px] top-[416px] tracking-[0.96px] whitespace-nowrap">보관 중인 항목</p>
      <p className="absolute font-semibold left-[295px] text-[#1b4332] text-[11px] top-[416px] whitespace-nowrap">삭제 임박순 ↓</p>

      {/* 항목 카드 1: 쿠팡 광고 메일 (오렌지 - 임박) */}
      <div className="absolute bg-white h-[88px] left-[33px] rounded-[18px] shadow-[0px_6px_12px_0px_rgba(15,26,20,0.06)] top-[442px] w-[336px]" />
      <div className="absolute left-[49px] size-[40px] top-[462px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>
      <div className="absolute left-[59px] size-[20px] top-[472px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} /></div>
      <p className="absolute font-bold left-[100px] text-[#1b4332] text-[13px] top-[461px] whitespace-nowrap">쿠팡 광고 메일 234개</p>
      <p className="absolute font-semibold left-[100px] text-[#a85a1f] text-[11px] top-[481px] whitespace-nowrap">🕐 2일 후 자동 영구삭제</p>
      <p className="absolute font-medium left-[100px] text-[#7c8a80] text-[10px] top-[499px] whitespace-nowrap">12.4 MB · 새벽 02:00 예정</p>
      <div className="absolute bg-[#fff5eb] border border-[#f4a261] h-[28px] left-[287px] rounded-[14px] top-[480px] w-[70px]" />
      <p className="absolute font-bold left-[287px] text-[#a85a1f] text-[10px] text-center top-[488px] w-[70px]">지금 삭제</p>

      {/* 항목 카드 2: 흔들린 사진 (그린) */}
      <div className="absolute bg-white h-[88px] left-[33px] rounded-[18px] shadow-[0px_6px_12px_0px_rgba(15,26,20,0.06)] top-[542px] w-[336px]" />
      <div className="absolute left-[49px] size-[40px] top-[562px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
      <div className="absolute left-[59px] size-[20px] top-[572px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} /></div>
      <p className="absolute font-bold left-[100px] text-[#1b4332] text-[13px] top-[561px] whitespace-nowrap">흔들린 사진 482장</p>
      <p className="absolute font-semibold left-[100px] text-[#2d6a4f] text-[11px] top-[581px] whitespace-nowrap">🌿 12일 후 친환경 시간에 삭제</p>
      <p className="absolute font-medium left-[100px] text-[#7c8a80] text-[10px] top-[599px] whitespace-nowrap">248 MB · 새벽 02:00 예정</p>
      <div className="absolute bg-[#f0f7f1] border border-[#95d5b2] h-[28px] left-[287px] rounded-[14px] top-[580px] w-[70px]" />
      <p className="absolute font-bold left-[287px] text-[#2d6a4f] text-[10px] text-center top-[588px] w-[70px]">지금 삭제</p>

      {/* 항목 카드 3: 옛 다운로드 파일 (블루) */}
      <div className="absolute bg-white h-[88px] left-[33px] rounded-[18px] shadow-[0px_6px_12px_0px_rgba(15,26,20,0.06)] top-[642px] w-[336px]" />
      <div className="absolute left-[49px] size-[40px] top-[662px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} /></div>
      <div className="absolute left-[59px] size-[20px] top-[672px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} /></div>
      <p className="absolute font-bold left-[100px] text-[#1b4332] text-[13px] top-[661px] whitespace-nowrap">옛 다운로드 파일 67개</p>
      <p className="absolute font-semibold left-[100px] text-[#3a55a3] text-[11px] top-[681px] whitespace-nowrap">🌿 28일 후 친환경 시간에 삭제</p>
      <p className="absolute font-medium left-[100px] text-[#7c8a80] text-[10px] top-[699px] whitespace-nowrap">892 MB · 새벽 02:00 예정</p>
      <div className="absolute bg-[#eef1ff] border border-[#a8b5e0] h-[28px] left-[287px] rounded-[14px] top-[680px] w-[70px]" />
      <p className="absolute font-bold left-[287px] text-[#3a55a3] text-[10px] text-center top-[688px] w-[70px]">지금 삭제</p>

      {/* 하단 페이드 + 영구삭제 버튼 */}
      <div className="absolute bg-gradient-to-b from-[rgba(248,249,244,0)] via-[rgba(248,249,244,0.9)] to-[#f8f9f4] h-[124px] left-0 top-[750px] w-[402px]" />
      <div className="absolute bg-[#f4a261] h-[56px] left-[33px] rounded-[28px] shadow-[0px_14px_30px_0px_rgba(244,162,97,0.4)] top-[786px] w-[336px]" />
      <p className="absolute font-bold left-[33px] text-[14px] text-center text-white top-[806px] w-[336px]">⚡  지금 모두 영구삭제 (저장공간 즉시 확보)</p>

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
    </div>
  );
}
