import { SiteConfig } from '@/config/site';
import ServicePage from '@/pages/ServicePage/ServicePage'
import ServicesPageSchema from '@/seo/schemas/ServicesPageSchema';
import React from 'react'

export const metadata = {
  title: "Car Repair Services Dubai | Mobile Mechanic & Roadside Assistance",
  description: "Explore complete car repair services in Dubai including battery replacement, jump start, AC repair, alternator repair and full car maintenance. Available 24/7 across Dubai.",
  alternates: {
    canonical: `${SiteConfig.url}/services`,
  },
};

export default function Service() {
  return <>
    <ServicesPageSchema />
    <ServicePage />
  </>
}
