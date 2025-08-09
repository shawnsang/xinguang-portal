import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Layers, BrainCircuit, Network } from 'lucide-react'

type Pillar = {
  title: string
  desc: string
  Icon: any
}

const pillars: Pillar[] = [
  {
    title: "“心光”指引",
    desc: "用心倾听、深度洞察，以智慧之光点亮业务需求与创新构想。",
    Icon: Sparkles,
  },
  {
    title: "“全栈”赋能",
    desc: "从咨询、架构、Web/App/AI开发、测试、翻译到部署运维，覆盖全生命周期。",
    Icon: Layers,
  },
  {
    title: "“智造”精工",
    desc: "融合人工智能与创新技术，在数字熔炉中锻造稳定、高效、智能的解决方案。",
    Icon: BrainCircuit,
  },
  {
    title: "“工场”协作",
    desc: "依托 xinguang.online 高效互联，透明协同，只为交付卓越。",
    Icon: Network,
  },
]

type Props = {}

const defaultProps: Props = {}

export default function PillarsSection(props: Props = defaultProps) {
  return (
    <section id="pillars" className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">价值主张与方法论</h2>
          <p className="mt-3 text-muted-foreground">
            心光 · 全栈 · 智造 · 工场 —— 四位一体，端到端的交付承诺。
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, idx) => (
            <Card key={idx} className="h-full">
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-500/15 text-amber-600">
                  <p.Icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{p.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
