import RotatingQuotes from './RotatingQuotes'

interface ASectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
  children: React.ReactNode
  quotes: {
    quote: string
    author: string
  }[]
}

export default function ASection({
  subtitle,
  title,
  quotes,
  children,
  ...otherProps
}: ASectionProps) {
  return (
    <section className="space-y-12 py-20" {...otherProps}>
      <h3 className="text-center font-semibold text-[#177A8E]">{subtitle}</h3>
      <h2 className="text-center text-3xl font-bold ">{title}</h2>
      {quotes.length > 0 && <RotatingQuotes quotes={quotes}></RotatingQuotes>}
      {children}
    </section>
  )
}
