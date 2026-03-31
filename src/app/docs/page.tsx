import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { PageContainer } from "@/components/layout/page-container"

const DOC_SECTIONS = [
  { id: "getting-started", label: "🚀 시작하기" },
  { id: "tech-stack", label: "📦 기술 스택" },
  { id: "project-structure", label: "🗂 프로젝트 구조" },
  { id: "component-usage", label: "🎨 컴포넌트 사용법" },
  { id: "dark-mode", label: "🌙 다크모드" },
]

function DocSidebar() {
  return (
    <nav className="sticky top-20 space-y-2 hidden md:block">
      {DOC_SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="block px-4 py-2 text-sm rounded-md hover:bg-accent transition-colors"
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4 pt-8 sm:pt-12 md:pt-16">
        <PageContainer className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            문서
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Next.js 16 스타터킷 설정 및 사용법을 안내합니다.
          </p>
        </PageContainer>
      </section>

      {/* Docs Content */}
      <section>
        <PageContainer>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Menu className="h-4 w-4" />
                    문서 목차
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>문서 목차</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-6 space-y-2">
                    {DOC_SECTIONS.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block px-4 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div>
              <DocSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* 시작하기 */}
              <section id="getting-started" className="space-y-4 scroll-mt-20">
                <h2 className="text-3xl font-bold">🚀 시작하기</h2>
                <p className="text-muted-foreground">
                  이 스타터킷을 시작하기 위해 필요한 모든 단계입니다.
                </p>

                <div className="space-y-4 border-l-2 border-primary/20 pl-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1단계: 저장소 클론</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>git clone https://github.com/your-repo/claude-nextjs-starters.git</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">2단계: 의존성 설치</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>npm install</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">3단계: 개발 서버 실행</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>npm run dev</code>
                    </pre>
                    <p className="text-sm text-muted-foreground mt-2">
                      그리고 브라우저에서 http://localhost:3000 으로 접속합니다.
                    </p>
                  </div>
                </div>
              </section>

              <Separator />

              {/* 기술 스택 */}
              <section id="tech-stack" className="space-y-4 scroll-mt-20">
                <h2 className="text-3xl font-bold">📦 기술 스택</h2>
                <p className="text-muted-foreground">
                  이 프로젝트에 포함된 기술들입니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">프레임워크</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Next.js 16.2.1 - React 프레임워크</li>
                      <li>• React 19.2.4 - UI 라이브러리</li>
                      <li>• Turbopack - 빌드 번들러</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">스타일링</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TailwindCSS v4 - Utility 스타일</li>
                      <li>• shadcn/ui - UI 컴포넌트</li>
                      <li>• Lucide React - 아이콘</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">언어 및 도구</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TypeScript 5 - 타입 안전성</li>
                      <li>• ESLint 9 - 코드 품질</li>
                      <li>• React Compiler - 성능 최적화</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">라이브러리</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• next-themes - 다크모드</li>
                      <li>• sonner - 토스트 알림</li>
                      <li>• Radix UI - 접근성 컴포넌트</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              {/* 프로젝트 구조 */}
              <section id="project-structure" className="space-y-4 scroll-mt-20">
                <h2 className="text-3xl font-bold">🗂 프로젝트 구조</h2>
                <p className="text-muted-foreground">
                  프로젝트의 폴더 구조를 설명합니다.
                </p>

                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`src/
├── app/                 # 페이지 및 라우팅
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 홈 페이지
│   ├── blog/            # 블로그 페이지
│   ├── components/      # 컴포넌트 갤러리
│   ├── docs/            # 문서 페이지
│   └── portfolio/       # 포트폴리오 페이지
├── components/          # React 컴포넌트
│   ├── ui/              # shadcn/ui 컴포넌트
│   └── layout/          # 레이아웃 컴포넌트
├── lib/                 # 유틸리티 함수
│   └── utils.ts         # cn() 함수
└── types/               # TypeScript 타입`}</code>
                </pre>
              </section>

              <Separator />

              {/* 컴포넌트 사용법 */}
              <section id="component-usage" className="space-y-4 scroll-mt-20">
                <h2 className="text-3xl font-bold">🎨 컴포넌트 사용법</h2>
                <p className="text-muted-foreground">
                  shadcn/ui 컴포넌트 사용 방법입니다.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Button 컴포넌트</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div>
      <Button>기본 버튼</Button>
      <Button variant="outline">테두리 버튼</Button>
      <Button size="lg">큰 버튼</Button>
    </div>
  )
}`}</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Card 컴포넌트</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
      </CardHeader>
      <CardContent>
        카드 내용
      </CardContent>
    </Card>
  )
}`}</code>
                    </pre>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    모든 shadcn/ui 컴포넌트는 @/components/ui에서 import할 수 있습니다.
                  </p>
                </div>
              </section>

              <Separator />

              {/* 다크모드 */}
              <section id="dark-mode" className="space-y-4 scroll-mt-20">
                <h2 className="text-3xl font-bold">🌙 다크모드</h2>
                <p className="text-muted-foreground">
                  이 프로젝트는 next-themes를 사용하여 다크모드를 구현합니다.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">동작 원리</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• next-themes: 클라이언트 사이드 테마 관리</li>
                      <li>• localStorage: 사용자 선택 저장</li>
                      <li>• CSS 변수: 동적 색상 변경</li>
                      <li>• prefers-color-scheme: OS 기본값 감지</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">사용 방법</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`'use client'

import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      테마 변경
    </button>
  )
}`}</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">색상 커스터마이징</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      src/app/globals.css에서 CSS 변수를 수정합니다:
                    </p>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... 더 많은 색상 */
}

.dark {
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  /* ... 더 많은 색상 */
}`}</code>
                    </pre>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  )
}
