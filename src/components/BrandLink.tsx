import BrandMark from './BrandMark'

export default function BrandLink() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2 text-foreground no-underline"
      aria-label="Dev Goswami, home"
    >
      <BrandMark className="size-8" />
      <span className="hidden text-sm font-medium tracking-tight sm:inline">
        Dev Goswami
      </span>
    </a>
  )
}
