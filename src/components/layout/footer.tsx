import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { PageContainer } from "./page-container"

/**
 * 하단 푸터 컴포넌트
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <PageContainer>
        <div className="space-y-8 py-8">
          <Separator />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Next.js 16 Starter Kit. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Next.js
              </Link>
              <Link
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                shadcn/ui
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
