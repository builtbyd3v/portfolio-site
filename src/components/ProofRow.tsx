import type { ReactNode } from 'react'

export default function ProofRow({
  title,
  detail,
  period,
  children,
}: {
  title: string
  detail?: string
  period: string
  children?: ReactNode
}) {
  return (
    <article className="grid gap-1 border-b border-border py-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
      <div>
        <h3 className="text-base font-medium tracking-tight">{title}</h3>
        {detail ? (
          <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
        ) : null}
        {children ? (
          <p className="mt-2 max-w-prose text-sm leading-6 text-muted-foreground">
            {children}
          </p>
        ) : null}
      </div>
      <p className="text-sm text-muted-foreground sm:pt-0.5 sm:text-right">
        {period}
      </p>
    </article>
  )
}
