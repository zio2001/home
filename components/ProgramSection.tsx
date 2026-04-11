// 초보자 수정 가이드:
// 아래 programs 배열을 수정하면 강의 프로그램 카드가 자동 반영됩니다.
const programs = [
  {
    title: "생성형 AI 활용 교육",
    target: "대상: 교직원, 공공기관 실무자, 기업 팀 리더",
    core: "핵심 내용: ChatGPT·AI도구 실무 활용, 프롬프트 설계, 업무 자동화 아이디어",
    outcome: "기대 효과: 반복 업무 시간 단축, 보고·기획 품질 향상, 디지털 자신감 강화",
    field: "활용 분야: 행정업무, 교육 콘텐츠 제작, 조직 내 커뮤니케이션",
  },
  {
    title: "스마트폰 & 디지털 활용 교육",
    target: "대상: 성인학습자, 중장년층, 디지털 기초가 필요한 구성원",
    core: "핵심 내용: 스마트폰 기본 기능, 생활·업무 앱 활용, 디지털 보안 기초",
    outcome: "기대 효과: 디지털 접근성 향상, 실생활 활용도 증대, 정보 활용 역량 강화",
    field: "활용 분야: 평생교육, 주민 프로그램, 현장 실무 지원",
  },
  {
    title: "피그마·노션·콘텐츠 제작 교육",
    target: "대상: 교육기획자, 실무 담당자, 콘텐츠 제작 입문자",
    core: "핵심 내용: 협업 문서 구조화, 시각 자료 제작, 교육/홍보 콘텐츠 기획",
    outcome: "기대 효과: 협업 효율 증대, 전달력 높은 자료 제작, 업무 표준화",
    field: "활용 분야: 강의자료 제작, 프로젝트 협업, 기관 홍보",
  },
  {
    title: "HR·조직소통·문서작성·기획 역량 교육",
    target: "대상: 팀장급 리더, 관리자, 실무자",
    core: "핵심 내용: 조직 커뮤니케이션, 보고서/기획서 작성, 문제해결형 사고 훈련",
    outcome: "기대 효과: 조직 내 소통 개선, 문서 완성도 향상, 실행 중심 협업 강화",
    field: "활용 분야: 조직문화 개선, 리더십 교육, 직무 역량 강화",
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">강의 프로그램</h2>
      <p className="mt-3 text-base text-slate-600 sm:text-lg">기관 목적과 대상에 맞춘 맞춤형 구성으로 진행합니다.</p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {programs.map((program) => (
          <article key={program.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{program.title}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              <li>{program.target}</li>
              <li>{program.core}</li>
              <li>{program.outcome}</li>
              <li>{program.field}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
