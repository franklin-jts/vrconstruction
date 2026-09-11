import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Phone,
  ShieldCheck,
} from 'lucide-react'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Homes Delivered' },
  { value: '100%', label: 'Transparent Pricing' },
  { value: 'ISO', label: '9001:2015 Certified' },
]

/*
 * Each slide pairs an image with its own headline, tagline and
 * description — when the image changes, the text content changes with it.
 */
const slides = [
  {
    img: '/images/slide-1.jpg',
    alt: 'Modern cozy house with garage and landscaping by VR Constructions',
    tagline: 'Build Right with VR Constructions',
    titleBefore: 'Quality Home',
    titleAccent: 'Construction',
    titleAfter: 'in Bangalore',
    desc: 'Delivering quality homes with transparent cost-plus construction contracts, expert architecture, and exceptional value. Bangalore\u2019s trusted home construction company.',
  },
  {
    img: '/images/slide-2.jpg',
    alt: 'Modern luxury villa with car porch built by VR Constructions',
    tagline: 'Designed Around Your Dream',
    titleBefore: 'Custom House',
    titleAccent: 'Design & Build',
    titleAfter: 'Services',
    desc: 'From 2D/3D floor plans and Vastu-compliant elevations to turnkey execution — one team takes your dream home from concept to completion.',
  },
  {
    img: '/images/slide-3.jpg',
    alt: 'Luxury home exterior with garden and pool lighting by VR Constructions',
    tagline: 'On-Time. On-Budget. Every Time.',
    titleBefore: 'Luxury Homes &',
    titleAccent: 'Villas',
    titleAfter: 'Delivered Turnkey',
    desc: 'Stage-wise milestone tracking, weekly progress updates and up to 10 years structural warranty — handover of your dream home without the stress.',
  },
]

const SLIDE_MS = 6000 // time each slide stays on screen

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const goTo = useCallback((i) => {
    setIndex(((i % slides.length) + slides.length) % slides.length)
  }, [])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => clearInterval(timerRef.current)
  }, [])

  // Preload all slide images at full size so slides never flash blank
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image()
      img.src = s.img
    })
  }, [])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
  }

  const manualGo = (fn) => {
    fn()
    resetTimer()
  }

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* ---- Sliding image layers ---- */}
      {slides.map((s, i) => (
        <div
          key={s.img}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Full-bleed photo — fills the banner, no zoom animation */}
          <img
            src={s.img}
            alt={i === index ? s.alt : ''}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Dark gradient overlays (above images, below content) */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* ---- Content ---- */}
      <div className="relative z-30 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Per-slide text (keyed by index so it re-animates on change) */}
        <div key={index} className="hero-text">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-medium uppercase tracking-wide backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-brand" />
            ISO 9001:2015 Certified Company
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-[3.5rem]">
            <span className="animate-[heroUp_0.7s_ease-out_both]">
              {slides[index].titleBefore}{' '}
              <span className="text-brand drop-shadow-md">
                {slides[index].titleAccent}
              </span>{' '}
              {slides[index].titleAfter}
            </span>
          </h1>

          <p className="mt-2 text-xl font-semibold text-brand drop-shadow-md md:text-2xl animate-[heroUp_0.7s_0.15s_ease-out_both]">
            {slides[index].tagline}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg animate-[heroUp_0.7s_0.3s_ease-out_both]">
            {slides[index].desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-[heroUp_0.7s_0.45s_ease-out_both]">
            <a href="#packages" className="btn-brand text-base">
              View Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="tel:+917802808080"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Slide indicators — clickable dots */}
          <div className="mt-10 flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.img}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => manualGo(() => goTo(i))}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-brand'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quote card (static across slides) */}
        <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md md:self-center">
          <h2 className="text-base font-bold text-white md:text-lg">
            Get a free Quote in just 1 hour
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            Quickly know your construction cost, and plan your house construction
            with confidence.
          </p>
          <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
            <input
              type="tel"
              required
              placeholder="Mobile number"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm transition focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
            <button type="submit" className="btn-brand w-full">
              Get Free Quote
              <BadgeCheck className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => manualGo(prev)}
        className="absolute left-3 top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-brand md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => manualGo(next)}
        className="absolute right-3 top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-brand md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Stats bar */}
      <div className="relative z-30 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 px-5 py-4 text-center backdrop-blur-md"
            >
              <p className="text-2xl font-extrabold text-brand md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
