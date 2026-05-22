import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Logo } from "@/components/logo"
import { SignupForm } from "@/components/signup-form"

export function Hero() {
  return (
    <section
      className="min-h-svh flex flex-col relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, var(--green-light) 0%, var(--green-dark) 45%, var(--green-deeper) 100%)",
      }}
      aria-label="Nightstand — coming soon"
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.018'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='50' r='1'/%3E%3Ccircle cx='60' cy='20' r='1'/%3E%3Ccircle cx='70' cy='70' r='1'/%3E%3Ccircle cx='45' cy='35' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-6 pt-7 md:px-12 md:pt-9" aria-label="Site navigation">
        <Logo className="h-8 w-auto md:h-[38px] text-cream" />
        <a 
          href="#learn-more" 
          className="text-[13px] font-light text-cream/50 no-underline tracking-[0.01em] transition-colors hover:text-cream/80"
        >
          Learn more
        </a>
      </nav>

      {/* Hero body */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-12 md:px-12 md:py-16">
        <p className="inline-block text-xs tracking-[0.18em] uppercase text-gold bg-gold/12 border border-gold/35 rounded-full px-4 py-1.5 mb-7">
          Coming soon
        </p>

        <p className="text-[clamp(56px,10vw,110px)] font-bold italic leading-none text-cream mb-4">
          nightstand
        </p>

        <h1 className="text-[clamp(24px,4vw,42px)] font-light italic leading-[1.15] text-cream/90 max-w-[800px] text-balance">
          The book that&apos;s right for you, right now.
        </h1>

        <p className="mt-5 text-[clamp(16px,2vw,19px)] font-light leading-relaxed text-cream/65 max-w-[520px] text-pretty">
          Nightstand is a recommendation engine for avid readers — not based on what&apos;s popular, but on how you want to feel.
        </p>

        {/* Email capture form */}
        <div className="mt-9 w-full max-w-[460px]" role="region" aria-label="Early access sign-up">
          <SignupForm />
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="relative flex justify-center pb-7">
        <a 
          href="#learn-more" 
          className="text-cream/25 no-underline animate-bounce-slow transition-colors hover:text-cream/50"
          aria-label="Scroll to learn more"
        >
          <ArrowDown className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
