// config/site.ts
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export const SiteConfig = {
  authorName: "Md Saiful Islam",
  brandName: "24 Car Service Dubai",
  url: "https://24carservicedubai.com",
  email: "24carservicedubai@gmail.com",
  description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
  displayNumber: "+971 54 569 5980",
  numberCallLink: "tel:+971545695980",
  whatsappCallLink: "https://wa.me/971545695980",
  location: "Al Mankhool , Dubai - UAE",
  coordinate: "25.2256355,55.1905546",
  // Google Business Profile Information
  gbp: {
    name: "Saiful Car Repair & Battery Fixing Dubai",
    brand: "24 Car Service Dubai",
    address: "Al Mankhool, Dubai, United Arab Emirates",
    phone: "+971545695980",
    website: "https://www.24carservicedubai.com",
    cid: "13525343863552602330",
    mapLink: "https://maps.app.goo.gl/XawQTNC8rP9Yy88o8",
    rating: "4.9",
    reviews: "500+",
    verified: true
  },

  serviceAreas: [
    {
      name: "Al Mankhool",
      href: "/area-we-serve/al-mankhool",
      title: "Best Car Repair in Al Mankhool",
      slug: "al-mankhool",
    },
    {
      name: "Zaa'beel First",
      href: "/area-we-serve/zaabeel-first",
      title: "Best Car Repair in Zaa'beel First",
      slug: "zaabeel-first",
    },
    {
      name: "Al Raffa",
      href: "/area-we-serve/al-raffa",
      title: "Best Car Repair in Al Raffa",
      slug: "al-raffa",
    },
    {
      name: "Al Satwa",
      href: "/area-we-serve/al-satwa",
      title: "Best Car Repair in Al Satwa",
      slug: "al-satwa",
    },
    {
      name: "Deira",
      href: "/area-we-serve/deira",
      title: "Best Car Repair in Deira",
      slug: "deira",
    },
    {
      name: "Al Hudaiba",
      href: "/area-we-serve/al-hudaiba",
      title: "Best Car Repair in Al Hudaiba",
      slug: "al-hudaiba",
    },
    {
      name: "Jumeirah 1",
      href: "/area-we-serve/jumeirah-1",
      title: "Best Car Repair in Jumeirah 1",
      slug: "jumeirah-1",
    },
    {
      name: "Jumeirah 2",
      href: "/area-we-serve/jumeirah-2",
      title: "Best Car Repair in Jumeirah 2",
      slug: "jumeirah-2",
    },
    {
      name: "Jumeirah 3",
      href: "/area-we-serve/jumeirah-3",
      title: "Best Car Repair in Jumeirah 3",
      slug: "jumeirah-3",
    },
    {
      name: "Dubai Silicon Oasis",
      href: "/area-we-serve/dubai-silicon-oasis",
      title: "Best Car Repair in Dubai Silicon Oasis",
      slug: "dubai-silicon-oasis",
    },
    {
      name: "City Walk",
      href: "/area-we-serve/city-walk",
      title: "Best Car Repair in City Walk",
      slug: "city-walk",
    },
    {
      name: "Dubai Marina",
      href: "/area-we-serve/dubai-marina",
      title: "Best Car Repair in Dubai Marina",
      slug: "dubai-marina",
    },
    {
      name: "Downtown Dubai",
      href: "/area-we-serve/downtown-dubai",
      title: "Best Car Repair in Downtown Dubai",
      slug: "downtown-dubai",
    },
    {
      name: "Al Jafiliya",
      href: "/area-we-serve/al-jafiliya",
      title: "Best Car Repair in Al Jafiliya",
      slug: "al-jafiliya",
    },
  ],

  operatingHours: [
    { day: "Saturday", hours: "24 Hours" },
    { day: "Sunday", hours: "24 Hours" },
    { day: "Monday", hours: "24 Hours" },
    { day: "Tuesday", hours: "24 Hours" },
    { day: "Wednesday", hours: "24 Hours" },
    { day: "Thursday", hours: "24 Hours" },
    { day: "Friday", hours: "24 Hours" },
  ],

  city: "Dubai",
  country: "UAE",
  services: [
    {
      name: "Car Battery Replacement Dubai",
      slug: "/services/car-battery-replacement-dubai",
    },
    {
      name: "Car Jump Start Service Dubai",
      slug: "/services/Car Jump Start Service Dubai",
    },
    {
      name: "Car AC Repair Dubai",
      slug: "/services/car-ac-repair-dubai",
    },
    {
      name: "Alternator Repair Dubai",
      slug: "/services/alternator-repair-dubai",
    },
    {
      name: "Car Starter Motor Repair Dubai",
      slug: "/services/car-starter-motor-repair-dubai",
    },
    {
      name: "Car Raditor Repair Dubai",
      slug: "/services/car-radiator-repair-and-replacement-dubai",
    },
    {
      name: "Fuel Pump Repair Dubai",
      slug: "/services/fuel-pump-repair-dubaii",
    },
    {
      name: "Car Brake Pad Repair Dubai",
      slug: "/services/car-brake-pad-repair-dubai",
    },
    {
      name: "Engine Oil Change Dubai",
      slug: "/services/engine-oil-change-dubai",
    },
    {
      name: "Car Maintenance",
      slug: "/services/car-maintenance-dubai",
    },
    {
      name: "ABS System Repair Dubai",
      slug: "/services/abs-system-repair-dubai",
    },

    {
      name: "Auto Repair Service Dubai",
      slug: "/services/auto-repair-service-dubai",
    },
    {
      name: "Car Mechanic Service Dubai",
      slug: "/services/car-mechanic-service-dubai",
    },
    {
      name: "Emergency Car Repair Dubai",
      slug: "/services/emergency-car-repair-dubai",
    },
    {
      name: "Onsite Car Repair Dubai",
      slug: "/services/onsite-car-repair-dubai",
    },
    {
      name: "Oil Change Service Dubai",
      slug: "/services/oil-change-service-dubai",
    }
  ],

  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Area We Serve", href: "/area-we-serve" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],

  footerhrefs: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Sitemap", href: "/sitemap.xml" },
  ],

  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/yourpage" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/youraccount" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/youraccount" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@yourchannel" },
  ],

  contactLinks: [
    { name: "Map", icon: MapPin, href: "https://maps.app.goo.gl/XawQTNC8rP9Yy88o8" },
    { name: "Phone", icon: Phone, href: "tel:+971545695980" },
    { name: "Email", icon: Mail, href: "mailto:24carservicedubai@gmail.com" },
  ],
};


