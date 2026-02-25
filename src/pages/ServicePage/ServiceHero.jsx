// components/view/ServicesHero/ServicesHero.tsx
import React from "react";
import Link from "next/link";
import { Wrench, Clock, Shield, Star, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesHero() {
  return (
    <><section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Background Pattern */}
          <div className="absolute inset-0">
              {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" />60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      </div><div className="container relative z-10 mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto text-center">

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-3">
                      <Wrench className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm font-medium text-white/90">
                          Professional Car Repair Services in Dubai
                      </span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      Expert{" "}
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                          Car Repair
                      </span>{" "}
                      & Maintenance
                  </h1>

                  {/* Description */}
                  <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                      From emergency roadside assistance to complete diagnostics,
                      our certified technicians deliver quality service 24/7 across Dubai.
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap items-center justify-center gap-6">
                      <div className="flex items-center gap-2 text-white/80">
                          <Clock className="h-5 w-5 text-emerald-400" />
                          <span className="text-sm">24/7 Emergency</span>
                      </div>
                      <div className="w-px h-4 bg-white/20"></div>
                      <div className="flex items-center gap-2 text-white/80">
                          <Shield className="h-5 w-5 text-emerald-400" />
                          <span className="text-sm">Certified Experts</span>
                      </div>
                      <div className="w-px h-4 bg-white/20"></div>
                      <div className="flex items-center gap-2 text-white/80">
                          <Star className="h-5 w-5 text-emerald-400" />
                          <span className="text-sm">4.9/5 Rating</span>
                      </div>
                  </div>

                  {/* CTA Buttons */}
                  {/* <div className="flex flex-wrap items-center justify-center gap-4">
                      <Button
                          size="lg"
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all duration-300 px-8 h-14 text-base"
                      >
                          <Phone className="mr-2 h-5 w-5" />
                          Call for Emergency
                      </Button>

                      <Button
                          size="lg"
                          variant="outline"
                          className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 h-14 text-base"
                      >
                          View All Services
                          <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                  </div> */}
              </div>
          </div>
    </section>
    </>
  );
}