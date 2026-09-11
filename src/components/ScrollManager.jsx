import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * Scrolls to the #hash section after every navigation.
 * Works for links like /#packages from any page (router Link strips
 * the hash from react-router's view, so we read location.hash).
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target page has rendered
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
        // Fallback: try again after paint
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 60)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
