export default function BrandLogo({ className = '', size = 110 }) {
  // Responsive sizing based on screen
  let responsiveSize = size
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) {
      responsiveSize = Math.round(size * 0.7) // 70% on mobile
    } else if (window.innerWidth < 1024) {
      responsiveSize = Math.round(size * 0.85) // 85% on tablet
    }
  }
  
  return (
    <img
      src="/images/VR.png"
      alt="VR Constructions Logo"
      className={`object-contain max-w-none ${className}`}
      style={{
        width: `${responsiveSize}px`,
        height: `${responsiveSize}px`,
      }}
    />
  )
}
