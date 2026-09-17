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
              ? 'border-[#1b5e2e]/40 bg-[#1b5e2e]/15 text-[#1b5e2e]'
              : 'border-[#1b5e2e]/30 bg-[#1b5e2e]/10 text-[#1b5e2e]'
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
