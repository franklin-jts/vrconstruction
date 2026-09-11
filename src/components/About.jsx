import { ArrowRight, BadgeCheck } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Homes delivered' },
  { value: '10+', label: 'Years experience' },
  { value: 'ISO', label: '9001:2015 certified' },
  { value: '100%', label: 'Transparent billing' },
]

const brands = [
  'UltraTech',
  'JSW Steel',
  'Asian Paints',
  'Jaquar',
  'Havells',
  'Kajaria',
]

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white via-brand-light/30 to-white py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            About VR Constructions
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Leading House Construction Company in Bangalore
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
            VR Constructions is an ISO 9001:2015 certified home
            construction company in Bangalore, specializing in house construction,
            villa construction, commercial construction, apartment construction, and
            architectural designs. We serve homeowners across Whitefield, Sarjapur
            Road, Electronic City, Yelahanka, KR Puram, Kengeri, and other parts of
            Bangalore.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Our specialized Cost Plus Construction model offers complete cost
            transparency, allowing homeowners to pay actual material and labor costs
            along with a fixed management fee. We also provide lump-sum construction
            contracts for clients who prefer fixed-price projects.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Know more about VR Constructions
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-3xl border border-brand/15 bg-white p-8 shadow-[0_24px_70px_rgba(243,78,0,0.08)]">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-brand-light/60 px-5 py-4 text-center"
              >
                <p className="text-2xl font-extrabold text-brand md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-gray-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-gray-500">
            <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
            Trusted material brands:{' '}
            <span className="font-semibold text-ink">{brands.join(', ')}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
