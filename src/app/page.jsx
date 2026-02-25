import { SiteConfig } from "@/config/site";
import HomePage from "@/pages/HomePage/HomePage";


export const metadata = {

  title: "24 Car Service Dubai | Mobile Car Repair & Auto Mechanic Services",
  description: "Fast and reliable mobile car repair in Dubai. 24 Car Service Dubai provides 24/7 roadside assistance, battery replacement, jump start, AC repair and onsite mechanic service. No towing required. Same-day service across Dubai.",

  verification: {
    google: "BsO6PRJgg4HaeNY2nrVIOo5gNAbIu9_dlXNlO-XHY_U"
  },
  alternates: {
    canonical: SiteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function Home() {
  return <HomePage />
}
