import SectionReveal from '@/components/SectionReveal';
import { programs } from '@/lib/siteData';

export default function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 space-y-6">
      <SectionReveal>
        <div>
          <p className="text-sm font-bold text-indigo-700">PROGRAMS</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">대표 프로그램</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {programs.map((program, index) => (
          <SectionReveal key={program.title} delayMs={index * 80} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <p><span className="font-semibold text-blue-700">대상</span> | {program.target}</p>
              <p><span className="font-semibold text-indigo-700">핵심 내용</span> | {program.core}</p>
              <p><span className="font-semibold text-violet-700">기대 효과</span> | {program.outcome}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
