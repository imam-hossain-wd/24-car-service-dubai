import AppBreadcrumb from "@/components/ui/shared/AppBreadcrumb/AppBreadcrumb";
import { SiteConfig } from "@/config/site";
import ContactPage from "@/pages/ContactPage/ContactPage";
import BreadcrumbSchema from "@/seo/schemas/BreadcrumbSchema";


export const metadata = {
  title: "Contact 24 Car Service Dubai | 24/7 Mobile Car Repair",
  description: "Contact 24 Car Service Dubai for fast mobile car repair, battery replacement, jump start and roadside assistance. Available 24/7 across Dubai. Call now for same-day service.",
  alternates: {
    canonical: `${SiteConfig.url}/contact`
  },
};
const items = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" }
];


export default function Contact() {
  return <>
    <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <ContactPage />
  </>
}
