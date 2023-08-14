'use client'

import listDecoration from './list-decoration.png'
import './styles.css'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useIntersectionObserver } from 'usehooks-ts'

const dateStringToLocale = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}
export interface TheExperienceElementProps {
  title: string
  company: {
    name: string
    logo: StaticImageData
    link: string
  }
  startDate: string
  endDate: string
  description: string[]
}

export default function TheExperienceElement({
  title,
  company,
  startDate,
  endDate,
  description,
}: TheExperienceElementProps) {
  const nodeRef = useRef(null)
  const entry = useIntersectionObserver(nodeRef, {
    freezeOnceVisible: true,
  })
  const isVisible = !!entry?.isIntersecting

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isVisible}
      timeout={1000}
      classNames="fade"
    >
      <li key={title} ref={nodeRef} className="space-y-4">
        <h4 className="mb-2 text-xl font-semibold">{title}</h4>
        <div className="flex items-center gap-2">
          <Link href={company.link} target="_blank">
            <Image
              src={company.logo}
              alt={company.name}
              width={70}
              height={70}
            />
          </Link>
          <div className="text-white/50">
            <h5 className="text-sm">
              <Link
                href={company.link}
                target="_blank"
                className="hover:underline"
              >
                {company.name}
              </Link>
            </h5>
            <time className="text-xs" dateTime={startDate}>
              {dateStringToLocale(startDate)}
            </time>
            <span className="text-xs"> - </span>
            {endDate === 'Present' ? (
              <time dateTime={new Date().toISOString()} className="text-xs">
                Present
              </time>
            ) : (
              <time dateTime={endDate} className="text-xs">
                {dateStringToLocale(endDate)}
              </time>
            )}
          </div>
        </div>
        <ol className="space-y-4 text-white/80">
          {description.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm">
              <Image src={listDecoration} width={40} alt="Engranaje"></Image>
              {d}
            </li>
          ))}
        </ol>
      </li>
    </CSSTransition>
  )
}
