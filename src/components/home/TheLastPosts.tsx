import ASection from '../layout/ASection'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

const quotes = [
  {
    author: 'Mike Butcher',
    quote: 'Blogging is a conversation, not a code.',
  },
  {
    author: 'Lee Odden',
    quote: 'A blog is only as interesting as the interest shown in others.',
  },
]

export default function TheLastPosts() {
  return (
    <ASection
      title="What do I like to talk about?"
      subtitle="LATEST POSTS"
      quotes={quotes}
      id="last-posts"
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        {allPosts.map((post) => (
          <Link
            href={`/blog/${post._raw.flattenedPath}`}
            key={post._id}
            className="flex flex-col gap-4 rounded-xl border border-white/10 p-4 backdrop-blur-md transition-all hover:scale-105 lg:basis-1/3"
          >
            <h1 className="flex-1 text-base font-bold">{post.title}</h1>
            <Image
              className="m-auto"
              src={post.mainImage}
              alt={post.description}
              height={200}
              width={200}
            ></Image>
            <p>{post.description}</p>
            <time dateTime={post.date} className="ml-auto text-xs">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </Link>
        ))}
      </div>
    </ASection>
  )
}
