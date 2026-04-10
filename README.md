# student-portfolio-template

초보자용 포트폴리오 템플릿입니다. `app/page.tsx`는 섹션 컴포넌트를 가져오기만 하도록 유지해서 구조를 단순하게 만들었습니다.

## 섹션 구성
- Home
- About
- Projects (카드 3개)
- Contact

## 폴더 구조
- `app/page.tsx` : 섹션 컴포넌트 연결
- `components/NavBar.tsx`
- `components/HomeSection.tsx`
- `components/AboutSection.tsx`
- `components/ProjectsSection.tsx`
- `components/ContactSection.tsx`

## 수정 위치
1. 이름 / 한 줄 소개: `components/HomeSection.tsx`
2. 자기소개 문단: `components/AboutSection.tsx`
3. 프로젝트 3개 카드 내용: `components/ProjectsSection.tsx`
4. 이메일 / 전화번호: `components/ContactSection.tsx`

## 이미지 수정
- 기본 프로젝트 이미지는 `/public/images/project-1.svg` ~ `project-3.svg`를 사용합니다.
- 같은 파일명으로 교체하면 바로 반영됩니다.

## 스타일
- Tailwind CSS 유틸리티 클래스로 구성되어 있습니다.
- 여백, 색상, 폰트 크기는 각 컴포넌트의 `className`에서 바로 수정할 수 있습니다.

## 반응형
- 모바일 기준으로 작성되었고, 화면이 넓어지면 자동으로 레이아웃이 확장됩니다.
