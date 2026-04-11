import Link from "next/link";
import { mainMenu, contactLinks } from "@/lib/siteData";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-bold text-slate-900 sm:text-base">
          최준호 강사 홈페이지
        </Link>

        <ul className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
          {mainMenu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition hover:text-blue-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={contactLinks.fanCafe}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-blue-200 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
          >
            네이버 팬카페
          </a>
          <a href={contactLinks.openKakao} target="_blank" rel="noreferrer" className="rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800">
            오픈카톡
          </a>
        </div>
      </nav>
    </header>
  );
}
