// 'use client'

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
// import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
// import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
// import { BookAppointmentButton } from "@/components/ui/shared/Buttons/BookingAppointmentButton/BookingAppointmentButton";

// const highlights = [
//   {
//     icon: CheckCircle2,
//     color: "text-green-400",
//     background: "bg-green-500/20",
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

// {/* <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-full bg-green-500/20">
//                     <CheckCircle2 className="h-5 w-5 text-green-400" />
//                   </div>
//                   <span className="text-white font-medium">No Hidden Fees</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-full bg-blue-500/20">
//                     <Clock className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <span className="text-white font-medium">Fast On-Site Repairs</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-full bg-purple-500/20">
//                     <Shield className="h-5 w-5 text-purple-400" />
//                   </div>
//                   <span className="text-white font-medium">Service Guarantee</span>
//                 </div> */}

// export default function HomeBanner() {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-800 backdrop-blur-sm lg:h-[650px] z-0" />
//       <div className="absolute inset-0 z-0 opacity-20">
//         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] animate-grid-move" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 min-h-[70vh] flex items-center">
//         <div className="container px-4 mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
//             {/* Text Content */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center lg:text-left"
//             >
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="inline-flex mt-5 items-center gap-2 lg:-mt-7 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-5 border border-white/20"
//               >
//                 <Zap className="h-5 w-5 text-yellow-400" />
//                 <span className="text-sm font-medium text-white">24/7 Emergency Services</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//                 className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-white leading-tight mb-6"
//               >
//                 Your Car, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Our Care</span> <br />
//                 Anywhere, Anytime in Dubai
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
//               >
//                 On-demand mobile car repair & service at your doorstep with transparent pricing and premium quality parts.
//               </motion.p>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.6 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12"
//               >
//                 <div className="flex gap-2 justify-center items-center">
//                   <CallNowButton className="px-8 w-[49%] py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-1" />
//                   <CallNowButton className="px-8 w-[49%] py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-1" />
//                 </div>
//                 <BookAppointmentButton className="px-8 py-4 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 shadow-lg shadow-white/20 hover:shadow-white/30 transition-all transform hover:-translate-y-1" />
//               </motion.div>

//               {/* Highlights */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 className="flex flex-wrap justify-center lg:justify-start gap-2"
//               >

//                 {highlights.map((item, index) => (
//                   <div key={index} className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg p-2 mb-2 border border-white/20">
//                     <div className={`p-2 rounded-full ${item.background}`}>
//                       <item.icon className={`h-7 w-7  -mr-2 lg:mr-1 ${item.color}`} />
//                     </div>
//                     <span className="text-white font-medium">{item.text}</span>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Image Content */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative h-[300px] lg:h-[500px] mb-5 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl"
//             >
//               <Image
//                 src="https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg?t=st=1746810342~exp=1746813942~hmac=5bd2a5975287822551c021b566dbf724b8739999523d5d9326727c80f725e280&w=900" // Consider using a local optimized image
//                 alt="Professional car service in Dubai"
//                 fill
//                 className="object-cover"
//                 priority
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.6 }}
//                 className="absolute bottom-6 right-6"
//               >
//                 <WhatsAppButton className="p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-xl" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Floating Elements */}
//       {[{
//         style: { y: [0, -15, 0] },
//         transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//         className: "top-1/4 left-10 w-16 h-16 bg-yellow-400/20"
//       }, {
//         style: { y: [0, 15, 0] },
//         transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
//         className: "bottom-1/4 right-20 w-24 h-24 bg-blue-400/20"
//       }].map((element, index) => (
//         <motion.div
//           key={index}
//           animate={element.style}
//           transition={element.transition}
//           className={`absolute rounded-full blur-xl ${element.className}`}
//         />
//       ))}
//     </div>
//   );
// }


// 'use client'

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
// import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
// import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
// import { BookAppointmentButton } from "@/components/ui/shared/Buttons/BookingAppointmentButton/BookingAppointmentButton";
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { useCallback, useEffect, useState } from 'react';


