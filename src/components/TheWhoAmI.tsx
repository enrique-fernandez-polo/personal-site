import SocialIcons from './SocialIcons'
import me from './yo.png'
import TheRoles from '@/components/TheRoles'
import Image from 'next/image'

export default function TheWhoAmI() {
  return (
    <section
      className="flex min-h-[calc(100svh-var(--top-nav-bar-height))] flex-col items-center justify-center gap-6"
      id="home"
    >
      <Image
        src={me}
        alt="Yo"
        width={200}
        className="rounded-full border bg-background"
      ></Image>
      <SocialIcons></SocialIcons>
      <p className="text-lg">Hello there! </p>
      <p className="text-4xl">
        <span>I&apos;m</span>{' '}
        <span className="font-bold text-[#177A8E]">Enrique</span>
        <span className="hidden font-bold text-[#177A8E] md:inline">
          {' '}
          Fernández-Polo
        </span>
      </p>
      <TheRoles></TheRoles>
    </section>
  )
}