// export const SiteConfig = {
//   authorName: "Md Saiful Islam",
//   brandName: "24 Car Service Dubai",
//   url: "https://24carservicedubai.com",
//   email: "24carservicedubai@gmail.com",
//   description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
//   displayNumber: "+971 54 569 5980",
//   numberCallLink: "tel:+971545695980",
//   whatsappCallLink: "https://wa.me/971545695980",
//   location: "Al Mankhool , Dubai - UAE",
//   coordinate: "25.2256355,55.1905546",

// serviceAreas: [
//   {
//     name: "Al Mankhool",
//     href: "/area-we-serve/al-mankhool",
//     title: "Best Car Repair in Al Mankhool",
//     slug: "al-mankhool",
//   },
//   {
//     name: "Zaa'beel First",
//     href: "/area-we-serve/zaabeel-first",
//     title: "Best Car Repair in Zaa'beel First",
//     slug: "zaabeel-first",
//   },
//   {
//     name: "Al Raffa",
//     href: "/area-we-serve/al-raffa",
//     title: "Best Car Repair in Al Raffa",
//     slug: "al-raffa",
//   },
//   {
//     name: "Al Satwa",
//     href: "/area-we-serve/al-satwa",
//     title: "Best Car Repair in Al Satwa",
//     slug: "al-satwa",
//   },
//   {
//     name: "Deira",
//     href: "/area-we-serve/deira",
//     title: "Best Car Repair in Deira",
//     slug: "deira",
//   },
//   {
//     name: "Al Hudaiba",
//     href: "/area-we-serve/al-hudaiba",
//     title: "Best Car Repair in Al Hudaiba",
//     slug: "al-hudaiba",
//   },
//   {
//     name: "Jumeirah 1",
//     href: "/area-we-serve/jumeirah-1",
//     title: "Best Car Repair in Jumeirah 1",
//     slug: "jumeirah-1",
//   },
//   {
//     name: "Jumeirah 2",
//     href: "/area-we-serve/jumeirah-2",
//     title: "Best Car Repair in Jumeirah 2",
//     slug: "jumeirah-2",
//   },
//   {
//     name: "Jumeirah 3",
//     href: "/area-we-serve/jumeirah-3",
//     title: "Best Car Repair in Jumeirah 3",
//     slug: "jumeirah-3",
//   },
//   {
//     name: "Dubai Silicon Oasis",
//     href: "/area-we-serve/dubai-silicon-oasis",
//     title: "Best Car Repair in Dubai Silicon Oasis",
//     slug: "dubai-silicon-oasis",
//   },
//   {
//     name: "City Walk",
//     href: "/area-we-serve/city-walk",
//     title: "Best Car Repair in City Walk",
//     slug: "city-walk",
//   },
//   {
//     name: "Dubai Marina",
//     href: "/area-we-serve/dubai-marina",
//     title: "Best Car Repair in Dubai Marina",
//     slug: "dubai-marina",
//   },
//   {
//     name: "Downtown Dubai",
//     href: "/area-we-serve/downtown-dubai",
//     title: "Best Car Repair in Downtown Dubai",
//     slug: "downtown-dubai",
//   },
//   {
//     name: "Al Jafiliya",
//     href: "/area-we-serve/al-jafiliya",
//     title: "Best Car Repair in Al Jafiliya",
//     slug: "al-jafiliya",
//   },
// ],

