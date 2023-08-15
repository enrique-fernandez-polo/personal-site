import TheAboutMe from '@/components/TheAboutMe'
import TheExperience from '@/components/TheExperience'
import TheLastPosts from '@/components/TheLastPosts'
import TheWhoAmI from '@/components/TheWhoAmI'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enrique Fernández-Polo Puertas',
  description: 'Enrique Fernández-Polo Puertas',
}

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg px-6">
      <TheWhoAmI></TheWhoAmI>
      <TheAboutMe></TheAboutMe>
      <TheExperience></TheExperience>
      <TheLastPosts></TheLastPosts>
    </main>
  )
}
