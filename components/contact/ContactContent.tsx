import ContactForm from "@/components/contact/ContactForm";
import { contactLinks } from "@/lib/siteData";

const cards = [
  { title: "전화 상담", text: contactLinks.phoneDisplay, href: contactLinks.phoneHref, external: false },
  { title: "이메일 문의", text: contactLinks.email, href: contactLinks.emailHref, external: false },
  { title: "오픈카톡 문의", text: "카카오톡 상담 바로가기", href: contactLinks.openKakao, external: true },
  { title: "네이버 팬카페", text: "팬카페 바로가기", href: contactLinks.fanCafe, external: true },
];

export default function ContactContent() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">문의하기</h1>
      <p className="mt-3 text-slate-600">교육 목적과 대상에 맞춰 맞춤형 프로그램을 제안드립니다. 편하게 문의 주시면 빠르게 답변드리겠습니다.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noreferrer" : undefined}
            className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:border-blue-300"
          >
            <p className="font-bold text-slate-900">{card.title}</p>
            <p className="mt-2 text-sm text-blue-700">{card.text}</p>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
