// app/booking/page.tsx
import { CalendarIcon, Clock, Car, User, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { SiteConfig } from "@/config/site";
import BookingForm from "./BookingForm";


export const metadata = {
    title: `Book a Service | ${SiteConfig.brandName}`,
    description: `Schedule your car repair or maintenance service with ${SiteConfig.brandName}. Professional, reliable, and available 24/7 in Dubai.`,
};

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-[#007A55] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Book Your Car Service
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8">
                            24/7 Professional Car Repair & Maintenance in Dubai
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">{SiteConfig.displayNumber}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{SiteConfig.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Service Highlights */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: "🕒", label: "24/7 Service", desc: "Always available" },
                            { icon: "🚗", label: "Mobile Service", desc: "We come to you" },
                            { icon: "✓", label: "Certified", desc: "Expert mechanics" },
                            { icon: "⚡", label: "Quick Response", desc: "Within 30 mins" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#007A55]/20 hover:shadow-md transition-all duration-300"
                            >
                                <div className="text-3xl mb-2 text-[#007A55]">{item.icon}</div>
                                <h3 className="font-semibold text-gray-900">{item.label}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Main Booking Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid md:grid-cols-3">
                            {/* Sidebar Info */}
                            <div className="bg-gradient-to-br from-[#007A55] to-[#00943B] p-6 text-white">
                                <h3 className="text-xl font-bold mb-4">Why Book With Us?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-white/20 rounded-full p-1 mt-0.5">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm">Free vehicle inspection</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-white/20 rounded-full p-1 mt-0.5">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm">Genuine parts warranty</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-white/20 rounded-full p-1 mt-0.5">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm">Transparent pricing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-white/20 rounded-full p-1 mt-0.5">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm">24/7 roadside assistance</span>
                                    </li>
                                </ul>

                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <p className="text-sm opacity-90 mb-2">Operating Hours:</p>
                                    <p className="text-sm font-semibold">24 Hours - 7 Days a Week</p>
                                </div>

                                <div className="mt-6">
                                    <p className="text-sm opacity-90 mb-2">Quick Contact:</p>
                                    <a
                                        href={SiteConfig.whatsappCallLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        </svg>
                                        WhatsApp Us
                                    </a>
                                </div>
                            </div>

                            {/* Form Area */}
                            <div className="md:col-span-2 p-6 md:p-8">
                                <BookingForm />
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-12 text-center">
                        <p className="text-sm text-gray-600 mb-4">Trusted by car owners across Dubai</p>
                        <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
                            <span className="text-lg font-semibold text-gray-400">✓ 100% Satisfaction</span>
                            <span className="text-lg font-semibold text-gray-400">✓ 5000+ Services</span>
                            <span className="text-lg font-semibold text-gray-400">✓ 5 Star Rating</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}