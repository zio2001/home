import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "최준호 강사 홈페이지",
  description: "디지털융합강사 · HR컨설턴트 · 글작가 최준호의 공식 홈페이지",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-800">
        <NavBar />
        <main className="min-h-[calc(100vh-180px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
