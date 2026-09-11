const brands = [
  'UltraTech Cement',
  'JSW Steel',
  'Asian Paints',
  'Jaquar',
  'Hindware',
  'Havells',
  'Kajaria Tiles',
  'Finolex',
  'Supreme',
]

export default function BrandsStrip() {
  return (
    <section className="border-b border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          We use only trusted brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-10">
          {brands.map((b) => (
            <span
              key={b}
              className="text-lg font-bold tracking-tight text-gray-400 opacity-70 grayscale transition hover:text-ink hover:opacity-100 md:text-xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
