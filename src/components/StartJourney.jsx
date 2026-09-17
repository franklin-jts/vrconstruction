import { ArrowRight, CalendarClock, PackageCheck, ShieldCheck } from 'lucide-react'

const bullets = [
  { icon: CalendarClock, text: 'Free consultation within 24 hours' },
  { icon: PackageCheck, text: 'Package and Cost-Plus guidance' },
  { icon: ShieldCheck, text: 'Clear planning before site work' },
]

export default function StartJourney() {
  return (
    <section className="relative overflow-hidden bg-[#1b5e2e] py-14 text-white md:py-16">
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/90">
            Start With Clarity
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Start your home construction journey today
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            Share your plot details, budget and construction goals. Our team will
            help you understand the right package, contract model and next steps
            before you commit.
          </p>
        </div>

        <div className="flex-shrink-0 animate-fade-in-up">
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-brand text-base hover:scale-105 transition duration-300">
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="tel:+917802808080"
              className="inline-flex items-center rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 hover:scale-105 duration-300"
            >
              Call +91 7802-80-80-80
            </a>
          </div>
          <ul className="mt-5 space-y-2">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-xs text-white/80 animate-slide-up">
                <Icon className="h-3.5 w-3.5 text-white" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
