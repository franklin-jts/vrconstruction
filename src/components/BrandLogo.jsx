export default function BrandLogo({ className = '', size = 110 }) {
  return (
    <img
      src="/images/VR.png"
      alt="VR Constructions Logo"
      className={`object-contain max-w-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}
