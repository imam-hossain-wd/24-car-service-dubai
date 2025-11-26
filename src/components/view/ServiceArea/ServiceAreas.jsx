"use client"

import { Button } from '@/components/ui/button'
import { SiteConfig } from '@/config/site';
import { MapPin, Clock, Phone, Navigation, Star, Zap, Shield, CheckCircle } from 'lucide-react'
import { useState } from 'react';

export default function ServiceAreas() {
    const { serviceAreas, city, country } = SiteConfig;
    const [selectedArea, setSelectedArea] = useState(null);

    const operatingHours = [
        { day: 'Saturday', hours: '24 Hours' },
        { day: 'Sunday', hours: '24 Hours' },
        { day: 'Monday', hours: '24 Hours' },
        { day: 'Tuesday', hours: '24 Hours' },
        { day: 'Wednesday', hours: '24 Hours' },
        { day: 'Thursday', hours: '24 Hours' },
        { day: 'Friday', hours: '24 Hours' }
    ];

    const stats = [
        { value: '15min', label: 'Avg. Response Time' },
        { value: '24/7', label: 'Service Available' },
        { value: '100%', label: 'Coverage in Dubai' }
    ];

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl"></div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                                    linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Enhanced Header Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-full border border-primary/20 mb-6">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            24/7 Emergency Service Coverage
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold sm:text-5xl lg:text-5xl mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Serving Every Corner of <span className="text-primary">{city}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Premium mobile car repair services delivered directly to your location across all Dubai neighborhoods
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Enhanced Service Areas Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {serviceAreas.map((area, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedArea(area)}
                                    className={`group relative overflow-hidden p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${selectedArea === area
                                            ? 'border-primary shadow-2xl shadow-primary/20'
                                            : 'border-gray-200/60 hover:border-primary/40 shadow-lg hover:shadow-xl'
                                        }`}
                                >
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-xl transition-all duration-300 ${selectedArea === area
                                                        ? 'bg-primary text-white'
                                                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                                                    }`}>
                                                    <MapPin className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-950 transition-colors">
                                                        {area}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 group-hover:text-gray-600">
                                                        {city}, {country}
                                                    </p>
                                                </div>
                                            </div>
                                            {selectedArea === area && (
                                                <CheckCircle className="w-5 h-5 text-primary animate-pulse" />
                                            )}
                                        </div>

                                        {/* Hover Indicator */}
                                        <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-primary transition-colors">
                                            <Navigation className="w-3 h-3" />
                                            <span>Click to select area</span>
                                        </div>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Operating Hours & Info Card */}
                    <div className="lg:w-96">
                        <div className="sticky top-8 space-y-4">
                            {/* Operating Hours Card */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white shadow-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-1.5 bg-primary/20 rounded-lg">
                                        <Clock className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Operating Hours</h3>
                                </div>

                                <div className="space-y-2">
                                    {operatingHours.map((day, index) => (
                                        <div key={index} className="flex justify-between items-center py-1.5 border-b border-gray-700/50 last:border-b-0">
                                            <span className="text-gray-300 font-medium text-sm">{day.day}</span>
                                            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 text-xs font-medium px-2 py-0.5 rounded-full border border-emerald-500/30">
                                                <Zap className="w-2.5 h-2.5" />
                                                {day.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Emergency Banner */}
                                <div className="mt-4 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-lg p-3 border border-primary/30">
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <Shield className="w-3.5 h-3.5 text-primary" />
                                        <p className="text-xs font-semibold text-white">Emergency Support</p>
                                    </div>
                                    <p className="text-xs text-gray-300 mb-2 leading-tight">
                                        Immediate assistance available 24/7 across all areas
                                    </p>
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white h-8 text-sm">
                                        <Phone className="w-3.5 h-3.5 mr-1.5" />
                                        Emergency Call
                                    </Button>
                                </div>
                            </div>

                            {/* Selected Area Info */}
                            {selectedArea && (
                                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg animate-in fade-in duration-300">
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                        <h4 className="font-semibold text-gray-900 text-sm">Selected Area</h4>
                                    </div>
                                    <p className="text-base font-bold text-primary mb-1.5">{selectedArea}</p>
                                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                        Premium service available with 15-minute average response time
                                    </p>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                        <span>Multiple technicians available</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-full border border-primary/20 mb-6">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            Expanding Daily Across {city}
                        </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Don't See Your Area Listed?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        We're constantly expanding our coverage to serve every neighborhood in Dubai.
                        Contact us to check availability in your specific location.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="px-8 py-4 text-lg bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <MapPin className="w-5 h-5 mr-2" />
                            Check Your Area Coverage
                        </Button>
                        <Button variant="outline" className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                            <Phone className="w-5 h-5 mr-2" />
                            Direct Contact
                        </Button>
                    </div>

                    {/* Trust Badge */}
                    <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-500">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        <span>Trusted by 10,000+ Dubai residents</span>
                    </div>
                </div>
            </div>
        </section>
    )
}