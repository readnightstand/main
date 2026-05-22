"use client"

import { useState, type FormEvent } from "react"

export function SignupForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    // Simulate form submission - replace with actual form handler (e.g., Formspree)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div 
        className="mt-2 px-5 py-4 bg-green/30 border border-green/50 rounded-lg text-[15px] font-light text-cream/90"
        role="status"
        aria-live="polite"
      >
        {"You're on the list. We'll be in touch when Nightstand is ready."}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          autoComplete="email"
          aria-label="Email address"
          className="flex-1 min-h-[50px] px-4 py-3 font-sans text-base font-light text-cream bg-white/8 border border-white/20 rounded-lg outline-none transition-all duration-200 placeholder:text-cream/38 focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(201,169,110,0.12)]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-[50px] px-5 py-3 font-sans text-base font-medium text-cream bg-green border-none rounded-lg cursor-pointer whitespace-nowrap transition-all duration-200 hover:bg-green-light active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold/60 focus-visible:outline-offset-2 disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Get early access"}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-2.5 text-[13px] font-light text-red-300" aria-live="polite">
          {errorMessage}
        </p>
      )}

      <p className="mt-3 text-xs font-light text-cream/35">
        No spam, ever. Read our{" "}
        <a 
          href="/privacy" 
          className="underline underline-offset-2 transition-colors hover:text-cream/60"
        >
          privacy policy
        </a>.
      </p>
    </form>
  )
}
