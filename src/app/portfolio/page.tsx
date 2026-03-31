'use client'

import { useMemo, useState } from "react"
import Link from "next/link"
import { ExternalLink, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PageContainer } from "@/components/layout/page-container"
import type { Project } from "@/types"

const PROJECTS: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "완전한 전자상거래 플랫폼으로, 제품 관리, 장바구니, 결제 시스템을 포함합니다.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    featured: true,
    demoLink: "https://example.com/ecommerce",
    link: "https://github.com/user/ecommerce",
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description: "관리자 대시보드가 있는 블로그 콘텐츠 관리 시스템입니다.",
    tags: ["Next.js", "React", "MDX", "Prisma"],
    featured: true,
    demoLink: "https://example.com/blog-cms",
    link: "https://github.com/user/blog-cms",
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    description: "드래그 앤 드롭으로 포트폴리오를 만들 수 있는 웹 애플리케이션입니다.",
    tags: ["React", "dnd-kit", "TailwindCSS"],
    demoLink: "https://example.com/portfolio-builder",
    link: "https://github.com/user/portfolio-builder",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    description: "데이터 시각화와 실시간 모니터링이 있는 관리자 대시보드입니다.",
    tags: ["Next.js", "Chart.js", "WebSocket"],
    demoLink: "https://example.com/admin",
    link: "https://github.com/user/admin-dashboard",
  },
  {
    id: "landing-page-kit",
    title: "Landing Page Kit",
    description: "다양한 업종을 위한 랜딩 페이지 템플릿 모음입니다.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    featured: true,
    demoLink: "https://example.com/landing-kit",
    link: "https://github.com/user/landing-page-kit",
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    description: "마이크로서비스 아키텍처를 위한 API 게이트웨이 구현입니다.",
    tags: ["Node.js", "Express", "GraphQL", "Docker"],
    link: "https://github.com/user/api-gateway",
  },
]

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))

export default function PortfolioPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return PROJECTS
    return PROJECTS.filter((p) => p.tags.includes(selectedTag))
  }, [selectedTag])

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4 pt-8 sm:pt-12 md:pt-16">
        <PageContainer className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            포트폴리오
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            최근에 만든 프로젝트들입니다.
          </p>
        </PageContainer>
      </section>

      {/* Filter Tags */}
      <section>
        <PageContainer>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-muted-foreground">기술로 필터링:</p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedTag === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                모두 보기 ({PROJECTS.length})
              </Badge>

              {ALL_TAGS.map((tag) => {
                const count = PROJECTS.filter((p) => p.tags.includes(tag)).length
                return (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag} ({count})
                  </Badge>
                )
              })}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Projects Grid */}
      <section>
        <PageContainer>
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className={`flex flex-col transition-all hover:shadow-lg ${
                    project.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* 프로젝트 배경 */}
                  <div className={`h-32 w-full bg-gradient-to-br ${
                    project.featured
                      ? "from-primary/20 to-primary/5"
                      : "from-accent/20 to-accent/5"
                  }`} />

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge className="mt-2" variant="secondary">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-primary/10"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Separator />

                    <div className="flex gap-2">
                      {project.demoLink && (
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.link && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Code className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                선택한 기술로 만든 프로젝트가 없습니다.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedTag(null)}
              >
                필터 초기화
              </Button>
            </div>
          )}
        </PageContainer>
      </section>

      <Separator />
    </div>
  )
}
