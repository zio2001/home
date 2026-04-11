const navItems = [
  { label: "소개", href: "#about" },
  { label: "핵심가치", href: "#value" },
  { label: "강의프로그램", href: "#program" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "후기", href: "#review" },
  { label: "문의하기", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-bold tracking-wide text-slate-900 sm:text-base">
          최준호 강사 공식 홈페이지
        </a>
        <ul className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
