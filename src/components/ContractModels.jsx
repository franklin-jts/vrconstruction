import { CheckCircle2, ArrowRight, Home, FileCheck } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const models = [
  {
    icon: Home,
    name: 'Transparent Cost Model',
    badge: null,
    desc: 'Complete visibility. Maximum flexibility. Real value.',
    longDesc: 'Our Transparent Cost Model allows you to pay the actual cost of materials and labour, along with a pre-defined management fee. This is ideal for homeowners who want full control and transparency throughout the construction journey.',
    points: [
      '100% cost transparency with detailed reports',
      'Pay only for actual materials and work completed',
      'Save up to 10% compared to fixed price models',
      'Flexibility to make design and scope changes anytime',
      'Regular cost updates and milestone-wise billing',
    ],
    cta: 'Explore Transparent Cost Model',
    ctaColor: 'bg-brand hover:bg-brand-dark',
    alignment: 'left',
  },
  {
    icon: FileCheck,
    name: 'Fixed Price Model',
    badge: null,
    desc: 'Plan better. Build smarter. No surprises.',
    longDesc: 'Our Fixed Price Model offers a single, all-inclusive price for the entire project based on approved designs, specifications and detailed bill of quantities. It\'s the perfect choice for homeowners who prefer a clear budget and predictable timeline.',
    points: [
      'Fixed and predictable project cost',
      'Defined scope and specifications upfront',
      'Simplified budgeting and financial planning',
      'Minimal cost variations',
      'Ideal for standard home designs and well-defined projects',
    ],
    cta: 'Explore Fixed Price Model',
    ctaColor: 'bg-amber-500 hover:bg-amber-600',
    alignment: 'right',
  },
]

const benefits = [
  {
    icon: Home,
    title: 'Client-Centric Approach',
    desc: 'Your goals, our priority',
  },
  {
    icon: CheckCircle2,
    title: 'Quality & Compliance',
    desc: 'Built to last, built right',
  },
  {
    icon: FileCheck,
    title: 'Flexible & Scalable',
    desc: 'Solutions for every need',
  },
  {
    icon: Home,
    title: 'Trusted Partnership',
    desc: 'From foundation to forever',
  },
]

export default function ContractModels() {
  return (
    <section id="cost-plus" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            OUR CONTRACT APPROACH
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink md:text-4xl">
            Choose a Construction Contract
            <br />
            <span className="text-brand">That Works for You</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Every project is unique. That's why we offer two flexible home construction contract options, designed to give you clarity, control and confidence — whether you want complete cost transparency or a fixed, all-inclusive price.
          </p>
          <div className="mt-2 flex items-center justify-center gap-2 border-t border-gray-200 pt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
            <span>SAME COMMITMENT, A BETTER BUILDING EXPERIENCE</span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:gap-8 lg:grid-cols-2">
          {models.map((m, idx) => {
            const ModelIcon = m.icon
            return (
              <div
                key={m.name}
                className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl transition duration-500 hover:shadow-2xl ${
                  idx === 0
                    ? 'border-brand/30 bg-white/40 shadow-lg hover:border-brand/50'
                    : 'border-amber-300/30 bg-white/40 shadow-lg hover:border-amber-300/50'
                }`}
              >
                {/* Background accent */}
                <div className="absolute inset-0 opacity-40">
                  <div
                    className={`absolute ${
                      idx === 0
                        ? 'right-0 top-0 h-80 w-80 bg-gradient-to-br from-brand/20 to-transparent rounded-full blur-3xl'
                        : 'left-0 top-0 h-80 w-80 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl'
                    }`}
                  />
                </div>

                <div className="relative p-5 md:p-8 lg:p-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl backdrop-blur-md transition duration-300 flex-shrink-0 ${
                        idx === 0
                          ? 'bg-brand/20 text-brand hover:bg-brand/40'
                          : 'bg-amber-100/40 text-amber-600 hover:bg-amber-100/60'
                      }`}
                    >
                      <ModelIcon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-2xl font-bold text-ink transition duration-300">{m.name}</h3>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-gray-600">{m.desc}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 md:mt-6 text-xs md:text-sm leading-relaxed text-gray-700 transition duration-300">
                    {m.longDesc}
                  </p>

                  {/* Points */}
                  <ul className="mt-5 md:mt-6 space-y-2 md:space-y-3">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-xs md:text-sm text-gray-700 transition duration-300">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 md:h-5 md:w-5 flex-shrink-0 ${
                            idx === 0 ? 'text-brand' : 'text-amber-500'
                          }`}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`mt-6 md:mt-8 inline-flex items-center gap-2 rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold text-white transition duration-300 hover:shadow-lg ${m.ctaColor}`}
                  >
                    {m.cta}
                    <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 transition duration-300" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {benefits.map((b) => {
            const BIcon = b.icon
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-white/30 bg-white/30 backdrop-blur-md p-5 md:p-6 text-center transition duration-300 hover:bg-white/50 hover:shadow-lg"
              >
                <div className="flex justify-center">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-brand/20 text-brand backdrop-blur-sm transition duration-300 hover:bg-brand/40">
                    <BIcon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </div>
                <h4 className="mt-3 md:mt-4 text-sm md:text-base font-bold text-ink transition duration-300">{b.title}</h4>
                <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-gray-600 transition duration-300">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
