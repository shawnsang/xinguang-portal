"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hammer } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useState } from "react"

type Props = {
  className?: string
}

const defaultProps: Props = {
  className: "",
}

export default function SiteHeader(props: Props = defaultProps) {
  const { className } = props
  const [open, setOpen] = useState(false)

  return (
    <header className={cn("sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60", className)}>
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-amber-500 to-orange-500 text-white">
            <Hammer className="h-4 w-4" />
          </span>
          <span className="text-sm sm:text-base">心光互联软件工坊</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-6 sm:flex">
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
            服务
          </Link>
          <Link href="#pillars" className="text-sm text-muted-foreground hover:text-foreground">
            能力
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            联系
          </Link>
          <Button asChild className="bg-amber-500 hover:bg-amber-600">
            <a href="mailto:shawn.sang@hotmail.com" aria-label="邮件咨询">
              立即咨询
            </a>
          </Button>
        </nav>

        {/* Mobile simple menu */}
        <button
          aria-label="打开菜单"
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">切换菜单</span>
          <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t bg-white sm:hidden">
          <div className="container mx-auto grid gap-2 p-4">
            <Link href="#services" className="rounded-md px-2 py-2 text-sm hover:bg-muted" onClick={() => setOpen(false)}>
              服务
            </Link>
            <Link href="#pillars" className="rounded-md px-2 py-2 text-sm hover:bg-muted" onClick={() => setOpen(false)}>
              能力
            </Link>
            <Link href="#contact" className="rounded-md px-2 py-2 text-sm hover:bg-muted" onClick={() => setOpen(false)}>
              联系
            </Link>
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
              <a href="mailto:shawn.sang@hotmail.com" aria-label="邮件咨询" onClick={() => setOpen(false)}>
                立即咨询
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
