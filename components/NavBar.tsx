'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems, siteName } from '@/lib/siteData';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="truncate pr-3 text-sm font-black tracking-tight text-slate-900 sm:text-base" aria-label="메타블럭 아카데미 홈으로 이동">
          {siteName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-indigo-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="모바일 메뉴 열기"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-slate-200 bg-white px-4 py-3 md:hidden" aria-label="모바일 메뉴">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
