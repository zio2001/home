import { NextResponse } from "next/server";

type InquiryPayload = {
  name: string;
  phone: string;
  type: string;
  message: string;
};

function buildInquiryMessage(payload: InquiryPayload) {
  return `[최준호 강사 홈페이지 문의]\n이름: ${payload.name}\n연락처: ${payload.phone}\n문의유형: ${payload.type}\n문의내용: ${payload.message}`;
}

async function sendSmsWithTwilio(text: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.CONTACT_RECEIVER_PHONE;

  if (!sid || !token || !from || !to) return { success: false, reason: "missing_twilio_env" };

  const body = new URLSearchParams({ From: from, To: to, Body: text });
  const auth = Buffer.from(`${sid}:${token}`).toString("base64");

  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  return { success: res.ok, reason: res.ok ? "sent_twilio" : "twilio_failed" };
}

async function sendFallbackEmail(text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_RECEIVER_EMAIL;

  if (!apiKey || !from || !to) return { success: false, reason: "missing_email_env" };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: "[최준호 강사 홈페이지] 문의 접수",
      text,
    }),
  });

  return { success: res.ok, reason: res.ok ? "sent_email" : "email_failed" };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as InquiryPayload;

    if (!payload.name || !payload.phone || !payload.type || !payload.message) {
      return NextResponse.json({ error: "모든 필드를 입력해 주세요." }, { status: 400 });
    }

    const inquiryText = buildInquiryMessage(payload);

    const smsResult = await sendSmsWithTwilio(inquiryText);
    if (smsResult.success) {
      return NextResponse.json({ ok: true, channel: "sms" });
    }

    const emailResult = await sendFallbackEmail(inquiryText);
    if (emailResult.success) {
      return NextResponse.json({ ok: true, channel: "email_fallback" });
    }

    return NextResponse.json(
      {
        error: "문의 전송 채널이 설정되지 않았습니다. SMS/Twilio 또는 이메일 fallback 환경변수를 확인해 주세요.",
        details: { smsResult, emailResult },
      },
      { status: 500 },
    );
  } catch {
    return NextResponse.json({ error: "서버 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
