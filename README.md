# 최준호 강사 공식 홈페이지 (Next.js + TypeScript + Tailwind)

기관/기업/교육 담당자가 빠르게 신뢰를 느끼고 문의할 수 있도록 구성한 단일 페이지 공식 소개 사이트입니다.

## 1) 파일 구조

```bash
app/page.tsx
components/NavBar.tsx
components/HeroSection.tsx
components/AboutSection.tsx
components/ValueSection.tsx
components/ProgramSection.tsx
components/PortfolioSection.tsx
components/ReviewSection.tsx
components/ContactSection.tsx
components/Footer.tsx
```

- `app/page.tsx`: 섹션 컴포넌트 조립만 담당
- `components/*`: 섹션별 UI 및 텍스트/데이터 관리

## 2) 어디를 수정하면 되나요?

초보자도 텍스트만 바꿔 운영할 수 있도록 각 컴포넌트 상단에 수정용 객체/배열이 정리되어 있습니다.

### 강사명/메인 문구
- 파일: `components/HeroSection.tsx`
- `heroContent` 객체의 `name`, `mainCopy`, `description` 수정

### 강사 소개/철학
- 파일: `components/AboutSection.tsx`
- `aboutData` 객체 수정

### 핵심 가치
- 파일: `components/ValueSection.tsx`
- `values` 배열에서 카드별 `title`, `description`, `icon` 수정

### 강의 프로그램
- 파일: `components/ProgramSection.tsx`
- `programs` 배열에 프로그램 정보를 수정/추가

### 포트폴리오(기관 사례)
- 파일: `components/PortfolioSection.tsx`
- `portfolioItems` 배열 수정

### 후기
- 파일: `components/ReviewSection.tsx`
- `reviews` 배열 수정

### 연락처/문의 링크
- 파일: `components/ContactSection.tsx`
- `contactInfo`의 이메일, 전화번호, 오픈채팅 링크 수정

### 하단 푸터 정보
- 파일: `components/Footer.tsx`
- `footerInfo` 수정

## 3) 실행 방법

프로젝트 루트에서 아래 순서대로 실행하세요.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 확인할 수 있습니다.

## 4) 유지보수 팁

- 섹션 순서를 바꾸고 싶다면 `app/page.tsx`에서 컴포넌트 순서만 조정하면 됩니다.
- 카드 개수는 배열에 객체를 추가/삭제하면 자동으로 반영됩니다.
- Tailwind 클래스만 수정해도 색상/여백/폰트 조정이 가능합니다.
