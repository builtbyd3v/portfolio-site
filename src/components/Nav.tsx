import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { List } from '@phosphor-icons/react'
import { CONTACT } from '@/data/content'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import BrandLink from './BrandLink'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { href: '#work', label: 'Projects', id: 'work' },
  { href: '#activity', label: 'Activity', id: 'activity' },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#skills', label: 'Skills', id: 'skills' },
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const reduce = useReducedMotion()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 8)
  })

  useEffect(() => {
    const nodes = LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.15, 0.4] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 h-14 border-b bg-background/80 backdrop-blur-md',
        scrolled ? 'border-border' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-full max-w-3xl items-center justify-between gap-4 px-6">
        <BrandLink />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-2.5 py-1 text-sm transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId={reduce ? undefined : 'nav-line'}
                    className="absolute inset-x-2 bottom-0 h-px bg-foreground"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                ) : null}
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            GitHub
          </a>
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <List className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1 px-4">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={CONTACT.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                >
                  Resume
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
