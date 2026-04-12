import Link from 'next/link';
import { contactInfo, siteName } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xl font-black text-white">{siteName}</p>
          <p className="mt-2 text-sm text-slate-300">최준호 | 디지털융합강사 · HR컨설턴트 · 글작가</p>
        </div>
        <div className="space-y-2 text-sm lg:text-right">
          <p>이메일: <Link href={`mailto:${contactInfo.email}`} className="text-blue-300 hover:text-blue-200">{contactInfo.email}</Link></p>
          <p>연락처: <Link href={`tel:${contactInfo.phoneLink}`} className="text-blue-300 hover:text-blue-200">{contactInfo.phoneDisplay}</Link></p>
          <p>오픈카톡: <Link href={contactInfo.openKakao} target="_blank" className="text-blue-300 hover:text-blue-200">바로가기</Link></p>
          <p>네이버 팬카페: <Link href={contactInfo.fanCafe} target="_blank" className="text-emerald-300 hover:text-emerald-200">바로가기</Link></p>
        </div>
      </div>
    </footer>
  );
}
