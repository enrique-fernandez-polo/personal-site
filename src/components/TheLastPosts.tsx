import ASection from './ASection'
import { allPosts } from 'contentlayer/generated'
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
    >
      <div className="flex gap-3">
        {allPosts.map((post) => (
          <Link
            href={`/blog/${post._raw.flattenedPath}`}
            key={post._id}
            className="space-y-2 rounded-xl border border-white/10 p-4 backdrop-blur-md transition-all hover:scale-105 lg:basis-1/3"
          >
            <h1 className="text-base font-bold">{post.title}</h1>
            <div className="relative h-56 w-full">
              <Image
                className="mx-auto"
                src={post.mainImage}
                alt={post.description}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </ASection>
  )
}