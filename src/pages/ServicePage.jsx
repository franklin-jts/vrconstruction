import { useEffect, useRef } from 'react'
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

/* =========================================================
   BRAND HIGHLIGHT
========================================================= */

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

/* =========================================================
   UNIQUE ANIMATION VARIANTS PER SERVICE
   Change these slugs to match your actual service slugs.
   Any unknown slug falls back to 'fade'.
========================================================= */

const ANIMATION_VARIANTS = {
  'interior-design': 'fade',
  'modular-kitchen': 'slide-left',
  'home-renovation': 'zoom',
  'civil-construction': 'slide-up',
}

const VARIANT_INITIAL = {
  fade: 'opacity-0 translate-y-10 scale-95 blur-[2px]',
  'slide-left': 'opacity-0 -translate-x-20 scale-95 blur-[2px]',
  'slide-up': 'opacity-0 translate-y-10 scale-95 blur-[2px]',
  zoom: 'opacity-0 scale-90 blur-[2px]',
}

const VARIANT_REMOVE = {
  fade: ['opacity-0', 'translate-y-10', 'scale-95', 'blur-[2px]'],
  'slide-left': ['opacity-0', '-translate-x-20', 'scale-95', 'blur-[2px]'],
  'slide-up': ['opacity-0', 'translate-y-10', 'scale-95', 'blur-[2px]'],
  zoom: ['opacity-0', 'scale-90', 'blur-[2px]'],
}

/* =========================================================
   SCROLL REVEAL HOOK
   Uses slug → variant map so each service page
   gets a distinct reveal motion.
========================================================= */

function useScrollAnimation(slug) {
  const observerRef = useRef(null)

  useEffect(() => {
    const variant = ANIMATION_VARIANTS[slug] || 'fade'
    const removeClasses = VARIANT_REMOVE[variant] || VARIANT_REMOVE.fade

    // Small delay allows route content to finish rendering
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-scroll-reveal]')

      if (!elements.length) return

      // Disconnect previous observer
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            const element = entry.target

            // Remove this variant's initial animation states
            removeClasses.forEach((className) => {
              element.classList.remove(className)
            })

            // Add final state
            element.classList.add(
              'opacity-100',
              'translate-x-0',
              'translate-y-0',
              'scale-100',
              'blur-0',
            )

            // Animate only once
            observer.unobserve(element)
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -80px 0px',
        },
      )

      observerRef.current = observer

      elements.forEach((element) => {
        observer.observe(element)
      })
    }, 100)

    return () => {
      clearTimeout(timer)

      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [slug])
}

/* =========================================================
   SERVICE PAGE
========================================================= */

