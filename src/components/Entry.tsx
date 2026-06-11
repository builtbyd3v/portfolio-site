export default function Entry({
  period,
  children,
}: {
  period: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
      <div className="order-2 sm:order-1">{children}</div>
      <span className="order-1 text-[13px] tabular-nums text-faint sm:order-2 sm:text-right">
        {period}
      </span>
    </div>
  )
}
