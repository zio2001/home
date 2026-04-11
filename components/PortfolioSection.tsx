// 초보자 수정 가이드:
// portfolioItems 배열에 객체를 추가하면 포트폴리오 카드가 늘어납니다.
const portfolioItems = [
  {
    organization: "A시 평생학습관",
    program: "중장년 디지털 역량 강화 과정",
    audience: "중장년 학습자 40명",
    topic: "스마트폰 활용, 디지털 생활 문해력",
  },
  {
    organization: "B공공기관 인재개발원",
    program: "생성형 AI 행정 실무 워크숍",
    audience: "행정·기획 담당자",
    topic: "AI 기반 문서작성, 보고자료 고도화",
  },
  {
    organization: "C기업 HRD센터",
    program: "조직 커뮤니케이션 & 기획 역량 교육",
    audience: "팀장 및 실무 리더",
    topic: "협업 소통, 문제해결형 보고서 작성",
  },
  {
    organization: "D교육지원청",
    program: "교원을 위한 AI·콘텐츠 제작 연수",
    audience: "교원 및 교육전문직",
    topic: "수업자료 설계, 피그마·노션 활용",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">포트폴리오</h2>
      <p className="mt-3 text-base text-slate-600 sm:text-lg">진행 강의와 프로젝트 사례를 목적 중심으로 정리했습니다.</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 divide-y divide-slate-200">
          {portfolioItems.map((item) => (
            <article key={`${item.organization}-${item.program}`} className="p-6">
              <p className="text-sm font-semibold text-teal-700">{item.organization}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.program}</h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">대상: {item.audience}</p>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">주제: {item.topic}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
