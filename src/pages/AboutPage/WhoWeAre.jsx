// components/who-we-are.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  Battery,
  Wrench,
  Car
} from "lucide-react";

// Import your image
import whoweare from '@/assets/images/auto-repair-img.jpg';

export default function WhoWeAre() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[#007A55] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-[#00943B] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={whoweare}
                alt="Saiful Car Repair & Battery Fixing Dubai team"
                width={600}
                height={700}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#007A55]/90 via-transparent to-transparent"></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#007A55] p-3 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#007A55]">10+ Years</p>
                      <p className="text-sm text-gray-600">of Excellence in Dubai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">4.9/5</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">500+ Google Reviews</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full">
              <Users className="h-4 w-4 text-[#007A55]" />
              <span className="text-sm font-semibold text-[#007A55]">ABOUT US</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Saiful Car Repair &{' '}
              <span className="text-[#007A55]">Battery Fixing Dubai</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#007A55]">24 Car Service Dubai</span> is a trusted mobile car repair and battery service provider based in Al Mankhool, Dubai. We specialize in fast, reliable, and professional roadside assistance and onsite auto repair solutions across Dubai.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {[
                { value: "5000+", label: "Cars Repaired", icon: Car },
                { value: "24/7", label: "Emergency Support", icon: Clock },
                { value: "15+", label: "Expert Technicians", icon: Users },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#007A55]/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-[#007A55]" />
                  </div>
                  <div className="font-bold text-xl text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Experience Description */}
            <p className="text-gray-700">
              With years of hands-on experience, our certified mechanics deliver expert services including car battery replacement, jump start service, AC repair, alternator repair, starter motor repair, engine oil change, and complete car maintenance. Our mission is simple — to get you back on the road quickly without the hassle of towing.
            </p>

            {/* Service Areas Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Al Mankhool", "Al Jafiliya", "Al Raffa", "Al Satwa", 
                "Deira", "Jumeirah", "Dubai Marina", "Downtown Dubai"
              ].map((area, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                  {area}
                </span>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[#007A55] hover:bg-[#00943B] text-white h-12 px-8 text-base font-semibold">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now: +971 54 569 5980
              </Button>
              <Button variant="outline" className="border-[#007A55] text-[#007A55] hover:bg-[#007A55]/10 h-12 px-8 text-base font-semibold">
                <MapPin className="mr-2 h-4 w-4" />
                Al Mankhool, Dubai
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}