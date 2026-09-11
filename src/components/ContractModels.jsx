import { CheckCircle2, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const models = [
  {
    name: 'Cost-Plus Contract',
    badge: 'Recommended',
    badgeCls: 'bg-brand text-white',
    desc: 'The Cost-Plus Contract provides full transparency, flexibility, and potential cost savings by allowing you to pay the actual cost of materials and labour plus an agreed management fee.',
    points: [
      'Complete cost transparency — every rupee accounted',
      'Pay for actual materials and work done',
      'Save up to 10% compared to lump-sum',
      'Flexible scope changes anytime during construction',
      'Weekly cost reports and billing updates',
    ],
    featured: true,
  },
  {
    name: 'Lump-Sum Contract',
    badge: 'Fixed Price',
    badgeCls: 'bg-gray-900 text-white',
    desc: 'A set price for the entire construction project based on agreed specifications, materials and detailed BOQ. Ideal for clients who prefer a fixed, predictable budget.',
    points: [
      'Fixed, predictable project price',
      'Defined scope and specifications upfront',
      'Simple budgeting and planning',
      'Ideal for standard home builds',
    ],
    featured: false,
  },
]

export default function ContractModels() {
  return (
    <section id="cost-plus" className="relative overflow-hidden bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Contract Models"
          title="Transparent Construction Contracts Built Around Your Needs"
          subtitle="At VR Constructions, we offer two home construction contract models to suit your unique needs and preferences — the Cost-Plus model for maximum transparency or the Lump-Sum model for a fixed-price guarantee."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {models.map((m) => (
            <div
              key={m.name}
              className={`relative overflow-hidden rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 ${
                m.featured
                  ? 'border-brand/30 bg-white shadow-[0_24px_70px_rgba(243,78,0,0.12)]'
                  : 'border-gray-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-ink md:text-2xl">{m.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${m.badgeCls}`}
                >
                  {m.badge}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{m.desc}</p>
              <ul className="mt-6 space-y-3">
                {m.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Learn more about {m.name.split(' ')[0].toLowerCase()} contract
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
