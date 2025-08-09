import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {}

const defaultProps: Props = {}

export default function HeroSection(props: Props = defaultProps) {
  return (
    <section className="w-full border-b bg-gradient-to-b from-amber-50/60 to-white">
      <div className="container mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-muted-foreground shadow-sm">
            点亮创意 · 锻造数字未来
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            心光全栈智造工场
          </h1>
          <p className="max-w-prose text-base text-muted-foreground sm:text-lg">
            我们不仅是开发者，更是您数字蓝图的全栈构建者与匠心锻造者。以“心光”指引，聚焦“全栈”赋能，践行“智造”精工，打造高效协同的“工场”交付体系。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
              <a href="mailto:shawn.sang@hotmail.com">获取方案咨询</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#services">查看服务</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            覆盖前沿咨询 · 架构设计 · 敏捷开发（Web / App / AI）· 测试 · 翻译 · 部署 · 运维全生命周期
          </p>
        </div>
        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border bg-white shadow-lg shadow-amber-100/50 md:h-[360px]">
          <Image
            src="/images/amber-nebula.png"
            alt="琥珀色星云主视觉"
            fill
            className="object-cover transition-all duration-300 hover:scale-105"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-50/30 via-transparent to-white/20" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-200/20" />
        </div>
      </div>
    </section>
  )
}
