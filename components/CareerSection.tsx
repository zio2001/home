import SectionReveal from '@/components/SectionReveal';

const stats = [
  '5,000+ 누적 교육 참여자',
  '100+ 강의/프로그램 기획',
  '15+ 교육 분야 운영 경험',
  '1,000+ 교육 자료 및 콘텐츠 제작'
];

const awards = [
  '2017 국가공헌 사회봉사최고대상',
  '2018 과학의날 과학기술정보통신부장관표창',
  '2018 벤처의날 중소벤처기업부장관표창',
  '2019 대한적십자사 기부 은장유공표창',
  '2019 일자리창출유공자 고용노동부장관표창',
  '2020 상공의날 산업자원통상부장관표창',
  '2020 무역의날 100만불수출탑 대통령표창',
  '2020 한국생산성본부 미래 유니콘기업 지정',
  '2021 한국표준협회 디지털 전환강사 우수상',
  '2023 과학기술정보통신부 정보문화발전유공자(강사부문)'
];

export default function CareerSection() {
  return (
    <section id="career" className="scroll-mt-24 space-y-8">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-label">CAREER & ACHIEVEMENT</p>
          <h2>전문 경력</h2>
          <p>강의 기획부터 운영, 실습 콘텐츠 제작까지 교육 현장을 폭넓게 아우르는 전문성을 갖추고 있습니다.</p>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat} className="card text-center text-lg font-black text-brand-navy">{stat}</article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card">
            <h3 className="text-xl font-black text-brand-navy">학력</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>한국해양대학교 경제산업학부 학사</li>
              <li>동의대학교 인공지능학부 석사</li>
            </ul>
          </article>
          <article className="card">
            <h3 className="text-xl font-black text-brand-navy">주요 강의 경력</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>노션으로 스마트한 생활하기, NO CODE 앱 만들기, 챗GPT 실무 활용</li>
              <li>온라인쇼핑몰 창업과정, 전자책 작가 과정, 스마트폰 활용 과정</li>
              <li>메타버스 코스페이시스, 엔트리/스크래치 AI, 아두이노·라즈베리파이 DIY</li>
            </ul>
          </article>
        </div>
      </SectionReveal>

      <SectionReveal>
        <article className="card">
          <h3 className="text-xl font-black text-brand-navy">수상 및 기타 활동</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {awards.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                {item}
              </div>
            ))}
          </div>
        </article>
      </SectionReveal>
    </section>
  );
}
