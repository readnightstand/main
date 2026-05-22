import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Nightstand",
  description: "Nightstand privacy policy. Learn how we collect, use, and protect your data.",
}

const sections = [
  {
    title: "Who we are",
    content: (
      <>
        Nightstand, LLC operates Nightstand at readnightstand.com — a book
        recommendation service. Questions about this policy can be directed to{" "}
        <a 
          href="mailto:hello@readnightstand.com"
          className="underline underline-offset-2 text-cream/85 transition-colors hover:text-gold"
        >
          hello@readnightstand.com
        </a>.
      </>
    ),
  },
  {
    title: "What we collect",
    content:
      "When you sign up for early access, we collect your email address. That's it. We don't collect your name, location, or any other personal information unless you choose to provide it.",
  },
  {
    title: "How we use it",
    content:
      "Your email address is used solely to contact you about Nightstand — to let you know when the product launches, and to share updates we think you'd care about. We will not sell, rent, or share your email address with any third party for marketing purposes.",
  },
  {
    title: "How we store it",
    content: (
      <>
        Email addresses are stored with{" "}
        <a
          href="https://formspree.io/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-cream/85 transition-colors hover:text-gold"
        >
          Formspree
        </a>
        , an email form service. Their privacy practices are governed by their own policy.
      </>
    ),
  },
  {
    title: "Unsubscribing",
    content: (
      <>
        Every email we send includes an unsubscribe link. You can also email{" "}
        <a 
          href="mailto:hello@readnightstand.com"
          className="underline underline-offset-2 text-cream/85 transition-colors hover:text-gold"
        >
          hello@readnightstand.com
        </a>{" "}
        and we will remove your address within two business days.
      </>
    ),
  },
  {
    title: "Changes to this policy",
    content:
      "We may update this privacy policy from time to time. If we make significant changes, we will notify you by email.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-green-deeper">
      <div className="max-w-[640px] mx-auto px-6 py-12 md:py-18">
        <Link 
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] font-light text-cream/45 no-underline mb-9 transition-colors hover:text-cream/70"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          Back to Nightstand
        </Link>

        <h1 className="text-[34px] font-light italic text-cream mb-1.5">
          Privacy Policy
        </h1>
        <p className="text-[13px] font-light text-cream/35 mb-10">
          Effective May 21, 2026
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-2.5">
              <h2 className="text-[17px] font-medium text-cream">
                {section.title}
              </h2>
              <p className="text-[15px] font-light leading-[1.75] text-cream/65">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
