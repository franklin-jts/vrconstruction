import { PackageCheck, PenTool, HardHat, KeyRound } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  {
    icon: PackageCheck,
    num: '01',
    title: 'Select Package & Book',
    desc: 'Choose a construction package, review our completed projects, and make an initial booking to reserve your slot.',
  },
  {
    icon: PenTool,
    num: '02',
    title: 'Design & Agreement',
    desc: 'Finalize floor plans, 3D elevations and Vastu layout. Sign a transparent agreement with clear scope and specifications.',
  },
  {
    icon: HardHat,
    num: '03',
    title: 'Construction & Tracking',
    desc: 'Construction begins with quality material from trusted brands. Track every milestone with regular photo/video updates.',
  },
  {
    icon: KeyRound,
    num: '04',
    title: 'Handover & Warranty',
    desc: 'On-time completion and handover of your dream home with up to 10 years structural warranty.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="How It Works"
          title="From Concept to Completion in 4 Simple Steps"
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, num, title, desc }) => (
              <div key={num} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand shadow-lg shadow-brand/10 ring-1 ring-brand/15">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                    {num}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
