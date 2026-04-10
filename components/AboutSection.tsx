export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="mb-2 text-sm font-semibold text-blue-600">About</p>
        <h2 className="text-2xl font-bold text-slate-900">자기소개</h2>
        <p className="mt-4 leading-7 text-slate-600">
          안녕하세요. 저는 웹 개발을 공부하며 작은 프로젝트를 하나씩 완성해 나가고 있습니다. 복잡한 기술보다
          사용자가 쉽게 이해하고 사용할 수 있는 화면을 만드는 것을 좋아합니다. 이 포트폴리오에는 학습 과정에서
          만든 결과물을 정리해 두었고, 앞으로 더 다양한 프로젝트를 추가해 나갈 예정입니다.
        </p>
      </div>
    </section>
  );
}
