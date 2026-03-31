'use client'

import { useState } from "react"
import { Bell, CheckCircle, Info, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { PageContainer } from "@/components/layout/page-container"

export default function ComponentsPage() {
  const [switchEnabled, setSwitchEnabled] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4 pt-8 sm:pt-12 md:pt-16">
        <PageContainer className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            컴포넌트 갤러리
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            shadcn/ui 컴포넌트들의 라이브 데모와 사용 예시입니다.
          </p>
        </PageContainer>
      </section>

      {/* Tabs with Components */}
      <section>
        <PageContainer>
          <Tabs defaultValue="forms" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="overlay">Overlay</TabsTrigger>
              <TabsTrigger value="display">Display</TabsTrigger>
            </TabsList>

            {/* Forms Tab */}
            <TabsContent value="forms" className="space-y-8 mt-8">
              <div className="grid gap-8">
                {/* Input */}
                <Card>
                  <CardHeader>
                    <CardTitle>Input</CardTitle>
                    <CardDescription>텍스트 입력 필드</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6">
                      <Input placeholder="이름을 입력하세요" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Input placeholder="..." /&gt;
                    </p>
                  </CardContent>
                </Card>

                {/* Label + Input */}
                <Card>
                  <CardHeader>
                    <CardTitle>Label</CardTitle>
                    <CardDescription>폼 라벨</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6 space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input id="email" placeholder="example@gmail.com" type="email" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Label&gt; + &lt;Input&gt; 조합
                    </p>
                  </CardContent>
                </Card>

                {/* Textarea */}
                <Card>
                  <CardHeader>
                    <CardTitle>Textarea</CardTitle>
                    <CardDescription>멀티라인 텍스트 입력</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6">
                      <Textarea placeholder="메시지를 입력하세요..." rows={4} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Textarea rows={"{4}"} /&gt;
                    </p>
                  </CardContent>
                </Card>

                {/* Checkbox */}
                <Card>
                  <CardHeader>
                    <CardTitle>Checkbox</CardTitle>
                    <CardDescription>체크박스 선택</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6 flex items-center gap-2">
                      <Checkbox
                        id="agree"
                        checked={checkboxChecked}
                        onCheckedChange={(checked) => setCheckboxChecked(checked === true)}
                      />
                      <Label htmlFor="agree">약관에 동의합니다</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      상태: {checkboxChecked ? "✓ 체크됨" : "☐ 미체크"}
                    </p>
                  </CardContent>
                </Card>

                {/* Switch */}
                <Card>
                  <CardHeader>
                    <CardTitle>Switch</CardTitle>
                    <CardDescription>토글 스위치</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6 flex items-center justify-between">
                      <Label htmlFor="notifications">알림 활성화</Label>
                      <Switch
                        id="notifications"
                        checked={switchEnabled}
                        onCheckedChange={setSwitchEnabled}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      상태: {switchEnabled ? "ON" : "OFF"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-8 mt-8">
              <div className="grid gap-8">
                {/* Alert */}
                <Card>
                  <CardHeader>
                    <CardTitle>Alert</CardTitle>
                    <CardDescription>알림 메시지</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6 space-y-4">
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>안내</AlertTitle>
                        <AlertDescription>이것은 정보 알림입니다.</AlertDescription>
                      </Alert>

                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>오류</AlertTitle>
                        <AlertDescription>오류가 발생했습니다.</AlertDescription>
                      </Alert>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Alert variant="..." /&gt;
                    </p>
                  </CardContent>
                </Card>

                {/* Badge */}
                <Card>
                  <CardHeader>
                    <CardTitle>Badge</CardTitle>
                    <CardDescription>배지/라벨</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6 flex flex-wrap gap-2">
                      <Badge>기본</Badge>
                      <Badge variant="secondary">보조</Badge>
                      <Badge variant="destructive">삭제</Badge>
                      <Badge variant="outline">테두리</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Badge variant="..." /&gt;
                    </p>
                  </CardContent>
                </Card>

                {/* Toast */}
                <Card>
                  <CardHeader>
                    <CardTitle>Toast (Sonner)</CardTitle>
                    <CardDescription>토스트 알림</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6">
                      <Button
                        onClick={() => toast.success("성공! 토스트 알림이 표시됩니다.")}
                      >
                        토스트 표시하기
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      toast.success("메시지")
                    </p>
                  </CardContent>
                </Card>

                {/* Skeleton */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton</CardTitle>
                    <CardDescription>로딩 스켈레톤</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6 space-y-3">
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Skeleton className="h-12 w-full" /&gt;
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Overlay Tab */}
            <TabsContent value="overlay" className="space-y-8 mt-8">
              <div className="grid gap-8">
                {/* Dialog */}
                <Card>
                  <CardHeader>
                    <CardTitle>Dialog</CardTitle>
                    <CardDescription>모달 대화상자</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Dialog 열기</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Dialog 제목</DialogTitle>
                            <DialogDescription>
                              이것은 Dialog 컴포넌트의 예시입니다.
                            </DialogDescription>
                          </DialogHeader>
                          <Button>확인</Button>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Dialog&gt; &lt;DialogTrigger&gt; &lt;DialogContent&gt;
                    </p>
                  </CardContent>
                </Card>

                {/* Tooltip */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tooltip</CardTitle>
                    <CardDescription>툴팁 팝오버</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/20 p-6">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">Hover me</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>이것은 툴팁입니다!</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &lt;Tooltip&gt; &lt;TooltipTrigger&gt; &lt;TooltipContent&gt;
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Display Tab */}
            <TabsContent value="display" className="space-y-8 mt-8">
              <div className="grid gap-8">
                {/* Card */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Card</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>카드 제목</CardTitle>
                        <CardDescription>카드 설명</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>이것은 Card 컴포넌트의 기본 사용법입니다.</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>또 다른 카드</CardTitle>
                        <CardDescription>다양한 구성</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>여러 개의 Card를 그리드로 배치할 수 있습니다.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Separator */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Separator</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>구분선</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>위쪽 콘텐츠</p>
                      <Separator />
                      <p>아래쪽 콘텐츠</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </PageContainer>
      </section>

      <Separator />
    </div>
  )
}
