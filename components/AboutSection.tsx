// 초보자 수정 가이드:
// 아래 aboutData에서 소개 문구를 직접 수정하세요.
const aboutData = {
  title: "강사 소개",
  roles: ["디지털융합강사", "HR컨설턴트", "글작가"],
  message:
    "최준호 강사는 교육기관, 공공기관, 기업 현장에서 디지털 전환과 조직 성장을 함께 돕는 교육을 진행합니다. 기술을 설명하는 데서 끝나지 않고, 실제 업무와 학습자의 맥락에 맞게 적용될 수 있도록 교육 과정을 설계합니다.",
  philosophy:
    "강의의 핵심은 사람입니다. 복잡한 기술을 쉽게, 사람 중심으로 연결해 학습 참여를 끌어내고, 실행 가능한 변화까지 이어지도록 돕습니다.",
};

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{aboutData.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">{aboutData.message}</p>
          <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">{aboutData.philosophy}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-6">
          <p className="text-sm font-semibold tracking-wide text-slate-500">정체성</p>
          <ul className="mt-4 space-y-3">
            {aboutData.roles.map((role) => (
              <li key={role} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 sm:text-base">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
