import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PageContainer } from "@/components/layout/page-container"
import { POSTS } from "@/data/posts"

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
