import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HeroSection from "@/components/hero-section"
import PillarsSection from "@/components/pillars-section"
import ServicesSection from "@/components/services-section"
import ContactCta from "@/components/contact-cta"

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PillarsSection />
        <ServicesSection />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
