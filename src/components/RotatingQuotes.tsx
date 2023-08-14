'use client'

import './styles.css'
import { useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

interface RotatingQuotesProps {
  quotes: { quote: string; author: string }[]
}

export default function RotatingQuotes({ quotes }: RotatingQuotesProps) {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextQuoteIndex =
        quoteIndex === quotes.length - 1 ? 0 : quoteIndex + 1
      setQuoteIndex(nextQuoteIndex)
    }, 8000)

    return () => clearTimeout(timer)
  }, [quoteIndex, quotes])

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition timeout={1000} key={quoteIndex} classNames="fade">
        <blockquote className="flex h-16 flex-col items-center justify-center text-center">
          <p className="text-sm">{quotes.at(quoteIndex)?.quote}</p>
          <p className="text-xs text-white/50">
            {quotes.at(quoteIndex)?.author}
          </p>
        </blockquote>
      </CSSTransition>
    </SwitchTransition>
  )
}
