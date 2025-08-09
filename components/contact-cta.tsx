import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'

type Props = {}

const defaultProps: Props = {}

export default function ContactCta(props: Props = defaultProps) {
  return (
    <section id="contact" className="w-full border-t bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 rounded-xl border bg-amber-50 p-6 sm:p-8 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-lg font-semibold">有项目想法或合作意向？</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              给我们发送邮件，获取免费初步咨询与技术路线建议。
            </p>
          </div>
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <a href="mailto:shawn.sang@hotmail.com">
              <Mail className="mr-2 h-4 w-4" />
              立即联系
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