// const highlights = [
//   {
//     icon: CheckCircle2,
//     color: "text-green-400",
//     background: "bg-green-500/20",
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

// const carouselImages = [
//   {
//     src: "https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg",
//     alt: "Mechanic repairing car engine"
//   },
//   {
//     src: "https://img.freepik.com/free-photo/hands-female-mechanic-using-laptop_1170-1248.jpg?uid=R201545904&ga=GA1.1.1068441636.1746450389&semt=ais_items_boosted&w=740",
//     alt: "Professional mechanic inspecting vehicle"
//   },
//   {
//     src: "https://img.freepik.com/free-photo/auto-mechanic-working-car-engine-technical-car-inspection-service_181624-57041.jpg?uid=R201545904&ga=GA1.1.1068441636.1746450389&semt=ais_items_boosted&w=740",
//     alt: "Professional mechanic inspecting vehicle"
//   },
//   {
//     src: "https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212205.jpg?uid=R201545904&ga=GA1.1.1068441636.1746450389&semt=ais_items_boosted&w=740",
//     alt: "Car technician working in garage"
//   }
// ];

// export default function HomeBanner() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 5000, stopOnInteraction: false })
//   ]);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const scrollTo = useCallback(
//     (index) => emblaApi && emblaApi.scrollTo(index),
//     [emblaApi]
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     return () => emblaApi.off("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <div className="relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-800 backdrop-blur-sm lg:h-[650px] z-0" />
//       <div className="absolute inset-0 z-0 opacity-20">
//         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px] animate-grid-move" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 min-h-[70vh] flex items-center">
//         <div className="container px-4 mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
//             {/* Text Content */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center lg:text-left"
//             >
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="inline-flex mt-5 items-center gap-2 lg:-mt-7 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-5 border border-white/20"
//               >
//                 <Zap className="h-5 w-5 text-yellow-400" />
//                 <span className="text-sm font-medium text-white">24/7 Emergency Services</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//                 className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-white leading-tight mb-6"
//               >
//                 Your Car, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Our Care</span> <br />
//                 Anywhere, Anytime in Dubai
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
//               >
//                 On-demand mobile car repair & service at your doorstep with transparent pricing and premium quality parts.
//               </motion.p>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.6 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12"
//               >
//                 <div className="flex gap-2 justify-center items-center">
//                   <CallNowButton className="px-8 w-[49%] py-4 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-1" />
//                   <WhatsAppButton className="px-8 w-[49%] py-4 text-lg font-semibold bg-gradient-to-r from-green-400 to-green-600 hover:from-yellow-600 hover:to-amber-700 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-1" />
//                 </div>
//                 <BookAppointmentButton className="px-8 py-4 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 shadow-lg shadow-white/20 hover:shadow-white/30 transition-all transform hover:-translate-y-1" />
//               </motion.div>

//               {/* Highlights */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//                 className="flex flex-wrap justify-center lg:justify-start gap-2"
//               >
//                 {highlights.map((item, index) => (
//                   <div key={index} className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg p-2 mb-2 border border-white/20">
//                     <div className={`p-2 rounded-full ${item.background}`}>
//                       <item.icon className={`h-7 w-7 -mr-2 lg:mr-1 ${item.color}`} />
//                     </div>
//                     <span className="text-white font-medium">{item.text}</span>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Image Carousel */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative h-[300px] lg:h-[500px] mb-5 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl"
//             >
//               <div className="embla h-full w-full" ref={emblaRef}>
//                 <div className="embla__container h-full">
//                   {carouselImages.map((img, index) => (
//                     <div 
//                       className={`embla__slide h-full relative ${selectedIndex === index ? 'is-selected' : ''}`} 
//                       key={index}
//                     >
//                       <Image
//                         src={img.src}
//                         alt={img.alt}
//                         fill
//                         className="object-cover h-[80%]"
//                         priority
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Dots indicator */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                 {carouselImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => scrollTo(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-white w-6' : 'bg-white/30'}`}
//                   />
//                 ))}
//               </div>

//               {/* WhatsApp Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.6 }}
//                 className="absolute bottom-6 right-6"
//               >

//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Floating Elements */}
//       {[{
//         style: { y: [0, -15, 0] },
//         transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//         className: "top-1/4 left-10 w-16 h-16 bg-yellow-400/20"
//       }, {
//         style: { y: [0, 15, 0] },
//         transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
//         className: "bottom-1/4 right-20 w-24 h-24 bg-blue-400/20"
//       }].map((element, index) => (
//         <motion.div
//           key={index}
//           animate={element.style}
//           transition={element.transition}
//           className={`absolute rounded-full blur-xl ${element.className}`}
//         />
//       ))}
//     </div>
//   );
// }


'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
// import { BookAppointmentButton } from "@/components/ui/shared/Buttons/BookingAppointmentButton/BookAppointmentButton";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { BookAppointmentButton } from "@/components/ui/shared/Buttons/BookingAppointmentButton/BookingAppointmentButton";

const highlights = [
  {
    icon: CheckCircle2,
    color: "text-green-400",
    background: "bg-green-500/20",
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

const carouselImages = [
  {
    src: "https://img.freepik.com/free-photo/benchman-fixing-engine-car_114579-2807.jpg",
    alt: "Mechanic repairing car engine"
  },
  {
    src: "https://img.freepik.com/free-photo/hands-female-mechanic-using-laptop_1170-1248.jpg",
    alt: "Professional mechanic inspecting vehicle"
  },
  {
    src: "https://img.freepik.com/free-photo/auto-mechanic-working-car-engine-technical-car-inspection-service_181624-57041.jpg",
    alt: "Professional mechanic inspecting vehicle"
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212205.jpg",
    alt: "Car technician working in garage"
  }
];

export default function CompactHomeBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden h-[55vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] ">
      {/* Modern Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-green-700 z-0 " />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Emergency Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-2 border border-white/20"
              >
                <Zap className="h-4 w-4 text-yellow-300" />
                <span className="text-xs font-medium text-white ">24/7 Service</span>
              </motion.div>

              {/* Compact Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-3"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                  Premium Car Care
                </span> in Dubai
              </motion.h1>

              {/* Compact Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-white/90 mb-4 max-w-md mx-auto lg:mx-0"
              >
                Mobile car repair service at your doorstep
              </motion.p>

              {/* Compact CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-start mb-4"
              >
                <div className="flex gap-2 justify-center">
                  <CallNowButton className="px-4 w-[40%] py-2 text-sm font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-md " />
                  <WhatsAppButton className="w-[40%]" />
                </div>
                {/* <BookAppointmentButton className="px-4 w-[80%] mx-auto lg:mx-0 py-2 text-sm font-semibold bg-white text-gray-800 hover:bg-gray-100" /> */}
                <BookAppointmentButton variant="white" size="lg" />
              </motion.div>

              {/* <BookAppointmentButton />
              <BookAppointmentButton size="sm" /> */}








              {/* Compact Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2"
              >
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 text-xs">
                    <div className={`p-1 rounded-full ${item.background}`}>
                      <item.icon className={`h-3 w-3 ${item.color}`} />
                    </div>
                    <span className="text-white">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Carousel - Now visible on all screen sizes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              // Removed 'hidden lg:block' to show on all screen sizes
              className="relative h-full rounded-xl overflow-hidden border border-white/20 shadow-lg"
            >
              <div className="embla h-full w-full" ref={emblaRef}>
                <div className="embla__container h-full">
                  {carouselImages.map((img, index) => (
                    <div
                      className={`embla__slide h-full relative ${selectedIndex === index ? 'is-selected' : ''}`}
                      key={index}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover" // Removed h-[80%] to allow 'fill' to work correctly
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${selectedIndex === index ? 'bg-white w-4' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-teal-300/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-emerald-300/20 rounded-full blur-sm"
      />
    </div>
  );
}