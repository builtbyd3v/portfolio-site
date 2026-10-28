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
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="mt-10 flex flex-col gap-8">{children}</div>
    </section>
  )
}
