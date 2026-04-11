'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems, siteName } from '@/lib/siteData';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-extrabold text-brand-navy sm:text-base">
          {siteName}
        </Link>
        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? 'bg-brand-navy text-white shadow'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
