
// // app/blog/page.tsx
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Calendar,
//   User,
//   ArrowRight,
//   Wrench,
//   Battery,
//   Gauge,
//   Thermometer,
//   AlertCircle
// } from "lucide-react";
// import { blogs } from "@/data/blogs";
// import BlogHero from "@/components/view/Hero/BlogHero";


// const categoryIcons = {
//   "car ac repair dubai": Thermometer,
//   "car battery replacement dubai": Battery,
//   "engine diagnostic dubai": Gauge,
//   "radiator repair dubai": AlertCircle,
//   "brake pad replacement dubai": Wrench,
// };

// // Get unique categories from blogs
// const categories = Array.from(
//   new Set(blogs.flatMap(blog => blog.tags))
// ).slice(0, 6);

// // Featured blog (most recent)
// const featuredBlog = blogs[0];

// // Rest of blogs (excluding featured)
// const recentBlogs = blogs.slice(1, 4);
// const allBlogs = blogs;

// export default function BlogPage() {
//   return (
//     <main className="bg-gradient-to-b from-slate-50 to-white">
//       <BlogHero />

//       {/* Featured Article Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
//               Featured Article
//             </h2>
//             <Link
//               href="/blog/all"
//               className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
//             >
//               View All
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           {/* Featured Blog Card */}
//           <Link href={`/blog/${featuredBlog.slug}`} className="block group">
//             <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
//               {/* Image */}
//               <div className="relative h-[300px] md:h-full overflow-hidden bg-slate-100">
//                 <Image
//                   src={featuredBlog.image}
//                   alt={featuredBlog.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
//                     Featured
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8 flex flex-col justify-center">
//                 {/* Meta */}
//                 <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
//                   <div className="flex items-center gap-1.5">
//                     <Calendar className="h-4 w-4" />
//                     {new Date(featuredBlog.date).toLocaleDateString('en-US', {
//                       month: 'long',
//                       day: 'numeric',
//                       year: 'numeric'
//                     })}
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <User className="h-4 w-4" />
//                     {featuredBlog.author}
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
//                   {featuredBlog.title}
//                 </h3>

//                 {/* Excerpt */}
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   {featuredBlog.excerpt}
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {featuredBlog.tags.slice(0, 3).map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Read More */}
//                 <span className="inline-flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
//                   Read Full Article
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </span>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* Recent Articles Section */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
//             Recent Articles
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {recentBlogs.map((blog) => (
//               <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
//                 <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200 h-full flex flex-col">
//                   {/* Image */}
//                   <div className="relative h-48 overflow-hidden bg-slate-100">
//                     <Image
//                       src={blog.image}
//                       alt={blog.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex-1 flex flex-col">
//                     {/* Meta */}
//                     <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="h-3 w-3" />
//                         {new Date(blog.date).toLocaleDateString('en-US', {
//                           month: 'short',
//                           day: 'numeric'
//                         })}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <User className="h-3 w-3" />
//                         {blog.author.split(' ')[0]}
//                       </div>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
//                       {blog.title}
//                     </h3>

//                     {/* Excerpt */}
//                     <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
//                       {blog.excerpt}
//                     </p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-1.5 mt-auto">
//                       {blog.tags.slice(0, 2).map((tag, index) => (
//                         <span
//                           key={index}
//                           className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* All Articles Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
//             All Articles
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {allBlogs.map((blog) => (
//               <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
//                 <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-200 h-full flex flex-col">
//                   {/* Image */}
//                   <div className="relative h-40 overflow-hidden bg-slate-100">
//                     <Image
//                       src={blog.image}
//                       alt={blog.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-5 flex-1 flex flex-col">
//                     {/* Meta */}
//                     <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
//                       <Calendar className="h-3 w-3" />
//                       {new Date(blog.date).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: 'numeric',
//                         year: 'numeric'
//                       })}
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
//                       {blog.title}
//                     </h3>

//                     {/* Excerpt */}
//                     <p className="text-sm text-slate-600 mb-3 line-clamp-2 flex-1">
//                       {blog.excerpt}
//                     </p>

//                     {/* Read More */}
//                     <span className="inline-flex items-center text-xs text-emerald-600 font-medium group-hover:gap-1 transition-all">
//                       Read More
//                       <ArrowRight className="ml-1 h-3 w-3" />
//                     </span>
//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>

//           {/* Load More Button */}
//           <div className="flex justify-center mt-10">
//             <button className="px-8 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
//               Load More Articles
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center text-white">
//             <h2 className="text-3xl font-bold mb-4">
//               Stay Updated with Car Care Tips
//             </h2>
//             <p className="text-white/90 mb-8">
//               Get the latest maintenance guides, expert advice, and special offers delivered to your inbox.
//             </p>

//             <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 h-12 px-4 rounded-xl border-0 focus:ring-2 focus:ring-white text-slate-800"
//               />
//               <button className="h-12 px-6 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
//                 Subscribe
//               </button>
//             </form>

//             <p className="text-xs text-white/70 mt-4">
//               We respect your privacy. Unsubscribe at any time.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main >
//   );
// }

// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  User,
  ArrowRight,
  Wrench,
  Battery,
  Gauge,
  Thermometer,
  AlertCircle,
  Shield,
  Clock,
  MapPin
} from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogHero from "@/components/view/Hero/BlogHero";
import { images } from "@/utils/assets";


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
      <BlogHero />

      {/* Blog Intro Section - Image Left, Content Right */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

            {/* Left Side - Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Main Image */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full">
                  <Image
                    src={images.blog} // Replace with your actual image path
                    alt="Professional mechanic working on car in Dubai"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent"></div>

                {/* Badge - Positioned on image */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-800">Since 2010</span>
                    </div>
                  </div>
                </div>

                {/* Stats Card - Overlapping on image */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-[180px] hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">15+</div>
                      <div className="text-xs text-slate-500">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50"></div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-emerald-100 rounded-full opacity-50"></div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 md:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Trusted Auto Experts in Dubai</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl  font-bold text-slate-800 mb-6 leading-tight">
                Welcome to the{' '}
                <span className="text-emerald-600 relative">
                  24 Car Service
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-200 rounded-full"></span>
                </span>{' '}
                <br />Dubai Blog
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-2 mb-8">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Welcome to the 24 Car Service Dubai Blog, where we share expert tips, maintenance guides,
                  and professional advice to help keep your car running smoothly. Our blog covers important
                  topics such as{' '}
                  <span className="font-semibold text-emerald-600">car battery care</span>,{' '}
                  <span className="font-semibold text-emerald-600">engine maintenance</span>,{' '}
                  <span className="font-semibold text-emerald-600">brake repair</span>,{' '}
                  <span className="font-semibold text-emerald-600">oil changes</span>, and{' '}
                  <span className="font-semibold text-emerald-600">emergency roadside assistance</span>.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you need help understanding common vehicle problems or want to learn how to
                  maintain your car in Dubai's climate, our expert guides provide reliable information
                  for every driver.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg shrink-0">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Updated Weekly</div>
                    <div className="text-xs text-slate-500 mt-0.5">Fresh content every week</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg shrink-0">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Expert Verified</div>
                    <div className="text-xs text-slate-500 mt-0.5">Reviewed by mechanics</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg shrink-0">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Dubai Focused</div>
                    <div className="text-xs text-slate-500 mt-0.5">Local climate tips</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------ */}

      {/* Featured Article Section */}
      <section className="py-6">
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

      {/* Recent Articles Section */}
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

      {/* All Articles Section */}
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

      {/* Newsletter Section */}
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
