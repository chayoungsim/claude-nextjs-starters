import Link from "next/link"
import {
  Bell,
  Code,
  ExternalLink,
  Layers,
  Moon,
  Palette,
  Shield,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PageContainer } from "@/components/layout/page-container"
import type { FeatureItem } from "@/types"

const features: FeatureItem[] = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Next.js 16",
    description: "Turbopack 기본값, React Compiler 내장, 번개처럼 빠른 개발",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "shadcn/ui",
    description: "radix-nova 스타일, 언제든 커스터마이징 가능한 컴포넌트",
  },
  {
    icon: <Moon className="h-8 w-8 text-primary" />,
    title: "다크모드",
    description: "next-themes 기반, FOUC 없는 매끄러운 테마 전환",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "TypeScript 5",
    description: "엄격한 타입 체크로 런타임 에러 사전에 차단",
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "TailwindCSS v4",
    description: "CSS-first 방식, @theme 문법으로 유연한 스타일링",
  },
  {
    icon: <Bell className="h-8 w-8 text-primary" />,
    title: "Sonner",
    description: "아름다운 토스트 알림, 사용자 경험 극대화",
  },
]

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="space-y-6 pt-8 sm:pt-12 md:pt-16">
        <PageContainer className="text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Next.js 16 + React 19
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            빠르게 시작하는
            <br />
            모던 웹 개발
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Next.js, React, TypeScript, TailwindCSS, shadcn/ui가 완벽하게 통합된 스타터킷.
            설정 없이 바로 개발을 시작하세요.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="https://github.com" target="_blank">
                <Code className="mr-2 h-5 w-5" />
                GitHub에서 보기
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://nextjs.org/docs" target="_blank">
                문서 읽기
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </PageContainer>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <PageContainer>
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              포함된 기술 스택
            </h2>
            <p className="text-lg text-muted-foreground">
              모든 기능이 이미 준비되어 있습니다.
            </p>
          </div>

          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="space-y-8">
        <PageContainer>
          <div className="rounded-lg border bg-muted/50 px-6 py-12 text-center sm:px-8 md:py-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              지금 바로 시작하세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              설정은 모두 끝났습니다. 당신의 아이디어를 현실로 만들기만 하면 됩니다.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="https://github.com" target="_blank">
                  <Code className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://nextjs.org/docs" target="_blank">
                  문서
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      <Separator />
    </div>
  )
}
