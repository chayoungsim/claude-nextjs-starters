# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소의 코드로 작업할 때 참고하는 가이드를 제공합니다.

## 빠른 명령어

- **개발**: `npm run dev` → http://localhost:3000
- **빌드**: `npm run build` → Turbopack으로 프로덕션 컴파일
- **프로덕션**: `npm run start` → 빌드 후 프로덕션 서버 실행
- **린팅**: `npm run lint` → 코드베이스에 ESLint 실행

## 아키텍처 개요

### 기술 스택
- **프레임워크**: Next.js 16.2.1 (App Router, Turbopack, React Compiler)
- **런타임**: React 19.2.4 with TypeScript 5
- **스타일링**: TailwindCSS v4 (@theme, okLCh 색상, CSS 변수)
- **UI 컴포넌트**: shadcn/ui v4 (radix-nova 스타일, 22+ 사전 설치)
- **테마 관리**: next-themes (라이트/다크/시스템 모드 지원, localStorage)
- **아이콘**: lucide-react v1.7.0
- **알림**: sonner v2.0.7 (토스트 알림)

### 상위 구조

#### Root 레이아웃 & 프로바이더 (`src/app/layout.tsx`)
- **프로바이더 계층**: ThemeProvider → TooltipProvider → App Shell (Header/Footer)
- **전역 설정**:
  - `<html>`과 `<body>`의 `suppressHydrationWarning`은 next-themes의 하이드레이션 미스매치 방지
  - Geist 폰트 변수는 CSS 커스텀 프로퍼티로 주입
  - `main`은 `flex-1`로 스티키 푸터 레이아웃 구현
  - Toaster는 전역적으로 우측 하단에 위치
- **중요**: ThemeProvider는 `attribute="class"` (HTML 루트의 `.dark` 토글), `enableSystem=true` (prefers-color-scheme 존중), `storageKey="theme"` (저장소 지속성) 사용

#### 라우팅 & 페이지 (`src/app/`)
- `page.tsx` (루트) → Hero + Features + CTA 섹션
- `blog/page.tsx` → 블로그 글 목록 (Card 그리드)
- `blog/[slug]/page.tsx` → **Next.js 16 async params 사용 동적 라우트** (`params`는 `Promise<{slug: string}>`)
- `components/page.tsx` → shadcn/ui 컴포넌트 갤러리 (Tabs 포함, 클라이언트: `'use client'`)
- `docs/page.tsx` → 문서 페이지 (2컬럼 레이아웃, 스티키 사이드바 데스크탑/Sheet 모바일)
- `portfolio/page.tsx` → 프로젝트 포트폴리오 (태그 기반 필터링, 클라이언트: `'use client'`)

#### 컴포넌트 구성

**레이아웃 컴포넌트** (`src/components/layout/`)
- `header.tsx` ('use client'): 스티키 네비바 (데스크탑: NavigationMenu, 모바일: Sheet, 테마 토글)
- `footer.tsx` (Server): 정적 푸터 (링크 + 저작권)
- `page-container.tsx` (Server): `max-w-6xl` + 반응형 패딩 제공 (모든 페이지에서 재사용)

**UI 컴포넌트** (`src/components/ui/`)
- shadcn CLI로 자동 생성 (22개 컴포넌트 사전 설치)
- **패턴**: `data-slot` 속성으로 스타일링, `cva` 변형 사용 (class-variance-authority)
- **커스텀 래퍼 없음**: shadcn에서 직접 import (예: `import { Button } from "@/components/ui/button"`)
- 항상 `cn()` 유틸리티로 Tailwind 클래스 병합: `className={cn(기본클래스, 외부클래스)}`

**타입 정의** (`src/types/index.ts`)
- 중앙화된 TypeScript 인터페이스: `NavItem`, `Theme`, `BlogPost`, `Project`, `DocSection`, `DocItem`, `FeatureItem`
- 모두 명명된 export로 제공
- Import: `import type { BlogPost } from "@/types"` 또는 `import { Project } from "@/types"`

### 스타일링 & 테마 시스템

#### TailwindCSS v4 (CSS-First 설정)
- **`tailwind.config.js` 없음**: 설정을 `src/app/globals.css`로 이동
- **`@theme inline` 블록**은 모든 Tailwind 색상/반경 토큰을 CSS 변수 매핑으로 정의
- **CSS 변수**는 `:root` (라이트) 및 `.dark` (다크모드)에서 정의:
  - 색상은 **okLCh 색상 공간** 사용 (지각 일관성 향상)
  - Primary 예시: `--primary: oklch(0.205 0 0)` (라이트) → `oklch(0.922 0 0)` (다크)
- **커스텀 변형**: `@custom-variant dark (&:is(.dark *))`—유틸리티에서 `.dark:` 프리픽스 사용 허용
- **색상 커스터마이징**: globals.css의 `:root`와 `.dark` CSS 변수 편집, `@theme inline` 매핑 업데이트

