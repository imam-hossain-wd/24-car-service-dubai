// import Link from "next/link";
// import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
// import { SiteConfig } from "@/config/site";
// import { bandlogo } from "@/utils/assets";
// import Logo from "../Logo/Logo";

// export function Footer() {


//   const {
//     brandName,
//     phoneNumber,
//     serviceAreas,
//     services,
//     footerhrefs,
//     socialLinks,
//     email,
//     city
//   } = SiteConfig;

//   return (
//     <footer className="bg-[#00963B] text-white">
//       <div className="container mx-auto px-4 py-12">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

//           {/* Brand Column */}
//           <div className="-mt-5 mb-4">


//             {/* <div className="">
//               <Logo />
//             </div> */}

//             <p className="text-sm text-white/80 ">
//               Dubai's premier mobile car repair service, delivering expert solutions 24/7.
//             </p>

//             {/* Contact Info */}
//             <div className="space-y-3 mt-4">
//               <div className="flex items-start gap-3">
//                 <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
//                 <div>
//                   <Link
//                     href="tel:+971506695990"
//                     className="text-sm font-medium hover:text-amber-400 transition-colors"
//                   >
//                     {phoneNumber}
//                   </Link>
//                   <p className="text-xs text-white/60 mt-1">24/7 Emergency Support</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
//                 <Link
//                   href="mailto:24carrepairdubai@gmail.com"
//                   className="text-sm font-medium hover:text-amber-400 transition-colors"
//                 >
//                   {email}
//                 </Link>
//               </div>

//               <div className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
//                 <p className="text-sm font-medium">Mobile Service Across Dubai</p>
//               </div>
//             </div>
//           </div>

//           {/* Services Column */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold border-b border-white/20 pb-2">Our Services</h3>
//             <nav className="grid grid-cols-1 gap-2">
//               {services.map((service, index) => (
//                 <Link
//                   key={index}
//                   href={service.href}
//                   className="text-sm text-white/80 hover:text-amber-400 transition-colors flex items-start gap-2"
//                 >
//                   <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
//                   {service.title}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Service Areas Column */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold border-b border-white/20 pb-2">Service Areas</h3>
//             <div className="grid grid-cols-1 gap-2">
//               {serviceAreas.map((location, index) => (
//                 <div key={index} className="flex items-start gap-2">
//                   <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
//                   <span className="text-sm text-white/80">{location} , {city}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Company Links Column */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold border-b border-white/20 pb-2">Company</h3>
//             <nav className="space-y-2">
//               {footerhrefs.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-sm text-white/80 hover:text-amber-400 transition-colors flex items-start gap-2"
//                 >
//                   <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
//                   {link.title}
//                 </Link>
//               ))}
//             </nav>

//             {/* Social Links */}
//             <div className="flex gap-3 pt-4">
//               {socialLinks.map(({ name, icon: Icon, href }) => (
//                 <Link
//                   key={name}
//                   href={href}
//                   aria-label={name}
//                   className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:bg-opacity-20 transition-all"
//                 >
//                   <Icon className="h-5 w-5" />
//                 </Link>
//               ))}
//             </div>

//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-white/60">
//             © {new Date().getFullYear()} {brandName}. All rights reserved.
//           </p>
//           <div className="flex gap-4 mt-4 md:mt-0">
//             <Link href="/privacy-policy" className="text-xs text-white/60 hover:text-amber-400 transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="text-xs text-white/60 hover:text-amber-400 transition-colors">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronDown, Clock, Shield, Wrench } from "lucide-react";
import { SiteConfig } from "@/config/site";
import { bandlogo } from "@/utils/assets";
import Logo from "../Logo/Logo";

export function Footer() {
  const {
    brandName,
    phoneNumber,
    serviceAreas,
    services,
    footerhrefs,
    socialLinks,
    email,
    city
  } = SiteConfig;

  return (
    <footer className="bg-gradient-to-b from-[#00963B] to-[#00782F] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Trust Badges Section */}
      

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                24 Car Service Dubai
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Dubai's premier mobile car repair service, delivering expert solutions 24/7 at your doorstep.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-2 bg-amber-400 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-4 w-4 text-[#00963B]" />
                  </div>
                  <div>
                    <Link
                      href="tel:+971506695990"
                      className="text-sm font-medium hover:text-amber-400 transition-colors block"
                    >
                      {phoneNumber}
                    </Link>
                    <p className="text-xs text-white/60 mt-1">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-2 bg-amber-400 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4 text-[#00963B]" />
                  </div>
                  <Link
                    href="mailto:24carrepairdubai@gmail.com"
                    className="text-sm font-medium hover:text-amber-400 transition-colors"
                  >
                    {email}
                  </Link>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-400 rounded-lg">
                    <MapPin className="h-4 w-4 text-[#00963B]" />
                  </div>
                  <p className="text-sm font-medium">Mobile Service Across Dubai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-l-4 border-amber-400 pl-3 bg-white/5 py-2 rounded-r-lg">
              Our Services
            </h3>
            <nav className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 flex items-center gap-1 group p-2 rounded-lg hover:bg-white/5"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-l-4 border-amber-400 pl-3 bg-white/5 py-2 rounded-r-lg">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.map((location, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm text-white/80 group-hover:text-white">
                    {location}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Company & Social Links Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold border-l-4 border-amber-400 pl-3 bg-white/5 py-2 rounded-r-lg">
                Company
              </h3>
              <nav className="space-y-3">
                {footerhrefs.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/80 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 flex items-center gap-3 group p-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className="p-3 bg-white/10 rounded-xl hover:bg-amber-400 hover:scale-110 transition-all duration-300 group border border-white/20"
                  >
                    <Icon className="h-5 w-5 group-hover:text-[#00963B]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-amber-400 transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/60 hover:text-amber-400 transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Payment Methods (Optional) */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-xs text-white/60 mr-2">We Accept:</span>
            <div className="flex gap-1">
              <div className="w-8 h-5 bg-white/20 rounded text-[10px] flex items-center justify-center text-white/60">VISA</div>
              <div className="w-8 h-5 bg-white/20 rounded text-[10px] flex items-center justify-center text-white/60">MC</div>
              <div className="w-8 h-5 bg-white/20 rounded text-[10px] flex items-center justify-center text-white/60">Cash</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}