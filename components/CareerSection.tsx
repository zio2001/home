import SectionReveal from '@/components/SectionReveal';
import { awards } from '@/lib/siteData';

const stats = [
  { label: '누적 교육 참여자', value: '5,000+' },
  { label: '강의/프로그램 기획', value: '100+' },
  { label: '교육 운영 분야', value: '15+' },
  { label: '제작 콘텐츠/자료', value: '1,000+' }
];

const experiences = [
  '생성형 AI 실무 적용 교육 및 조직 맞춤형 활용 코칭',
  '공공기관·기업·학교 대상 디지털 전환 역량 강화 과정 운영',
  '노션·피그마·콘텐츠 제작 도구 기반 협업/기획 실습 프로그램 설계',
  '시니어/청소년 대상 생활밀착형 디지털 리터러시 교육 운영'
];

const education = ['한국해양대학교 경제산업학부 학사', '동의대학교 인공지능학부 석사'];

export default function CareerSection() {
  return (
    <section id="career" className="scroll-mt-24 space-y-6">
      <SectionReveal>
        <div>
          <p className="text-sm font-bold text-indigo-700">CAREER</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">경력 및 주요 활동</h2>
        </div>
      </SectionReveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, idx) => (
          <SectionReveal key={item.label} delayMs={idx * 70} className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-5 shadow-md">
            <p className="text-3xl font-black text-indigo-700">{item.value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">{item.label}</p>
          </SectionReveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionReveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900">주요 활동/경력</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            {experiences.map((item) => (
              <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />{item}</li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg" delayMs={100}>
          <h3 className="text-xl font-bold text-slate-900">학력</h3>
          <ul className="mt-4 space-y-3 text-slate-600">
            {education.map((item) => (
              <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">{item}</li>
            ))}
          </ul>
        </SectionReveal>
      </div>

      <SectionReveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <h3 className="text-xl font-bold text-slate-900">수상 및 기타 활동</h3>
        <div className="mt-5 space-y-3 border-l-2 border-indigo-100 pl-4">
          {awards.map((award) => {
            const year = award.slice(0, 4);
            const desc = award.slice(5);
            return (
              <div key={award} className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm font-bold text-indigo-700">{year}</p>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
