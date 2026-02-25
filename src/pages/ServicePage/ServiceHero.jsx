// components/view/ServicesHero/ServicesHero.tsx
import React from "react";
import { Wrench, Clock, Shield, Star } from "lucide-react";


export default function ServicesHero() {
  return (
    <><section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Background Pattern */}
          <div className="absolute inset-0">
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
              </div>
          </div>
    </section>
    </>
  );
}