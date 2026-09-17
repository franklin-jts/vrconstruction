import { HandCoins, PiggyBank, Layers, Timer } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const points = [
  {
    icon: HandCoins,
    title: 'Transparent Process',
    desc: 'No hidden costs — every rupee accounted for with weekly billing reports.',
  },
  {
    icon: PiggyBank,
    title: 'Save Up to 10%',
    desc: 'Our cost-plus model passes actual savings directly to you.',
  },
  {
    icon: Layers,
    title: 'Quality Material',
    desc: 'We use only trusted brands — UltraTech, JSW, Asian Paints, Jaquar and more.',
  },
  {
    icon: Timer,
    title: 'On-Time Delivery',
    desc: 'Stage-wise milestone tracking and dedicated site engineer for every project.',
  },
]

export default function Advantage() {
  return (
    <section className="relative overflow-hidden bg-[#1b5e2e] py-16 text-white md:py-24">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why Choose VR Constructions"
          title="The VR Constructions Advantage"
          dark
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/20 bg-white/8 p-5 md:p-7 backdrop-blur-sm transition duration-300 hover:border-white/30 hover:bg-white/12 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-white/20 text-white transition group-hover:bg-white group-hover:text-[#1b5e2e]">
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-bold">{title}</h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
