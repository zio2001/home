# Beginner Portfolio Website

초보자도 쉽게 수정할 수 있도록 `page.tsx`는 섹션 컴포넌트를 불러오기만 하도록 구성했습니다.

## 구조

- `app/page.tsx`: 전체 페이지 조립 (컴포넌트 import 및 순서 관리)
- `components/HomeSection.tsx`: 이름 + 한 줄 소개
- `components/AboutSection.tsx`: 자기소개 문단
- `components/ProjectsSection.tsx`: 프로젝트 카드 3개
- `components/ContactSection.tsx`: 이메일/전화번호
- `components/NavBar.tsx`: 상단 메뉴(Home, About, Projects, Contact)

## 어디를 수정하면 되나요?

### 1) 이름과 한 줄 소개
- 파일: `components/HomeSection.tsx`
- `홍길동`, 소개 문장을 원하는 내용으로 바꾸면 됩니다.

### 2) 자기소개
- 파일: `components/AboutSection.tsx`
- 문단 텍스트를 본인 소개로 수정하세요.

### 3) 프로젝트 카드(3개 유지)
- 파일: `components/ProjectsSection.tsx`
- 상단의 `projects` 배열에서 `title`, `description`, `image`를 수정하세요.
- **카드 개수는 3개를 유지**하면 현재 레이아웃이 가장 깔끔합니다.

### 4) 연락처
- 파일: `components/ContactSection.tsx`
- 이메일(`mailto:`), 전화번호(`tel:`)를 본인 정보로 교체하세요.

## 스타일

- Tailwind CSS 유틸리티 클래스를 사용했습니다.
- 여백/색상/글자 크기 조정은 각 컴포넌트의 `className`만 수정하면 됩니다.

## 모바일 대응

- 모든 섹션은 모바일 우선으로 작성되어 작은 화면에서도 읽기 쉽게 구성되어 있습니다.
- 프로젝트 카드는 모바일 1열, 태블릿 이상에서 다열 레이아웃으로 변경됩니다.
