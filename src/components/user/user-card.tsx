import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface UserCardProps {
  name: string
  role?: string
  bio?: string
  avatarUrl?: string
  badge?: string
  className?: string
}

export function UserCard({
  name,
  role,
  bio,
  avatarUrl,
  badge,
  className,
}: UserCardProps) {
  // 이름 첫 글자로 아바타 폴백 생성
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold leading-none">{name}</span>
            {badge && <Badge variant="secondary">{badge}</Badge>}
          </div>
          {role && (
            <span className="text-sm text-muted-foreground">{role}</span>
          )}
        </div>
      </CardHeader>
      {bio && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{bio}</p>
        </CardContent>
      )}
    </Card>
  )
}
