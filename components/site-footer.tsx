import Link from "next/link"

type Props = {}

const defaultProps: Props = {}

export default function SiteFooter(props: Props = defaultProps) {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} 心光互联软件工坊 · Xinguang Software Workshop
        </p>
        <div className="flex items-center gap-4">
          <Link href="#services" className="hover:underline underline-offset-4">
            服务
          </Link>
          <a href="mailto:shawn.sang@hotmail.com" className="hover:underline underline-offset-4">
            联系我们
          </a>
          <Link href="https://xinguang.online" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
            xinguang.online
          </Link>
        </div>
      </div>
    </footer>
  )
}