//   operatingHours: [
//     { day: "Saturday", hours: "24 Hours" },
//     { day: "Sunday", hours: "24 Hours" },
//     { day: "Monday", hours: "24 Hours" },
//     { day: "Tuesday", hours: "24 Hours" },
//     { day: "Wednesday", hours: "24 Hours" },
//     { day: "Thursday", hours: "24 Hours" },
//     { day: "Friday", hours: "24 Hours" },
//   ],

//   city: "Dubai",
//   country: "UAE",

//   services: [
//     {
//       name: "Car Battery Replacement Dubai",
//       slug: "/services/car-battery-replacement-dubai",
//     },
//     {
//       name: "Car Brake Pad Repair Dubai",
//       slug: "/services/car-brake-pad-repair-dubai",
//     },
//     {
//       name: "Engine Oil Change Dubai",
//       slug: "/services/engine-oil-change-dubai",
//     },
//     {
//       name: "Air Conditioner Repair Dubai",
//       slug: "/services/air-conditioner-repair-dubai",
//     },
//     {
//       name: "Car Radiator Service Dubai",
//       slug: "/services/car-radiator-service-dubai",
//     },
//     {
//       name: "Gearbox Repair & Service Dubai",
//       slug: "/services/gearbox-repair-service-dubai",
//     },
//     {
//       name: "Car Maintenance",
//       slug: "/services/car-maintenance-dubai",
//     },
//   ],

//   navItems: [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "Area We Serve", href: "/area-we-serve" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "Blog", href: "/blog" },
//   ],

//   footerhrefs: [
//     { title: "About Us", href: "/about" },
//     { title: "Contact", href: "/contact" },
//     { title: "Blog", href: "/blog" },
//     { title: "Privacy Policy", href: "/privacy" },
//     { title: "sitemap", href: "/sitemap.xml" },
//   ],

//   socialLinks: [
//     { name: "Facebook", icon: Facebook, href: "/facebook.com" },
//     { name: "Instagram", icon: Instagram, href: "/instagram.com" },
//     { name: "Twitter", icon: Twitter, href: "/twitter.com" },
//     { name: "YouTube", icon: Youtube, href: "/youtube.com" },
//   ],

//   contactLinks: [
//     { name: "Map", icon: MapPin, href: "/facebook.com" },
//     { name: "Phone", icon: Phone, href: "/instagram.com" },
//     { name: "Email", icon: Mail, href: "/twitter.com" },
//   ],
// };


