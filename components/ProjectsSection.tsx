const projects = [
  {
    title: "프로젝트 1",
    description: "할 일 관리를 위한 간단한 웹 앱입니다.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "프로젝트 2",
    description: "날씨 정보를 보여주는 반응형 대시보드입니다.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "프로젝트 3",
    description: "자주 사용하는 링크를 모아둔 개인 시작 페이지입니다.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="mb-2 text-sm font-semibold text-blue-600">Projects</p>
        <h2 className="text-2xl font-bold text-slate-900">프로젝트</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
