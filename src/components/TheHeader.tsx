'use client'

import { motion } from 'framer-motion'
import { SVGProps, useState } from 'react'

export function RiMenuFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"
      ></path>
    </svg>
  )
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About me', href: '#about-me' },
  { name: 'Experience', href: '#experience' },
]

const navVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
}

const ulVarians = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function TheHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 h-[var(--top-nav-bar-height)] w-full backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between px-4 lg:px-0">
        <span>Welcome!</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-text"
          aria-label="Open Menu"
        >
          <RiMenuFill></RiMenuFill>
        </button>
      </div>
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={navVariants}
        className="fixed right-0 top-0 h-[100svh] bg-background p-12"
      >
        <motion.ul variants={ulVarians} className="space-y-6">
          {navItems.map((item) => (
            <motion.li key={item.name} variants={liVariants}>
              <a href={item.href} onClick={() => setIsOpen(!isOpen)}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </header>
  )
}
