import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { Metadata } from 'next'
import { getMDXComponent } from 'next-contentlayer/hooks'
import NextImage, { ImageProps } from 'next/image'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({
  params,
}: {
  params: { slug: string }
}): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post?.title, description: post?.description }
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) return notFound()

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="prose prose-invert mx-auto">
      <div>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <h1>{post.title}</h1>
      <Content
        components={{
          Image: (props: ImageProps) => (
            <NextImage {...props} className="mx-auto"></NextImage>
          ),
        }}
      />
    </article>
  )
}
