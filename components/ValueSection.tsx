const values = [
  {
    icon: "👥",
    title: "사람 중심",
    description: "학습자의 배경과 속도를 존중하며, 누구나 이해하고 참여할 수 있는 교육을 지향합니다.",
  },
  {
    icon: "🧩",
    title: "교육적 설계",
    description: "목표-활동-성과가 연결되는 구조로, 현장에서 바로 활용 가능한 학습 경험을 만듭니다.",
  },
  {
    icon: "⚙️",
    title: "기술의 실용성",
    description: "새로운 도구를 단순 소개하지 않고 업무와 수업에 적용할 수 있는 방식으로 안내합니다.",
  },
  {
    icon: "🤝",
    title: "참여와 연결",
    description: "일방향 전달보다 상호작용을 강화해 참여를 끌어내고, 조직 안의 협업으로 이어지게 합니다.",
  },
];

export default function ValueSection() {
  return (
    <section id="value" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">핵심 가치</h2>
      <p className="mt-3 text-base text-slate-600 sm:text-lg">사람, 교육, 기술, 참여를 하나의 흐름으로 설계합니다.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {values.map((value) => (
          <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-2xl" aria-hidden>
              {value.icon}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
