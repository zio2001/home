import AboutSection from '@/components/AboutSection';
import CareerSection from '@/components/CareerSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import ServicesSection from '@/components/ServicesSection';

const strengths = [
  {
    title: '공공·교육·기업 맞춤 운영',
    body: '기관의 교육 목표, 대상 특성, 실행 환경을 반영해 커리큘럼을 설계하고 운영합니다.'
  },
  {
    title: '실습 중심 디지털 교육',
    body: '생성형 AI, 디지털 도구, 문서·기획 역량까지 현장에서 바로 사용할 수 있도록 실습 중심으로 진행합니다.'
  },
  {
    title: '강의 이후 변화까지 연결',
    body: '교육 만족도를 넘어 실제 업무 적용과 성과로 이어질 수 있도록 실행 가이드까지 제공합니다.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20 lg:space-y-28">
      <HeroSection />

      <section className="scroll-mt-24">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((strength) => (
            <article key={strength.title} className="card">
              <h3 className="text-lg font-extrabold text-brand-navy">{strength.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{strength.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ProgramsSection />
      <AboutSection />
      <ServicesSection />
      <CareerSection />
      <ContactSection />
    </div>
  );
}
