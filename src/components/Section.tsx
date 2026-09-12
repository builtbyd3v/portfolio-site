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
    <section id={id} className="scroll-mt-8 border-t border-line py-16">
      <h2 className="section-title">
        {title}
      </h2>
      <div className="flex flex-col gap-10">{children}</div>
    </section>
  )
}
