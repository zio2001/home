export default function HomeSection() {
  return (
    <section id="home" className="mx-auto w-full max-w-5xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="mb-2 text-sm font-semibold text-blue-600">Home</p>

        {/* 이름을 수정하세요 */}
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">홍길동</h1>

        {/* 한 줄 소개를 수정하세요 */}
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          사용자 중심의 인터페이스를 만드는 초보 프론트엔드 개발자입니다.
        </p>
      </div>
    </section>
  );
}
