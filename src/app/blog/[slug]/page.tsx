import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/app/admin/actions/blog';
import { BlogPost } from '@/lib/blog-store';
// import Breadcrumbs from '@/components/Breadcrumbs';
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import CallToAction from '../components/Call-to-action';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | The ICT Hub',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.seoTitle || post.title} | The ICT Hub`,
    description: post.seoDescription || post.title,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.title,
      type: 'article',
      url: `https://theicthub.com/blog/${post.slug}`,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.title,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getWordCount(html: string) {
  if (!html) return 0;
  return html.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(Boolean).length;
}

function getReadTime(post: { content: string; readTime?: number }) {
  if (post.readTime) return `${post.readTime} minute read`;
  const words = getWordCount(post.content);
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} minute read`;
}

// Strip HTML for description snippets
function stripHtml(html: string) {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '').trim();
}

function extractHeadings(html: string) {
  if (!html) return [];
  // Matches all h3 tags
  const matches = [...html.matchAll(/<h3([^>]*)>(.*?)<\/h3>/g)];
  return matches.map(match => {
    const rawContent = match[2];
    const tagMatch = rawContent.match(/<(span|strong|b|a)[^>]*>(.*?)<\/\1>/i);
    const cleanText = tagMatch
      ? tagMatch[2].replace(/<[^>]*>?/gm, '').trim()
      : rawContent.replace(/<[^>]*>?/gm, '').trim();

    const id = cleanText.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    return { text: cleanText, id };
  });
}

function addHeadingIds(html: string) {
  if (!html) return html;
  return html.replace(/<h3([^>]*)>(.*?)<\/h3>/g, (match, attrs, content) => {
    const tagMatch = content.match(/<(span|strong|b|a)[^>]*>(.*?)<\/\1>/i);
    const cleanText = tagMatch
      ? tagMatch[2].replace(/<[^>]*>?/gm, '').trim()
      : content.replace(/<[^>]*>?/gm, '').trim();

    const id = cleanText.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    return `<h3${attrs} id="${id}">${content}</h3>`;
  });
}

// Custom SVG Profile Avatar
function AvatarSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-full w-full fill-zinc-400 dark:fill-zinc-600 bg-zinc-100 dark:bg-zinc-800">
      <path d="M20 21c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0 2c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z" />
    </svg>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const allPosts = await getAllBlogPosts();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  // Parse headings and add IDs
  const headings = extractHeadings(post.content);
  const contentWithIds = addHeadingIds(post.content);

  // Fetch related posts (same category, published, limit to 3)
  let relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.status === 'Published' && p.categories?.some(cat => post.categories?.includes(cat)))
    .slice(0, 3);

  // If not enough, fill with other published posts
  if (relatedPosts.length < 3) {
    const fillers = allPosts.filter(
      p => p.id !== post.id && p.status === 'Published' && !relatedPosts.some(r => r.id === p.id)
    );
    relatedPosts.push(...fillers.slice(0, 3 - relatedPosts.length));
  }

  // Schema.org JSON-LD BlogPosting
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription || post.title,
    image: post.featuredImage || '',
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://theicthub.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The ICT Hub',
      logo: { '@type': 'ImageObject', url: 'https://theicthub.com/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://theicthub.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  const hasHeadings = headings.length > 0;

  return (
    <>
      {/* <Breadcrumbs pageTitle={post.title} sectionDescription={("")} /> */}

      <article className="global-container md:px-4 py-24 space-y-16">
        {/* JSON-LD Injection */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Dynamic Layout */}
        {hasHeadings ? (
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
            {/* Sidebar Table of Contents */}
            <aside className="lg:sticky lg:top-24 space-y-8">

              {/* Metadata Card (from screenshot) */}
              <div className="bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-6 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Published</h4>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium text-sm">{formatDate(post.createdAt)}</p>
                  </div>
                  <div className="h-px bg-zinc-100 dark:bg-zinc-800"></div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">(Writer)</h4>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium text-sm">{post.author || "Admin"}</p>
                  </div>
                  <div className="h-px bg-zinc-100 dark:bg-zinc-800"></div>
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">Share Post:</h4>
                    <div className="flex gap-3">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=https://theicthub.com/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white" title="Share on Facebook">
                        {/* Facebook Icon */}
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                      </a>
                      <a href={`https://twitter.com/intent/tweet?url=https://theicthub.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white" title="Share on X (Twitter)">
                        {/* X (Twitter) Icon */}
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.126H5.059z" /></svg>
                      </a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://theicthub.com/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white" title="Share on LinkedIn">
                        {/* LinkedIn Icon */}
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      </a>
                      <a href="https://www.instagram.com/theicthub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white" title="Follow on Instagram">
                        {/* Instagram Icon */}
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                    </div>
                  </div>
                  <div className="h-px bg-zinc-100 dark:bg-zinc-800"></div>
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 justify-center">
                    <Clock className="w-4 h-4" />
                    <span>{getReadTime(post).replace("minute read", "Min Read")}</span>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-sm border-b border-zinc-100 dark:border-zinc-800/60 pb-3 mb-4 text-zinc-800 dark:text-zinc-200">
                  What You'll Learn
                </h3>
                <ol className="space-y-3 text-[13px] text-zinc-600 dark:text-zinc-400 font-medium">
                  {headings.map((h, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-zinc-400 dark:text-zinc-600 shrink-0">{index + 1}.</span>
                      <a href={`#${h.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors leading-snug">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Content Column */}
            <div className="space-y-8">


              {/* Title Section */}
              <div className="space-y-4">
                {/* <div className="flex items-center gap-2 flex-wrap">
                  {post.categories.map(cat => (
                    <span key={cat} className="text-xs font-semibold tracking-wider text-[#d92d45] dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded">
                      {cat}
                    </span>
                  ))}
                </div> */}
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-2xl leading-tight">
                  {post.title}
                </h1>
              </div>

              {post.featuredImage && (
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Render HTML content */}
              <div
                className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed scroll-mt-24"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-850 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {post.faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50/50 dark:bg-zinc-900/30 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                      >
                        <summary className="flex items-center justify-between text-base font-semibold text-zinc-800 dark:text-zinc-200 outline-none">
                          <span>{faq.question}</span>
                          <span className="ml-1.5 h-5 w-5 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180 text-zinc-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Fallback Single Column Layout if there are no H3 headings */
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Premium Metadata Header */}
            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 pb-6 border-b border-zinc-100 dark:border-zinc-800/60 text-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
                  <AvatarSVG />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold tracking-wider">Author</p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{post.author}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-500">
                  <CalendarDays className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold tracking-wider">Published on</p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{formatDate(post.createdAt)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-500">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold tracking-wider">Read time</p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{getReadTime(post)}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* <div className="flex items-center gap-2 flex-wrap">
                {post.categories.map(cat => (
                  <span key={cat} className="text-xs font-semibold tracking-wider text-[#d92d45] dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded">
                    {cat}
                  </span>
                ))}
              </div> */}
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
                {post.title}
              </h1>
            </div>

            {post.featuredImage && (
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Render HTML content */}
            <div
              className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-850 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50/50 dark:bg-zinc-900/30 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                    >
                      <summary className="flex items-center justify-between text-base font-semibold text-zinc-800 dark:text-zinc-200 outline-none">
                        <span>{faq.question}</span>
                        <span className="ml-1.5 h-5 w-5 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180 text-zinc-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── Read Next (Related Posts) Section ─── */}
        {relatedPosts.length > 0 && (
          <div className="pt-16 border-t border-zinc-200 dark:border-zinc-800 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Explore More Blogs
              </h2>
              {/* <Link href="/blog" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                View All Posts <ArrowRight className="h-4 w-4" />
              </Link> */}

              <ContactButton href="/blog" text="View All Posts" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rPost, idx) => {
                const autoReadTime = Math.max(1, Math.ceil(getWordCount(rPost.content) / 200));
                const readTime = `${rPost.readTime ?? autoReadTime} Min Read`;

                return (
                  <Link
                    href={`/blog/${rPost.slug}`}
                    key={rPost.id || idx}
                    className="group flex flex-col gap-4"
                  >
                    <div className="relative w-full h-[260px] shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
                      {rPost.featuredImage ? (
                        <Image
                          src={rPost.featuredImage}
                          alt={rPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                          <FileText className="h-10 w-10 stroke-1" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <span className="font-medium text-zinc-900 dark:text-zinc-200">
                          {rPost.categories?.[0] || 'Technology'}
                        </span>
                        <span className="text-zinc-300 dark:text-zinc-700">•</span>
                        <span>{readTime}</span>
                      </div>
                      <h3 className="text-md font-[500] text-zinc-900 dark:text-zinc-50 line-clamp-2 group-hover:text-[#117C75] transition-colors duration-300">
                        {rPost.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>
      <CallToAction />
    </>
  );
}

// Dummy FileText mock to prevent compilation issues
function FileText(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}
