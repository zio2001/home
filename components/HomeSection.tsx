export default function HomeSection() {
  return (
    <section id="home" className="mx-auto w-full max-w-5xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="mb-2 text-sm font-semibold text-blue-600">Home</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">홍길동</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          사용자 경험을 중요하게 생각하는 초보 프론트엔드 개발자입니다.
        </p>
      </div>
    </section>
  );
}
