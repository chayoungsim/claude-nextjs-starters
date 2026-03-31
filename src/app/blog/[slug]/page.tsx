import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { PageContainer } from "@/components/layout/page-container"
import { POSTS } from "@/data/posts"

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
