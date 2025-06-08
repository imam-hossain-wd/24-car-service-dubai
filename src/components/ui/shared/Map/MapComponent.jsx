// import React from 'react';
// import { MapPin, Phone, Clock, Mail, Car, ChevronRight } from 'lucide-react';

// const MapComponent = () => {
//   // Replace with your actual location coordinates
//   const latitude = 25.2048;
//   const longitude = 55.2708;
//   const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
//       {/* Map Container with Floating Overlay */}
//       <div className="relative h-96 w-full">
//         <iframe
//           title="24 Car Service Dubai Location"
//           src={mapUrl}
//           width="100%"
//           height="100%"
//           className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
        
//         {/* Floating Contact Card */}
//         <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
//           <div className="flex items-start gap-3 mb-3">
//             <div className="bg-red-100 p-2 rounded-full">
//               <MapPin className="text-red-500 w-5 h-5" />
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-900">24 Car Service Dubai</h3>
//               <p className="text-sm text-gray-600">Sheikh Zayed Road, Dubai, UAE</p>
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <div className="flex items-center gap-2">
//               <Phone className="text-blue-500 w-4 h-4" />
//               <a href="tel:+971501234567" className="text-sm hover:text-blue-600">+971 50 123 4567</a>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <Clock className="text-amber-500 w-4 h-4" />
//               <span className="text-sm">24/7 Service</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <Mail className="text-purple-500 w-4 h-4" />
//               <a href="mailto:info@24carservicedubai.com" className="text-sm hover:text-purple-600">info@24carservicedubai.com</a>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <Car className="text-green-500 w-4 h-4" />
//               <span className="text-sm">Free Parking Available</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Action Bar */}
//       <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
//         <a
//           href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-between px-5 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-300 group"
//         >
//           <div className="flex items-center gap-3">
//             <MapPin className="w-5 h-5 text-red-400" />
//             <span className="font-medium">Get Directions</span>
//           </div>
//           <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
//         </a>
        
//         {/* Quick Contact Buttons */}
//         <div className="flex gap-3 mt-4">
//           <a 
//             href="tel:+971501234567" 
//             className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-blue-400 rounded-lg transition-colors"
//           >
//             <Phone className="w-4 h-4 text-blue-500" />
//             <span className="text-sm">Call Now</span>
//           </a>
//           <a 
//             href="mailto:info@24carservicedubai.com" 
//             className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-purple-400 rounded-lg transition-colors"
//           >
//             <Mail className="w-4 h-4 text-purple-500" />
//             <span className="text-sm">Email Us</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;


'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Car, ChevronRight, MessageSquareText } from 'lucide-react';

const MapComponent = () => {
  // Coordinates for 24 Car Service Dubai
  const latitude = 25.2430387;
  const longitude = 55.2964023;
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto"
    >
      {/* Map Section */}
      <div className="relative h-[500px] w-full rounded-t-2xl overflow-hidden shadow-lg">
        <iframe
          title="24 Car Service Dubai Location"
          src={mapUrl}
          width="100%"
          height="100%"
          className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        {/* Floating Contact Card */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-md"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <MapPin className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">24 Car Service Dubai</h3>
              <p className="text-gray-600">Al Satwa, Dubai</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500 w-5 h-5" />
              <a href="tel:+971501234567" className="hover:text-blue-600">+971 56 870 3512</a>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="text-amber-500 w-5 h-5" />
              <span>24/7 Service</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="text-purple-500 w-5 h-5" />
              <a href="mailto:info@24carservicedubai.com" className="hover:text-purple-600">24carservicedubai@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-3">
              <Car className="text-green-500 w-5 h-5" />
              <span>Free Parking Available</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Get Directions Button */}
      <motion.div variants={itemVariants} className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-4 bg-primary hover:bg-green-600 text-white rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg"
        >
          <MapPin className="w-6 h-6 text-red-400" />
          <span className="text-lg font-semibold">Get Directions</span>
          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
        </a>
      </motion.div>

      {/* Quick Action Buttons */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-3 gap-4 px-6 py-5 bg-white"
      >
        <motion.a 
          variants={itemVariants}
          href="tel:+971501234567"
          className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-blue-400 rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-blue-100 rounded-full">
            <Phone className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-sm font-medium">Call Now</span>
        </motion.a>
        
        <motion.a 
          variants={itemVariants}
          href="https://wa.me/971501234567"
          className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-green-400 rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-green-100 rounded-full">
            <MessageSquareText className="w-5 h-5 text-green-500" />
          </div>
          <span className="text-sm font-medium">WhatsApp</span>
        </motion.a>
        
        <motion.a 
          variants={itemVariants}
          href="mailto:info@24carservicedubai.com"
          className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-purple-400 rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-purple-100 rounded-full">
            <Mail className="w-5 h-5 text-purple-500" />
          </div>
          <span className="text-sm font-medium">Email Us</span>
        </motion.a>
      </motion.div>

      {/* Pricing CTA */}
      <motion.div 
        variants={itemVariants}
        className="px-6 py-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-b-2xl text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          UNBEATABLE CAR SERVICING PRICES
        </h3>
        <p className="text-gray-600 mb-5">
          Premium service at competitive prices. Get your quote today!
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/get-quote"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-green-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Get a Quote
          <ChevronRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default MapComponent;