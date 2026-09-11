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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, slug, name, short }) => (
            <Link
              key={slug}
              to={`/services/${slug}`}
              className="group relative min-h-full overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white p-2 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(22,163,74,0.1)]"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/5 blur-3xl transition duration-300 group-hover:bg-brand/10" />
              <div className="absolute -bottom-20 left-8 h-36 w-36 rounded-full bg-green-200/10 blur-3xl" />

              <div className="relative flex min-h-full flex-col rounded-[1.35rem] bg-gradient-to-br from-white via-white to-brand-light/15 p-7 transition duration-300 group-hover:-translate-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-brand/10 blur-md transition group-hover:bg-brand/20" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-lg shadow-brand/10 ring-1 ring-brand/15 transition group-hover:scale-105 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <span className="rounded-full bg-brand-light px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                    VR Service
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-ink transition group-hover:text-brand">
                  {name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {short}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  View service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
