import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '메타블럭 아카데미',
  description: '사람, 교육, 기술을 연결하는 디지털융합 강사 최준호 공식 홈페이지'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <NavBar />
        <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
