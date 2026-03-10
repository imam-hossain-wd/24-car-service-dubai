'use client'

import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, MessageSquareText } from 'lucide-react';
import Link from 'next/link';

const MapComponent = () => {
  // Coordinates for 24 Car Service Dubai
  const latitude = 25.2430387;
  const longitude = 55.2964023;
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.818319831845!2d55.29382737437848!3d25.243043529844122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x618e2df114dbe2ed%3A0xbbb3ac95640ff0da!2sSaiful%20Car%20Repair%20%26%20Battery%20Fixing%20Dubai!5e0!3m2!1sen!2sbd!4v1769782114563!5m2!1sen!2sbd";
  const directionUrl= "https://www.google.com/maps/dir/Saiful+Car+Repair+%26+Battery+Fixing+Dubai,+Al+Mankhool+-+Dubai+-+United+Arab+Emirates/@25.2430387,55.2964023,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x618e2df114dbe2ed:0xbbb3ac95640ff0da!2m2!1d55.2964023!2d25.2430387?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Map Section */}
      <div className="relative h-[350px] md:h-[500px] w-[90%] lg:w-full mx-auto rounded-t-2xl overflow-hidden shadow-lg">
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
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl max-w-md">
          <div className="flex items-start justify-center gap-2">
            <div className="bg-red-100 mt-1 p-1 rounded-full">
              <MapPin className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-md font-bold text-gray-900">24 Car Service Dubai</h3>
              <p className="text-gray-600 text-sm">Al Mankhool , Dubai - UAE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Directions Button */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
        <Link
          href={directionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-2 bg-primary hover:bg-green-600 text-white rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg"
        >
          <MapPin className="w-6 h-6 text-red-400" />
          <span className="text-lg font-semibold">Get Directions</span>
          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-3 gap-4 px-6 mb-3 bg-white">
        <Link
          href="tel:+971545695980"
          className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-blue-400 rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-blue-100 rounded-full">
            <Phone className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-sm font-medium">Call Now</span>
        </Link>

        <Link
          href="https://wa.me/971545695980"
          className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-green-400 rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-green-100 rounded-full">
            <MessageSquareText className="w-5 h-5 text-green-500" />
          </div>
          <span className="text-sm font-medium">WhatsApp</span>
        </Link>

        <Link
          href="mailto:24carservicedubai@gmail.com"
          className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-purple-400 rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-purple-100 rounded-full">
            <Mail className="w-5 h-5 text-purple-500" />
          </div>
          <span className="text-sm font-medium">Email Us</span>
        </Link>
      </div>
    </div>
  );
};

export default MapComponent;