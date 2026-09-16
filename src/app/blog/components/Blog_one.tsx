import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-store";

interface BlogOneProps {
  post: BlogPost;
}

function getWordCount(html: string) {
  if (!html) return 0;
  return html.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(Boolean).length;
}

function Blog_one({ post }: BlogOneProps) {
  if (!post) return null;

  const autoReadTime = Math.max(1, Math.ceil(getWordCount(post.content) / 200));
  const readTime = `${post.readTime ?? autoReadTime} Minute`;
  const plainText = post.content ? post.content.replace(/<[^>]*>?/gm, '') : '';
  const snippet = plainText.length > 250 ? plainText.slice(0, 250) + '...' : plainText;
  const dateStr = new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-20">
      <div className="global-container md:px-6">
        <div className="group flex flex-col md:flex-row items-center gap-8 rounded-md">
          {/* Left: Blog Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
            <Image
              src={post.featuredImage || "/industry/Startup.jpg"}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
          {/* Right: Blog Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <div className="text-xs text-zinc-500">
                <span className="bg-primary/10 text-[#d92d45] px-2 py-0.5 rounded">
                  {post.categories?.[0] || "Technology"}
                </span>
              </div>
              <span>Read {readTime}</span>
            </div>
            <h2 className="text-lg font-[500] group-hover:text-[#0E6860] transition-colors duration-300">
              <Link target="_blank" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="paragraph leading-relaxed">
              {snippet}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog_one;
