import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-6 py-5 bg-green-deeper border-t border-white/7 text-center">
      <p className="text-xs font-light text-cream/28">
        &copy; {currentYear} Nightstand, LLC
        &nbsp;&middot;&nbsp;
        <Link 
          href="/privacy" 
          className="underline underline-offset-2 transition-colors hover:text-cream/55"
        >
          Privacy policy
        </Link>
      </p>
    </footer>
  )
}
