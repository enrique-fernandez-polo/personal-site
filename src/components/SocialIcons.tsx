import Link from 'next/link'
import { SVGProps } from 'react'

export function RiMailSendFill(props: SVGProps<SVGSVGElement>) {
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
        d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2l-10-9ZM0 10h5v2H0v-2Zm0 5h8v2H0v-2Z"
      ></path>
    </svg>
  )
}

export function RiLinkedinFill(props: SVGProps<SVGSVGElement>) {
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
        d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
      ></path>
    </svg>
  )
}

export function RiGithubFill(props: SVGProps<SVGSVGElement>) {
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
        d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
      ></path>
    </svg>
  )
}

export function RiTwitterXFill(props: SVGProps<SVGSVGElement>) {
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
        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
      ></path>
    </svg>
  )
}

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
