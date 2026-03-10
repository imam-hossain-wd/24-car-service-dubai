import Link from "next/link";
import {
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
import { bandlogo } from "@/utils/assets";
import Image from "next/image";

export function Footer() {
  const {
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    serviceAreas,
    services,
    footerhrefs,
    socialLinks,
    location,
    gbp
  } = SiteConfig;



  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-[#007A55] to-[#00943B] text-white overflow-hidden">

      {/* ===== Premium Glow Effects ===== */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-emerald-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>

      <div className="container relative mx-auto px-4 py-16 z-10">

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-14">

          {/* ========= BRAND COLUMN ========= */}
          <div className="space-y-6">

            <div>
              {/* <h3 className="text-3xl font-bold tracking-tight">
                {brandName}
              </h3> */}
              <Link className="-m-10" href="/">
                <Image className="-my-20 -ml-5" src={bandlogo.logo} width={180} height={160} alt="logo" />
              </Link>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">
                Dubai's trusted mobile car repair specialists providing fast,
                reliable roadside assistance and battery replacement services
                across the UAE — available 24/7.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <Badge icon={Clock} text="24/7 Service" />
              <Badge icon={Shield} text="Certified Experts" />
              <Badge icon={CheckCircle} text="Google Verified" />
            </div>

            {/* Google Rating Card */}
            <Link
              href={gbp.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-white/5 hover:bg-amber-400/15 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-400 rounded-full">
                  <Star className="h-4 w-4 text-[#007A55]" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-white/70">Google Rating</p>
                  <p className="font-bold text-amber-400">
                    {gbp.rating} ⭐ ({gbp.reviews})
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-white/40 group-hover:text-amber-400" />
              </div>
            </Link>

            {/* Contact Cards */}
            <div className="space-y-3">

              <ContactCard
                href={numberCallLink}
                icon={Phone}
                title={displayNumber}
                subtitle="24/7 Emergency Support"
              />

              {/* <ContactCard
                href={`mailto:${email}`}
                icon={Mail}
                title={email}
              /> */}

              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2 bg-amber-400 rounded-full">
                  <MapPin className="h-4 w-4 text-[#007A55]" />
                </div>
                <div>
                  <p className="text-sm font-medium">{location}</p>
                  <Link
                    href={gbp.mapLink}
                    target="_blank"
                    className="text-xs text-white/60 hover:text-amber-400 underline inline-flex items-center gap-1"
                  >
                    View on Google Maps <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ========= SERVICES ========= */}
          <FooterLinks
            title="Our Services"
            icon={Wrench}
            items={services}
            type="services"
          />

          {/* ========= AREAS ========= */}
          <FooterLinks
            title="Service Areas"
            icon={MapPin}
            items={serviceAreas}
            type="areas"
          />

          {/* ========= COMPANY ========= */}
          <div className="space-y-6">
            <FooterLinks
              title="Company"
              icon={Award}
              items={footerhrefs}
              type="company"
            />

            {/* Social */}
            <div>
              <p className="font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks?.map(({ name, icon: Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className="p-3 bg-white/10 rounded-xl hover:bg-amber-400 hover:scale-110 transition-all duration-300 group border border-white/10"
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
              className="block p-4 bg-[#25D366]/20 border border-[#25D366]/40 rounded-xl hover:bg-[#25D366]/30 transition-all"
            >
              <p className="font-semibold text-sm">Chat on WhatsApp</p>
              <p className="text-xs text-white/70">
                Average reply within 5 minutes
              </p>
            </Link>
          </div>
        </div>

        {/* ================= SEO NAP ================= */}
        <div className="sr-only">
          <span>Business Name: {gbp.name}</span>
          <span>Brand: {gbp.brand}</span>
          <span>Address: {gbp.address}</span>
          <span>Phone: {gbp.phone}</span>
          <span>Website: {gbp.website}</span>
          <span>Google Maps CID: {gbp.cid}</span>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/60">
            © {new Date().getFullYear()} 24 Car Repair Dubai - {gbp.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-amber-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Badge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-xs">
      <Icon className="h-3 w-3 text-amber-400" />
      <span>{text}</span>
    </div>
  );
}

function ContactCard({ href, icon: Icon, title, subtitle }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-amber-400 hover:text-[#007A55] transition-all border border-white/10 group"
    >
      <div className="p-2 bg-amber-400 rounded-full group-hover:bg-white">
        <Icon className="h-4 w-4 text-[#007A55]" />
      </div>
      <div>
        <span className="text-sm font-medium block">{title}</span>
        {subtitle && (
          <span className="text-xs text-white/60 group-hover:text-[#007A55]/70">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
}

function FooterLinks({ title, icon: Icon, items, type }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <Icon className="h-5 w-5 text-amber-400" />
        {title}
      </h3>

      <nav className="grid grid-cols-1 gap-2">
        {items?.map((item, index) => {
          const href =
            type === "services"
              ? item.slug
              : item.href;

          const label =
            type === "services"
              ? item.name
              : item.name || item.title;

          return (
            <Link
              key={index}
              href={href}
              className="text-sm text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group p-1"
            >
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}