import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '최준호 강사 홈페이지',
  description: '사람, 교육, 기술을 연결하는 디지털융합 강사 최준호 공식 홈페이지'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <NavBar />
        <main className="mx-auto min-h-screen max-w-6xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
