// 'use client'
// import Head from 'next/head';
// import BlogCarousel from './BlogCarousel';



// // const BlogCarousel = dynamic(() => import('@/pages/BlogPage/BlogCarousel'), { ssr: false });

// export default function BlogPage() {
//   return (
//     <>
//       <Head>
//         <title>Car Repair Blog – 24CarServiceDubai</title>
//         <meta name="description" content="Expert car repair tips for Dubai drivers. Learn about AC, battery, engine, and more." />
//         <meta name="keywords" content="car blog, dubai car service, ac repair, battery replacement" />
//         <meta property="og:title" content="24CarServiceDubai Blog – Car Repair Guides" />
//         <meta property="og:url" content="https://www.24carservicedubai.com/blog" />
//       </Head>

      // <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      //   <div className="max-w-7xl mx-auto">
      //     <div className="text-center mb-10">
      //       <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
      //         Car Repair <span className="text-primary">Blog</span>
      //       </h1>
      //       <p className="mt-4 text-xl text-gray-600">
      //         Expert tips to keep your car running smoothly in Dubai’s heat.
      //       </p>
      //     </div>

      //     <div className='w-[90%] mx-auto'>
      //       <BlogCarousel />
      //     </div>
      //   </div>
      // </div>
//     </>
//   );
// }


// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Star,
  Wrench,
  Battery,
  Gauge,
  Thermometer,
  AlertCircle
} from "lucide-react";
import { blogs } from "@/data/blogs";

// Category icons mapping
const categoryIcons = {
  "car ac repair dubai": Thermometer,
  "car battery replacement dubai": Battery,
  "engine diagnostic dubai": Gauge,
  "radiator repair dubai": AlertCircle,
  "brake pad replacement dubai": Wrench,
};

// Get unique categories from blogs
const categories = Array.from(
  new Set(blogs.flatMap(blog => blog.tags))
).slice(0, 6);

// Featured blog (most recent)
const featuredBlog = blogs[0];

// Rest of blogs (excluding featured)
const recentBlogs = blogs.slice(1, 4);
const allBlogs = blogs;

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400"></div>
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
            <BookOpen className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-white/90">
              Expert Automotive Knowledge
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Car Repair{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Blog & Guides
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Expert advice, maintenance tips, and guides to keep your car running smoothly
            in Dubai's challenging climate.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-400/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{blogs.length}+</div>
                <div className="text-xs text-white/60">Expert Articles</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-400/10 rounded-lg">
                <User className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-xs text-white/60">Expert Authors</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-400/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-xs text-white/60">Monthly Readers</div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, guides, or topics..."
                className="w-full h-14 pl-14 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-colors"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Categories Section */ }
  <section className="py-12 border-b border-slate-200">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="text-sm font-medium text-slate-600 mr-2">Popular Topics:</span>
        {categories.map((category, index) => {
          const Icon = categoryIcons[category] || Tag;
          return (
            <Link
              key={index}
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all"
            >
              <Icon className="h-3.5 w-3.5 text-slate-500 group-hover:text-emerald-500" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-600 capitalize">
                {category.replace(/-/g, ' ')}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>

  {/* Featured Article Section */ }
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Featured Article
        </h2>
        <Link
          href="/blog/all"
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Featured Blog Card */}
      <Link href={`/blog/${featuredBlog.slug}`} className="block group">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
          {/* Image */}
          <div className="relative h-[300px] md:h-full overflow-hidden bg-slate-100">
            <Image
              src={featuredBlog.image}
              alt={featuredBlog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(featuredBlog.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {featuredBlog.author}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
              {featuredBlog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-600 mb-6 leading-relaxed">
              {featuredBlog.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredBlog.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read More */}
            <span className="inline-flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
              Read Full Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  </section>

  {/* Recent Articles Section */ }
  <section className="py-16 bg-slate-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
        Recent Articles
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {recentBlogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
            <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200 h-full flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {blog.author.split(' ')[0]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {blog.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>

  {/* All Articles Section */ }
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
        All Articles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBlogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-200 h-full flex flex-col">
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <Calendar className="h-3 w-3" />
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 mb-3 line-clamp-2 flex-1">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center text-xs text-emerald-600 font-medium group-hover:gap-1 transition-all">
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
          Load More Articles
        </button>
      </div>
    </div>
  </section>

  {/* Newsletter Section */ }
  <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with Car Care Tips
        </h2>
        <p className="text-white/90 mb-8">
          Get the latest maintenance guides, expert advice, and special offers delivered to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-12 px-4 rounded-xl border-0 focus:ring-2 focus:ring-white text-slate-800"
          />
          <button className="h-12 px-6 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
            Subscribe
          </button>
        </form>

        <p className="text-xs text-white/70 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </section>
    </main >
  );
}
