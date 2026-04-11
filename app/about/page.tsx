import PageHero from '@/components/PageHero';
import { contactInfo } from '@/lib/siteData';

const values = [
  { title: '사람 중심', desc: '학습자의 배경과 속도를 존중하며 이해 가능한 언어로 교육합니다.' },
  { title: '교육적 설계', desc: '목표-활동-성과가 자연스럽게 이어지는 구조로 과정 전체를 설계합니다.' },
  { title: '기술의 실용성', desc: '화려한 기능보다 현장에서 바로 쓸 수 있는 도구 중심으로 안내합니다.' },
  { title: '참여와 연결', desc: '질문, 토론, 실습을 통해 학습자가 주도적으로 변화에 참여하도록 돕습니다.' }
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="최준호 강사 소개"
        description="디지털융합강사, HR컨설턴트, 글작가로 활동하며 사람과 교육, 기술을 연결하는 일을 하고 있습니다.\n복잡한 기술을 쉽게 풀어내고, 배움이 실제 변화로 이어지도록 설계하는 것이 저의 교육 철학입니다."
      />
      <section className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={contactInfo.profilePhoto} alt="최준호 강사" className="h-full w-full rounded-3xl object-cover shadow-xl" />
        </div>
        <div className="space-y-4 lg:col-span-3">
          <article className="card leading-relaxed text-slate-700">저는 다양한 현장에서 강의를 진행하며 “어렵고 낯선 기술을 누구나 이해할 수 있도록 전달하는 힘”이 교육의 핵심이라고 믿고 있습니다. 공공기관, 교육기관, 기업의 다양한 교육 환경을 경험하며 대상과 목적에 맞는 맞춤형 교육 설계를 축적해 왔습니다.</article>
          <article className="card leading-relaxed text-slate-700">교육은 단순한 정보 전달이 아니라, 학습자가 실제 행동을 바꾸는 과정입니다. 그래서 강의에서는 개념 설명에 그치지 않고 직접 실습하고 결과물을 만드는 경험을 중요하게 다룹니다. 참여자가 “내 업무와 삶에 바로 적용할 수 있다”는 확신을 얻도록 돕습니다.</article>
          <article className="card leading-relaxed text-slate-700">앞으로도 사람과 기술 사이의 간격을 좁히는 교육자로서, 현장 중심의 커리큘럼과 실천 중심의 코칭을 통해 기관과 조직의 지속 가능한 성장을 함께 만들어가겠습니다.</article>
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-2">
        {values.map((value) => (
          <article key={value.title} className="card">
            <h2 className="text-lg font-bold text-brand-navy">{value.title}</h2>
            <p className="mt-2 text-slate-600">{value.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
