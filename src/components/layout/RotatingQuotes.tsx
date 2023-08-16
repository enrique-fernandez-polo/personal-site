'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

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
    <AnimatePresence mode="wait">
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={quoteIndex}
        transition={{ duration: 1 }}
        className="flex h-16 flex-col items-center justify-center text-center"
      >
        <p className="text-sm">{quotes.at(quoteIndex)?.quote}</p>
        <p className="text-xs text-white/50">{quotes.at(quoteIndex)?.author}</p>
      </motion.blockquote>
    </AnimatePresence>
  )
}
