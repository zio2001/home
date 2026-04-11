const reviews = [
  {
    quote:
      "실무와 연결되는 예시가 많아 교육 직후 바로 적용할 수 있었습니다. 특히 AI 도구를 업무 흐름에 녹여내는 방식이 인상적이었습니다.",
    source: "공공기관 교육 담당자",
  },
  {
    quote:
      "기술 설명이 어렵지 않고 참여형 활동이 잘 설계되어 있어서 구성원들의 집중도가 매우 높았습니다. 기관 재요청 의사가 높습니다.",
    source: "평생교육기관 실무자",
  },
  {
    quote:
      "조직소통과 문서작성 교육이 단순 이론이 아니라 실제 상황 중심으로 진행되어 리더와 실무자 모두 만족도가 높았습니다.",
    source: "기업 HRD 매니저",
  },
];

export default function ReviewSection() {
  return (
    <section id="review" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">수강 후기</h2>
      <p className="mt-3 text-base text-slate-600 sm:text-lg">교육 현장에서 받은 반응을 바탕으로 지속적으로 과정을 개선합니다.</p>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.quote} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">“{review.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-slate-500">— {review.source}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
