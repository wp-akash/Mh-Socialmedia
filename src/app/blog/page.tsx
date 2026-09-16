import React from 'react'
// import Breadcrumbs from '../../components/Breadcrumbs'
import Blog_one from './components/Blog_one'
import Blog_two from './components/Blog_two'
import { getAllBlogPosts } from '@/app/admin/actions/blog'
import BlogBanner from '@/components/BlogBanner';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const allPublishedPosts = posts.filter(post => post.status === 'Published');
  const newestPost = allPublishedPosts[0] || null;
  const remainingPosts = allPublishedPosts.slice(1);

  return (
    <>
      {/* <Breadcrumbs pageTitle="Blog" sectionDescription="Explore our approach to digital transformation and how we help organizations adapt to the ever-changing tech landscape." /> */}
      <BlogBanner />
      {newestPost && <Blog_one post={newestPost} />}
      <Blog_two posts={remainingPosts} />
    </>
  )
}
