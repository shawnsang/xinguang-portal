import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Layers, BrainCircuit, Network } from 'lucide-react'

type Pillar = {
  title: string
  desc: string
  Icon: any
}

const pillars: Pillar[] = [
  {
    title: "\"心光\"指引",
    desc: "用心倾听客户需求，以专业洞察点亮数字化转型之路。",
    Icon: Sparkles,
  },
  {
    title: "\"互联\"协同",
    desc: "依托现代化协作平台，实现团队高效互联与透明沟通。",
    Icon: Network,
  },
  {
    title: "\"软件\"精工",
    desc: "专注软件开发核心技术，打造稳定可靠的数字化产品。",
    Icon: BrainCircuit,
  },
  {
    title: "\"工坊\"交付",
    desc: "从需求分析到产品上线，提供全流程的软件开发服务。",
    Icon: Layers,
  },
]

type Props = {}

const defaultProps: Props = {}

export default function PillarsSection(props: Props = defaultProps) {
  return (
    <section id="pillars" className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">核心理念与服务优势</h2>
          <p className="mt-3 text-muted-foreground">
            心光 · 互联 · 软件 · 工坊 —— 专业专注，值得信赖的软件开发伙伴。
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
