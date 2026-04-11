'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import SectionReveal from '@/components/SectionReveal';
import { contactInfo } from '@/lib/siteData';

type Inquiry = {
  name: string;
  phone: string;
  type: string;
  message: string;
  createdAt: string;
};

const STORAGE_KEY = 'meta-block-inquiries';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [items, setItems] = useState<Inquiry[]>([]);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    setItems(JSON.parse(raw));
  }, []);

  const today = new Date().toISOString().slice(0, 10);

  const stats = useMemo(() => {
    const todayCount = items.filter((item) => item.createdAt.startsWith(today)).length;
    const typeMap: Record<string, number> = {};
    items.forEach((item) => {
      typeMap[item.type] = (typeMap[item.type] || 0) + 1;
    });
    return { total: items.length, todayCount, typeMap };
  }, [items, today]);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = '이름을 입력해 주세요.';
    if (!form.phone.trim()) nextErrors.phone = '연락처를 입력해 주세요.';
    if (!form.type.trim()) nextErrors.type = '문의 유형을 입력해 주세요.';
    if (!form.message.trim()) nextErrors.message = '문의 내용을 입력해 주세요.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload: Inquiry = { ...form, createdAt: new Date().toISOString() };
    const nextItems = [payload, ...items];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
    setItems(nextItems);

    // TODO: 추후 서버 액션 또는 API Route 연동 시 payload를 백엔드로 전송.
    setForm({ name: '', phone: '', type: '', message: '' });
    setSuccess('문의가 접수되었습니다. 빠르게 연락드리겠습니다.');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-8">
      <SectionReveal>
        <div className="section-heading">
          <p className="section-label">CONTACT</p>
          <h2>문의하기</h2>
          <p>교육 목적과 대상에 맞춰 맞춤형 프로그램을 제안드립니다. 편하게 문의 주시면 빠르게 답변드리겠습니다.</p>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Link href={`tel:${contactInfo.phoneLink}`} className="card hover:-translate-y-1 transition-transform"><strong>전화 상담</strong><p className="mt-2">{contactInfo.phoneDisplay}</p></Link>
          <Link href={`mailto:${contactInfo.email}`} className="card hover:-translate-y-1 transition-transform"><strong>이메일 문의</strong><p className="mt-2">{contactInfo.email}</p></Link>
          <Link href={contactInfo.openKakao} target="_blank" className="card hover:-translate-y-1 transition-transform"><strong>오픈카톡 문의</strong><p className="mt-2 text-brand-blue">카카오톡 상담 바로가기</p></Link>
          <Link href={contactInfo.fanCafe} target="_blank" className="card hover:-translate-y-1 transition-transform"><strong>네이버 팬카페</strong><p className="mt-2 text-emerald-700">팬카페 바로가기</p></Link>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={submitForm} className="card space-y-4">
            <h3 className="text-xl font-black text-brand-navy">문의 폼</h3>
            <div>
              <label className="mb-1 block text-sm font-semibold">이름</label>
              <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold">연락처</label>
              <input className="input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold">문의 유형</label>
              <input className="input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} placeholder="예: 기관 특강, 기업 교육, 컨설팅" />
              {errors.type && <p className="text-sm text-red-600">{errors.type}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold">문의 내용</label>
              <textarea className="input min-h-32" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
            </div>
            <button className="btn-primary w-full" type="submit">문의 보내기</button>
            {success && <p className="text-sm font-semibold text-emerald-700">{success}</p>}
          </form>

          <aside className="space-y-4">
            <article className="card">
              <h4 className="text-lg font-black text-brand-navy">실시간 문의 통계</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-600">총 문의 수</p>
                  <p className="text-2xl font-black text-brand-navy">{stats.total}</p>
                </div>
                <div className="rounded-2xl bg-purple-50 p-4">
                  <p className="text-sm text-slate-600">오늘 접수 수</p>
                  <p className="text-2xl font-black text-brand-purple">{stats.todayCount}</p>
                </div>
              </div>
            </article>
            <article className="card">
              <h4 className="text-lg font-black text-brand-navy">문의 유형별 현황</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {Object.entries(stats.typeMap).length === 0 ? (
                  <li>아직 접수된 문의가 없습니다.</li>
                ) : (
                  Object.entries(stats.typeMap).map(([type, count]) => (
                    <li key={type} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                      <span>{type}</span>
                      <strong>{count}건</strong>
                    </li>
                  ))
                )}
              </ul>
            </article>
          </aside>
        </div>
      </SectionReveal>
    </section>
  );
}
