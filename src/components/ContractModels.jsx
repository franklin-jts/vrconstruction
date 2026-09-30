import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Home, FileCheck, ShieldCheck, Layers, Handshake } from 'lucide-react'

const NAVY = '#0b1f3a'

const models = [
  {
    id: 'transparent',
    icon: Home,
    name: 'Transparent Cost Model',
    tagline: 'Complete visibility. Maximum flexibility. Real value.',
    desc: 'Pay the actual cost of materials and labour, along with a pre-defined management fee. Ideal for homeowners who want full control and transparency throughout the construction journey.',
    points: [
      '100% cost transparency with detailed reports',
      'Pay only for actual materials and work completed',
      'Save up to 10% compared to fixed price models',
      'Flexibility to make design and scope changes anytime',
      'Regular cost updates and milestone-wise billing',
    ],
    cta: 'Explore Transparent Cost Model',
    color: '#0f766e',
  },
  {
    id: 'fixed',
    icon: FileCheck,
    name: 'Fixed Price Model',
    tagline: 'Plan better. Build smarter. No surprises.',
    desc: "One single, all-inclusive price for the entire project, based on approved designs, specifications and a detailed bill of quantities. The right choice for homeowners who prefer a clear budget and predictable timeline.",
    points: [
      'Fixed and predictable project cost',
      'Defined scope and specifications upfront',
      'Simplified budgeting and financial planning',
      'Minimal cost variations',
      'Ideal for standard home designs and well-defined projects',
    ],
    cta: 'Explore Fixed Price Model',
    color: '#b8862b',
  },
]

const stats = [
  { to: 100, suffix: '%', label: 'Cost transparency with the Transparent Cost Model' },
  { to: 10, prefix: 'Up to ', suffix: '%', label: 'Savings compared to fixed price models' },
  { to: 2, suffix: '', label: 'Contract options, one standard of quality' },
]

const benefits = [
  { icon: Handshake, title: 'Client-centric approach', desc: 'Your goals come first' },
  { icon: ShieldCheck, title: 'Quality and compliance', desc: 'Built to last, built right' },
  { icon: Layers, title: 'Flexible and scalable', desc: 'Solutions for every need' },
  { icon: Home, title: 'Trusted partnership', desc: 'From foundation to handover' },
]

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return setSeen(true)
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setSeen(true), io.disconnect()),
      { threshold }
    )
    ref.current && io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        seen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function CountUp({ to, prefix = '', suffix = '' }) {
  const [ref, seen] = useInView(0.5)
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (reduced()) return setV(to)
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 1400, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to])
  return (
    <span ref={ref}>
      {prefix}
      {v}
      {suffix}
    </span>
  )
}

function Tick({ color, show, delay }) {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle
        cx="12" cy="12" r="10" pathLength="1"
        style={{ strokeDasharray: 1, strokeDashoffset: show ? 0 : 1, transition: `stroke-dashoffset .7s ease ${delay}ms` }}
      />
      <path
        d="M7.5 12.5l3 3 6-6.5" pathLength="1"
        style={{ strokeDasharray: 1, strokeDashoffset: show ? 0 : 1, transition: `stroke-dashoffset .5s ease ${delay + 350}ms` }}
      />
    </svg>
  )
}

function ModelCard({ m, index }) {
  const [ref, seen] = useInView(0.25)
  const Icon = m.icon
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none ${
        seen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* accent bar draws in */}
      <div
        className="h-1.5 origin-left transition-transform duration-1000 ease-out motion-reduce:transition-none"
        style={{ background: m.color, transform: seen ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: `${index * 150 + 300}ms` }}
      />
      <div className="p-6 md:p-10">
        <div className="flex items-start gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-500 group-hover:rotate-6"
            style={{ background: m.color }}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold md:text-2xl" style={{ color: NAVY }}>{m.name}</h3>
            <p className="mt-1 text-sm font-medium" style={{ color: m.color }}>{m.tagline}</p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-600 md:text-base">{m.desc}</p>

        <ul className="mt-6 divide-y divide-slate-100">
          {m.points.map((pt, i) => (
            <li
              key={pt}
              style={{ transitionDelay: `${index * 150 + 500 + i * 120}ms` }}
              className={`flex items-start gap-3 py-3 text-sm text-slate-700 transition-all duration-700 motion-reduce:transition-none md:text-base ${
                seen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
            >
              <Tick color={m.color} show={seen} delay={index * 150 + 500 + i * 120} />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <button
          className="relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-md border-2 px-6 py-3 text-sm font-semibold transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-white"
          style={{ borderColor: m.color, color: m.color, outlineColor: m.color }}
          onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'translateX(0)')}
          onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'translateX(-101%)')}
        >
          <span
            aria-hidden
            className="absolute inset-0 transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ background: m.color, transform: 'translateX(-101%)' }}
          />
          <span className="relative">{m.cta}</span>
          <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

export default function ContractModels() {
  const [lineRef, lineSeen] = useInView(0.5)

  return (
    <section id="cost-plus" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-slate-500">Our contract approach</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-5xl" style={{ color: NAVY }}>
            Choose a construction contract that works for you
          </h2>
          <div ref={lineRef} className="mx-auto mt-6 h-0.5 w-24 origin-center bg-amber-600 transition-transform duration-1000 ease-out motion-reduce:transition-none" style={{ transform: lineSeen ? 'scaleX(1)' : 'scaleX(0)' }} />
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            Every project is unique. That is why we offer two home construction contracts, designed to give you clarity, control and confidence, whether you want complete cost transparency or a fixed, all-inclusive price.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {models.map((m, i) => (
            <ModelCard key={m.id} m={m} index={i} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 overflow-hidden rounded-xl text-white" style={{ background: '#154D2B' }}>
          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 150} className="p-8 text-center">
                <div className="font-serif text-4xl font-semibold text-amber-400 md:text-5xl">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm text-slate-300">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const BIcon = b.icon
            return (
              <Reveal key={b.title} delay={i * 100}>
                <div className="group h-full rounded-lg border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-600/50 hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-amber-600" style={{ color: NAVY }}>
                    <BIcon className="h-6 w-6 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h4 className="mt-4 font-serif text-base font-semibold" style={{ color: NAVY }}>{b.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}