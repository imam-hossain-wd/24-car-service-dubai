import Image from "next/image";
import {
  BadgeCheck, Zap, Clock, DollarSign,
  Shield, ChevronRight,
  Star, Award, Users, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/utils/assets";

export function TrustedService() {
  return (
    <section className="relative py-6 overflow-hidden bg-neutral-50">
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Static Gradient Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-[800px] h-[800px] -top-96 -left-96 bg-gradient-to-r from-primary/20 to-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-gradient-to-l from-blue-500/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Geometric Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px),
              linear-gradient(180deg, #000 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            backgroundPosition: 'center center'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Ultra-Minimal Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            <span className="">Why Dubai</span><br />
            <span className="font-medium bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Chooses Excellence
            </span>
          </h1>

          <p className="text-sm px-5 md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            15 years of perfecting luxury automotive care with uncompromising standards and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Premium Visual Card */}
          <div className="relative group ">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src={images.whychoosedubai}
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover opacity-95"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating Trust Badges */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Award className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Certified Excellence</span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div className="space-y-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-xl backdrop-blur-sm">
                        <BadgeCheck className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-lg font-semibold">Dubai's Most Trusted</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                      Premium Automotive<br />Care Perfected
                    </h3>
                  </div>

                  {/* Compact Stats */}
                  <div className="text-right space-y-2 -mr-4 md:mr-0">
                    {["10K+ Repaired", "4.9 ★ Rating", "98% Client Retention"].map((stat, i) => (
                      <div key={i} className="text-xs text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl"></div>
          </div>

          {/* Premium Features Grid */}
          <div className="space-y-5">
            {/* Enhanced Stats Bar */}
            <div className="grid grid-cols-3 gap-2 md:gap-6">
              {[
                { value: "15+", label: "Years Excellence", icon: Award, color: "text-primary" },
                { value: "10K+", label: "Clients Served", icon: Users, color: "text-blue-500" },
                { value: "24/7", label: "Always Available", icon: Clock, color: "text-emerald-500" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative p-2 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/30 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className={`p-2 rounded-xl ${stat.color}/50 inline-flex  group-hover:scale-110 transition-transform`}>
                      <stat.icon className={`h-7 w-7 ${stat.color}`} />
                    </div>
                    <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium mb-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {[
                {
                  icon: BadgeCheck,
                  title: "Certified Master Technicians",
                  description: "ASE-certified experts with luxury brand specialization",
                  color: "text-green-500",
                  bgColor: "bg-green-500/10"
                },
                {
                  icon: Zap,
                  title: "On-Demand Mobile Service",
                  description: "Premium care delivered to your location in Dubai",
                  color: "text-amber-500",
                  bgColor: "bg-amber-500/10"
                },
                {
                  icon: Shield,
                  title: "Guaranteed Repairs",
                  description: "24-month warranty on all services and parts",
                  color: "text-blue-500",
                  bgColor: "bg-blue-500/10"
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  description: "No hidden costs with upfront competitive pricing",
                  color: "text-emerald-500",
                  bgColor: "bg-emerald-500/10"
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary/40 hover:bg-white/80 transition-all duration-300 cursor-pointer hover:shadow-md h-full min-h-[140px] flex justify-between"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className={`p-3 rounded-xl ${feature.bgColor} group-hover:scale-105 transition-transform mb-3`}>
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <div className="w-full">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA Section */}
            <div className="relative rounded-2xl bg-gradient-to-r from-primary/5 to-emerald-500/5 p-6 border border-primary/10">
              <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-gray-900">Ready for Premium Care?</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Experience Dubai's finest automotive service
                  </p>
                </div>
                <Button className="h-12 px-8 bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group">
                  Book Premium Service
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 ">
              {[
                { icon: CheckCircle, text: "Certified Excellence", color: "text-green-500" },
                { icon: Shield, text: "Guaranteed Quality", color: "text-blue-500" },
                { icon: Users, text: "10K+ Satisfied Clients", color: "text-primary" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row text-center items-center gap-2">
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                  <span className="text-sm font-medium text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}