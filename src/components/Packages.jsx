import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, Info } from 'lucide-react'

const NAVY = '#0b1f3a'
const ACCENT = '#1e40af'

const packages = [
  {
    tier: 'Basic', name: 'Silver', bestFor: 'Budget homes', price: 1798,
    desc: 'Essential specifications for a quality home construction on a smart budget.',
    features: ['Standard structure', 'Essential finishes', 'Quality supervision'], badge: null,
  },
  {
    tier: 'Budget', name: 'Gold', bestFor: 'Value-focused families', price: 1948,
    desc: 'Balanced finishes and quality materials with great value for money.',
    features: ['Better finishes', 'Trusted brands', 'Balanced specifications'], badge: 'Best selling',
  },
  {
    tier: 'Standard', name: 'Diamond', bestFor: 'Most home owners', price: 2098,
    desc: 'Premium materials and finishes for an elevated lifestyle.',
    features: ['Premium finishes', 'Enhanced specifications', 'Best value balance'], badge: 'Most popular',
  },
  {
    tier: 'Premium', name: 'Platinum', bestFor: 'Luxury homes', price: 2248,
    desc: 'Top-tier luxury specifications and bespoke detailing.',
    features: ['Luxury materials', 'Bespoke detailing', 'Top-tier specifications'], badge: null,
  },
]

const inr = (n) => '₹' + new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(n))
const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return setSeen(true)
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold })
    ref.current && io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

