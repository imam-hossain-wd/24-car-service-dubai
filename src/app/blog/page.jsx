
import { SiteConfig } from '@/config/site';
import BlogPage from '@/pages/BlogPage/BlogPage'


export const metadata = {
  title: "Car Repair Blog Dubai | Auto Tips & Maintenance Guide",
  description: "Read expert car repair tips, battery care guides, AC maintenance advice and roadside help articles from 24 Car Service Dubai. Stay updated with professional auto insights.",
  alternates: {
    canonical: `${SiteConfig.url}/blog`,
  },
};



export default function Blog() {
  return <BlogPage />
}
