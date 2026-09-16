import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://theicthub.com';

  // In a real application, you would fetch these from your CMS/Database
  const blogSlugs = [
    'future-of-web-development-nextjs-15',
    'mastering-tailwind-css-v4',
  ];

  const blogSitemaps = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const routes = ['', '/about', '/contact', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  return [...routes, ...blogSitemaps];
}
