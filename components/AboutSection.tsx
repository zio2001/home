import SectionReveal from '@/components/SectionReveal';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionReveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-sm font-bold text-indigo-700">ABOUT</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">강사 소개</h2>
        <p className="mt-5 leading-relaxed text-slate-600">
          최준호 강사는 디지털 전환 시대에 맞춰 사람과 조직이 기술을 쉽게 이해하고 실제 성과로 연결하도록 돕는 교육 전문가입니다. 공공기관,
          기업, 교육기관 등 다양한 현장에서 맞춤형 커리큘럼을 운영하며 학습자의 이해도와 적용도를 동시에 높이는 방식으로 강의를 진행합니다.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          단순한 지식 전달을 넘어, 실습과 피드백을 통해 교육 이후의 변화까지 설계합니다. “쉽고 명확하지만 깊이 있는 수업”을 핵심 원칙으로,
          기관 담당자가 신뢰할 수 있는 실행 중심 교육 파트너가 되고자 합니다.
        </p>
      </SectionReveal>
    </section>
  );
}
