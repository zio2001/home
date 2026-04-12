import SectionReveal from '@/components/SectionReveal';
import { services } from '@/lib/siteData';

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 space-y-6">
      <SectionReveal>
        <div>
          <p className="text-sm font-bold text-indigo-700">SERVICES</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">핵심 서비스</h2>
        </div>
      </SectionReveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <SectionReveal key={service.title} delayMs={index * 60} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
