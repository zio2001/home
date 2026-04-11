import SectionReveal from '@/components/SectionReveal';

const services = [
  {
    title: '기관 맞춤형 강의 설계',
    description: '기관의 교육 목적, 참여자 직무, 운영 환경을 분석해 목표와 성과 지표가 분명한 커리큘럼을 설계합니다.'
  },
  {
    title: '생성형 AI 실습 교육',
    description: '프롬프트 작성부터 문서 자동화, 콘텐츠 초안 제작까지 실무자가 즉시 적용할 수 있는 AI 실습 과정을 제공합니다.'
  },
  {
    title: '디지털 도구 활용 교육',
    description: '노션, 피그마, 협업도구 등 현업 중심 도구를 업무 흐름에 맞게 연결해 생산성과 협업 속도를 높입니다.'
  },
  {
    title: '교육 콘텐츠 및 자료 제작',
    description: '강의 자료, 워크북, 활동지, 온라인 콘텐츠를 대상 맞춤형으로 제작해 학습 몰입도와 완성도를 향상합니다.'
  },
  {
    title: 'HR/조직 커뮤니케이션 교육',
    description: '조직 내 소통 문제를 줄이고 협업 효율을 높일 수 있도록 공감형 커뮤니케이션과 피드백 스킬을 훈련합니다.'
  },
  {
    title: '문서·기획·보고 실무 교육',
    description: '보고서와 기획서를 논리적으로 구조화하고 설득력 있게 전달하는 실무 문서 작성 역량을 강화합니다.'
  },
  {
    title: '시니어 디지털 교육',
    description: '스마트폰 기초부터 생활 서비스 활용까지, 실생활 중심 학습으로 디지털 접근성과 자립 역량을 높입니다.'
  },
  {
    title: '청소년 프로젝트 교육',
    description: 'AI·코딩·메타버스 기반 창의융합 프로젝트를 통해 청소년의 문제해결력, 협업력, 표현력을 키웁니다.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 space-y-8">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-label">CORE SERVICE</p>
          <h2>핵심 서비스</h2>
          <p>강의, 실습, 콘텐츠 제작, 사후 적용 가이드를 하나의 흐름으로 연결해 교육 성과를 만듭니다.</p>
        </div>
      </SectionReveal>
      <SectionReveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3 className="text-base font-extrabold text-brand-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
