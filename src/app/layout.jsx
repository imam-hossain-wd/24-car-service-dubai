import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/ui/shared/Footer/Footer";
import { Navbar } from "@/components/ui/shared/Navbar/Navbar";
import { MobileBottomNav } from "@/components/ui/shared/Navbar/MobileBottomNav";
import StructuredData from "@/seo/schemas/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Car Repair and Services in Dubai || 24 Car Service Dubai",
  description: "One of the best car repair and servicing company in dubai || 24 Car Service Dubai",
  verification: {
    google: "BsO6PRJgg4HaeNY2nrVIOo5gNAbIu9_dlXNlO-XHY_U"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <div>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          {/* <FloatingButtons /> */}
          <MobileBottomNav />
          {/* <FloatingButton /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
