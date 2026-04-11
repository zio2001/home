import Link from 'next/link';
import { contactInfo } from '@/lib/siteData';

export default function HeroSection() {
  return (
    <section className="grid items-center gap-8 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100 lg:grid-cols-2 lg:p-10">
      <div>
        <p className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-brand-purple">
          DIGITAL EDUCATION EXPERT
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          안녕하세요,
          <br />저는 최준호입니다
        </h1>
        <p className="mt-4 text-lg font-semibold text-brand-blue">사람, 교육, 기술을 연결하는 디지털융합 강사</p>
        <p className="mt-5 whitespace-pre-line leading-relaxed text-slate-600">
          생성형 AI, 디지털 도구, 콘텐츠 제작, HR 실무 교육까지
          현장에서 바로 적용할 수 있는 교육과 컨설팅을 제공합니다.
          복잡한 기술을 쉽게 풀어내고, 배움이 실제 변화로 이어지도록 돕는 것이
          제가 추구하는 교육의 방향입니다.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link href="/contact" className="rounded-xl bg-brand-blue px-4 py-3 text-center font-semibold text-white shadow hover:bg-blue-700">
            강의 문의하기
          </Link>
          <Link href="/programs" className="rounded-xl bg-brand-purple px-4 py-3 text-center font-semibold text-white shadow hover:bg-purple-700">
            프로그램 보기
          </Link>
          <Link href={contactInfo.resumeFile} download className="rounded-xl bg-brand-pink px-4 py-3 text-center font-semibold text-white shadow hover:bg-pink-700">
            프로필 다운로드
          </Link>
          <Link href={contactInfo.fanCafe} target="_blank" className="rounded-xl bg-slate-900 px-4 py-3 text-center font-semibold text-white shadow hover:bg-slate-700">
            네이버 팬카페
          </Link>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-inner">
        <img src={contactInfo.profilePhoto} alt="최준호 강사 프로필" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}
