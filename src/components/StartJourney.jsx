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
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 md:gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="animate-fade-in-up">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em] text-white/90">
            Start With Clarity
          </p>
          <h2 className="mt-2 md:mt-3 max-w-2xl text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Start your home construction journey today
          </h2>
          <p className="mt-2 md:mt-3 max-w-2xl text-xs md:text-sm lg:text-base leading-relaxed text-white/85">
            Share your plot details, budget and construction goals. Our team will
            help you understand the right package, contract model and next steps
            before you commit.
          </p>
        </div>

        <div className="flex-shrink-0 w-full lg:w-auto animate-fade-in-up">
          <div className="flex flex-wrap gap-2 md:gap-3">
            <a href="#contact" className="btn-brand text-xs md:text-sm py-2 md:py-2.5 px-4 md:px-5 hover:shadow-lg transition duration-300">
              Get a Free Quote
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </a>
            <a
              href="tel:+917802808080"
              className="inline-flex items-center rounded-md border border-white/40 px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white transition hover:bg-white/15 hover:shadow-lg duration-300"
            >
              Call +91 7802-80-80-80
            </a>
          </div>
          <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-xs md:text-sm text-white/80 animate-slide-up">
                <Icon className="h-3 w-3 md:h-3.5 md:w-3.5 text-white flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
