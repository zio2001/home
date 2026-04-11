import PageHero from '@/components/PageHero';

const services = [
  '기관 맞춤형 강의 설계',
  '생성형 AI 실습 교육',
  '디지털 도구 활용 교육',
  '교육 콘텐츠 및 자료 제작',
  'HR/조직 커뮤니케이션 교육',
  '문서·기획·보고 실무 교육',
  '시니어 디지털 교육',
  '청소년 프로젝트 교육'
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <PageHero title="핵심 서비스" description="강의, 컨설팅, 콘텐츠 제작을 하나의 흐름으로 연결해 교육 성과를 높입니다." />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service} className="card flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
            <h2 className="font-semibold text-slate-800">{service}</h2>
          </article>
        ))}
      </section>
    </div>
  );
}
