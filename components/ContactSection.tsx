// 초보자 수정 가이드:
// 아래 contactInfo의 이메일/전화/링크를 실제 정보로 변경하세요.
const contactInfo = {
  email: "contact@junohedulab.kr",
  phone: "010-1234-5678",
  openChat: "https://open.kakao.com/o/example",
};

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-teal-800 px-6 py-10 text-white sm:px-10 sm:py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">강의 · 교육 · 컨설팅 문의</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-teal-50 sm:text-base">
          기관의 교육 목적, 대상, 일정에 맞춰 커리큘럼을 제안드립니다. 편하게 문의를 남겨주시면 확인 후 빠르게 회신드리겠습니다.
        </p>

        <ul className="mt-6 space-y-2 text-sm sm:text-base">
          <li>이메일: {contactInfo.email}</li>
          <li>연락처: {contactInfo.phone}</li>
          <li>오픈채팅/링크: {contactInfo.openChat}</li>
        </ul>

        <a
          href={`mailto:${contactInfo.email}`}
          className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
        >
          문의 메일 보내기
        </a>
      </div>
    </section>
  );
}
