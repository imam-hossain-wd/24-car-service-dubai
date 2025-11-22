'use client'

import React from "react";
import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
import { BookAppointmentButton } from "@/components/ui/shared/Buttons/BookingAppointmentButton/BookingAppointmentButton";
import { homeicons } from "@/utils/assets";
import Image from "next/image";


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


const { appointment,
  company,
  house,
  installation,
  maintenance,
  roadside,
  spare,
  monitoring } = homeicons;

const services = [
  {
    title: "Emergency Roadside",
    icon: maintenance,
    color: "text-amber-400"
  },
  {
    title: "At Your Office",
    icon: company
  },
  {
    title: "Mobile Service",
    icon: monitoring
  },
  {
    title: "Home Breakdown",
    icon: installation
  },
  {
    title: "Engine Crisis",
    icon: spare

  },
  {
    title: "Scheduled Care",
    icon: appointment

  }
];

export default function CompactHomeBanner() {
  return (
    <div className="relative overflow-hidden h-auto min-h-[70vh]">
      {/* Modern Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-green-700 z-0" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex  items-center py-6">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center">
            {/* Left Column - Main Content */}
            <div className="order-2 lg:order-1 p-2">
              {/* Emergency Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-2 border border-white/20">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span className="text-xs font-medium text-white">24/7 Emergency Car Service</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                  Best Car Repair & Mechanic Servicing
                </span>  in Dubai
              </h1>

              {/* Description */}
              <p className="text-lg text-white/90 mb-4 max-w-xl">
                Fast, reliable service at your home , office or roadside  we come to you!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="flex justify-between gap-2">
                  <CallNowButton className="px-6 py-3 w-[48%]  text-base font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg" />
                  <WhatsAppButton className="px-6 w-[48%] py-3 text-base font-semibold" />
                </div>
                <BookAppointmentButton variant="white" size="lg" className="py-6 px-8" />
              </div>

              {/* Highlights */}
              <div className="flex flex gap-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className={`p-1.5 rounded-full ${item.background}`}>
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <span className="text-white text-xs font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Service Items */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-5 ">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-2 rounded-lg transition-all bg-white/70 "
                  >
                    <div className="group-hover rounded-full bg-emerald-10 ">

                      <Image className="w-14 h-14" src={service.icon} width={70} height={70} alt={service.title} />
                    </div>
                    <span className="font-medium text-center text-xs md:text-[14px]">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}