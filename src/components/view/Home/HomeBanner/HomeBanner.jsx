// 'use client'

// import React from "react";
// import { CheckCircle2, Clock, Shield, Zap, Star } from "lucide-react";
// import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
// import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
// import { homeicons } from "@/utils/assets";
// import Image from "next/image";

// const highlights = [
//   {
//     icon: CheckCircle2,
//     color: "text-emerald-400",
//     background: "bg-emerald-500/20",
//     text: "No Hidden Fees"
//   },
//   {
//     icon: Clock,
//     color: "text-blue-400",
//     background: "bg-blue-500/20",
//     text: "Fast On-Site Repairs"
//   },
//   {
//     icon: Shield,
//     color: "text-purple-400",
//     background: "bg-purple-500/20",
//     text: "Service Guarantee"
//   }
// ];

// const { appointment, company, house, installation, maintenance, roadside, spare, monitoring } = homeicons;

// const services = [
//   {
//     title: "Emergency Roadside",
//     icon: maintenance,
//     gradient: "from-amber-400 to-orange-500",
//     bgLight: "bg-amber-50",
//     border: "border-amber-200"
//   },
//   {
//     title: "At Your Office",
//     icon: company,
//     gradient: "from-blue-400 to-indigo-500",
//     bgLight: "bg-blue-50",
//     border: "border-blue-200"
//   },
//   {
//     title: "Mobile Service",
//     icon: monitoring,
//     gradient: "from-emerald-400 to-green-500",
//     bgLight: "bg-emerald-50",
//     border: "border-emerald-200"
//   },
//   {
//     title: "Home Breakdown",
//     icon: installation,
//     gradient: "from-purple-400 to-pink-500",
//     bgLight: "bg-purple-50",
//     border: "border-purple-200"
//   },
//   {
//     title: "Engine Crisis",
//     icon: spare,
//     gradient: "from-red-400 to-rose-500",
//     bgLight: "bg-red-50",
//     border: "border-red-200"
//   },
//   {
//     title: "Scheduled Care",
//     icon: appointment,
//     gradient: "from-teal-400 to-cyan-500",
//     bgLight: "bg-teal-50",
//     border: "border-teal-200"
//   }
// ];

// export default function CompactHomeBanner() {
//   return (
//     <div className="relative overflow-hidden h-auto min-h-[50vh] md:min-h-[70vh]">
//       {/* Modern Green Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#007A55] via-[#00943B] to-[#00A86B] z-0" />

//       {/* Subtle Pattern Overlay */}
//       <div className="absolute inset-0 opacity-5 z-0" style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
//         backgroundSize: '40px 40px'
//       }} />

//       {/* Content Container */}
//       <div className="relative z-10 h-full flex items-center py-8 md:py-12">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-col-reverse gap-8 lg:flex-row justify-between items-center">

//             {/* Left Column - Main Content */}
//             <div className="order-2 lg:order-1 w-full lg:w-1/2">
//               {/* Emergency Badge */}
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
//                 <Zap className="h-4 w-4 text-yellow-300" />
//                 <span className="text-sm font-medium text-white">24/7 Emergency Car Service</span>
//               </div>

//               {/* Main Title */}
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
//                   Best Car Repair & Mechanic Servicing
//                 </span> in Dubai
//               </h1>

//               {/* Description */}
//               <p className="text-base md:text-lg text-white/90 max-w-xl mb-6">
//                 Fast, reliable service at your home, office or roadside — we come to you!
//               </p>

// {/* CTA Buttons */}
// {/* <div className="flex flex-col sm:flex-row gap-3 mb-6">
//   <CallNowButton className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" />
//   <WhatsAppButton className="px-6 py-3 text-base font-semibold bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-xl transition-all duration-300" />
// </div> */}

