

import { SiteConfig } from '@/config/site';
import { blogs } from '@/data/blogs';
import BlogDetailPage from '@/pages/BlogPage/BlogDetailPage';
import { notFound } from 'next/navigation';



export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs?.find((s) => s?.slug === slug);

  if (!blog) {
    return notFound()
  };

  return {
    title: blog?.meta_title,
    description: blog?.meta_description,
    alternates: {
      canonical: `${SiteConfig?.url}/blog/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs?.find((s) => s?.slug === slug);

  return <BlogDetailPage blog={blog} />
}