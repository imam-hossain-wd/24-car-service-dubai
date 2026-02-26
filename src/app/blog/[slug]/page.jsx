
import { notFound } from 'next/navigation'
import { blogs } from '@/data/blogs';
import BlogDetailPage from '@/pages/BlogPage/BlogDetailPage';



export const metadata = {
  title: "",
  description: "",
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((s) => s?.slug === slug);


  console.log(blog, 'blog-----hello')
//   if (!blog) {
//     return notFound()
//   }

  return <BlogDetailPage blog={blog} />
}