import { CalendarClock, PackageSearch, Phone, ThumbsUp } from 'lucide-react'

const perks = [
  { icon: PackageSearch, text: 'Package recommendation' },
  { icon: CalendarClock, text: 'Detailed estimate within 24 hours' },
  { icon: ThumbsUp, text: 'No obligation, explore at your pace' },
]

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#00040D] py-16 text-white md:py-24">
      <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            Start Your Project
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
            Ready to Build Your Dream Home?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Get a transparent construction estimate from Bangalore&#39;s most trusted
            home construction company. Our experts will help you choose the right
            package and contract model.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-white/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>
          <a
            href="tel:+917802808080"
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 transition hover:bg-white/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
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

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
          <h3 className="text-lg font-bold">Free Estimate</h3>
          <p className="mt-2 text-sm text-white/70">
            Tell us about your site — name, mobile and project type — and
            we&#39;ll call back within 24 hours.
          </p>
          <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
            <input
              type="tel"
              required
              placeholder="Mobile number"
              className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
            <select
              defaultValue=""
              className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white/80 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            >
              <option value="" disabled className="text-ink">
                Project type
              </option>
              <option className="text-ink">Independent House</option>
              <option className="text-ink">Villa</option>
              <option className="text-ink">Duplex</option>
              <option className="text-ink">Renovation</option>
            </select>
            <button type="submit" className="btn-brand w-full">
              Get Free Estimate
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
