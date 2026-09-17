import { CalendarClock, PackageSearch, Phone, ThumbsUp } from 'lucide-react'

const perks = [
  { icon: PackageSearch, text: 'Package recommendation' },
  { icon: CalendarClock, text: 'Detailed estimate within 24 hours' },
  { icon: ThumbsUp, text: 'No obligation, explore at your pace' },
]

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#1b5e2e] py-16 text-white md:py-24">
      <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-fade-in-up">
          <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white">
            Start Your Project
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
            Ready to Build Your Dream Home?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            Get a transparent construction estimate from Bangalore&#39;s most trusted
            home construction company. Our experts will help you choose the right
            package and contract model.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-white/85 animate-slide-up">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white">
                  <Icon className="h-4 w-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>
          <a
            href="tel:+917802808080"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-5 py-3 transition hover:bg-white/15 hover:scale-105 duration-300"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1b5e2e]">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-base font-bold">+91 7802-80-80-80</span>
              <span className="block text-xs text-white/70">
                Speak directly with a VR Constructions expert
              </span>
            </span>
          </a>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm animate-fade-in-up transition-all duration-500 hover:border-white/40 hover:bg-white/15">
          <h3 className="text-lg font-bold">Free Estimate</h3>
          <p className="mt-2 text-sm text-white/80">
            Tell us about your site — name, mobile and project type — and
            we&#39;ll call back within 24 hours.
          </p>
          <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/20 bg-white/15 px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
            />
            <input
              type="tel"
              required
              placeholder="Mobile number"
              className="w-full rounded-lg border border-white/20 bg-white/15 px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
            />
            <select
              defaultValue=""
              className="w-full rounded-lg border border-white/20 bg-white/15 px-4 py-2.5 text-sm text-white/90 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
            >
              <option value="" disabled className="text-ink">
                Project type
              </option>
              <option className="text-ink">Independent House</option>
              <option className="text-ink">Villa</option>
              <option className="text-ink">Duplex</option>
              <option className="text-ink">Renovation</option>
            </select>
            <button type="submit" className="btn-brand w-full hover:scale-105 transition duration-300">
              Get Free Estimate
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
