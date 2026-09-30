import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/services.js'

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

export default function Services() {
  const constructionService = services.find(s => s.slug === 'constructions')
  
  // Trigger scroll animations
  useScrollAnimation()
  
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Comprehensive Home Construction Services in Bangalore"
          subtitle="At VR Constructions, we offer a comprehensive range of home construction services tailored to meet your unique needs — from initial design to final handover. Click a service to explore it in detail."
        />

        {/* Construction Content + Images Cards */}
        {constructionService && (
          <div className="mt-14 md:mt-16">
            <div className="mb-12">
              <h2 className="text-center text-2xl md:text-3xl font-bold text-ink mb-2">
                Construction <span className="text-brand">Solutions</span>
              </h2>
              <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive construction solutions with proven project examples
              </p>
            </div>
            
            <div className="space-y-8 md:space-y-12">
              {constructionService.works.map((work, idx) => {
                const WorkIcon = work.icon
                const isEven = idx % 2 === 0
                
                return (
                  <div
                    key={work.title}
                    className={`grid gap-6 md:gap-8 lg:gap-12 items-center ${
                      isEven ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'
                    }`}
                  >
                    {/* Image - Clean Display */}
                    <div 
                      className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} opacity-0`}
                      data-scroll-animate
                      data-card-index={idx}
                      data-type="image"
                    >
                      <img
                        src={work.img}
                        alt={work.title}
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>

                    {/* Content Container */}
                    <div 
                      className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'} opacity-0`}
                      data-scroll-animate
                      data-card-index={idx}
                      data-type="content"
                    >
                      <div className="p-6 md:p-8">
                        <div className="relative z-10">
                          {/* Tag and Icon */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
                              {work.tag}
                            </span>
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                              <WorkIcon className="h-6 w-6" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3">
                            {work.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                            {work.desc}
                          </p>

                          {/* Features List */}
                          <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                              What We Offer
                            </p>
                            {work.items.map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-brand flex-shrink-0" />
                                <span className="text-sm text-gray-700">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Link
                            to={`/services/constructions`}
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

        {/* Service Cards */}
        <div className="mt-16 md:mt-20">
          <div className="mb-8">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-ink">
              All <span className="text-brand">Services</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4">
            {services.map(({ icon: Icon, slug, name, short }) => (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white p-2 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-brand/40 hover:shadow-[0_24px_70px_rgba(22,163,74,0.15)]"
              >
                {/* Top gradient line */}
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
                
                {/* Main glowing effect - top right */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/5 blur-3xl transition-all duration-500 group-hover:bg-brand/20 group-hover:scale-150 group-hover:animate-pulse" />
                
                {/* Secondary glow - bottom left */}
                <div className="absolute -bottom-20 left-8 h-36 w-36 rounded-full bg-green-200/10 blur-3xl transition-all duration-500 group-hover:bg-brand/15 group-hover:scale-125" />
                
                {/* Extra glow effect - center */}
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-brand/0 via-brand/0 to-brand/0 opacity-0 transition-all duration-500 group-hover:from-brand/5 group-hover:via-transparent group-hover:to-brand/5 group-hover:opacity-100" />

                <div className="relative flex flex-col rounded-[1.35rem] bg-gradient-to-br from-white via-white to-brand-light/15 p-5 md:p-7 transition-all duration-500">
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative">
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-brand/10 blur-md transition-all duration-500 group-hover:bg-brand/30 group-hover:blur-lg" />
                      <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-lg shadow-brand/10 ring-1 ring-brand/15 transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand/30">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 transition-all duration-500" />
                      </div>
                    </div>
                    <span className="rounded-full bg-brand-light px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                      VR Service
                    </span>
                  </div>

                  <h3 className="mt-4 md:mt-6 text-base md:text-lg font-bold text-ink transition-all duration-500 group-hover:text-brand">
                    {name}
                  </h3>
                  <p className="mt-2 md:mt-3 flex-1 text-xs md:text-sm leading-relaxed text-gray-600 transition-all duration-500 group-hover:text-gray-700">
                    {short}
                  </p>

                  <span className="mt-4 md:mt-6 inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-brand transition-all duration-500 group-hover:text-brand group-hover:gap-3">
                    View service
                    <ArrowRight className="h-4 w-4 transition-all duration-500 group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
