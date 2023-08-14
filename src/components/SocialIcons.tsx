import GitHubIcon from './icons/GitHubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import MailIcon from './icons/MailIcon'
import TwitterIcon from './icons/TwitterIcon'
import Link from 'next/link'

const social = [
  {
    key: 'twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/efdezpolo',
  },
  {
    key: 'linkedin',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/enrique-fernandez-polo/',
  },
  {
    key: 'github',
    icon: GitHubIcon,
    href: 'https://github.com/enrique-fernandez-polo',
  },
  {
    key: 'email',
    icon: MailIcon,
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
          aria-label={`Link to my social media ${item.key}`}
        >
          <SocialIcon>
            <item.icon></item.icon>
          </SocialIcon>
        </Link>
      ))}
    </section>
  )
}
