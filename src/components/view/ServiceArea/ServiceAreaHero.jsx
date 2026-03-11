// pages/ServiceArea/sections/ServiceAreaHero.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Star, Shield, Clock, Award, ChevronRight, MapPin } from 'lucide-react';
import { images } from '@/utils/assets';



export default function ServiceAreaHero({ area }) {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.service}
          alt={area.hero.heading}
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <MapPin className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-white">{area.name}, Dubai</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {area.hero.heading}
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {area.hero.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="tel:+971XXXXXXXXX"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/30"
            >
              <Phone className="h-5 w-5" />
              Call Mobile Mechanic
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-green-600/30"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Link>
          </div>

          {/* Ratings & Trust Badges */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium">4.9</span>
              <span className="text-white/60">(2.5k+ reviews)</span>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-white/80">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">Licensed</span>
              </div>
              <div className="flex items-center gap-1 text-white/80">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center gap-1 text-white/80">
                <Award className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">5 Yr Warranty</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-white/60">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">10k+</div>
              <div className="text-sm text-white/60">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">30min</div>
              <div className="text-sm text-white/60">Avg Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}