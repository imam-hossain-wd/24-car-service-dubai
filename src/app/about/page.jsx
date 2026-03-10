import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import AboutPage from '@/pages/AboutPage/AboutPage'
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import React from 'react'

export const metadata = {
  title: "About Us | 24 Car Service Dubai Mobile Mechanic & Auto Repair",
  description: "Learn about 24 Car Service Dubai, a trusted provider of mobile car repair and mechanic services in Dubai. Our experienced technicians offer 24/7 roadside assistance, battery replacement, oil change, diagnostics, and complete auto repair at your location or in our garage.",
  alternates: {
    canonical: `${SiteConfig.url}/about`,
  },
};

// ------------- About us page description --------------------
// 24 Car Service Dubai is a professional car repair and mobile mechanic service provider in Dubai. Our mission is to deliver fast, reliable, and affordable automotive repair solutions for drivers across the city. With experienced technicians and modern diagnostic tools, we provide onsite car repair, emergency roadside assistance, battery replacement, oil change, brake repair, and complete vehicle maintenance.

// We proudly serve multiple areas across Dubai with both mobile mechanic services and garage-based repairs, ensuring your vehicle receives expert care wherever you are.
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" }
];

export default function Aboout() {
  return <>
    <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <AppBreadcrumb />
    <AboutPage />
  </>
}
