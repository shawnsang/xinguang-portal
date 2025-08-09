import ServiceCard from "@/components/service-card"
import { services } from "@/data/services"

type Props = {}

const defaultProps: Props = {}

export default function ServicesSection(props: Props = defaultProps) {
  return (
    <section id="services" className="w-full border-t bg-muted/20 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">链接到我们的其他服务</h2>
          <p className="mt-3 text-muted-foreground">
            一处入口，直达多项能力。模块化设计，便于扩展与维护。
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          需要添加新服务？请在 <span className="font-mono">data/services.ts</span> 中追加配置。
        </p>
      </div>
    </section>
  )
}
