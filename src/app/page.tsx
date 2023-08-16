import TheAboutMe from '@/components/home/TheAboutMe'
import TheExperience from '@/components/home/TheExperience'
import TheLastPosts from '@/components/home/TheLastPosts'
import TheWhoAmI from '@/components/home/TheWhoAmI'
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
