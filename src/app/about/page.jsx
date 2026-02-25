import { SiteConfig } from '@/config/site';
import AboutPage from '@/pages/AboutPage/AboutPage'
import React from 'react'

export const metadata = {
  title: "About 24 Car Service Dubai | Mobile Car Repair Experts in Dubai",
  description: "Learn about 24 Car Service Dubai — trusted mobile mechanics in Al Mankhool providing 24/7 car repair, battery replacement, AC repair and roadside assistance across Dubai.",
  alternates: {
        canonical: `${SiteConfig.url}/about`,
      },
};

export default function Aboout() {
  return <AboutPage />
}
