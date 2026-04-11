# 메타블럭 아카데미 (Next.js App Router)

최준호 강사의 공식 브랜딩 사이트를 위해 제작한 **원페이지 스크롤형** 홈페이지입니다.

## 실행 방법

```bash
npm install
npm run dev
```

프로덕션 빌드:

```bash
npm run build
npm run start
```

## 주요 구조

- `app/page.tsx`: 원페이지 섹션 조합 (홈/프로그램/소개/서비스/경력/문의)
- `components/NavBar.tsx`: 모바일 햄버거 메뉴 포함 고정 헤더
- `components/SectionReveal.tsx`: 스크롤 등장 애니메이션 래퍼 (framer-motion)
- `components/*Section.tsx`: 섹션별 UI
- `components/ContactSection.tsx`: 문의 폼 + localStorage 실시간 통계
- `lib/siteData.ts`: 사이트명/메뉴/연락처/프로그램 공통 데이터

## 자산 교체

- 프로필 이미지 경로는 `/profile-junho-choi.jpg`를 유지하며, 현재는 `app/profile-junho-choi.jpg/route.ts`에서 동적으로 이미지를 반환합니다.
- 프로필 PDF: `public/profile-junho-choi.pdf`

## 링크 수정 위치

`lib/siteData.ts`의 `contactInfo` 수정:

- `email`
- `phoneDisplay`
- `phoneLink`
- `openKakao`
- `fanCafe`
- `profilePdf`
- `profileImage`
