'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import PageHero from '@/components/PageHero';
import { contactInfo } from '@/lib/siteData';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = '이름을 입력해 주세요.';
    if (!form.phone.trim()) nextErrors.phone = '연락처를 입력해 주세요.';
    if (!form.type.trim()) nextErrors.type = '문의 유형을 입력해 주세요.';
    if (!form.message.trim()) nextErrors.message = '문의 내용을 입력해 주세요.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);

    // TODO: 추후 문자 API 또는 CRM 연동 시 이 지점에서 fetch('/api/contact') 또는 서버 액션 연결.
    // TODO: 기관별 자동 응답 템플릿, 상담 배정 로직을 추가할 수 있도록 payload 구조를 유지.
    console.log('문의 데이터', form);
  };

  return (
    <div className="space-y-8">
      <PageHero
        title="문의하기"
        description="교육 목적과 대상에 맞춰 맞춤형 프로그램을 제안드립니다.\n편하게 문의 주시면 빠르게 답변드리겠습니다."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link href={`tel:${contactInfo.phoneLink}`} className="card hover:bg-slate-50">
          <h2 className="font-bold text-brand-navy">전화 상담</h2>
          <p className="mt-2 text-slate-700">{contactInfo.phoneDisplay}</p>
        </Link>
        <Link href={`mailto:${contactInfo.email}`} className="card hover:bg-slate-50">
          <h2 className="font-bold text-brand-navy">이메일 문의</h2>
          <p className="mt-2 text-slate-700">{contactInfo.email}</p>
        </Link>
        <Link href={contactInfo.openKakao} target="_blank" className="card hover:bg-slate-50">
          <h2 className="font-bold text-brand-navy">오픈카톡 문의</h2>
          <p className="mt-2 text-brand-blue">카카오톡 상담 바로가기</p>
        </Link>
        <Link href={contactInfo.fanCafe} target="_blank" className="card hover:bg-slate-50">
          <h2 className="font-bold text-brand-navy">네이버 팬카페</h2>
          <p className="mt-2 text-slate-700">팬카페 바로가기</p>
        </Link>
      </section>

      <section className="card">
        <h2 className="text-2xl font-black text-brand-navy">문의 폼</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold">이름</label>
            <input
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">연락처</label>
            <input
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">문의 유형</label>
            <input
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              placeholder="예: 공공기관 특강, 기업 사내교육, 컨설팅"
            />
            {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">문의 내용</label>
            <textarea
              className="min-h-36 w-full rounded-xl border border-slate-300 px-4 py-3"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>
          <button type="submit" className="rounded-xl bg-brand-blue px-6 py-3 font-bold text-white hover:bg-blue-700">
            문의 보내기
          </button>
          {submitted && <p className="text-sm font-semibold text-emerald-600">문의가 정상적으로 접수되었습니다. 확인 후 빠르게 답변드리겠습니다.</p>}
        </form>
      </section>
    </div>
  );
}
