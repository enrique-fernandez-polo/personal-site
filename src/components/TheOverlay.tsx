import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

export default function TheOverlay() {
  return (
    <motion.div
      variants={variants}
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/50"
    ></motion.div>
  )
}
