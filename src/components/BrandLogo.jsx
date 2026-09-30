export default function BrandLogo({ className = '', size = 100 }) {
  // Responsive sizing based on screen
  let responsiveSize = size
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) {
      responsiveSize = Math.round(size * 0.75) // 75% on mobile
    } else if (window.innerWidth < 1024) {
      responsiveSize = Math.round(size * 0.85) // 85% on tablet
    }
  }
  
  return (
    <>
      <style>{`
        @keyframes logoPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(27, 94, 46, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(27, 94, 46, 0.5));
          }
        }

        @keyframes logoGlow {
          0%, 100% {
            filter: drop-shadow(0 0 12px rgba(27, 94, 46, 0.4)) drop-shadow(0 0 20px rgba(27, 94, 46, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(27, 94, 46, 0.6)) drop-shadow(0 0 30px rgba(27, 94, 46, 0.3));
          }
        }

        .brand-logo {
          animation: logoGlow 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .brand-logo:hover {
          animation: logoPulse 2s ease-in-out infinite;
          filter: drop-shadow(0 0 24px rgba(27, 94, 46, 0.7)) brightness(1.1);
        }
      `}</style>
      
      <img
        src="/images/VR.png"
        alt="VR Constructions Logo"
        className={`object-contain max-w-none brand-logo ${className}`}
        style={{
          width: `${responsiveSize}px`,
          height: `${responsiveSize}px`,
        }}
      />
    </>
  )
}
