import { ArrowRight, BadgePercent, Info } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const packages = [
  {
    tier: 'BASIC',
    name: 'Silver',
    bestFor: 'Budget homes',
    price: '₹1,798',
    features: ['Standard structure', 'Essential finishes', 'Quality supervision'],
    highlight: false,
    ribbon: null,
  },
  {
    tier: 'BUDGET',
    name: 'Gold',
    bestFor: 'Value-focused families',
    price: '₹1,948',
    features: ['Better finishes', 'Trusted brands', 'Balanced specifications'],
    highlight: true,
    ribbon: 'Best Selling',
  },
  {
    tier: 'STANDARD',
    name: 'Diamond',
    bestFor: 'Most home owners',
    price: '₹2,098',
    features: ['Premium finishes', 'Enhanced specifications', 'Best value balance'],
    highlight: false,
    ribbon: 'Most Popular',
  },
  {
    tier: 'PREMIUM',
    name: 'Platinum',
    bestFor: 'Luxury homes',
    price: '₹2,248',
    features: ['Luxury materials', 'Bespoke detailing', 'Top-tier specifications'],
    highlight: false,
    ribbon: null,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Packages"
          title="House Construction Packages in Bangalore"
          subtitle="Choose from our range of construction packages designed for every budget. All packages include GST, design and project management."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex min-h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                p.highlight
                  ? 'border-brand bg-white shadow-[0_24px_70px_rgba(243,78,0,0.14)] ring-1 ring-brand/20'
                  : 'border-gray-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)]'
              }`}
            >
              {p.ribbon && (
                <span
                  className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow ${
                    p.highlight ? 'bg-brand' : 'bg-gray-900'
                  }`}
                >
                  {p.ribbon}
                </span>
              )}

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
                {p.tier}
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-ink">{p.name}</h3>

              <div className="mt-5 rounded-2xl bg-brand-light/70 px-4 py-3">
                <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                  Best for
                </p>
                <p className="text-sm font-semibold text-ink">{p.bestFor}</p>
              </div>

              <div className="mt-4">
                <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                  Starting from
                </p>
                <p className="mt-0.5">
                  <span className="text-2xl font-extrabold text-brand">{p.price}</span>
                  <span className="text-sm font-semibold text-ink">/sq.ft*</span>
                </p>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                {p.name === 'Silver' &&
                  'Essential specifications for a quality home construction on a smart budget.'}
                {p.name === 'Gold' &&
                  'Balanced finishes and quality materials with great value for money.'}
                {p.name === 'Diamond' &&
                  'Premium materials and finishes for an elevated lifestyle.'}
                {p.name === 'Platinum' &&
                  'Top-tier luxury specifications and bespoke detailing.'}
              </p>

              <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-semibold transition ${
                  p.highlight
                    ? 'border-brand bg-brand text-white hover:bg-brand-dark'
                    : 'border-brand text-brand hover:bg-brand hover:text-white'
                }`}
              >
                View Full Specs
              </a>
            </div>
          ))}
        </div>

        {/* Cost-Plus advantage banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-brand-dark p-8 text-white md:p-10">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-14 left-1/3 h-40 w-40 rounded-full bg-black/10 blur-2xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 md:flex">
                <BadgePercent className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                  Cost-Plus Advantage
                </p>
                <h3 className="mt-1 text-xl font-extrabold md:text-2xl">
                  Save up to 10% on all packages with the Cost-Plus contract model
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
                  Choose any construction package, then switch to Cost-Plus for
                  transparent actual-cost billing, flexible upgrades, weekly cost
                  visibility, and better control over your total home construction
                  budget.
                </p>
              </div>
            </div>
            <a
              href="#cost-plus"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-brand transition hover:bg-brand-light"
            >
              Explore Cost-Plus
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="relative mt-6 flex items-start gap-2 text-[11px] leading-relaxed text-white/70">
            <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
            *Per sq.ft values are approximate. The cost-plus model doesn&#39;t follow
            per sft pricing. Refer to our cost-plus contract page for detailed
            pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
