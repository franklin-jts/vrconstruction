import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Comprehensive Home Construction Services in Bangalore"
          subtitle="At VR Constructions, we offer a comprehensive range of home construction services tailored to meet your unique needs — from initial design to final handover. Click a service to explore it in detail."
        />

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
    </section>
  )
}
