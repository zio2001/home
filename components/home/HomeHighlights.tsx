const points = [
  {
    title: "공공·교육·기업 맞춤 운영",
    description: "기관의 교육 목표, 대상 특성, 실행 환경을 반영해 커리큘럼을 설계합니다.",
  },
  {
    title: "실습 중심 디지털 교육",
    description: "생성형 AI, 디지털 도구, 문서·기획 역량까지 바로 활용 가능한 실습형 교육을 제공합니다.",
  },
  {
    title: "강의 이후 변화까지 연결",
    description: "교육 만족도를 넘어 업무 적용과 성과로 이어질 수 있도록 실천 가이드를 함께 제공합니다.",
  },
];

export default function HomeHighlights() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">{point.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
