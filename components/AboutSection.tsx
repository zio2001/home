export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="mb-2 text-sm font-semibold text-blue-600">About</p>
        <h2 className="text-2xl font-bold text-slate-900">자기소개</h2>

        {/* 자기소개 문단을 수정하세요 */}
        <p className="mt-4 leading-7 text-slate-600">
          안녕하세요. 저는 HTML, CSS, JavaScript와 React를 공부하며 실무에 가까운 결과물을 만드는 연습을 하고
          있습니다. 복잡한 기능보다 기본기가 잘 보이는 구조를 중요하게 생각하며, 사용자가 쉽게 이해할 수 있는
          화면을 만들기 위해 꾸준히 개선하고 있습니다.
        </p>
      </div>
    </section>
  );
}
