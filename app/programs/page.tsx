import PageHero from '@/components/PageHero';
import { programs } from '@/lib/siteData';

export default function ProgramsPage() {
  return (
    <div className="space-y-8">
      <PageHero title="대표 프로그램" description="기관의 목적과 학습자 수준을 반영한 실습 중심 프로그램을 운영합니다." />
      <section className="grid gap-5 md:grid-cols-2">
        {programs.map((program) => (
          <article key={program.title} className="card">
            <h2 className="text-xl font-black text-brand-navy">{program.title}</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p><span className="font-bold text-brand-blue">대상</span> | {program.target}</p>
              <p><span className="font-bold text-brand-purple">핵심 내용</span> | {program.core}</p>
              <p><span className="font-bold text-brand-pink">기대 효과</span> | {program.outcome}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
