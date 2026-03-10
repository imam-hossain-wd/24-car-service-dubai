import { SiteConfig } from "@/config/site";
import HomePage from "@/pages/HomePage/HomePage";


export const metadata = {

  title: "Best Car Repair & Mobile Mechanic Services in Dubai",
  description: "24 Car Service Dubai offers professional mobile car repair and mechanic services across multiple areas in Dubai. Our expert technicians provide fast onsite diagnostics, battery replacement, oil change, brake repair, and emergency roadside assistance wherever you are in Dubai.",

  verification: {
    google: "BsO6PRJgg4HaeNY2nrVIOo5gNAbIu9_dlXNlO-XHY_U"
  },
  alternates: {
    canonical: 'https://www.24carservicedubai.com',
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