// import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

// export const FootersiteConfig = {
//   name: "24 Car Service Dubai",
//   description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
//   url: "https://24carservicedubai.com",
//   services: [
//     { title: "Car AC Repair", href: "/services/car-ac-repair-dubai" },
//     { title: "Battery Replacement", href: "/services/car-battery-replacement-dubai" },
//     { title: "Engine Diagnostic", href: "/services/car-engine-diagnostic-service-dubai" },
//     { title: "Radiator Repair", href: "/services/car-radiator-repair-and-replacement-dubai" },
//   ],
//   footerLinks: [
//     { title: "About Us", href: "/about" },
//     { title: "Contact", href: "/contact" },
//     { title: "Blog", href: "/blog" },
//     { title: "Privacy Policy", href: "/privacy" },
//   ]
// }


// export const siteConfig = {
//   name: "24CarServiceDubai",
//   description: "Your On-Demand Car Savior Anywhere, Anytime!",
//   url: "https://24carservicedubai.com",
//   links: {
//     twitter: "#",
//     facebook: "#",
//     instagram: "#",
//   },
// }

// export const SiteConfig = {
//   authorName: "Md Saiful Islam",
//   brandName: "24 Car Service Dubai",
//   url: "https://24carservicedubai.com",
//   email: "24carservicedubai@gmail.com",
//   description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
//   displayNumber: "+971 54 569 5980",
//   callLink: "tel:+971545695980",
//   whatsappLink: "https://wa.me/971545695980",
//   location: "Al Mankhool , Dubai - UAE",
//   cordinate: "25.2256355,55.1905546",
//   serviceAreas: ["Al Mankhool", "Zaa'beel First", "Al Raffa", "Al Satwa", "Deira", "Al Hudaiba", " Jumeirah 1", " Jumeirah 2", " Jumeirah 3", " Dubai Silicon Oasis", " City Walk", "Dubai Marina", "Downtown Dubai", "Al Jafiliya"],
//   city: "Dubai",
//   country: "UAE",
//   services: [
//     {
//       title: "Car Battery Replacement Dubai",
//       href: "/services/car-battery-replacement-dubai"
//     },
//     {
//       title: "Car Brake Pad Repair Dubai",
//       href: "/services/car-brake-pad-repair-dubai"
//     },
//     {
//       title: "Engine Oil Change Dubai",
//       href: "engine-oil-change-dubai"
//     },
//     {
//       title: "Air Conditioner Repair Dubai",
//       href: "/services/air-conditioner-repair-dubai"
//     },
//     {
//       title: "Car Radiator Service Dubai",
//       href: "/services/car-radiator-service-dubai"
//     },
//     {
//       title: "Gearbox Repair & Service Dubai",
//       href: "/services/gearbox-repair-service-dubai"
//     },
//     {
//       title: "Car Maintenance",
//       href: "/services/car-maintenance-dubai"
//     }
//   ],


//   navItems: [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "Area We Serve", href: "/area-we-serve" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "Blog", href: "/blog" }
//   ],
//   footerhrefs: [
//     { title: "About Us", href: "/about" },
//     { title: "Contact", href: "/contact" },
//     { title: "Blog", href: "/blog" },
//     { title: "Privacy Policy", href: "/privacy" },
//     { title: "sitemap", href: "/sitemap.xml" },
//   ],

//   socialLinks: [
//     { name: "Facebook", icon: Facebook, href: "/facebook.com" },
//     { name: "Instagram", icon: Instagram, href: "/instagram.com" },
//     { name: "Twitter", icon: Twitter, href: "/twitter.com" },
//     { name: "YouTube", icon: Youtube, href: "/youtube.com" },
//   ],
//   contactLinks: [
//     { name: "Map", icon: MapPin, href: "/facebook.com" },
//     { name: "Phone", icon: Phone, href: "/instagram.com" },
//     { name: "Email", icon: Mail, href: "/twitter.com" },
//   ]

// }


// contactLinks, socialLinks, footerhrefs, navItems, services, serviceAreas, cordinate, location, whatsappNumber, callNumber, displayNumber, description, email, url, brandName, authorName




