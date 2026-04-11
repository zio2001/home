interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-brand-navy via-brand-blue to-brand-purple px-6 py-12 text-white shadow-lg sm:px-10">
      <h1 className="text-3xl font-black sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-blue-100 sm:text-base">{description}</p>
    </section>
  );
}
