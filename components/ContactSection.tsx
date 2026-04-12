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

const STORAGE_KEY = 'metablock-inquiries';

function todayKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      setInquiries(JSON.parse(raw) as Inquiry[]);
    } catch {
      setInquiries([]);
    }
  }, []);

  const stats = useMemo(() => {
    const today = todayKey(new Date());
    const byType: Record<string, number> = {};
    inquiries.forEach((item) => {
      byType[item.type] = (byType[item.type] || 0) + 1;
    });
    return {
      total: inquiries.length,
      today: inquiries.filter((item) => item.createdAt.startsWith(today)).length,
      byType
    };
  }, [inquiries]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = '이름을 입력해 주세요.';
    if (!form.phone.trim()) nextErrors.phone = '연락처를 입력해 주세요.';
    if (!form.type.trim()) nextErrors.type = '문의 유형을 선택해 주세요.';
    if (!form.message.trim()) nextErrors.message = '문의 내용을 입력해 주세요.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const inquiry: Inquiry = { ...form, createdAt: new Date().toISOString() };
    const next = [inquiry, ...inquiries];
    setInquiries(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

    setForm({ name: '', phone: '', type: '', message: '' });
    setErrors({});
    setNotice('문의가 접수되었습니다. 빠르게 확인 후 연락드리겠습니다.');
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-6">
      <SectionReveal>
        <div>
          <p className="text-sm font-bold text-indigo-700">CONTACT</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">문의하기</h2>
        </div>
      </SectionReveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Link href={`tel:${contactInfo.phoneLink}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
          <p className="font-bold text-slate-900">전화 상담</p><p className="mt-2 text-slate-600">{contactInfo.phoneDisplay}</p>
        </Link>
        <Link href={`mailto:${contactInfo.email}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
          <p className="font-bold text-slate-900">이메일 문의</p><p className="mt-2 text-slate-600">{contactInfo.email}</p>
        </Link>
        <Link href={contactInfo.openKakao} target="_blank" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
          <p className="font-bold text-slate-900">오픈카톡 문의</p><p className="mt-2 text-slate-600">카카오톡 바로가기</p>
        </Link>
        <Link href={contactInfo.fanCafe} target="_blank" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
          <p className="font-bold text-emerald-700">네이버 팬카페</p><p className="mt-2 text-emerald-700">팬카페 바로가기</p>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <h3 className="text-2xl font-black text-slate-900">문의 폼</h3>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            {[
              { key: 'name', label: '이름', type: 'text', placeholder: '성함을 입력해 주세요' },
              { key: 'phone', label: '연락처', type: 'text', placeholder: '연락 가능한 번호를 입력해 주세요' }
            ].map((field) => (
              <div key={field.key}>
                <label htmlFor={field.key} className="mb-1 block text-sm font-semibold text-slate-700">{field.label}</label>
                <input id={field.key} type={field.type} placeholder={field.placeholder} value={form[field.key as 'name' | 'phone']} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-indigo-100 transition focus:ring" />
                {errors[field.key] && <p className="mt-1 text-sm text-red-600">{errors[field.key]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="type" className="mb-1 block text-sm font-semibold text-slate-700">문의 유형</label>
              <select id="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-indigo-100 transition focus:ring">
                <option value="">유형을 선택해 주세요</option>
                <option value="강의 문의">강의 문의</option>
                <option value="컨설팅 문의">컨설팅 문의</option>
                <option value="협업 제안">협업 제안</option>
                <option value="기타">기타</option>
              </select>
              {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">문의 내용</label>
              <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-indigo-100 transition focus:ring" placeholder="교육 대상, 희망 일정, 필요 주제 등을 입력해 주세요." />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <button type="submit" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">문의 접수하기</button>
            {notice && <p className="text-sm font-semibold text-emerald-600">{notice}</p>}
          </form>
        </SectionReveal>

        <SectionReveal className="space-y-4" delayMs={120}>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p className="text-sm text-slate-500">총 문의 수</p>
            <p className="mt-2 text-3xl font-black text-indigo-700">{stats.total}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p className="text-sm text-slate-500">오늘 접수 수</p>
            <p className="mt-2 text-3xl font-black text-blue-700">{stats.today}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p className="text-sm text-slate-500">문의 유형별 통계</p>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              {Object.keys(stats.byType).length === 0 ? (
                <p>아직 접수된 문의가 없습니다.</p>
              ) : (
                Object.entries(stats.byType).map(([type, count]) => (
                  <p key={type} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span>{type}</span><span className="font-bold text-indigo-700">{count}건</span></p>
                ))
              )}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
