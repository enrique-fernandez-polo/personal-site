import './globals.css'
import { PHProvider, PostHogPageview } from './providers'
import TheFooter from '@/components/layout/TheFooter'
import TheHeader from '@/components/layout/TheHeader'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.enriquefernandezpolo.com'),
  authors: [
    {
      name: 'Enrique Fernández-Polo Puertas',
      url: 'https://www.enriquefernandezpolo.com/',
    },
  ],
  generator: 'Next.js',
  keywords: [
    'blog',
    'enrique',
    'quaiks',
    'fernandez-polo',
    'puertas',
    'engineering',
    'software',
    'architecture',
    'engineering manager',
    'head of engineering',
    'microservices',
    'devops',
    'gitops',
  ],
  creator: 'Enrique Fernández-Polo Puertas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.enriquefernandezpolo.com/',
    title: 'Enrique Fernández-Polo Puertas',
    description: 'Enrique Fernández-Polo Puertas',
    siteName: 'Enrique Fernández-Polo Puertas',
    images: [
      {
        url: 'https://www.enriquefernandezpolo.com/yo.png',
        width: 391,
        height: 384,
        alt: 'Enrique Fernández-Polo Puertas',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body
          className={`flex flex-col bg-background pt-[var(--top-nav-bar-height)] text-text ${montserrat.className}`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg opacity='0.35' xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23177A8E' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2398542B'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        >
          <TheHeader></TheHeader>
          {children}
          <Analytics />
          <TheFooter></TheFooter>
        </body>
      </PHProvider>
    </html>
  )
}
