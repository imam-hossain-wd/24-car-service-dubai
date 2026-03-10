
import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import BlogPage from '@/pages/BlogPage/BlogPage'
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';


export const metadata = {
  title: "Dubai Car Repair Blog | Mobile Mechanic Tips & Vehicle Guides",
  description: "Read the 24 Car Service Dubai blog for expert car repair tips, vehicle maintenance guides, battery care advice, and mobile mechanic insights. Stay updated with professional auto service knowledge for drivers in Dubai.",
  alternates: {
    canonical: `${SiteConfig.url}/blog`,
  },
};

  const items = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" }
];

export default function Blog() {
  return <>
  <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <BlogPage />
  </>
}
