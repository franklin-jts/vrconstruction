import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo.jsx'
import { services } from '../data/services.js'

const columns = [
  {
    heading: 'Services',
    links: services.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/#about' },
      { label: 'Our Packages', to: '/#packages' },
      { label: 'How It Works', to: '/#how-it-works' },
      { label: 'Get Free Quote', to: '/#contact' },
      { label: 'Careers', to: '/#about' },
    ],
  },
  {
    heading: 'Packages',
    links: [
      { label: 'Silver Package', to: '/#packages' },
      { label: 'Gold Package', to: '/#packages' },
      { label: 'Diamond Package', to: '/#packages' },
      { label: 'Platinum Package', to: '/#packages' },
      { label: 'Cost-Plus Contract', to: '/#cost-plus' },
    ],
  },
]

const areas = [
  'Whitefield',
  'Sarjapur Road',
  'Electronic City',
  'Yelahanka',
  'Kengeri',
  'Marathahalli',
  'KR Puram',
  'Bannerghatta',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1b5e2e] text-white">
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-14 lg:py-16">
        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo size={120} />
            <p className="mt-4 max-w-sm text-xs md:text-sm leading-relaxed text-white/80">
              VR Constructions Promise: Transparent pricing. Quality execution. A
              dedicated team helps you move from idea to construction with fewer
              surprises.
            </p>
            <div className="mt-4 md:mt-5 space-y-2 md:space-y-2.5 text-xs md:text-sm text-white/80">
              <a href="tel:+917802808080" className="flex items-center gap-2.5 hover:text-brand transition">
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-brand flex-shrink-0" /> +91 7802-80-80-80
              </a>
              <a href="mailto:info@vrconstructions.in" className="flex items-center gap-2.5 hover:text-brand transition">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 text-brand flex-shrink-0" /> info@vrconstructions.in
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0 text-brand" />
                Bangalore, Karnataka, India
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand">
                {col.heading}
              </h3>
              <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-xs md:text-sm text-white/70 transition hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 border-t border-white/10 pt-5 md:pt-6">
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white/50">
            Service areas in Bangalore
          </p>
          <div className="mt-3 flex flex-wrap gap-x-3 md:gap-x-5 gap-y-2">
            {areas.map((a) => (
              <span key={a} className="text-[10px] md:text-xs text-white/60">
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 md:pt-6 text-[10px] md:text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} VR Constructions. All rights
            reserved.
          </p>
          <p className="flex items-center gap-3 md:gap-4">
            <a href="#" className="hover:text-brand transition">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
