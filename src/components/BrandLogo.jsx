export default function BrandLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 leading-none ${className}`}>
      <span className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
        VR
      </span>
      <span className="text-xl font-bold tracking-tight text-brand md:text-2xl">
        Constructions
      </span>
    </span>
  )
}
