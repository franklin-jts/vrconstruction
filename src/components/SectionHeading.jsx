export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}) {
  const alignCls = align === 'center' ? 'text-center' : 'text-left'
  return (
    <div className={alignCls}>
      {eyebrow && (
        <span
          className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] ${
            dark
              ? 'border-white/20 bg-white/10 text-brand'
              : 'border-brand/30 bg-brand/10 text-brand'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-bold md:text-4xl ${dark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-3xl text-gray-600 ${align === 'center' ? 'mx-auto' : ''} ${dark ? '!text-white/70' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
