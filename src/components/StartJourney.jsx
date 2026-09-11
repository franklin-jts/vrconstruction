import { ArrowRight, CalendarClock, PackageCheck, ShieldCheck } from 'lucide-react'

const bullets = [
  { icon: CalendarClock, text: 'Free consultation within 24 hours' },
  { icon: PackageCheck, text: 'Package and Cost-Plus guidance' },
  { icon: ShieldCheck, text: 'Clear planning before site work' },
]

export default function StartJourney() {
  return (
    <section className="relative overflow-hidden bg-[#00040D] py-14 text-white md:py-16">
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand">
            Start With Clarity
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Start your home construction journey today
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Share your plot details, budget and construction goals. Our team will
            help you understand the right package, contract model and next steps
            before you commit.
          </p>
        </div>

        <div className="flex-shrink-0">
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-brand text-base">
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="tel:+917802808080"
              className="inline-flex items-center rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call +91 7802-80-80-80
            </a>
          </div>
          <ul className="mt-5 space-y-2">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-xs text-white/70">
                <Icon className="h-3.5 w-3.5 text-brand" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
