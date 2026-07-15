import { type ReactNode, useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger index (0-based); maps to a small Tailwind transition-delay. */
  delayIndex?: number
}

// Tailwind delay classes indexed by position, so stacked items reveal in sequence.
const DELAYS = ['', 'delay-75', 'delay-150', 'delay-200', 'delay-300', 'delay-500']

/**
 * Fades + rises its children in when they scroll into view, using an
 * IntersectionObserver (reliable across React/StrictMode, unlike the motion
 * hooks on this React 19 stack). Under reduced-motion it shows instantly.
 */
export default function Reveal({ children, className = '', delayIndex = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delay = DELAYS[Math.min(delayIndex, DELAYS.length - 1)]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
