const footerInfo = {
  name: "최준호",
  role: "디지털융합강사 · HR컨설턴트 · 글작가",
  contact: "contact@junohedulab.kr | 010-1234-5678",
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p className="font-semibold text-slate-900">{footerInfo.name}</p>
        <p className="mt-1">{footerInfo.role}</p>
        <p className="mt-1">{footerInfo.contact}</p>
        <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} 최준호. All rights reserved.</p>
      </div>
    </footer>
  );
}
