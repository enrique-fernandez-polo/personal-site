'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Roles() {
  return (
    <TypeAnimation
      sequence={[
        'Fullstack developer...',
        2500,
        'Head of engineering...',
        2500,
        'Fulltime husband...',
        2500,
      ]}
      className="text-lg"
      wrapper="p"
      cursor={true}
      repeat={Infinity}
    />
  )
}
