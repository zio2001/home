import SectionReveal from '@/components/SectionReveal';
import { contactInfo } from '@/lib/siteData';

const values = [
  { title: '사람 중심', body: '기술보다 먼저 사람을 이해합니다. 학습자의 상황과 속도에 맞춘 설명으로 참여자의 몰입을 높입니다.' },
  { title: '교육적 설계', body: '목표-활동-성과의 흐름을 명확히 설계하여 강의가 끝난 뒤에도 현업 적용이 가능하도록 돕습니다.' },
  { title: '기술의 실용성', body: '최신 기술을 소개하는 데 그치지 않고, 기관 담당자가 바로 실행 가능한 방법으로 전환합니다.' },
  { title: '참여와 연결', body: '강의 중 실습, 피드백, 상호작용을 강화해 학습이 변화로 이어지도록 연결 구조를 만듭니다.' }
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-8">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-label">ABOUT INSTRUCTOR</p>
          <h2>최준호 강사 소개</h2>
          <p>디지털융합강사, HR컨설턴트, 글작가로 활동하며 사람과 교육, 기술을 연결하는 일을 하고 있습니다.</p>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <img src={contactInfo.profileImage} alt="최준호 강사" className="h-full min-h-[320px] w-full rounded-3xl object-cover shadow-lg" />
          <div className="space-y-4">
            <article className="card">다양한 공공기관, 교육기관, 기업 현장에서 강의하며 대상별 학습 특성과 업무 환경을 반영한 프로그램을 설계해 왔습니다. 어려운 기술도 쉽고 명확하게 전달해 참여자의 실행력을 높입니다.</article>
            <article className="card">교육은 ‘좋은 강의’에서 끝나지 않고 ‘현장의 변화’로 이어져야 합니다. 그래서 실습과 피드백 중심 구조를 통해 참여자가 교육 직후 바로 적용할 수 있도록 설계합니다.</article>
            <article className="card">메타블럭 아카데미는 기술을 더 쉽게, 교육을 더 실용적으로, 사람의 성장을 더 지속 가능하게 만드는 파트너가 되겠습니다.</article>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="card">
              <h3 className="text-lg font-extrabold text-brand-navy">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.body}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
