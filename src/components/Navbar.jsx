import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Ruler,
  Users,
  X,
  Youtube,
} from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'
import { services } from '../data/services.js'

const topTicker = [
  'ISO 9001:2015 Certified Company',
  '500+ Homes Delivered Across Bangalore',
  'Get a Free Quote in Just 1 Hour',
]

const companyMenu = [
  { icon: Users, title: 'About Us', desc: 'ISO 9001:2015 certified builder in Bangalore.', to: '/#about' },
  { icon: Ruler, title: 'Cost-Plus Contract', desc: 'Transparent actual-cost home construction.', to: '/#cost-plus' },
]

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="group relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-ink transition hover:text-brand"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : 'group-hover:rotate-180'}`}
        />
      </button>
      <div
        className={`absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none translate-y-1 opacity-0'
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-200/60 ring-1 ring-black/[0.04]">
          <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
            {label}
          </p>
          <div className="space-y-0.5 py-1">
            {items.map(({ icon: Icon, title, desc, to }) => (
              <button
                key={title}
                type="button"
                className="group/item flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-brand-light/70"
                onClick={() => {
                  setOpen(false)
                  navigate(to)
                }}
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 text-brand transition group-hover/item:bg-brand group-hover/item:text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 pt-0.5">
                  <span className="block text-sm font-semibold text-ink transition group-hover/item:text-brand">
                    {title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                    {desc}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const anchorLinks = [
    { label: 'Packages', to: '/#packages' },
    { label: 'Cost-Plus', to: '/#cost-plus' },
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'About', to: '/#about' },
    { label: 'Contact', to: '/#contact' },
  ]

  return (
    <>
      <style>{`
        .navbar-container {
          padding: 4px 12px;
          height: auto;
          min-height: auto;
          display: flex;
          align-items: center;
          gap: 20px;
          overflow: visible;
          justify-content: space-between;
        }
        
        .logo-wrapper {
          display: flex;
          align-items: center;
          height: auto;
          margin: -20px 0;
          position: relative;
          left: 0;
        }
        
        .navbar-menu {
          font-size: 12px;
          gap: 15px;
          display: none;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
        
        @media (min-width: 768px) {
          .navbar-menu {
            display: flex;
            font-size: 12px;
            gap: 20px;
          }
        }
        
        @media (max-width: 767px) {
          .navbar-container {
            padding: 4px 10px;
            gap: 0;
            justify-content: space-between;
          }
          
          .navbar-menu {
            display: none !important;
          }
          
          .logo-wrapper {
            flex: 1;
          }
        }
        
        .navbar-button {
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 3px;
          display: none;
        }
        
        @media (min-width: 768px) {
          .navbar-button {
            display: inline-flex;
            font-size: 11px;
            padding: 5px 12px;
          }
        }
        
        .navbar-link {
          font-size: 11px;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        @media (min-width: 768px) {
          .navbar-link {
            font-size: 12px;
          }
        }
        
        .navbar-link:hover {
          color: #1b5e2e;
        }
        
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        
        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
      
      <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top ticker bar */}
      <div className="bg-[#1b5e2e] text-sm text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="min-h-[1.25rem] overflow-hidden">
            {topTicker.map((t, i) => (
              <p
                key={t}
                className={i === 0 ? 'block' : 'hidden'}
                aria-hidden={i !== 0}
              >
                {t}
              </p>
            ))}
          </div>
          <div className="hidden items-center gap-1 md:flex">
            <Phone className="h-4 w-4" />
            <a href="tel:+917802808080" className="font-semibold hover:underline">
              +91 7802-80-80-80
            </a>
            <span className="mx-2 opacity-50">|</span>
            <Mail className="h-4 w-4" />
            <a href="mailto:info@vrconstructions.in" className="hover:underline">
              info@vrconstructions.in
            </a>
          </div>
        </div>
      </div>

      {/* Logo and Menu - same line */}
      <div className="navbar-container mx-auto max-w-7xl px-4">
        <div className="logo-wrapper">
          <Link to="/" className="flex-shrink-0">
            <BrandLogo className="h-16 w-auto" />
          </Link>
        </div>

        <nav className="navbar-menu hidden md:flex">
          <Link
            className="navbar-link text-ink hover:text-brand"
            to="/"
          >
            Home
          </Link>
          <Dropdown
            label="Services"
            items={services.map((s) => ({
              icon: s.icon,
              title: s.name,
              desc: s.short,
              to: `/services/${s.slug}`,
            }))}
          />
          <Link
            className="navbar-link text-ink hover:text-brand"
            to="/#packages"
          >
            Packages
          </Link>
          <Dropdown label="Company" items={companyMenu} />
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/#contact" className="navbar-button btn-brand">
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-btn md:hidden ml-auto"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-7 w-7 text-ink" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <BrandLogo className="h-9 w-auto" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6 text-ink" />
            </button>
          </div>

          <nav className="mt-8 space-y-1">
            <Link
              to="/"
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-brand-light hover:text-brand"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Services with expandable sub-list */}
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-brand-light hover:text-brand"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 space-y-0.5 border-l-2 border-brand-light pl-3">
                {services.map((s) => {
                  const SIcon = s.icon
                  return (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-brand-light hover:text-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      <SIcon className="h-4 w-4 text-brand" />
                      {s.name}
                    </Link>
                  )
                })}
              </div>
            )}

            {anchorLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-brand-light hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/#contact"
            className="btn-brand mt-6 w-full"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Quote
          </Link>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Call us
            </p>
            <a
              href="tel:+917802808080"
              className="mt-2 flex items-center gap-2 text-sm font-semibold text-ink"
            >
              <Phone className="h-4 w-4 text-brand" /> +91 7802-80-80-80
            </a>
            <div className="mt-4 flex items-center gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
