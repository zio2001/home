const services = [
  "맞춤형 강의 설계",
  "교육 자료 제작",
  "디지털 전환 교육 컨설팅",
  "콘텐츠 기획 및 실습 프로그램 설계",
  "기관/기업 맞춤형 교육 운영 지원",
];

export default function ServicesContent() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold text-slate-900">서비스</h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          단순 강의 제공을 넘어, 기관의 현안을 해결하는 교육 파트너로 함께합니다. 사전 인터뷰부터 운영, 결과 리포트까지 체계적으로 지원합니다.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-semibold text-slate-900">{service}</h2>
              <p className="mt-2 text-sm text-slate-600">교육 목적과 참여자 특성에 맞춰 설계하여 바로 실행 가능한 형태로 제공합니다.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
