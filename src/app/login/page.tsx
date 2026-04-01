'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      // 실제 로그인 로직은 여기에 구현
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch {
      setError('이메일 또는 비밀번호를 확인해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-[80svh] items-center justify-center px-4 py-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">로그인</CardTitle>
          <CardDescription>계정에 로그인하여 시작하세요</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* 에러 메시지 */}
              {error && (
                <p
                  id="login-error"
                  role="alert"
                  className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  {error}
                </p>
              )}

              {/* 이메일 필드 */}
              <div className="space-y-1.5">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  autoComplete="email"
                  className="h-10"
                  aria-describedby={error ? 'login-error' : undefined}
                />
              </div>

              {/* 비밀번호 필드 */}
              <div className="space-y-1.5">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  autoComplete="current-password"
                  className="h-10"
                />
              </div>

              {/* 옵션 행 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                    disabled={isLoading}
                  />
                  <Label
                    htmlFor="remember-me"
                    className="cursor-pointer font-normal"
                  >
                    로그인 상태 유지
                  </Label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  비밀번호 찾기
                </Link>
              </div>

              {/* 제출 버튼 */}
              <Button
                type="submit"
                className="h-10 w-full"
                disabled={isLoading}
                aria-busy={isLoading}
              >
                {isLoading ? '로그인 중...' : '로그인하기'}
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="justify-center gap-1">
          <span className="text-sm text-muted-foreground">
            계정이 없으신가요?
          </span>
          <Link
            href="/signup"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            회원가입
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