#### 클래스 병합 유틸리티
```typescript
// src/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
- 항상 `cn()`으로 충돌하는 Tailwind 클래스 안전하게 병합
- 예시: `cn("px-4 py-2", props.className)`은 클래스 충돌 처리

### Server vs Client 컴포넌트

| 컴포넌트 | 타입 | 이유 |
|---------|------|------|
| RootLayout, 페이지들 (blog, docs, portfolio 루트) | Server | 상호작용 없음, 정적 렌더링 |
| Header | Client | `useTheme()`, 이벤트 핸들러 |
| Footer, PageContainer | Server | 순수 JSX, 훅 없음 |
| Components 페이지 | Client | Tabs 상태, Switch/Checkbox 데모 |
| Portfolio 페이지 | Client | `useState`로 태그 필터링 |
| 동적 라우트 `[slug]` | Server | 데이터 조회, 하이드레이션 안전한 async params |

**핵심 규칙**: `'use client'`는 **오직** 상호작용이 필요한 진입점에만 추가합니다. 자식 Server 컴포넌트는 Client 컴포넌트 내부에서 지시어 없이 렌더링됩니다.

### Next.js 16 Breaking Changes (중요)

#### 1. **Async Request API** (params, cookies, headers 등)
```typescript
// ❌ 잘못된 방식 (Next.js 15 스타일)
export default function Page({ params }) {
  const { slug } = params // Next.js 16에서 실패
}

// ✅ 올바른 방식 (Next.js 16)
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
}
```
- 적용 대상: 동적 라우트 페이지, `opengraph-image.tsx`, `twitter-image.tsx`, `sitemap.ts`

#### 2. **Turbopack이 기본값**
- webpack 설정 불필요
- webpack보다 ~700배 빠른 빌드
- webpack 커스텀 설정 있으면 `next build --webpack` 플래그 사용

#### 3. **middleware.ts → proxy.ts** (Deprecated)
- 라우트 프록싱 사용 시 `middleware.ts` → `proxy.ts`로 이름 변경
- 함수명 변경: `export function proxy(request)` (기존: `middleware`)
- 이 스타터에는 미적용 (인증 미들웨어 없음)

#### 4. **Parallel Routes `default.js` 필수**
- `@folder` 문법 사용 시 모든 슬롯에 `default.tsx` **필수**
- 이 스타터에는 미적용 (parallel routes 없음)

#### 5. **React Compiler** (`next.config.ts`의 `reactCompiler: true`)
- 이미 활성화됨, 자동 렌더링 최적화
- 수동으로 `useMemo`/`useCallback` 추가 불필요

### 중요 패턴 & 규칙

#### 다크모드 구현
1. Header는 `useTheme()` 훅 + 테마 토글 버튼 포함
2. 사용자 선택은 localStorage의 `"theme"` 키에 저장
3. 헤드의 인라인 스크립트로 인해 FOUC(Flash of Unstyled Content) 없음
4. "system"으로 설정 시 OS 선호도 존중

#### 새로운 shadcn/ui 컴포넌트 추가
```bash
npx shadcn@latest add 컴포넌트명
```
- `src/components/ui/`에 자동 설치
- 바로 사용: `import { Component } from "@/components/ui/component"`
- 기존 `components.json` 설정 존중

#### 새로운 페이지 생성
1. 라우트와 일치하는 폴더를 `src/app/` 아래에 추가 (예: `src/app/docs/`)
2. 폴더 안에 `page.tsx` 생성
3. **동적 라우트인 경우**: `[param]` 폴더 사용, async `params: Promise<{param: string}>`
4. `PageContainer`로 감싸기 (일관된 레이아웃)
5. `src/components/layout/header.tsx`의 `navItems` 업데이트 (네비게이션 링크 추가)

#### Mock 데이터 vs 실제 데이터베이스
- **현재**: Mock 데이터 인라인 정의 (POSTS 배열, PROJECTS 배열)
- **데이터베이스 추가**: Server 컴포넌트에서 렌더링 전 fetch
- 예시: `src/app/blog/page.tsx`에서 `const posts = await db.query.posts.findMany()`

### 파일 경로 별칭
- `@/*` → `src/*` (모든 import는 `@/` 프리픽스 사용)
- 예시:
  - `import { Button } from "@/components/ui/button"`
  - `import { cn } from "@/lib/utils"`
  - `import type { BlogPost } from "@/types"`

### 이 코드베이스의 특징

- **언어**: 한글 UI 텍스트 (제목, 레이블, 설명), 영문 코드/주석
- **모바일-First**: 모든 페이지 반응형 (Tailwind의 `md:`, `lg:` 브레이크포인트)
- **접근성**: 의미론적 HTML, ARIA 레이블, Radix UI 컴포넌트 (내장 a11y)
- **환경 변수 의존성 없음**: API 키나 환경 변수 없이 로컬에서 실행 가능

### 일반적인 개발 작업

#### 스타일링 수정
- 전역 스타일: `src/app/globals.css`의 `:root`와 `.dark` CSS 변수 편집
- 컴포넌트 스타일: Tailwind 유틸리티 클래스 + 조건부 스타일링에 `cn()` 사용
- 색상 예시: `bg-primary`, `text-muted-foreground`, `border-border`

#### 새로운 네비게이션 항목 추가
1. `src/components/layout/header.tsx`의 `navItems` 배열 업데이트
2. `src/app/` 아래에 해당 페이지/라우트 생성

#### 새로운 블로그 글 생성
1. `src/app/blog/page.tsx`의 `POSTS` 배열에 객체 추가 (제목, slug, 내용 등)
2. 동적 라우트를 통해 자동으로 `/blog/[slug]`에서 사용 가능

#### 테마 색상 업데이트
1. `src/app/globals.css`의 `:root` (라이트) 및 `.dark` (다크모드) CSS 변수 값 편집
2. 새로운 색상 토큰 추가 시 `@theme inline` 블록 업데이트
3. 색상은 okLCh 형식: `oklch(명도 채도 색상)`
