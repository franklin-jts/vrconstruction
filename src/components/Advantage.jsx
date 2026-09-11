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
    <section className="relative overflow-hidden bg-[#00040D] py-16 text-white md:py-24">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why Choose VR Constructions"
          title="The VR Constructions Advantage"
          dark
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