function useTween(target, ms = 500) {
  const [v, setV] = useState(target)
  const from = useRef(target)
  useEffect(() => {
    if (reduced()) return setV(target)
    const start = performance.now()
    const a = from.current
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / ms, 1)
      const val = a + (target - a) * (1 - Math.pow(1 - p, 3))
      from.current = val
      setV(val)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, ms])
  return v
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        seen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default function Packages() {
  const [area, setArea] = useState(1800)
  const [selected, setSelected] = useState(1)
  const [contract, setContract] = useState('standard')

  const sel = packages[selected]
  const base = sel.price * area
  const costPlus = contract === 'costplus'
  const total = useTween(costPlus ? base * 0.9 : base)
  const saving = useTween(base * 0.1)
  const pct = ((area - 600) / 4400) * 100

  const setSafeArea = (v) => setArea(Math.min(5000, Math.max(600, Number(v) || 600)))

  return (
    <section id="packages" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: NAVY }}>
            House construction packages in Bangalore
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Choose from our range of construction packages designed for every budget. All packages include GST, design and project management.
          </p>
        </Reveal>

        {/* Area input */}
        <Reveal delay={100} className="mt-10">
          <div className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-white p-5 md:flex-row md:items-center md:gap-8 md:p-6">
            <div className="shrink-0">
              <label htmlFor="area-input" className="block text-sm font-semibold" style={{ color: NAVY }}>
                Built-up area
              </label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="area-input" type="number" min="600" max="5000" step="100" value={area}
                  onChange={(e) => setArea(e.target.value === '' ? '' : Number(e.target.value))}
                  onBlur={(e) => setSafeArea(e.target.value)}
                  className="w-28 rounded-md border border-slate-300 px-3 py-2 text-base font-semibold tabular-nums focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20"
                />
                <span className="text-sm text-slate-500">sq ft</span>
              </div>
            </div>
            <div className="flex-1">
              <input
                type="range" min="600" max="5000" step="100" value={area || 600}
                onChange={(e) => setArea(+e.target.value)}
                aria-label="Built-up area in square feet"
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
                style={{ accentColor: ACCENT, background: `linear-gradient(to right, ${ACCENT} ${pct}%, #e2e8f0 ${pct}%)` }}
              />
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>600</span>
                <span>5,000</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Package cards */}
        <div role="radiogroup" aria-label="Construction package" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => {
            const on = selected === i
            return (
              <Reveal key={p.name} delay={i * 90} className="h-full">
                <div
                  onClick={() => setSelected(i)}
                  className={`flex h-full cursor-pointer flex-col rounded-lg border-2 bg-white transition-all duration-300 motion-reduce:transition-none ${
                    on ? 'shadow-lg' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                  style={on ? { borderColor: NAVY } : undefined}
                >
                  <button
                    role="radio"
                    aria-checked={on}
                    onClick={() => setSelected(i)}
                    className="flex w-full items-start justify-between gap-3 rounded-t-md p-6 pb-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-800"
                  >
                    <span>
                      <span className="block text-sm text-slate-500">{p.tier}</span>
                      <span className="block text-2xl font-bold" style={{ color: NAVY }}>{p.name}</span>
                      {p.badge && (
                        <span className="mt-2 inline-block rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                          {p.badge}
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden
                      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        on ? 'scale-100 text-white' : 'border-slate-300 text-transparent'
                      }`}
                      style={on ? { background: NAVY, borderColor: NAVY } : undefined}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col px-6 pb-6">
                    <p className="text-sm text-slate-500">Best for <span className="font-semibold text-slate-800">{p.bestFor}</span></p>

                    <div className="mt-4 border-y border-slate-100 py-4">
                      <p className="text-xs text-slate-500">Starting from</p>
                      <p>
                        <span className="text-3xl font-bold tabular-nums" style={{ color: NAVY }}>{inr(p.price)}</span>
                        <span className="text-sm font-medium text-slate-600"> /sq.ft*</span>
                      </p>
                      <p className="mt-1 text-xs text-slate-500 tabular-nums">
                        ≈ {inr(p.price * (area || 600))} for {(area || 600).toLocaleString('en-IN')} sq ft
                      </p>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{p.desc}</p>

                    <ul className="mt-4 space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      onClick={(e) => e.stopPropagation()}
                      className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                      style={{ color: ACCENT }}
                    >
                      View full specs
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Estimate summary */}
        <Reveal className="mt-8">
          <div className="rounded-lg border border-slate-200 bg-white">
            <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm text-slate-500">Estimated cost</p>
                <p className="mt-1 text-sm font-semibold" style={{ color: NAVY }}>
                  {sel.name} package · {(area || 600).toLocaleString('en-IN')} sq ft
                </p>
                <p className="mt-3 text-4xl font-bold tabular-nums md:text-5xl" style={{ color: NAVY }}>
                  {inr(total)}
                </p>
                <p className={`mt-2 text-sm font-medium text-emerald-700 transition-opacity duration-500 ${costPlus ? 'opacity-100' : 'opacity-0'}`}>
                  Up to {inr(saving)} lower than the standard estimate
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>Contract model</p>
                <div role="radiogroup" aria-label="Contract model" className="mt-2 grid grid-cols-2 rounded-md border border-slate-300 bg-slate-100 p-1">
                  {[
                    { id: 'standard', label: 'Package price' },
                    { id: 'costplus', label: 'Cost-Plus' },
                  ].map((o) => (
                    <button
                      key={o.id}
                      role="radio"
                      aria-checked={contract === o.id}
                      onClick={() => setContract(o.id)}
                      className={`rounded px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 ${
                        contract === o.id ? 'bg-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                      style={contract === o.id ? { color: NAVY } : undefined}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Save up to 10% on all packages with the Cost-Plus contract model: transparent actual-cost billing, flexible upgrades, weekly cost visibility and better control over your total budget.
                </p>
                <a
                  href="#cost-plus"
                  className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                  style={{ color: ACCENT }}
                >
                  Explore Cost-Plus
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <p className="flex items-start gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4 text-xs leading-relaxed text-slate-500 md:px-8">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              *Per sq.ft values are approximate. The cost-plus model doesn&#39;t follow per sft pricing. Refer to our cost-plus contract page for detailed pricing. Estimates are indicative only and not a quotation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}