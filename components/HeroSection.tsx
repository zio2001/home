// 초보자 수정 가이드:
// 아래 heroContent 객체에서 이름, 문구, 버튼 링크만 바꾸면 메인 화면이 업데이트됩니다.
const heroContent = {
  name: "최준호 강사",
  mainCopy: "사람을 중심에 두고, 교육과 기술을 실용으로 연결합니다.",
  description: [
    "디지털융합강사 · HR컨설턴트 · 글작가의 관점으로 기관과 기업에 맞는 교육 경험을 설계합니다.",
    "복잡한 기술도 현장에서 바로 적용할 수 있도록 쉽게 풀어내고, 참여가 살아 있는 수업을 만듭니다.",
  ],
  inquiryLink: "#contact",
  portfolioLink: "#portfolio",
};

export default function HeroSection() {
  return (
    <section id="home" className="mx-auto w-full max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10 sm:py-14 lg:px-14">
        <p className="text-sm font-semibold tracking-wide text-teal-700">OFFICIAL BRAND SITE</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {heroContent.name}
        </h1>
        <p className="mt-6 text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl">
          {heroContent.mainCopy}
        </p>
        <div className="mt-6 space-y-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          {heroContent.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={heroContent.inquiryLink}
            className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            강의 문의하기
          </a>
          <a
            href={heroContent.portfolioLink}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            포트폴리오 보기
          </a>
        </div>
      </div>
    </section>
  );
}
