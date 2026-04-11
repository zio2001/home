import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: '메타블럭 아카데미',
  description: '최준호 강사의 디지털융합 강의 · 컨설팅 공식 홈페이지'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <NavBar />
        <main className="mx-auto min-h-screen w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
