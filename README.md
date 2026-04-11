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

## GitHub 머지 충돌 빠른 해결

PR에서 `This branch has conflicts that must be resolved`가 뜨면, 로컬에서 아래 순서로 해결하세요.

```bash
git fetch origin
git checkout <작업브랜치>
git merge origin/main
```

충돌이 발생하면 프로젝트 제공 스크립트로 일괄 처리할 수 있습니다.

```bash
# 현재 브랜치 변경사항(리디자인 결과)을 우선 유지
scripts/resolve_conflicts.sh ours

# 또는 main 쪽 내용을 우선 유지
scripts/resolve_conflicts.sh theirs
```

그 다음:

```bash
git commit -m "Resolve merge conflicts"
git push
```

충돌이 계속 반복되면 아래 원클릭 스크립트를 사용하세요.

```bash
# 현재 브랜치에서 origin/main을 가져와 -X ours 전략으로 머지 시도
# 실패 시 알려진 충돌 파일 자동 처리 + 커밋까지 진행
scripts/sync_pr_with_main.sh ours main
git push
```

PR 머지 버튼이 계속 비활성화되면(충돌 목록이 계속 동일할 때) 아래 리베이스 스크립트를 실행하세요.

```bash
scripts/rebase_pr_on_main.sh main
```

리베이스가 성공하면 브랜치를 자동 `--force-with-lease` 푸시하고, GitHub PR을 새로고침하면 머지 가능 상태로 바뀝니다.

## 근본 해결(반복 충돌 루프 끊기)

기존 PR에서 같은 충돌이 계속 반복되면, 오래된 PR 브랜치를 계속 살리는 대신 **새 브랜치를 main 기준으로 재생성**하는 것이 가장 안정적입니다.

```bash
# 현재(충돌 많은) 브랜치에서 실행
scripts/recreate_pr_branch.sh clean-redesign main
```

이 스크립트는 다음을 자동으로 수행합니다.
- `origin/main`에서 새 브랜치 생성
- 현재 브랜치 변경분을 squash merge로 1개 커밋으로 정리
- 새 브랜치 push

그 후에는 기존 PR을 닫고, 새 브랜치로 PR을 다시 열면 충돌 반복 가능성이 크게 줄어듭니다.
