import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/services.js'

/* =========================================================
   Construction Solution Scroll Animation
========================================================= */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const cardIndex = entry.target.getAttribute('data-card-index')
          const isImage =
            entry.target.getAttribute('data-type') === 'image'

          /*
           * Alternate animation direction:
           * Card 1 → image left / content right
           * Card 2 → image right / content left
           * Card 3 → image left / content right
           * Card 4 → image right / content left
           */

          if (Number(cardIndex) % 2 === 0) {
            if (isImage) {
              entry.target.classList.add('animate-slide-in-left')
            } else {
              entry.target.classList.add('animate-slide-in-right')
            }
          } else {
            if (isImage) {
              entry.target.classList.add('animate-slide-in-right')
            } else {
              entry.target.classList.add('animate-slide-in-left')
            }
          }

          // Stop observing after animation has started
          observer.unobserve(entry.target)
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

/* =========================================================
   Services Component
========================================================= */
export default function Services() {
  const constructionService = services.find(
    (service) => service.slug === 'constructions'
  )

  useScrollAnimation()

  return (
    <section id="services" className="py-16 md:py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* =====================================================
            Main Section Heading
        ===================================================== */}
        <SectionHeading
          eyebrow="Our Expertise"
          title="Comprehensive Home Construction Services in Bangalore"
          subtitle="At VR Constructions, we offer a comprehensive range of home construction services tailored to meet your unique needs — from initial design to final handover. Click a service to explore it in detail."
        />

        {/* =====================================================
            CONSTRUCTION SOLUTIONS
        ===================================================== */}
        {constructionService && (
          <div className="mt-14 md:mt-16">

            {/* Heading */}
            <div className="mb-12">
              <h2 className="mb-2 text-center text-2xl font-bold text-ink md:text-3xl">
                Construction{' '}
                <span className="text-brand">Solutions</span>
              </h2>

              <p className="mx-auto max-w-2xl text-center text-sm text-gray-600 md:text-base">
                Explore our comprehensive construction solutions with
                proven project examples
              </p>
            </div>

            {/* Construction Works */}
            <div className="space-y-8 md:space-y-12">
              {constructionService.works.map((work, idx) => {
                const WorkIcon = work.icon
                const isEven = idx % 2 === 0

                return (
                  <div
                    key={work.title}
                    className={`grid items-center gap-6 md:gap-8 lg:gap-12 ${
                      isEven
                        ? 'lg:grid-cols-[1fr_1.2fr]'
                        : 'lg:grid-cols-[1.2fr_1fr]'
                    }`}
                  >

                    {/* =================================================
                        Construction Image
                    ================================================= */}
                    <div
                      className={`order-2 opacity-0 ${
                        isEven
                          ? 'lg:order-2'
                          : 'lg:order-1'
                      }`}
                      data-scroll-animate
                      data-card-index={idx}
                      data-type="image"
                    >
                      <img
                        src={work.img}
                        alt={work.title}
                        className="h-auto w-full rounded-2xl object-cover"
                      />
                    </div>

                    {/* =================================================
                        Construction Content
                    ================================================= */}
                    <div
                      className={`order-1 opacity-0 ${
                        isEven
                          ? 'lg:order-1'
                          : 'lg:order-2'
                      }`}
                      data-scroll-animate
                      data-card-index={idx}
                      data-type="content"
                    >
                      <div className="p-6 md:p-8">
                        <div className="relative z-10">

                          {/* Tag + Icon */}
                          <div className="mb-4 flex items-center justify-between">
                            <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
                              {work.tag}
                            </span>

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                              <WorkIcon className="h-6 w-6" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="mb-3 text-2xl font-bold text-ink md:text-3xl">
                            {work.title}
                          </h3>

                          {/* Description */}
                          <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base">
                            {work.desc}
                          </p>

                          {/* Features */}
                          <div className="space-y-3">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                              What We Offer
                            </p>

                            {work.items.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand" />

                                <span className="text-sm text-gray-700">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <Link
                            to="/services/constructions"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-dark hover:shadow-lg"
                          >
                            Explore Service

                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* =====================================================
            ALL SERVICES
            ONE CARD AT A TIME SCROLL
        ===================================================== */}
        <div className="mt-16 md:mt-20">

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">
              All <span className="text-brand">Services</span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-500 md:text-base">
              Scroll to explore all our professional construction services.
            </p>
          </div>

          {/* ===================================================
              STICKY CARD SCROLL CONTAINER

              Each card occupies one viewport section.
              While scrolling, the next card comes into view.
          =================================================== */}
          <div className="relative mt-10">

            {services.map(
              ({ icon: Icon, slug, name, short }, idx) => (
                <div
                  key={slug}
                  className="sticky top-20 flex min-h-[85vh] items-center justify-center"
                  style={{
                    zIndex: idx + 1,
                  }}
                >

                  {/* =================================================
                      SERVICE CARD
                  ================================================= */}
                  <Link
                    to={`/services/${slug}`}
                    className="
                      group
                      relative
                      w-full
                      max-w-5xl
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-gray-100
                      bg-white
                      p-2
                      shadow-[0_25px_80px_rgba(15,23,42,0.10)]
                      transition-all
                      duration-700
                      hover:border-brand/40
                      hover:shadow-[0_30px_90px_rgba(22,163,74,0.18)]
                    "
                  >

                    {/* =================================================
                        TOP GRADIENT LINE
                    ================================================= */}
                    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

                    {/* =================================================
                        TOP RIGHT GLOW
                    ================================================= */}
                    <div
                      className="
                        absolute
                        -right-24
                        -top-24
                        h-64
                        w-64
                        rounded-full
                        bg-brand/5
                        blur-3xl
                        transition-all
                        duration-700
                        group-hover:scale-150
                        group-hover:bg-brand/20
                      "
                    />

                    {/* =================================================
                        BOTTOM LEFT GLOW
                    ================================================= */}
                    <div
                      className="
                        absolute
                        -bottom-24
                        left-10
                        h-56
                        w-56
                        rounded-full
                        bg-green-200/10
                        blur-3xl
                        transition-all
                        duration-700
                        group-hover:scale-125
                        group-hover:bg-brand/15
                      "
                    />

                    {/* =================================================
                        INNER CARD
                    ================================================= */}
                    <div
                      className="
                        relative
                        flex
                        min-h-[55vh]
                        flex-col
                        justify-between
                        rounded-[1.5rem]
                        bg-gradient-to-br
                        from-white
                        via-white
                        to-brand-light/15
                        p-6
                        md:p-8
                        lg:p-10
                      "
                    >

                      {/* =================================================
                          TOP SECTION
                      ================================================= */}
                      <div className="flex items-start justify-between gap-6">

                        {/* Icon */}
                        <div className="relative">

                          {/* Icon Glow */}
                          <div
                            className="
                              absolute
                              inset-0
                              rounded-2xl
                              bg-brand/10
                              blur-md
                              transition-all
                              duration-700
                              group-hover:bg-brand/30
                              group-hover:blur-xl
                            "
                          />

                          {/* Icon Box */}
                          <div
                            className="
                              relative
                              flex
                              h-14
                              w-14
                              items-center
                              justify-center
                              rounded-2xl
                              bg-white
                              text-brand
                              shadow-xl
                              shadow-brand/10
                              ring-1
                              ring-brand/15
                              transition-all
                              duration-700
                              group-hover:scale-110
                              group-hover:bg-brand
                              group-hover:text-white
                              group-hover:shadow-brand/30
                            "
                          >
                            <Icon className="h-6 w-6 md:h-7 md:w-7" />
                          </div>
                        </div>

                        {/* Service Number */}
                        <span
                          className="
                            rounded-full
                            bg-brand-light
                            px-4
                            py-2
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-brand
                            transition-all
                            duration-500
                            group-hover:bg-brand
                            group-hover:text-white
                            md:text-xs
                          "
                        >
                          Service{' '}
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* =================================================
                          MAIN CONTENT
                      ================================================= */}
                      <div className="mt-6">

                        {/* Small Label */}
                        <p
                          className="
                            mb-4
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-brand
                          "
                        >
                          VR Service
                        </p>

                        {/* Service Name */}
                        <h3
                          className="
                            max-w-3xl
                            text-3xl
                            font-bold
                            text-ink
                            transition-all
                            duration-500
                            md:text-5xl
                            lg:text-6xl
                            group-hover:text-brand
                          "
                        >
                          {name}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-relaxed
                            text-gray-600
                            md:text-lg
                          "
                        >
                          {short}
                        </p>
                      </div>

                      {/* =================================================
                          BOTTOM SECTION
                      ================================================= */}
                      <div className="mt-12 flex items-center justify-between">

                        {/* View Service */}
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-brand
                            transition-all
                            duration-500
                            group-hover:gap-4
                            md:text-base
                          "
                        >
                          View service

                          <ArrowRight
                            className="
                              h-5
                              w-5
                              transition-transform
                              duration-500
                              group-hover:translate-x-2
                            "
                          />
                        </span>

                        {/* Large Background Number */}
                        <span
                          className="
                            text-6xl
                            font-bold
                            text-brand/10
                            transition-all
                            duration-500
                            group-hover:text-brand/20
                            md:text-8xl
                          "
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}