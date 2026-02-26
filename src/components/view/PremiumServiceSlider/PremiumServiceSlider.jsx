'use client'
import { Home, CalendarCheck, AlertTriangle, Building2, Wrench, Battery, Gauge, Wind } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SiteConfig } from '@/config/site'

export function PremiumServiceSlider() {
    const services = [
        {
            title: "Emergency Roadside",
            icon: <AlertTriangle className="w-5 h-5" />,
            description: "24/7 rescue within 30 min",

        },
        {
            title: "At Your Office",
            icon: <Building2 className="w-5 h-5" />,
            description: "Repair while you work",

        },
        {
            title: "Home Breakdown",
            icon: <Home className="w-5 h-5" />,
            description: "We come to your location",
  
        },
        {
            title: "Engine Crisis",
            icon: <Gauge className="w-5 h-5" />,
            description: "Emergency diagnostics",

        },
        {
            title: "Battery Service",
            icon: <Battery className="w-5 h-5" />,
            description: "Jump start & replacement",

        },
        {
            title: "AC Repair",
            icon: <Wind className="w-5 h-5" />,
            description: "Fast cooling fixes",
        },
        {
            title: "Scheduled Care",
            icon: <CalendarCheck className="w-5 h-5" />,
            description: "Premium maintenance",
        },
        {
            title: "Full Service",
            icon: <Wrench className="w-5 h-5" />,
            description: "Complete car care",

        }
    ]

    return (
        <section className="relative py-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none">
                <div className="absolute top-20 left-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-slate-300 !opacity-50',
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-emerald-500 !opacity-100 !w-6 !rounded-full'
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        480: { slidesPerView: 1.5, spaceBetween: 16 },
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        768: { slidesPerView: 2.5, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 20 },
                        1536: { slidesPerView: 5, spaceBetween: 20 }
                    }}
                    className="!pb-12"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full group">
                                {/* Card */}
                                <div className={`
                  relative h-full
                  bg-white rounded-2xl
                  border border-primary
                  shadow-sm hover:shadow-xl
                
                  overflow-hidden
                `}>
                                    {/* Top gradient bar */}
                                    <div className={`
                    absolute top-0 left-0 right-0 h-1
                    bg-gradient-to-r bg-primary}
                  `} />

                                    {/* Content */}
                                    <div className="p-5 flex flex-col items-center text-center">
                                        {/* Icon with gradient background */}
                                        <div className={`
                      relative mb-2 p-3 
                      bg-primary rounded-xl
                      group-hover:scale-110 
                      transition-transform duration-300
                      shadow-sm
                    `}>
                                            <div className="text-white">
                                                {service.icon}
                                            </div>

                                            {/* Glow effect on hover */}
                                            <div className={`
                        absolute inset-0 rounded-xl
                        bg-gradient-to-r ${service.gradient} 
                        opacity-0 group-hover:opacity-20
                        transition-opacity duration-300
                      `} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base font-bold text-slate-800 mb-1">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                                            {service.description}
                                        </p>


                                        <Button className=" w-full
                      text-xs font-semibold
                      rounded-xl border
                      bg-primary text-white
                      hover:text-white hover:border-transparent
                      transition-all duration-300
                      shadow-sm hover:shadow-md">
                                            <Link
                                                href={SiteConfig.numberCallLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >

                                                Call Now
                                            </Link>
                                        </Button>
                                        {/* </Link> */}
                                    </div>




                                    {/* Decorative pattern */}
                                    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5">
                                        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-slate-400" />
                                        <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-slate-400" />
                                        <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-slate-400" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}




// const services = [
//   {
//     title: "Emergency Roadside",
//     icon: <AlertTriangle className="w-6 h-6" />,
//   },
//   {
//     title: "At Your Office",
//     icon: <Building2 className="w-6 h-6" />,
//   },
//   {
//     title: "Home Breakdown",
//     icon: <Home className="w-6 h-6" />,
//   },
//   {
//     title: "Engine Crisis",
//     icon: <CarFront className="w-6 h-6" />,

//   },
//   {
//     title: "Scheduled Care",
//     icon: <CalendarCheck className="w-6 h-6" />,

//   }
// ]