import { contactLinks } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p className="font-semibold text-slate-900">최준호 | 디지털융합강사 · HR컨설턴트 · 글작가</p>
        <p className="mt-2">
          이메일: <a className="text-blue-700 hover:underline" href={contactLinks.emailHref}>{contactLinks.email}</a>
        </p>
        <p>
          연락처: <a className="text-blue-700 hover:underline" href={contactLinks.phoneHref}>{contactLinks.phoneDisplay}</a>
        </p>
        <p className="mt-2 flex flex-wrap gap-3">
          <a className="text-blue-700 hover:underline" href={contactLinks.openKakao} target="_blank" rel="noreferrer">오픈카톡</a>
          <a className="text-blue-700 hover:underline" href={contactLinks.fanCafe} target="_blank" rel="noreferrer">팬카페</a>
        </p>
      </div>
    </footer>
  );
}
