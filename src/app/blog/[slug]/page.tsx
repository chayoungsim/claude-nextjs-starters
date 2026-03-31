import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { PageContainer } from "@/components/layout/page-container"
import type { BlogPost } from "@/types"

const POSTS: BlogPost[] = [
  {
    slug: "nextjs-16-migration",
    title: "Next.js 16 마이그레이션 가이드",
    description: "Next.js 15에서 16으로의 마이그레이션 과정과 Breaking Changes를 상세히 설명합니다.",
    date: "2026-03-15",
    category: "튜토리얼",
    tags: ["Next.js", "마이그레이션", "가이드"],
    readingTime: "8분",
    content: `Next.js 16으로의 마이그레이션은 몇 가지 Breaking Changes를 포함하고 있습니다.

주요 변경사항:

1. 비동기 Request APIs (Params)
   - cookies(), headers(), params는 이제 Promise로 제공됩니다.
   - async/await을 사용하여 값을 가져와야 합니다.

2. Turbopack이 기본값
   - next dev와 next build 모두 Turbopack을 기본으로 사용합니다.
   - 기존 webpack 커스텀 설정이 있다면 호환성 문제가 발생할 수 있습니다.

3. middleware.ts → proxy.ts
   - 기존 middleware.ts는 proxy.ts로 이름 변경이 권장됩니다.
   - 기능은 동일하지만 네이밍이 변경되었습니다.

마이그레이션 팁:

- 점진적으로 진행하세요
- 각 파일의 async/await 패턴을 검토하세요
- 브라우저 콘솔에서 경고 메시지를 확인하세요
- 빌드 시간을 비교하여 Turbopack의 성능 향상을 확인하세요

이러한 변경사항들이 조금 복잡해 보일 수 있지만, 각각이 개발자 경험을 개선하고 성능을 향상시키기 위한 것입니다.`,
  },
  {
    slug: "tailwind-v4-features",
    title: "TailwindCSS v4 새로운 기능",
    description: "CSS-first 방식과 @theme 문법의 새로운 기능들을 알아봅시다.",
    date: "2026-03-10",
    category: "CSS",
    tags: ["Tailwind", "CSS", "v4"],
    readingTime: "6분",
    content: `TailwindCSS v4는 완전히 새로운 접근 방식을 제시합니다.

새로운 기능들:

1. CSS-first 방식
   - tailwind.config.js 대신 globals.css에 @theme를 작성합니다.
   - 더 간단하고 명확한 설정 방식입니다.

2. @theme 문법
   - CSS 변수를 직접 선언할 수 있습니다.
   - 런타임에 동적으로 테마를 변경할 수 있습니다.

3. okLCh 색상 공간
   - 더 예측 가능한 색상 보간을 제공합니다.
   - 악세서빌리티가 향상되었습니다.

4. 성능 향상
   - 빌드 시간이 30% 단축되었습니다.
   - 번들 크기도 감소했습니다.

마이그레이션 팁:

- 기존 tailwind.config.js를 globals.css로 변경합니다.
- 색상 정의를 okLCh 형식으로 업데이트합니다.
- 플러그인 설정을 확인합니다.

TailwindCSS v4는 더 강력하고 유연한 스타일링 경험을 제공합니다.`,
  },
  {
    slug: "react-19-server-components",
    title: "React 19 Server Components 완벽 이해",
    description: "React Server Components의 원리와 실제 사용 방법을 배워봅시다.",
    date: "2026-03-05",
    category: "React",
    tags: ["React", "Server Components"],
    readingTime: "10분",
    content: `React Server Components(RSC)는 React의 패러다임을 바꾸고 있습니다.

기본 개념:

1. Server Components
   - 서버에서만 실행됩니다.
   - 번들 크기를 줄일 수 있습니다.
   - 데이터베이스에 직접 접근할 수 있습니다.

2. Client Components
   - 'use client' 지시어로 표시합니다.
   - 상태(useState)와 이벤트 핸들러를 사용합니다.
   - 브라우저에서 실행됩니다.

사용 사례:

- 데이터 페칭: 서버 컴포넌트에서 처리
- 상태 관리: 클라이언트 컴포넌트에서 처리
- 컴포넌트 조합: 서버 + 클라이언트 혼합 사용

Best Practices:

- 필요한 부분만 'use client' 지시어를 사용합니다.
- 데이터 페칭을 서버에서 수행합니다.
- 상태는 최소한으로 유지합니다.

React Server Components를 잘 이해하면 더 효율적인 애플리케이션을 만들 수 있습니다.`,
  },
  {
    slug: "shadcn-ui-customization",
    title: "shadcn/ui 컴포넌트 커스터마이징",
    description: "shadcn/ui 컴포넌트를 프로젝트에 맞게 커스터마이징하는 방법을 소개합니다.",
    date: "2026-02-28",
    category: "UI",
    tags: ["shadcn", "UI", "커스터마이징"],
    readingTime: "7분",
    content: `shadcn/ui는 완전히 커스터마이징 가능한 컴포넌트 라이브러리입니다.

커스터마이징 방법:

1. 색상 변경
   - globals.css의 CSS 변수를 수정합니다.
   - 다크모드 색상도 함께 변경할 수 있습니다.

2. 컴포넌트 수정
   - src/components/ui의 파일을 직접 수정합니다.
   - 필요한 부분만 변경하면 됩니다.

3. 스타일링
   - TailwindCSS 클래스를 추가/제거합니다.
   - data-* 속성으로 조건부 스타일을 적용합니다.

4. 버리언트 확장
   - cva(class-variance-authority)로 새로운 버리언트를 추가합니다.
   - 기존 버리언트를 수정할 수 있습니다.

팁:

- 원본 파일을 백업해두세요.
- 작은 변경부터 시작하세요.
- 다른 컴포넌트에 영향이 없는지 확인하세요.

shadcn/ui의 강력한 커스터마이징 기능을 활용하면 유니크한 디자인을 만들 수 있습니다.`,
  },
  {
    slug: "typescript-5-best-practices",
    title: "TypeScript 5 Best Practices",
    description: "TypeScript 5의 새로운 기능과 베스트 프랙티스를 알아봅시다.",
    date: "2026-02-20",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices"],
    readingTime: "9분",
    content: `TypeScript 5는 여러 새로운 기능과 개선사항을 제공합니다.

새로운 기능:

1. Decorator
   - 클래스와 메서드에 메타데이터를 추가합니다.
   - 엔터프라이즈 애플리케이션에서 유용합니다.

2. const Type Parameters
   - 제네릭 타입 파라미터를 const로 선언합니다.
   - 더 정확한 타입 추론이 가능합니다.

3. JSX 개선
   - JSX 네임스페이스 해제
   - Fragment 사용 개선

Best Practices:

1. 엄격한 타입 체크
   - "strict": true 설정을 사용합니다.
   - 타입 안전성을 최대한 활용합니다.

2. 인터페이스 설계
   - 작고 명확한 인터페이스를 만듭니다.
   - 유니온 타입보다는 인터페이스를 선호합니다.

3. 제네릭 활용
   - 재사용 가능한 컴포넌트를 위해 제네릭을 사용합니다.
   - 너무 복잡하지 않게 유지합니다.

TypeScript 5의 기능을 잘 활용하면 더 안전한 코드를 작성할 수 있습니다.`,
  },
  {
    slug: "turbopack-setup-guide",
    title: "Turbopack 설정 가이드",
    description: "Next.js 16에서 Turbopack을 최적으로 구성하는 방법을 배워봅시다.",
    date: "2026-02-15",
    category: "성능",
    tags: ["Turbopack", "성능", "빌드"],
    readingTime: "5분",
    content: `Turbopack은 Next.js 16의 새로운 번들러입니다.

Turbopack의 장점:

1. 빠른 빌드
   - Webpack 대비 700배 빠릅니다.
   - 개발 서버 시작 시간이 매우 단축됩니다.

2. 메모리 효율
   - 메모리 사용량이 대폭 감소했습니다.
   - 대규모 프로젝트에서도 빠릅니다.

3. Rust 기반
   - 고성능 언어로 구현되었습니다.
   - 네이티브 확장도 가능합니다.

설정 방법:

1. 기본 설정
   - next.config.ts에 turbopack 설정을 추가합니다.
   - 별도의 설정 없이도 자동으로 최적화됩니다.

2. 커스텀 설정
   - 특정 파일 타입에 대한 로더를 추가할 수 있습니다.
   - 환경 변수 설정도 가능합니다.

3. 성능 모니터링
   - 빌드 시간을 측정합니다.
   - 병목 지점을 파악합니다.

팁:

- webpack 설정이 있다면 단계적으로 마이그레이션하세요.
- 빌드 캐시를 활용하세요.
- CI/CD 파이프라인에서 Turbopack의 성능 이점을 극대화하세요.

Turbopack은 Next.js 애플리케이션의 빌드 성능을 혁명적으로 개선합니다.`,
  },
]

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const currentIndex = POSTS.findIndex((p) => p.slug === slug)
  const nextPost = POSTS[currentIndex + 1]

  return (
    <div className="space-y-8">
      <PageContainer>
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{post.title}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 글 제목 및 메타정보 */}
        <article className="space-y-6 py-8">
          <div className="space-y-4">
            <Badge>{post.category}</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>{new Date(post.date).toLocaleDateString("ko-KR")}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* 본문 */}
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {post.content.split("\n\n").map((paragraph, idx) => {
              const isHeading = paragraph.startsWith("##")
              const isNumbered = paragraph.match(/^\d+\./)

              if (isHeading) {
                const title = paragraph.replace("##", "").trim()
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">
                    {title}
                  </h2>
                )
              }

              if (isNumbered) {
                return (
                  <p key={idx} className="text-base leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              }

              return (
                <p key={idx} className="text-base leading-relaxed text-muted-foreground mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>

          <Separator />

          {/* 다음 글 */}
          {nextPost && (
            <div className="space-y-4 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">다음 글</p>
              <Link href={`/blog/${nextPost.slug}`} className="group">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {nextPost.title}
                </h3>
                <p className="text-sm text-muted-foreground">{nextPost.description}</p>
              </Link>
            </div>
          )}

          {/* 돌아가기 */}
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              블로그로 돌아가기
            </Button>
          </Link>
        </article>
      </PageContainer>
    </div>
  )
}
