import PageHero from '@/components/PageHero';

const stats = [
  '5,000+ 누적 교육 참여자',
  '100+ 강의/프로그램 기획',
  '15+ 교육 분야 운영 경험',
  '1,000+ 교육 자료 및 콘텐츠 제작'
];

const careerExamples = [
  '노션(notion)으로 스마트한 생활하기',
  'NO CODE 나만의 앱(app) 쉽게 만들기',
  '온라인쇼핑몰 창업과정',
  '나도 이제 전자책 작가',
  '스마트폰 기초부터 고급 과정 활용하기',
  '유튜브영상 캡컷을 활용한 편집및제작',
  '꿈꾸는 세상 메타버스 코스페이시스',
  '엔트리와 스크래치로 인공지능 만들기',
  '아두이노&라즈베리파이로 만드는 DIY 로봇',
  '실무에 바로 쓰는 챗GPT 200% 활용하기'
];

const certificates = [
  '국제트리즈협회 트리즈1급',
  '코딩지도사1급',
  '인공지능활용전문가3급',
  '블록체인자격2급',
  '메타버스전문가 1급',
  '3D프린팅지도사2급',
  '글쓰기 지도사 1급'
];

export default function CareerPage() {
  return (
    <div className="space-y-8">
      <PageHero title="전문 경력" description="강의 기획부터 운영, 콘텐츠 제작까지 현장을 아우르는 전문성을 보유하고 있습니다." />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat} className="card text-center">
            <p className="text-xl font-black text-brand-navy">{stat}</p>
          </article>
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-bold text-brand-navy">학력</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>한국해양대학교 경제산업학부 학사</li>
            <li>동의대학교 대학원 인공지능학부 석사</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="text-xl font-bold text-brand-navy">보유 자격</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            {certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <article className="card">
        <h2 className="text-xl font-bold text-brand-navy">주요 강의 경력</h2>
        <ul className="mt-3 grid list-disc gap-1 pl-5 text-slate-700 sm:grid-cols-2">
          {careerExamples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <h2 className="text-xl font-bold text-brand-navy">수상 및 기타 활동</h2>
        <p className="mt-3 text-slate-700">강의 품질과 교육 운영 성과를 바탕으로 기관별 우수 강사 선정 및 프로젝트 성과 공유 활동을 이어가고 있습니다.</p>
      </article>
    </div>
  );
}
