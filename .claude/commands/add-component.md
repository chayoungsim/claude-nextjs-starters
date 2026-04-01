---
description: '새 React 컴포넌트 파일을 생성하고 기본 템플릿 코드를 추가합니다'
allowed-tools:
  [
    'Read',
    'Write',
    'Edit',
    'Glob',
    'Bash(mkdir:*)',
    'Bash(ls:*)',
  ]
---

# Claude 명령어: add-component

새 React 컴포넌트 파일을 생성하고 프로젝트 컨벤션에 맞는 기본 템플릿 코드를 추가합니다.

## 사용법

```
/add-component <ComponentName> [경로]
```

**예시:**
```
/add-component UserCard
/add-component UserCard src/components/user
/add-component ProfileAvatar src/app/profile
```

## 프로세스

1. 컴포넌트 이름 확인 (PascalCase 강제)
2. 경로 미지정 시 `src/components/` 기본값 사용
3. 컴포넌트 타입 판단 (UI 컴포넌트 vs 페이지 컴포넌트)
4. 적절한 템플릿으로 파일 생성
5. 생성된 파일 경로 및 다음 단계 안내

## 컴포넌트 타입 & 템플릿

### 기본 Server 컴포넌트 (기본값)

```tsx
import { cn } from "@/lib/utils"

interface ComponentNameProps {
  className?: string
}

export function ComponentName({ className }: ComponentNameProps) {
  return (
    <div className={cn("", className)}>
      {/* ComponentName 내용 */}
    </div>
  )
}
```

### Client 컴포넌트 (상호작용 필요 시)

```tsx
"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ComponentNameProps {
  className?: string
}

export function ComponentName({ className }: ComponentNameProps) {
  const [state, setState] = useState(false)

  return (
    <div className={cn("", className)}>
      {/* ComponentName 내용 */}
    </div>
  )
}
```

### shadcn/ui 래핑 컴포넌트

```tsx
import { ComponentBase } from "@/components/ui/component-base"
import { cn } from "@/lib/utils"

interface ComponentNameProps {
  className?: string
}

export function ComponentName({ className }: ComponentNameProps) {
  return (
    <ComponentBase className={cn("", className)}>
      {/* ComponentName 내용 */}
    </ComponentBase>
  )
}
```

## 규칙

- **네이밍**: PascalCase (예: `UserCard`, `ProfileAvatar`)
- **파일명**: kebab-case (예: `user-card.tsx`, `profile-avatar.tsx`)
- **export**: named export 사용 (`export function`, default export 금지)
- **props**: 항상 `className?: string` 포함, `cn()` 유틸리티로 병합
- **'use client'**: 상호작용(useState, useEffect, 이벤트 핸들러)이 필요한 경우에만 추가
- **경로**: UI 컴포넌트 → `src/components/ui/`, 레이아웃 → `src/components/layout/`, 기타 → `src/components/`

## 판단 기준

| 상황 | 타입 | 경로 |
|------|------|------|
| 상태, 이벤트 없음 | Server | `src/components/` |
| useState/useEffect 사용 | Client | `src/components/` |
| shadcn/ui 기반 | Server or Client | `src/components/ui/` |
| 네비게이션, 푸터 등 레이아웃 | Server or Client | `src/components/layout/` |
| 특정 페이지 전용 | - | 해당 `src/app/[route]/` 내부 |

## 참고사항

- 생성 후 필요 시 `src/components/layout/header.tsx`의 `navItems` 업데이트 안내
- 새 타입이 필요한 경우 `src/types/index.ts`에 인터페이스 추가 권장
- 컴포넌트 생성 후 사용 예시 코드 제공
