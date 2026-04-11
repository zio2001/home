import Link from "next/link";
import { contactLinks } from "@/lib/siteData";

export default function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-blue-700">DIGITAL EDUCATION EXPERT</p>
        <h1 className="mt-4 whitespace-pre-line text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          {"안녕하세요,\n저는 최준호입니다"}
        </h1>
        <p className="mt-5 text-xl font-semibold text-slate-700">사람, 교육, 기술을 연결하는 디지털융합 강사</p>
        <p className="mt-6 whitespace-pre-line leading-relaxed text-slate-600">
          {"생성형 AI, 디지털 도구, 콘텐츠 제작, HR 실무 교육까지\n현장에서 바로 적용할 수 있는 교육과 컨설팅을 제공합니다.\n복잡한 기술을 쉽게 풀어내고, 배움이 실제 변화로 이어지도록 돕는 것이\n제가 추구하는 교육의 방향입니다."}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link href="/contact" className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800">강의 문의하기</Link>
          <Link href="/programs" className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-700 hover:bg-blue-50">프로그램 보기</Link>
          <a href={contactLinks.profilePdf} download className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100">프로필 다운로드</a>
          <a href={contactLinks.fanCafe} target="_blank" rel="noreferrer" className="rounded-xl border border-purple-200 bg-purple-50 px-5 py-3 text-center font-semibold text-purple-700 hover:bg-purple-100">네이버 팬카페</a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100 blur-xl" />
        <img
          src={contactLinks.profileImage}
          alt="최준호 강사 프로필"
          className="w-full rounded-3xl border border-blue-100 bg-white object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
