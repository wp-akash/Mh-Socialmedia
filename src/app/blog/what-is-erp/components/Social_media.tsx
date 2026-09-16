import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

function Social_media() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t-1 border-b-1 py-6 sm:py-8 lg:py-10">
        {/* Left: Author Info */}
        <div className="flex items-center gap-4 ">
          <Image
            src="/placeholder-male.jpg"
            alt="Author"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <div className="text-sm text-zinc-500">Written by</div>
            <div className="font-semibold text-zinc-800 text-lg">Jane Doe</div>
          </div>
        </div>
        {/* Right: Social Share */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-500 text-sm mr-2">Share:</span>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://yourblogurl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-5 h-5 text-blue-600" />
          </Link>
          <Link
            href="https://twitter.com/intent/tweet?url=https://yourblogurl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-5 h-5 text-sky-500" />
          </Link>
          <Link
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourblogurl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-blue-700" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Social_media