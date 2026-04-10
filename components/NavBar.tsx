const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm font-bold tracking-wide text-slate-800 sm:text-base">Student Portfolio</p>
        <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 sm:gap-6">
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
