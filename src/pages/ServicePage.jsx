import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { getServiceBySlug, services } from '../data/services.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import MobileBottomNav from '../components/MobileBottomNav.jsx'

/* Highlights the brand name inside text content */
function HighlightBrand({ text }) {
  const parts = text.split(/(VR Constructions)/g)
  return (
    <>
      {parts.map((part, i) =>
        part === 'VR Constructions' ? (
          <strong key={i} className="font-bold text-brand">
            VR Constructions
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

/* Scroll animation trigger hook - Opposite transitions */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = entry.target.getAttribute('data-card-index')
            const isImage = entry.target.getAttribute('data-type') === 'image'
            
            // Opposite animations for image vs content
            if (cardIndex === '0') {
              // Card 1
              if (isImage) {
                entry.target.classList.add('animate-slide-in-left') // Image slides left
              } else {
                entry.target.classList.add('animate-slide-in-right') // Content slides right
              }
            } else if (cardIndex === '1') {
              // Card 2 - opposite of card 1
              if (isImage) {
                entry.target.classList.add('animate-slide-in-right') // Image slides right
              } else {
                entry.target.classList.add('animate-slide-in-left') // Content slides left
              }
            } else if (cardIndex === '2') {
              // Card 3 - same as card 1
              if (isImage) {
                entry.target.classList.add('animate-slide-in-left')
              } else {
                entry.target.classList.add('animate-slide-in-right')
              }
            }
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    const elements = document.querySelectorAll('[data-scroll-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/* One card in the zig-zag timeline */
function WorkCard({ work, isLeft }) {
  const Icon = work.icon
  
  return (
    <div 
      className="group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_70px_rgba(22,163,74,0.12)] md:p-7 opacity-0 transition-all duration-700"
      data-scroll-animate
      style={{ 
        transform: 'translateX(0)',
      }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/5 blur-3xl transition group-hover:bg-brand/10" />
      
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-brand md:text-xl">{work.title}</h3>
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand md:hidden">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-2 border-t border-dashed border-brand/25" />
      
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {work.desc}
      </p>
      
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {work.items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-3.5 py-3 transition group-hover:border-brand/25 group-hover:bg-brand-light/40"
          >
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand" />
            <span className="text-xs font-medium leading-snug text-gray-700 md:text-[13px]">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end">
        <Link
          to="/#contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-xs font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          Request Free Quote
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  
  // Trigger scroll animations
  useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-ink">Service not found</h1>
          <p className="mt-3 text-gray-600">
            The service you are looking for does not exist.
          </p>
          <Link to="/" className="btn-brand mt-8">
            Back to Home
          </Link>
        </main>
        <Footer />
        <MobileBottomNav />
      </>
    )
  }

  const ServiceIcon = service.icon
  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <Navbar />
      <main>
        {/* ---- Hero ---- */}
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0">
            <img
              src={service.hero.img}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-28">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs font-medium text-white/70"
            >
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-brand">{service.name}</span>
            </nav>

            <h1 className="hero-text mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-5xl">
              {service.hero.titleBefore}{' '}
              <span className="text-brand drop-shadow-md">
                {service.hero.titleAccent}
              </span>{' '}
              {service.hero.titleAfter}
            </h1>
            <p className="mt-2 text-xl font-semibold text-brand drop-shadow-md md:text-2xl">
              {service.hero.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              {service.hero.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/#contact" className="btn-brand text-base">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="tel:+917802808080"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* ---- Works — dark zig-zag timeline ---- */}
        <section className="relative overflow-hidden bg-white py-14 text-ink md:py-20">
          {/* ambient glows */}
          <div className="pointer-events-none absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-brand/5 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[15%] right-[-8%] h-80 w-80 rounded-full bg-brand/5 blur-[130px]" />

          <div className="relative mx-auto max-w-5xl px-4">
            {/* header */}
            <div className="mx-auto max-w-2xl rounded-3xl border border-gray-100 bg-white px-6 py-8 text-center shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                What We Do
              </span>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-[0.3em] text-brand">
                <ServiceIcon className="h-4 w-4" />
                VR Constructions
              </p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-4xl">
                {service.name} <span className="text-brand">Services</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                <HighlightBrand text={service.intro} />
              </p>
            </div>

            {/* Image Gallery - Simple Zig Zag Layout */}
            <div className="relative mt-12 space-y-12 md:mt-16 md:space-y-16">
              {service.works.map((work, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div
                    key={work.title}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-start"
                  >
                    {/* Image - No Background - Smaller Size */}
                    {work.img && (
                      <div
                        className={`opacity-0 transition-all duration-700 ${!isLeft ? 'md:order-2' : 'md:order-1'}`}
                        data-scroll-animate
                        data-card-index={i}
                        data-type="image"
                      >
                        <div className="max-w-xs mx-auto">
                          <img 
                            src={work.img} 
                            alt={work.title} 
                            className="w-full h-auto object-contain" 
                          />
                        </div>
                      </div>
                    )}

                    {/* Content - Smaller - Always Show */}
                    <div 
                      className={`opacity-0 transition-all duration-700 ${!isLeft ? 'md:order-1' : 'md:order-2'} py-2`}
                      data-scroll-animate
                      data-card-index={i}
                      data-type="content"
                    >
                      <div className="space-y-3">
                        <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-xs font-bold uppercase text-brand">
                          {work.tag}
                        </span>
                        <h3 className="text-lg font-bold text-ink md:text-xl">{work.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600">{work.desc}</p>
                        
                        <div className="pt-2 grid gap-1.5 grid-cols-2">
                          {work.items.map((item) => (
                            <div key={item} className="flex items-start gap-1.5">
                              <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-brand" />
                              <span className="text-xs text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2">
                          <Link
                            to="/#contact"
                            className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand transition hover:bg-brand hover:text-white"
                          >
                            Request Free Quote
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ---- Trust band ---- */}
        <section className="border-y border-brand/10 bg-brand-light/40 py-8">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-center">
            {[
              'ISO 9001:2015 Certified Processes',
              'Verified Quality Material Brands',
              'Up to 10 Years Structural Warranty',
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <ShieldCheck className="h-4 w-4 text-brand" />
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ---- Process ---- */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                How It Works
              </span>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                Our {service.name} Process
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((p) => (
                <div key={p.step} className="relative text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-extrabold text-brand shadow-lg shadow-brand/10 ring-1 ring-brand/15">
                    {p.step}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Other services ---- */}
        <section className="border-t border-gray-100 py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-bold text-ink md:text-3xl">
                  Explore Our Other Services
                </h2>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Everything around your home, delivered by one trusted team.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((o) => {
                const OtherIcon = o.icon
                return (
                  <Link
                    key={o.slug}
                    to={`/services/${o.slug}`}
                    className="group flex items-start gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand/25"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">
                      <OtherIcon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-base font-bold text-ink transition group-hover:text-brand">
                        {o.name}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                        {o.short}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section id="contact" className="bg-[#00040D] py-14 text-white md:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">
                Need {service.name.toLowerCase()} for your project?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/75 md:text-base">
                Talk to a VR Constructions expert today — free consultation,
                transparent estimate within 24 hours, no obligation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/#contact" className="btn-brand text-base">
                Get Free Quote
              </Link>
              <a
                href="tel:+917802808080"
                className="inline-flex items-center rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call +91 7802-80-80-80
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  )
}
