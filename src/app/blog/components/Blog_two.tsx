'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog-store';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogTwoProps {
  posts: BlogPost[];
}

function getWordCount(html: string) {
  if (!html) return 0;
  return html.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(Boolean).length;
}

function Blog_two({ posts }: BlogTwoProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All Blogs');
  const itemsPerPage = 6;

  const categories = React.useMemo(() => {
    const allCats = posts.flatMap(post => post.categories || []);
    const uniqueCats = Array.from(new Set(allCats));
    return ['All Blogs', ...uniqueCats];
  }, [posts]);

  const filteredPosts = activeCategory === 'All Blogs'
    ? posts
    : posts.filter(post => post.categories?.includes(activeCategory) || post.categories?.[0] === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll back to section start
    const section = document.getElementById('all-posts-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (posts.length === 0) {
    return (
      <section id="all-posts-section" className="bg-[#8080800a] py-20">
        <div className="global-container text-center text-zinc-500">
          <p className="font-semibold text-lg">No additional blog posts found.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="all-posts-section" className="bg-white dark:bg-zinc-950 py-20 md:py-20">
      <div className="global-container md:px-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((blog) => {
            const autoReadTime = Math.max(1, Math.ceil(getWordCount(blog.content) / 200));
            const readTime = `${blog.readTime ?? autoReadTime} Min Read`;

            return (
              <Link target="_blank" href={`/blog/${blog.slug}`} key={blog.id} className="group flex flex-col gap-4">
                <div className="relative w-full h-[260px] shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={blog.featuredImage || "/industry/Game.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-zinc-900 dark:text-zinc-200">
                      {blog.categories?.[0] || 'Technology'}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <span>{readTime}</span>
                  </div>
                  <h3 className="text-md font-[500] text-zinc-900 dark:text-zinc-50 line-clamp-2 group-hover:text-[#d92d45] transition-colors duration-300">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination UI */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50 disabled:opacity-50 disabled:hover:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-all ${currentPage === page
                  ? 'bg-[#d92d45] text-white shadow-sm shadow-indigo-600/20'
                  : 'border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50 disabled:opacity-50 disabled:hover:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog_two;