const philosophy = [
  { title: "사람 중심", description: "학습자의 배경과 목표를 먼저 이해하고, 현장에 맞는 언어로 설명합니다." },
  { title: "교육적 설계", description: "단발성 전달이 아닌 단계형 학습 설계로 몰입도와 성취감을 높입니다." },
  { title: "기술의 실용성", description: "최신 도구를 소개하는 데서 끝나지 않고 실제 업무 적용까지 연결합니다." },
  { title: "참여와 연결", description: "질문·실습·피드백을 통해 교육이 행동 변화로 이어지게 합니다." },
];

const profileCards = {
  education: ["(학) 중앙대학교 외식산업경영학과", "(학) 서울과학종합대학원 경영학 석사(MBA)"],
  career: ["현) 디지털융합 전문강사 및 HR 실무 컨설턴트", "전) 기업 교육기획 및 조직개발(OD) 프로젝트 리드", "공공기관·대학교·기업 디지털 전환 교육 다수 진행"],
  certificates: ["직업능력개발훈련교사", "생성형 AI 활용지도사", "HRD·문서기획·콘텐츠 제작 관련 민간/실무 자격 보유"],
  awards: ["우수강사 표창 및 기관장 감사패 수상", "교육프로그램 기획 우수사례 선정"],
};

export default function AboutContent() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold text-slate-900">최준호 강사 소개</h1>
        <p className="mt-5 leading-relaxed text-slate-700">
          최준호 강사는 디지털융합강사, HR컨설턴트, 글작가로 활동하며 공공기관·교육기관·기업 현장의 교육 문제를 함께 해결해 왔습니다.
          기술 그 자체보다 “사람이 실제로 활용할 수 있는 변화”에 초점을 두고, 학습자의 수준과 업무 맥락에 맞춰 교육을 설계합니다.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-slate-900">교육 철학</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {philosophy.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-blue-700">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {Object.entries(profileCards).map(([key, items]) => (
            <article key={key} className="rounded-2xl border border-blue-100 p-5">
              <h3 className="font-bold text-slate-900">{key === "education" ? "학력" : key === "career" ? "주요 경력" : key === "certificates" ? "보유 자격" : "수상 내역"}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
