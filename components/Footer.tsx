import Link from 'next/link';
import { contactInfo, siteName } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-bold text-brand-navy">{siteName}</p>
          <p className="mt-2">사람, 교육, 기술을 연결하는 디지털융합 교육 파트너</p>
        </div>
        <div className="space-y-1 lg:text-right">
          <p>전화: {contactInfo.phoneDisplay}</p>
          <p>이메일: {contactInfo.email}</p>
          <div className="flex gap-3 lg:justify-end">
            <Link href={contactInfo.fanCafe} target="_blank" className="hover:text-brand-blue">
              네이버 팬카페
            </Link>
            <Link href={contactInfo.openKakao} target="_blank" className="hover:text-brand-purple">
              오픈카톡
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
