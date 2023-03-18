import Link from 'next/link'
import Image from 'next/image'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

export default function Home() {
  return (
    <div className="h-full pt-12 gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
      <LargeHeading
        size="lg"
        className="text-three-d text-black dark:text-light-gold"
      >
        Easily determine <br /> text similarity.
      </LargeHeading>

      <Paragraph variant="center" className="max-w-xl lg:text-left">
        With the Text Similarity API, you can easily determine the similarity
        between two pieces of text with a free{' '}
        <Link
          href="/login"
          className="underline underline-offset-2 text-black dark:text-light-gold"
        >
          API key
        </Link>
        .
      </Paragraph>

      <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
        <Image
          priority
          className="img-shadow "
          quality={100}
          style={{ objectFit: 'contain' }}
          fill
          src="/typewriter.png"
          alt="typewriter"
        />
      </div>
    </div>
  )
}
