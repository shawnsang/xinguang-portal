'use client'

import Image from 'next/image'
import { ExternalLink, Rocket, Cloud, Waves } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export type Service = {
id: string
name: string
description: string
href?: string | null
status?: 'active' | 'coming-soon'
badge?: string
imageSrc?: string
imageAlt?: string
logoSrc?: string
logoAlt?: string
icon?: 'rocket' | 'cloud' | 'waves'
}

type Props = {
service?: Service
}

const defaultService: Service = {
id: 'placeholder',
name: '占位服务',
description: '这是一个占位服务卡片示例。',
status: 'coming-soon',
imageSrc: '/placeholder.svg?height=240&width=640',
imageAlt: '占位服务封面图',
icon: 'rocket',
}

const defaultProps: Props = {
service: defaultService,
}

export default function ServiceCard(props: Props = defaultProps) {
const s = props.service ?? defaultService
const isActive = s.status === 'active' && !!s.href

const Icon = s.icon === 'cloud' ? Cloud : s.icon === 'waves' ? Waves : Rocket

return (
  <Card className="group h-full overflow-hidden">
    <div className="relative h-36 w-full border-b bg-white">
      <Image
        src={s.imageSrc || '/placeholder.svg?height=240&width=640&query=service%20banner%20clean%20ui%20warm%20amber'}
        alt={s.imageAlt || `${s.name} 封面图`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </div>
    <CardHeader className="space-y-2">
      <div className="flex items-center gap-2">
        {s.logoSrc ? (
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-1 ring-amber-200">
            <Image
              src={s.logoSrc || "/placeholder.svg"}
              alt={s.logoAlt || `${s.name} 标志`}
              fill
              className="object-cover"
              sizes="32px"
            />
          </span>
        ) : (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-amber-500/15 text-amber-600">
            <Icon className="h-4 w-4" />
          </span>
        )}
        <CardTitle className="text-base">{s.name}</CardTitle>
      </div>
      <CardDescription className="line-clamp-2">{s.description}</CardDescription>
    </CardHeader>
    <CardFooter className="mt-auto">
      {isActive ? (
        <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
          <a href={s.href!} target="_blank" rel="noopener noreferrer" aria-label={`打开 ${s.name}`}>
            访问服务 <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      ) : (
        <Button variant="outline" className="w-full" disabled>
          即将上线
        </Button>
      )}
    </CardFooter>
    {s.badge ? (
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground">{s.badge}</p>
      </CardContent>
    ) : null}
  </Card>
)
}
