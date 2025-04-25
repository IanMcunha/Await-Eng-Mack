export function H1({
  children,
  text,
}: Readonly<{
  children: React.ReactNode
  text?: string
}>) {
  return (
    <>
      <h1 className="scroll-m-20 font-bold text-3xl tracking-tight">
        {children || text}
      </h1>
    </>
  )
}
