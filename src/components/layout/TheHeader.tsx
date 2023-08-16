'use client'

import MenuIcon from '../icons/MenuIcon'
import { motion } from 'framer-motion'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About me', href: '/#about-me' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Last Posts', href: '/#last-posts' },
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
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-end px-4 lg:px-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-text lg:hidden"
          aria-label="Open Menu"
        >
          <MenuIcon></MenuIcon>
        </button>
        <nav>
          <ul className="hidden gap-5 lg:flex">
            {navItems.map((item) => (
              <motion.li whileHover={{ scale: 1.1 }} key={item.name}>
                <a className="text-sm" href={item.href}>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={navVariants}
        className="fixed right-0 top-0 h-[100svh] bg-background p-12 lg:hidden"
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
