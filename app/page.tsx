import HeroSection from '@/components/HeroSection';

const strengths = [
  {
    title: '공공·교육·기업 맞춤 운영',
    description: '기관의 교육 목표, 대상 특성, 실행 환경을 반영해 커리큘럼을 설계합니다.'
  },
  {
    title: '실습 중심 디지털 교육',
    description: '생성형 AI, 디지털 도구, 문서·기획 역량까지 바로 활용 가능한 실습형 교육을 제공합니다.'
  },
  {
    title: '강의 이후 변화까지 연결',
    description: '교육 만족도를 넘어 실제 적용과 성과로 이어질 수 있도록 실천 가이드를 함께 제공합니다.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <section className="grid gap-5 md:grid-cols-3">
        {strengths.map((item) => (
          <article key={item.title} className="card">
            <h2 className="text-lg font-bold text-brand-navy">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
