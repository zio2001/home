# 최준호 강사 홈페이지 (Next.js)

공공기관, 교육기관, 기업 담당자가 신뢰하고 바로 문의할 수 있도록 구성한 **멀티페이지형 공식 소개 홈페이지**입니다.

## 1) 프로젝트 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

프로덕션 빌드 확인:

```bash
npm run build
npm run start
```

## 2) 수정할 주요 파일 위치

- 레이아웃/공통: `app/layout.tsx`, `components/NavBar.tsx`, `components/Footer.tsx`
- 공통 스타일: `app/globals.css`
- 홈: `app/page.tsx`, `components/HeroSection.tsx`
- 프로그램: `app/programs/page.tsx`
- 소개: `app/about/page.tsx`
- 서비스: `app/services/page.tsx`
- 경력: `app/career/page.tsx`
- 문의: `app/contact/page.tsx`
- 공통 데이터(연락처/메뉴/프로그램): `lib/siteData.ts`

## 3) 프로필 이미지 교체 방법

1. 새 이미지 파일을 준비합니다.
2. 파일명을 `profile-junho-choi.jpg`로 맞춥니다.
3. `public/profile-junho-choi.jpg` 파일을 교체합니다.
   - 현재 저장소에는 바이너리 미리보기 이슈를 피하기 위해 텍스트 placeholder가 들어 있으므로, 실제 운영 시 반드시 정상 JPEG로 교체하세요.

> 페이지에서 참조하는 경로는 `/profile-junho-choi.jpg` 입니다.

## 4) PDF 교체 방법

1. 새 프로필 PDF를 준비합니다.
2. 파일명을 `profile-junho-choi.pdf`로 맞춥니다.
3. `public/profile-junho-choi.pdf` 파일을 교체합니다.

> 다운로드 버튼 경로는 `/profile-junho-choi.pdf` 입니다.

## 5) 연락처/이메일/팬카페/오픈카톡 링크 수정 위치

`lib/siteData.ts`의 `contactInfo` 객체에서 아래 값을 수정하면 전 페이지에 반영됩니다.

- `email`
- `phoneDisplay`
- `phoneLink`
- `openKakao`
- `fanCafe`
- `resumeFile`
- `profilePhoto`
