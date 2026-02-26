// components/view/ContactHero/ContactHero.tsx

import { MapPin, Clock } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] md:h-[60vh] min-h-[450px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmzcvexar/image/upload/v1752751674/24_car_service_contact_us_y2xjdv.webp')] bg-cover bg-center bg-no-repeat scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="container relative z-10 h-full mx-auto px-4">
        <div className="flex h-full flex-col justify-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Need Fast & Reliable{' '}
            <span className="text-[#007A55]">Car Repair</span> in Dubai?
          </h1>
          <p className="text-md text-white/90 mb-6 leading-relaxed">
            Saiful Car Repair & Battery Fixing Dubai (24 Car Service Dubai) is available 24/7
            to assist you anywhere in the city. Whether you need car battery replacement,
            emergency jump start, AC repair, or onsite mechanical service, our mobile
            technicians are ready to reach your location quickly.
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#007A55] rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-white">Location</span>
              </div>
              <p className="text-white/80 text-sm">Al Mankhool, Dubai, United Arab Emirates</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#007A55] rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-white">Working Hours</span>
              </div>
              <p className="text-white/80 text-sm">Open 24 Hours — Saturday to Friday</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}