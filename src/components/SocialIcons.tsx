import Link from 'next/link'
import RiGithubFill from '~icons/ri/github-fill'
import RiLinkedinFill from '~icons/ri/linkedin-fill'
import RiMailSendFill from '~icons/ri/mail-send-fill'
import RiTwitterXFill from '~icons/ri/twitter-x-fill'

const social = [
  {
    key: 'twitter',
    icon: RiTwitterXFill,
    href: 'https://twitter.com/efdezpolo',
  },
  {
    key: 'linkedin',
    icon: RiLinkedinFill,
    href: 'https://www.linkedin.com/in/enrique-fernandez-polo/',
  },
  {
    key: 'github',
    icon: RiGithubFill,
    href: 'https://github.com/enrique-fernandez-polo',
  },
  {
    key: 'email',
    icon: RiMailSendFill,
    href: 'mailto:yo@enriquefernandezpolo.com',
  },
]

function SocialIcon(props: { children: React.ReactNode }) {
  return <i>{props.children}</i>
}

export default function SocialIcons() {
  return (
    <section className="space-x-4">
      {social.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          target="_blank"
          className="inline-block rounded-full border-2 border-red-600 p-2 transition-colors hover:bg-red-600"
        >
          <SocialIcon>
            <item.icon></item.icon>
          </SocialIcon>
        </Link>
      ))}
    </section>
  )
}