export default function ServicePage() {
  const { slug } = useParams()

  const service = getServiceBySlug(slug)

  /* Trigger animations whenever service/slug changes */
  useScrollAnimation(slug)

  /* Scroll to top whenever service page changes */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [slug])

  /* =======================================================
     SERVICE NOT FOUND
  ======================================================= */

  if (!service) {
    return (
      <>
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}</style>

        <Navbar />

        <main className="mx-auto max-w-7xl px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-ink">
            Service not found
          </h1>

          <p className="mt-3 text-gray-600">
            The service you are looking for does not exist.
          </p>

          <Link to="/" className="btn-brand mt-8 inline-flex">
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

  /* Resolve animation variant for this slug */
  const variant = ANIMATION_VARIANTS[slug] || 'fade'
  const initialClass = VARIANT_INITIAL[variant] || VARIANT_INITIAL.fade

  return (
    <>
      {/* ===================================================
          INLINE ANIMATION CSS
      =================================================== */}

      <style>{`
        /* -----------------------------------------------
           BASE REVEAL
        ------------------------------------------------ */

        [data-scroll-reveal] {
          will-change: transform, opacity, filter;
        }

        /* -----------------------------------------------
           SMOOTH IMAGE HOVER
        ------------------------------------------------ */

        .service-image-wrapper {
          overflow: hidden;
        }

        .service-image-wrapper img {
          transition: none;
        }

        .service-image-wrapper:hover img {
          /* hover animations removed */
        }

        /* -----------------------------------------------
           WORK ROW
        ------------------------------------------------ */

        .service-work-row {
          position: relative;
        }

        .service-work-row::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 10%;
          bottom: 10%;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(134, 96, 248, 0.15),
            transparent
          );
          transform: translateX(-50%);
          pointer-events: none;
        }

        /* -----------------------------------------------
           PROCESS CARD HOVER
        ------------------------------------------------ */

        .process-card {
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .process-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 22px 50px rgba(15, 23, 42, 0.10);
          border-color: rgba(134, 96, 248, 0.20);
        }

        /* -----------------------------------------------
           OTHER SERVICE CARD
        ------------------------------------------------ */

        .other-service-card {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .other-service-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 24px 55px rgba(15, 23, 42, 0.10);
        }

        /* -----------------------------------------------
           CTA
        ------------------------------------------------ */

        .service-cta {
          position: relative;
          overflow: hidden;
        }

        .service-cta::before {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          right: -120px;
          top: -180px;
          border-radius: 9999px;
          background: rgba(134, 96, 248, 0.12);
          filter: blur(70px);
          pointer-events: none;
        }

        .service-cta::after {
          content: '';
          position: absolute;
          width: 260px;
          height: 260px;
          left: -130px;
          bottom: -170px;
          border-radius: 9999px;
          background: rgba(134, 96, 248, 0.08);
          filter: blur(70px);
          pointer-events: none;
        }

        /* -----------------------------------------------
           MOBILE
        ------------------------------------------------ */

        @media (max-width: 767px) {
          .service-work-row::before {
            display: none;
          }

          .service-work-row {
            min-height: auto !important;
          }
        }

        /* -----------------------------------------------
           REDUCED MOTION
        ------------------------------------------------ */

        @media (prefers-reduced-motion: reduce) {
          [data-scroll-reveal] {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }

          .service-image-wrapper img {
            transition: none !important;
          }

          .process-card,
          .other-service-card {
            transition: none !important;
          }
        }
      `}</style>

      <Navbar />

      {/* key={slug} forces full remount per service so animations replay cleanly */}
      <main key={slug}>
        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0">
            <img
              src={service.hero.img}
              alt=""
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-28">
            {/* Breadcrumb */}

            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs font-medium text-white/70"
              style={{
                animation: 'serviceFadeDown 0.7s ease-out both',
              }}
            >
              <Link to="/" className="transition hover:text-brand">
                Home
              </Link>

              <ChevronRight className="h-3.5 w-3.5" />

              <span className="text-brand">{service.name}</span>
            </nav>

            {/* Hero title */}

            <h1
              className="hero-text mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-5xl"
              style={{
                animation: 'serviceFadeUp 0.8s ease-out 0.1s both',
              }}
            >
              {service.hero.titleBefore}{' '}
              <span className="text-brand drop-shadow-md">
                {service.hero.titleAccent}
              </span>{' '}
              {service.hero.titleAfter}
            </h1>

            {/* Tagline */}

            <p
              className="mt-2 text-xl font-semibold text-brand drop-shadow-md md:text-2xl"
              style={{
                animation: 'serviceFadeUp 0.8s ease-out 0.2s both',
              }}
            >
              {service.hero.tagline}
            </p>

            {/* Description */}

            <p
              className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg"
              style={{
                animation: 'serviceFadeUp 0.8s ease-out 0.3s both',
              }}
            >
              {service.hero.desc}
            </p>

            {/* Buttons */}

            <div
              className="mt-8 flex flex-wrap gap-4"
              style={{
                animation: 'serviceFadeUp 0.8s ease-out 0.4s both',
              }}
            >
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

        {/* =================================================
            WORKS SECTION
        ================================================= */}

        <section className="relative overflow-hidden bg-transparent py-14 text-ink md:py-20">
          {/* Ambient glows */}

          <div className="pointer-events-none absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-brand/5 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[15%] right-[-8%] h-80 w-80 rounded-full bg-brand/5 blur-[130px]" />

          <div className="relative mx-auto max-w-6xl px-4">
            {/* =================================================
                SECTION HEADER
            ================================================= */}

            <div
              data-scroll-reveal
              className={`mx-auto max-w-2xl rounded-3xl border border-transparent bg-transparent px-6 py-8 text-center shadow-none ${initialClass} transition-all duration-1000 ease-out`}
            >
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                What We Do
              </span>

              <p className="mt-4 flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-[0.3em] text-brand">
                <ServiceIcon className="h-4 w-4" />
                VR Constructions
              </p>

              <h2 className="mt-2 text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-4xl">
                {service.name}{' '}
                <span className="text-brand">Services</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                <HighlightBrand text={service.intro} />
              </p>
            </div>

            {/* =================================================
                WORK ITEMS
            ================================================= */}

            <div className="relative mt-12 space-y-20 md:mt-20 md:space-y-28">
              {service.works.map((work, i) => {
                const isLeft = i % 2 === 0

                /*
                  Image:
                  Even row -> from left
                  Odd row  -> from right

                  Content:
                  Even row -> from right
                  Odd row  -> from left
                */

                const imageInitial = isLeft
                  ? 'opacity-0 -translate-x-20 scale-95 blur-[2px]'
                  : 'opacity-0 translate-x-20 scale-95 blur-[2px]'

                const contentInitial = isLeft
                  ? 'opacity-0 translate-x-20 blur-[2px]'
                  : 'opacity-0 -translate-x-20 blur-[2px]'

                return (
                  <div
                    key={work.title}
                    className="service-work-row grid grid-cols-1 items-center gap-10 bg-transparent md:grid-cols-2 md:min-h-[65vh] md:gap-16"
                  >
                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    {work.img && (
                      <div
                        data-scroll-reveal
                        className={`
                          group
                          ${imageInitial}
                          ${isLeft ? 'md:order-1' : 'md:order-2'}
                          transition-all
                          duration-[1100ms]
                          ease-out
                          will-change-transform
                        `}
                        style={{
                          transitionDelay: `${i * 120}ms`,
                        }}
                      >
                        <div className="service-image-wrapper relative mx-auto max-h-[420px] w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] md:max-h-[520px]">
                          {/* Image */}

                          <img
                            src={work.img}
                            alt={work.title}
                            width={1200}
                            height={900}
                            loading="lazy"
                            decoding="async"
                            className="aspect-[4/3] h-full w-full object-cover"
                          />

                          {/* Image overlay */}

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0" />

                          {/* Number */}

                          <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-sm font-bold text-white backdrop-blur-md">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div
                      data-scroll-reveal
                      className={`
                        bg-transparent
                        ${contentInitial}
                        ${isLeft ? 'md:order-2' : 'md:order-1'}
                        transition-all
                        duration-[1100ms]
                        ease-out
                        will-change-transform
                      `}
                      style={{
                        transitionDelay: `${i * 120 + 140}ms`,
                      }}
                    >
                      {/* Tag */}

                      <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
                        {work.tag}
                      </span>

                      {/* Title */}

                      <h3 className="mt-4 text-2xl font-bold leading-tight text-ink md:text-4xl">
                        {work.title}
                      </h3>

                      {/* Divider */}

                      <div className="mt-4 h-1 w-16 rounded-full bg-brand" />

                      {/* Description */}

                      <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                        {work.desc}
                      </p>

                      {/* Items */}

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {work.items.map((item) => (
                          <div
                            key={item}
                            className="group/item flex items-start gap-2.5 rounded-xl border border-transparent bg-transparent px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-brand/5"
                          >
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                              <Check className="h-3 w-3 text-brand" />
                            </span>

                            <span className="text-sm leading-relaxed text-gray-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Button */}

                      <div className="mt-7">
                        <Link
                          to="/#contact"
                          className="group inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-5 py-2.5 text-sm font-semibold text-brand transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/20"
                        >
                          Request Free Quote
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            TRUST BAND
        ================================================= */}

        <section className="border-y border-brand/10 bg-brand-light/40 py-8">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-center">
            {[
              'ISO 9001:2015 Certified Processes',
              'Verified Quality Material Brands',
              'Up to 10 Years Structural Warranty',
            ].map((t, i) => (
              <div
                key={t}
                data-scroll-reveal
                className="flex items-center gap-2 opacity-0 translate-y-10 scale-95 blur-[2px] transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <ShieldCheck className="h-4 w-4 text-brand" />

                <span className="text-sm font-semibold text-gray-700">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            PROCESS SECTION
        ================================================= */}

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header */}

            <div
              data-scroll-reveal
              className="text-center opacity-0 translate-y-10 scale-95 blur-[2px] transition-all duration-900 ease-out"
            >
              <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                How It Works
              </span>

              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                Our {service.name} Process
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                A simple and transparent process from initial consultation to
                project completion.
              </p>
            </div>

            {/* Process cards */}

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((p, i) => (
                <div
                  key={p.step}
                  data-scroll-reveal
                  className="process-card relative rounded-3xl border border-gray-100 bg-white p-6 text-center opacity-0 translate-y-10 scale-95 blur-[2px] transition-all duration-800 ease-out"
                  style={{
                    transitionDelay: `${i * 140}ms`,
                  }}
                >
                  {/* Step */}

                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-extrabold text-brand shadow-lg shadow-brand/10 ring-1 ring-brand/15">
                    {p.step}
                  </span>

                  {/* Line */}

                  {i < service.process.length - 1 && (
                    <div className="absolute left-[calc(100%+1rem)] top-1/2 hidden h-px w-8 bg-brand/20 lg:block" />
                  )}

                  {/* Title */}

                  <h3 className="mt-4 text-base font-bold text-ink">
                    {p.title}
                  </h3>

                  {/* Description */}

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            OTHER SERVICES
        ================================================= */}

        <section className="border-t border-gray-100 py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            {/* Header */}

            <div
              data-scroll-reveal
              className="flex flex-col items-start justify-between gap-4 opacity-0 translate-y-10 transition-all duration-800 ease-out md:flex-row md:items-end"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                  Explore More
                </span>

                <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
                  Explore Our Other Services
                </h2>

                <p className="mt-2 text-sm text-gray-600 md:text-base">
                  Everything around your home, delivered by one trusted team.
                </p>
              </div>
            </div>

            {/* Other services */}

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((o, i) => {
                const OtherIcon = o.icon

                return (
                  <Link
                    key={o.slug}
                    to={`/services/${o.slug}`}
                    data-scroll-reveal
                    className="other-service-card group flex items-start gap-4 rounded-3xl border border-gray-100 bg-white p-6 opacity-0 translate-y-10 scale-95 blur-[2px] transition-all duration-800 ease-out"
                    style={{
                      transitionDelay: `${i * 140}ms`,
                    }}
                  >
                    {/* Icon */}

                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-all duration-300 group-hover:rotate-3 group-hover:bg-brand group-hover:text-white">
                      <OtherIcon className="h-6 w-6" />
                    </span>

                    {/* Content */}

                    <span>
                      <span className="block text-base font-bold text-ink transition group-hover:text-brand">
                        {o.name}
                      </span>

                      <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                        {o.short}
                      </span>

                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
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

        {/* =================================================
            CTA
        ================================================= */}

        <section
          id="contact"
          className="service-cta bg-[#00040D] py-14 text-white md:py-16"
        >
          <div
            data-scroll-reveal
            className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out md:flex-row md:items-center md:justify-between"
          >
            {/* CTA content */}

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                Start Your Project
              </span>

              <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
                Need {service.name.toLowerCase()} for your project?
              </h2>

              <p className="mt-2 max-w-xl text-sm text-white/75 md:text-base">
                Talk to a VR Constructions expert today — free consultation,
                transparent estimate within 24 hours, no obligation.
              </p>
            </div>

            {/* Buttons */}

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

      {/* =====================================================
          HERO ANIMATION KEYFRAMES
      ===================================================== */}

      <style>{`
        @keyframes serviceFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes serviceFadeDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  )
}