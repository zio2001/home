import Link from 'next/link';
import { contactInfo, siteName } from '@/lib/siteData';
import SectionReveal from '@/components/SectionReveal';

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24">
      <SectionReveal>
        <div className="grid items-center gap-8 rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-[0_25px_80px_-35px_rgba(37,99,235,0.45)] sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-12">
          <div>
            <p className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold tracking-wider text-indigo-700">
              DIGITAL EDUCATION EXPERT
            </p>
            <p className="mt-4 text-base font-bold text-indigo-700">{siteName}</p>
            <h1 className="mt-3 whitespace-pre-line text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {`안녕하세요,\n저는 최준호입니다`}
            </h1>
            <p className="mt-4 text-xl font-bold text-blue-700">사람, 교육, 기술을 연결하는 디지털융합 강사</p>
            <p className="mt-5 max-w-2xl whitespace-pre-line leading-relaxed text-slate-600">
              생성형 AI, 디지털 도구, 콘텐츠 제작, HR 실무 교육까지 현장에서 바로 적용할 수 있는 교육과 컨설팅을 제공합니다.
              복잡한 기술을 쉽게 풀어내고, 배움이 실제 변화로 이어지도록 돕는 것이 제가 추구하는 교육의 방향입니다.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/#contact" className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700">
                강의 문의하기
              </Link>
              <Link href="/#programs" className="rounded-xl bg-indigo-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-700">
                프로그램 보기
              </Link>
              <Link href={contactInfo.resumeFile} download className="rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:-translate-y-0.5 hover:bg-violet-700">
                프로필 다운로드
              </Link>
              <Link href={contactInfo.fanCafe} target="_blank" className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                네이버 팬카페
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl">
            <img src={contactInfo.profilePhoto} alt="최준호 강사 프로필" className="h-full min-h-[420px] w-full object-cover" />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
