import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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
    content: "Next.js 16으로 업그레이드하기 위한 단계별 가이드...",
  },
  {
    slug: "tailwind-v4-features",
    title: "TailwindCSS v4 새로운 기능",
    description: "CSS-first 방식과 @theme 문법의 새로운 기능들을 알아봅시다.",
    date: "2026-03-10",
    category: "CSS",
    tags: ["Tailwind", "CSS", "v4"],
    readingTime: "6분",
    content: "TailwindCSS v4의 혁신적인 기능들...",
  },
  {
    slug: "react-19-server-components",
    title: "React 19 Server Components 완벽 이해",
    description: "React Server Components의 원리와 실제 사용 방법을 배워봅시다.",
    date: "2026-03-05",
    category: "React",
    tags: ["React", "Server Components"],
    readingTime: "10분",
    content: "React Server Components의 개념과 활용...",
  },
  {
    slug: "shadcn-ui-customization",
    title: "shadcn/ui 컴포넌트 커스터마이징",
    description: "shadcn/ui 컴포넌트를 프로젝트에 맞게 커스터마이징하는 방법을 소개합니다.",
    date: "2026-02-28",
    category: "UI",
    tags: ["shadcn", "UI", "커스터마이징"],
    readingTime: "7분",
    content: "shadcn/ui 커스터마이징 팁과 트릭...",
  },
  {
    slug: "typescript-5-best-practices",
    title: "TypeScript 5 Best Practices",
    description: "TypeScript 5의 새로운 기능과 베스트 프랙티스를 알아봅시다.",
    date: "2026-02-20",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices"],
    readingTime: "9분",
    content: "TypeScript 5에서 권장되는 코딩 패턴들...",
  },
  {
    slug: "turbopack-setup-guide",
    title: "Turbopack 설정 가이드",
    description: "Next.js 16에서 Turbopack을 최적으로 구성하는 방법을 배워봅시다.",
    date: "2026-02-15",
    category: "성능",
    tags: ["Turbopack", "성능", "빌드"],
    readingTime: "5분",
    content: "Turbopack으로 빌드 시간 단축하기...",
  },
]

export default function BlogPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="space-y-4 pt-8 sm:pt-12 md:pt-16">
        <PageContainer className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            블로그
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            웹 개발, 프론트엔드, 그리고 모던 기술에 대한 이야기를 공유합니다.
          </p>
        </PageContainer>
      </section>

      {/* Blog Posts Grid */}
      <section>
        <PageContainer>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  {/* 썸네일 영역 */}
                  <div className="h-32 w-full bg-gradient-to-br from-primary/10 to-primary/5" />

                  <CardHeader className="space-y-2">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="w-fit">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time>{new Date(post.date).toLocaleDateString("ko-KR")}</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between group/btn"
                    >
                      읽어보기
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      <Separator />
    </div>
  )
}
