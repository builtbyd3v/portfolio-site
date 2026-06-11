export default function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-16">
      <h2 className="mb-10 text-[20px] font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="flex flex-col gap-10">{children}</div>
    </section>
  )
}
