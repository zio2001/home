# 최준호 강사 홈페이지 (Next.js App Router + TypeScript + Tailwind CSS)

공공기관/교육기관/기업 담당자가 빠르게 신뢰하고 문의할 수 있도록 구성한 **멀티페이지 강사 홈페이지**입니다.

## 1) 페이지 구성

- `/` 홈
- `/programs` 프로그램
- `/about` 소개
- `/services` 서비스
- `/career` 경력
- `/contact` 문의하기

메뉴는 고정 헤더에서 각 페이지로 이동하는 방식이며, 원페이지 스크롤이 아닌 **페이지 전환** 방식입니다.

## 2) 파일 구조 (핵심)

```bash
app/
  layout.tsx
  page.tsx
  about/page.tsx
  programs/page.tsx
  services/page.tsx
  career/page.tsx
  contact/page.tsx
  api/contact/route.ts
components/
  layout/NavBar.tsx
  layout/Footer.tsx
  home/HeroSection.tsx
  home/HomeHighlights.tsx
  about/AboutContent.tsx
  programs/ProgramsContent.tsx
  services/ServicesContent.tsx
  career/CareerContent.tsx
  contact/ContactContent.tsx
  contact/ContactForm.tsx
lib/siteData.ts
public/
  ASSETS.md
  (여기에 profile-junho-choi.jpg / profile-junho-choi.pdf 업로드)
```

## 3) 문구를 수정하려면 어디를 바꾸나요?

### 홈 Hero 문구/버튼
- 파일: `components/home/HeroSection.tsx`
- 라벨, 제목, 설명, 버튼 텍스트를 직접 수정

### 소개 페이지
- 파일: `components/about/AboutContent.tsx`
- 소개 문구, 교육 철학, 학력/경력/자격/수상 목록 수정

### 프로그램 페이지
- 파일: `components/programs/ProgramsContent.tsx`
- 프로그램명, 대상, 핵심 내용, 기대 효과 수정

### 서비스 페이지
- 파일: `components/services/ServicesContent.tsx`
- 서비스 카드 내용 수정

### 경력 페이지
- 파일: `components/career/CareerContent.tsx`
- 숫자 카드 및 이력 섹션 수정

## 4) 연락처/이메일/오픈카톡/팬카페 링크 수정 위치

- 파일: `lib/siteData.ts`
- 아래 값을 수정하면 헤더, 푸터, 문의 페이지에 공통 반영됩니다.
  - 전화번호 표시/링크
  - 이메일/메일링크
  - 오픈카톡 링크
  - 네이버 팬카페 링크
  - 프로필 이미지/PDF 경로

## 5) 프로필 이미지/PDF 교체 방법

1. `public/profile-junho-choi.jpg` 파일을 업로드/교체
2. `public/profile-junho-choi.pdf` 파일을 업로드/교체
3. 파일명을 다르게 쓸 경우 `lib/siteData.ts`의 경로도 함께 수정

> Hero의 “프로필 다운로드” 버튼은 `download` 속성으로 연결되어 브라우저 열기 대신 다운로드를 시도합니다.
> PR 도구에서 바이너리 파일 diff 제한이 있어 기본 저장소에는 샘플 JPG/PDF를 넣지 않았습니다. `public/ASSETS.md` 안내대로 파일을 직접 넣어주세요.

## 6) 문의 폼 문자 발송 설정 방법 (Twilio + 이메일 fallback)

문의 폼 제출 시 `app/api/contact/route.ts`에서:
1) **Twilio SMS 전송 시도**
2) 실패/미설정 시 **Resend 이메일 fallback 전송 시도**

### (A) Twilio SMS 환경변수

```bash
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_FROM_NUMBER=+1XXXXXXXXXX
CONTACT_RECEIVER_PHONE=+821034952338
```

### (B) 이메일 fallback (Resend) 환경변수

```bash
RESEND_API_KEY=...
RESEND_FROM_EMAIL=no-reply@yourdomain.com
CONTACT_RECEIVER_EMAIL=zio2002@naver.com
```

### 동작 방식

- Twilio 환경변수가 올바르면 SMS 발송
- SMS 실패 또는 미설정이면 Resend 이메일 발송
- 둘 다 미설정이면 API가 에러를 반환하며, 환경변수 설정이 필요

## 7) 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 확인하세요.

## 8) 초보자용 빠른 수정 순서

1. `lib/siteData.ts`에서 연락처/링크 먼저 수정
2. `components/home/HeroSection.tsx` 문구 수정
3. `components/about`, `programs`, `services`, `career` 문구 수정
4. `public`의 프로필 이미지/PDF 교체
5. 문자 발송이 필요하면 `.env.local`에 Twilio/Resend 키 설정
