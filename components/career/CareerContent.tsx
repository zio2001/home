const stats = [
  { label: "강의/특강/워크숍", value: "200+" },
  { label: "교육 협력 기관", value: "80+" },
  { label: "개발·운영 프로그램", value: "50+" },
  { label: "만족도 평균", value: "4.8/5" },
];

const sections = [
  {
    title: "강의 경력",
    items: [
      "공공기관 디지털 전환 및 생성형 AI 실무 교육 다수 진행",
      "대학교/평생교육원 디지털 활용·콘텐츠 제작 과정 운영",
      "기업 임직원 대상 HR·문서·기획·협업툴 실습형 교육 진행",
    ],
  },
  {
    title: "학력",
    items: ["서울과학종합대학원 경영학 석사(MBA)", "중앙대학교 외식산업경영학과"],
  },
  {
    title: "수상",
    items: ["우수강사 표창", "기관장 감사패 및 교육혁신 우수사례 선정"],
  },
  {
    title: "보유 자격",
    items: ["직업능력개발훈련교사", "생성형 AI 활용지도 관련 자격", "HRD 및 문서/기획 실무 자격"],
  },
];

export default function CareerContent() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">경력</h1>
      <p className="mt-3 text-slate-600">전문 강사로서의 신뢰를 숫자와 핵심 이력으로 확인하실 수 있습니다.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
