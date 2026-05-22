import { MessageSquare, BookOpen, Mail } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "The Sommelier",
    description:
      "Tell us how you want to feel — not a genre, not a title. Nightstand asks a few questions and finds the book that fits the mood you're in right now.",
  },
  {
    icon: BookOpen,
    title: "Curated reading lists",
    description:
      "Hand-picked recommendations organized by feeling, not genre. For the reader who just finished a 900-page epic and needs something short. For thrillers with actual prose.",
  },
  {
    icon: Mail,
    title: "The Anti-Algorithm",
    description:
      "One book, once a week, chosen as if a well-read friend thought of you specifically. A note on why this book, why now. Nothing curated by an algorithm.",
  },
]

export function Features() {
  return (
    <section 
      id="learn-more" 
      className="py-18 px-6 md:py-24 md:px-12"
      style={{
        background: "linear-gradient(to bottom, var(--green-deeper) 0%, var(--green-dark) 50%, var(--green-deeper) 100%)",
      }}
      aria-label="How Nightstand works"
    >
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-13">
          <h2 className="text-[clamp(26px,4vw,38px)] font-light italic text-cream mb-3">
            Recommendations that feel right
          </h2>
          <p className="text-base font-light leading-relaxed text-cream/55 max-w-[460px] mx-auto">
            Nightstand matches tone, pacing, and emotional register — not just genre.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="p-7 px-6 bg-white/4 border border-white/9 rounded-xl transition-all duration-250 hover:border-gold/28 hover:bg-white/[0.065]"
            >
              <feature.icon className="w-8 h-8 mb-4 text-gold/65" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-[17px] font-medium text-cream mb-2.5">
                {feature.title}
              </h3>
              <p className="text-sm font-light leading-[1.7] text-cream/55">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
