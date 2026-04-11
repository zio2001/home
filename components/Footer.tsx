import Link from 'next/link';
import { contactInfo } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-lg font-black text-brand-navy">메타블럭 아카데미</p>
          <p className="mt-2">최준호 | 디지털융합강사 · HR컨설턴트 · 글작가</p>
        </div>
        <div className="space-y-2 lg:text-right">
          <p>이메일: {contactInfo.email}</p>
          <p>연락처: {contactInfo.phoneDisplay}</p>
          <div className="flex gap-3 lg:justify-end">
            <Link href={contactInfo.openKakao} target="_blank" className="hover:text-brand-blue">오픈카톡</Link>
            <Link href={contactInfo.fanCafe} target="_blank" className="text-emerald-700 hover:text-emerald-800">팬카페</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
