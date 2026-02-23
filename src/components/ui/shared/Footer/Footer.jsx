import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Shield,
  Award,
  Wrench,
  Star,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { SiteConfig } from "@/config/site";

export function Footer() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    serviceAreas,
    services,
    footerhrefs,
    socialLinks,
    email,
    location,
    coordinate
  } = SiteConfig;

  // GBP Information
  const gbp = {
    name: "Saiful Car Repair & Battery Fixing Dubai",
    brand: "24 Car Service Dubai",
    address: "Al Mankhool, Dubai, United Arab Emirates",
    phone: "+971545695980",
    website: "https://www.24carservicedubai.com",
    cid: "13525343863552602330",
    rating: "4.9",
    reviews: "500+",
    mapLink: "https://maps.app.goo.gl/XawQTNC8rP9Yy88o8"
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#007A55] to-[#00943B] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>

      <div className="container relative mx-auto px-4 py-16 z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 mb-12">

          {/* Brand Column - 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {brandName}
                <span className="bg-amber-400 text-[#007A55] text-xs px-2 py-1 rounded-full font-semibold">
                  Google Verified
                </span>
              </h3>

              <p className="text-sm text-white/90 leading-relaxed mb-4">
                Dubai's premier mobile car repair service, delivering expert solutions 24/7 at your doorstep.
              </p>

              {/* Google Business Profile Badge */}
              <Link
                href={gbp.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-6 p-3 bg-amber-400/10 border border-amber-400/30 rounded-xl hover:bg-amber-400/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400 rounded-full">
                    <Star className="h-4 w-4 text-[#007A55]" fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">Google Rating</span>
                      <ExternalLink className="h-3 w-3 text-white/60 group-hover:text-amber-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-amber-400">{gbp.rating}</span>
                      <span className="text-xs text-white/80">({gbp.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Contact Info */}
              <div className="space-y-3">
                <Link
                  href={numberCallLink}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-amber-400 hover:text-[#007A55] transition-all group border border-white/10"
                >
                  <div className="p-2 bg-amber-400 rounded-full group-hover:bg-white">
                    <Phone className="h-4 w-4 text-[#007A55]" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">{displayNumber}</span>
                    <span className="text-xs text-white/60 group-hover:text-[#007A55]/60">24/7 Emergency Support</span>
                  </div>
                </Link>

                <Link
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-amber-400 hover:text-[#007A55] transition-all group border border-white/10"
                >
                  <div className="p-2 bg-amber-400 rounded-full group-hover:bg-white">
                    <Mail className="h-4 w-4 text-[#007A55]" />
                  </div>
                  <span className="text-sm font-medium">{email}</span>
                </Link>

                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="p-2 bg-amber-400 rounded-full">
                    <MapPin className="h-4 w-4 text-[#007A55]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{location}</p>
                    <Link
                      href={gbp.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-amber-400 underline mt-1 inline-flex items-center gap-1"
                    >
                      View on Google Maps <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-xs">
                  <Clock className="h-3 w-3 text-amber-400" />
                  <span>24/7 Service</span>
                </div>
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-xs">
                  <Shield className="h-3 w-3 text-amber-400" />
                  <span>Certified</span>
                </div>
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-xs">
                  <CheckCircle className="h-3 w-3 text-amber-400" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Column - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold border-l-4 border-amber-400 pl-3 bg-white/5 py-2 rounded-r-lg flex items-center gap-2">
              <Wrench className="h-5 w-5 text-amber-400" />
              Our Services
            </h3>
            <nav className="grid grid-cols-1 gap-2">
              {services?.map((service, index) => (
                <Link
                  key={index}
                  href={service.slug}
                  className="text-sm text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group p-2 rounded-lg hover:bg-white/5"
                >
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  {service.name}
                </Link>
              ))}
            </nav>

            {/* Service CTA */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-white mt-2 group"
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Service Areas Column - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold border-l-4 border-amber-400 pl-3 bg-white/5 py-2 rounded-r-lg flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              Service Areas in Dubai
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {serviceAreas?.map((location, index) => (
                <Link
                  key={index}
                  href={location.href}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-xs text-white/90 group-hover:text-white">
                    {location.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company & Social Column - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold border-l-4 border-amber-400 pl-3 bg-white/5 py-2 rounded-r-lg">
                Company
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {footerhrefs?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group p-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400" />
                Operating Hours
              </h4>
              <p className="text-xs text-white/80">Open 24 hours - 7 days a week</p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Connect With Us</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks?.map(({ name, icon: Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className="p-3 bg-white/10 rounded-xl hover:bg-amber-400 hover:scale-110 transition-all duration-300 group border border-white/20"
                  >
                    <Icon className="h-4 w-4 group-hover:text-[#007A55]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Link
              href={whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#25D366] rounded-full">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-xs text-white/70">Quick response within 5 mins</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Google Business Profile Connection Section */}
        <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-400 rounded-full">
                <Award className="h-6 w-6 text-[#007A55]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  Google Verified Business
                  <span className="bg-amber-400 text-[#007A55] text-xs px-2 py-1 rounded-full font-bold">
                    CID: {gbp.cid}
                  </span>
                </h4>
                <p className="text-sm text-white/80">
                  <strong>{gbp.name}</strong> is verified on Google Maps. We serve all areas of Dubai 24/7.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href={gbp.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#007A55] px-4 py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                View on Google Maps
              </Link>
              <Link
                href={gbp.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-amber-400 text-[#007A55] px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors"
              >
                <Star className="h-4 w-4" fill="currentColor" />
                Write a Review
              </Link>
            </div>
          </div>
        </div>

        {/* Local Business NAP for Search Engines */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/AutoRepair">
            <span itemProp="name">{gbp.name}</span>
            <span itemProp="alternateName">{gbp.brand}</span>
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">{gbp.address}</span>
              <span itemProp="addressLocality">Dubai</span>
              <span itemProp="addressCountry">UAE</span>
            </span>
            <span itemProp="telephone">{gbp.phone}</span>
            <span itemProp="url">{gbp.website}</span>
            <span itemProp="sameAs">{gbp.mapLink}</span>
            <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
              <span itemProp="latitude">25.2256355</span>
              <span itemProp="longitude">55.1905546</span>
            </span>
            <span itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <span itemProp="ratingValue">4.9</span>
              <span itemProp="reviewCount">500</span>
            </span>
            <span itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <span itemProp="dayOfWeek">Monday-Sunday</span>
              <span itemProp="opens">00:00</span>
              <span itemProp="closes">23:59</span>
            </span>
          </div>
          <span>Business Name: {gbp.name}</span>
          <span>Brand: {gbp.brand}</span>
          <span>Address: {gbp.address}</span>
          <span>Phone: {gbp.phone}</span>
          <span>Website: {gbp.website}</span>
          <span>Google Maps CID: {gbp.cid}</span>
          <span>Google Maps Link: {gbp.mapLink}</span>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/60">
              © {new Date().getFullYear()} {gbp.name} | {brandName}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-white/60 hover:text-amber-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-amber-400 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="text-white/60 hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="text-xs text-white/60">Payment Methods:</span>
            <div className="flex gap-1">
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">VISA</div>
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Mastercard</div>
              <div className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Cash</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}