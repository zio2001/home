"use client";

import { useState } from "react";

const inquiryTypes = ["강의 문의", "컨설팅 문의", "기관 협업 문의", "기타"];

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus("전송 중입니다...");

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      type: String(formData.get("type") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "문의 전송에 실패했습니다.");
      setStatus("문의가 접수되었습니다. 빠르게 확인 후 연락드리겠습니다.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form action={handleSubmit} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">온라인 문의</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-700">이름
          <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm text-slate-700">연락처
          <input name="phone" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
      </div>

      <label className="mt-4 block text-sm text-slate-700">문의 유형
        <select name="type" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
          {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
        </select>
      </label>

      <label className="mt-4 block text-sm text-slate-700">문의 내용
        <textarea name="message" required rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </label>

      <button disabled={isSubmitting} className="mt-5 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-60">
        문의 보내기
      </button>
      <p className="mt-3 text-sm text-slate-600">{status}</p>
    </form>
  );
}
