import SectionReveal from '@/components/SectionReveal';
import { programCards } from '@/lib/siteData';

export default function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 space-y-8">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-label">PROGRAMS</p>
          <h2>대표 프로그램</h2>
          <p>공공기관, 교육기관, 기업 현장에서 바로 적용되는 실습형 프로그램을 제공합니다.</p>
        </div>
      </SectionReveal>
      <SectionReveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programCards.map((program) => (
            <article key={program.title} className="card">
              <h3 className="text-lg font-extrabold text-brand-navy">{program.title}</h3>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                <p><span className="font-bold text-brand-blue">대상</span> | {program.target}</p>
                <p><span className="font-bold text-brand-purple">핵심 내용</span> | {program.core}</p>
                <p><span className="font-bold text-emerald-700">기대 효과</span> | {program.effect}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
