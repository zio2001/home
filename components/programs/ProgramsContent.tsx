const programs = [
  {
    title: "생성형 AI 활용 교육",
    target: "공공기관 실무자, 기업 재직자, 교·강사",
    core: "ChatGPT/프롬프트 작성, 보고서·기획서 생산성 향상, 윤리·보안 가이드",
    effect: "업무시간 단축, 결과물 품질 향상, AI 도입에 대한 내부 확산",
  },
  {
    title: "스마트폰 디지털 활용 교육",
    target: "중장년 학습자, 디지털 취약계층, 평생교육 참여자",
    core: "모바일 필수앱 활용, 보안/피싱 예방, 일상·업무 연계 실습",
    effect: "디지털 자신감 향상, 생활 편의 확대, 정보격차 완화",
  },
  {
    title: "피그마/노션/콘텐츠 제작 교육",
    target: "교직원, 기획자, 사내 강사, 마케팅/홍보 담당",
    core: "Figma 시각화, Notion 협업 시스템, 카드뉴스·영상 기획 및 제작",
    effect: "협업 효율 개선, 콘텐츠 제작 역량 내재화, 브랜드 메시지 강화",
  },
  {
    title: "HR·문서·기획 역량 교육",
    target: "인사담당자, 팀장, 사무직 실무자",
    core: "인사 실무 흐름 이해, 보고서 구조화, 실행 가능한 기획안 작성법",
    effect: "내부 커뮤니케이션 개선, 문서 품질 표준화, 의사결정 속도 향상",
  },
  {
    title: "청소년 창의융합 교육",
    target: "중·고등학생, 진로체험 참여 청소년",
    core: "AI와 디지털 도구를 활용한 프로젝트형 수업, 문제해결/협업 활동",
    effect: "창의적 사고 촉진, 디지털 리터러시 강화, 진로 탐색 동기 부여",
  },
];

export default function ProgramsContent() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">대표 프로그램</h1>
      <p className="mt-3 text-slate-600">목적·대상·시간에 맞춰 커스터마이징 가능한 실무 중심 교육 과정입니다.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {programs.map((program) => (
          <article key={program.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{program.title}</h2>
            <p className="mt-3 text-sm text-slate-600"><span className="font-semibold text-slate-800">대상:</span> {program.target}</p>
            <p className="mt-2 text-sm text-slate-600"><span className="font-semibold text-slate-800">핵심 내용:</span> {program.core}</p>
            <p className="mt-2 text-sm text-slate-600"><span className="font-semibold text-slate-800">기대 효과:</span> {program.effect}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
