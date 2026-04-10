export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="mb-2 text-sm font-semibold text-blue-600">Contact</p>
        <h2 className="text-2xl font-bold text-slate-900">연락처</h2>
        <div className="mt-4 space-y-2 text-slate-600">
          <p>
            이메일: <a className="font-medium text-slate-900" href="mailto:hello@example.com">hello@example.com</a>
          </p>
          <p>
            전화번호: <a className="font-medium text-slate-900" href="tel:+821012345678">010-1234-5678</a>
          </p>
        </div>
      </div>
    </section>
  );
}
