/**
 * 공통 타입 정의
 */

// 네비게이션 링크 타입
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// 테마 타입
export type Theme = 'light' | 'dark' | 'system'

// Feature 아이템 타입
export interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
}

// 블로그 포스트 타입
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  readingTime: string
  content: string
}

// 포트폴리오 프로젝트 타입
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  demoLink?: string
  featured?: boolean
}

// 문서 섹션 타입
export interface DocSection {
  id: string
  title: string
  items: DocItem[]
}

export interface DocItem {
  id: string
  title: string
  content: string
}