//               {/* Highlights */}
//               <div className="flex gap-2">
//                 {highlights.map((item, index) => (
//                   <div key={index} className="flex flex-col items-center gap-1 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
//                     <span className="text-white text-xs md:text-sm font-medium">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Redesigned Service Items */}
//             <div className="order-1 lg:order-2 w-full lg:w-[45%] -my-2">
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                 {services.map((service, index) => (
//                   <div
//                     key={index}
//                     className="group relative"
//                   >
//                     {/* Card with Subtle Border */}
//                     <div className="relative bg-transparent backdrop-blur-md border border-white/20 rounded-2xl py-2  transition-all duration-500">

//                       {/* Background Glow */}
//                       <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

//                       {/* Icon */}
//                       <div className="relative mb-2 flex justify-center">
//                         <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors duration-300">
//                           <Image
//                             className="w-6 h-6 md:w-10 md:h-10 object-contain filter brightness-0 invert group-hover:filter-none group-hover:brightness-100 transition-all duration-300"
//                             src={service.icon}
//                             width={40}
//                             height={40}
//                             alt={service.title}
//                           />
//                         </div>
//                       </div>

//                       {/* Title */}
//                       <h3 className="text-xs md:text-sm text-white/80 text-center group-hover:text-white transition-colors duration-300">
//                         {service.title}
//                       </h3>

//                       {/* Minimal Hover Dot */}
//                       <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/0 group-hover:bg-white/60 transition-colors duration-300"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
//     </div>
//   );
// }

'use client'

import React from "react";
import { CheckCircle2, Clock, Shield, Zap, Star } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
import { homeicons, images } from "@/utils/assets";
import Image from "next/image";

const highlights = [
  {
    icon: CheckCircle2,
    color: "text-emerald-400",
    background: "bg-emerald-500/20",
    text: "No Hidden Fees"
  },
  {
    icon: Clock,
    color: "text-blue-400",
    background: "bg-blue-500/20",
    text: "Fast On-Site Repairs"
  },
  {
    icon: Shield,
    color: "text-purple-400",
    background: "bg-purple-500/20",
    text: "Service Guarantee"
  }
];

const { appointment, company, house, installation, maintenance, roadside, spare, monitoring } = homeicons;

const services = [
  {
    title: "Emergency Roadside",
    icon: maintenance,
    gradient: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    border: "border-amber-200"
  },
  {
    title: "At Your Office",
    icon: company,
    gradient: "from-blue-400 to-indigo-500",
    bgLight: "bg-blue-50",
    border: "border-blue-200"
  },
  {
    title: "Mobile Service",
    icon: monitoring,
    gradient: "from-emerald-400 to-green-500",
    bgLight: "bg-emerald-50",
    border: "border-emerald-200"
  },
  {
    title: "Home Breakdown",
    icon: installation,
    gradient: "from-purple-400 to-pink-500",
    bgLight: "bg-purple-50",
    border: "border-purple-200"
  },
  {
    title: "Engine Crisis",
    icon: spare,
    gradient: "from-red-400 to-rose-500",
    bgLight: "bg-red-50",
    border: "border-red-200"
  },
  {
    title: "Scheduled Care",
    icon: appointment,
    gradient: "from-teal-400 to-cyan-500",
    bgLight: "bg-teal-50",
    border: "border-teal-200"
  }
];

const homebanner = images.homebannere
// const bannerurl = `absolute inset-0 bg-[url(${homebanner})] bg-cover bg-center bg-no-repeat scale-110`

export default function HomeBanner() {
  return (
    <div className="relative overflow-hidden h-auto min-h-[50vh] md:min-h-[70vh]">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src={homebanner}
            alt="Car Service Background"
            fill
            className="object-cover object-center scale-110"
            priority
          />
        </div>
        {/* Dark Gradient Overlay - Slightly different for home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Subtle Pattern Overlay (optional) */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center py-8 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col-reverse gap-8 lg:flex-row justify-around items-center">

            {/* Left Column - Main Content */}
            <div className="order-2 lg:order-1 w-full lg:w-1/2 -mt-5">
              {/* Emergency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span className="text-xs font-medium text-white">24/7 Emergency Car Service</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                <span className="text-transparent bg-clip-text bg-primary">
                  Best Car Repair & Mechanic Servicing
                </span> in Dubai
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-white/90 max-w-xl mb-4">
                Fast, reliable service at your home, office or roadside we come to you
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <CallNowButton className="px-3 text-base font-semibold bg-primary hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" />
                <WhatsAppButton className="px-6 py-3 text-base font-semibold bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-xl transition-all duration-300" />
              </div>

              {/* Highlights */}
              <div className="flex gap-2">
                {highlights.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-1 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                    <span className="text-white text-xs md:text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Redesigned Service Items */}
            <div className="order-1 lg:order-2 w-full lg:w-[35%] -my-2">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative"
                  >
                    {/* Card with Subtle Border */}
                    <div className="relative bg-transparent backdrop-blur-md border border-white/20 rounded-2xl py-2 transition-all duration-500">

                      {/* Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                      {/* Icon */}
                      <div className="relative mb-2 flex justify-center">
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                          <Image
                            className="w-6 h-6 md:w-10 md:h-10 object-contain filter brightness-0 invert group-hover:filter-none group-hover:brightness-100 transition-all duration-300"
                            src={service.icon}
                            width={40}
                            height={40}
                            alt={service.title}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xs md:text-sm text-white text-center group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Minimal Hover Dot */}
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/0 group-hover:bg-white/60 transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </div>
  );
}