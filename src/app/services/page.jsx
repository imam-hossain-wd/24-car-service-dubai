
import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import ServicePage from '@/pages/ServicePage/ServicePage'
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import ServicesPageSchema from '@/seo/schemas/ServicesPageSchema';
import React from 'react'

export const metadata = {
  title: "Expert Car Repair & Mobile Mechanic Services Dubai",
  description: "Explore complete car repair services in Dubai including battery replacement, jump start, AC repair, alternator repair and full car maintenance. Available 24/7 across Dubai.",
  alternates: {
    canonical: `${SiteConfig.url}/services`,
  },
};

const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" }
];

export default function Service() {
  return <>
    <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <ServicesPageSchema />
    <ServicePage />
  </>
}
