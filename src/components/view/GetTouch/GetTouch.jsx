
// import React from 'react'
// import { Mail, MapPin, Phone } from 'lucide-react'
// import { Button } from "@/components/ui/button";
// import { Card , CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// export default function GetTouch() {
//   return (
//     <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
//     <div className="container mx-auto">
//       <div className="grid items-center gap-12 lg:grid-cols-2">
//         <div className='w-[85%] mx-auto'>
//           <h2 className="text-3xl text-center font-bold sm:text-4xl md:text-5xl mb-4">
//             Get In <span className="text-primary ">Touch</span>
//           </h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Have questions about your vehicle? Our team is ready to help 24/7 with expert advice and service.
//           </p>
          
//           <div className="space-y-6">
//             <div className="flex items-start gap-4">
//               <div className="mt-1 rounded-full bg-primary/10 p-3">
//                 <MapPin className="h-6 w-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">Our Location</h3>
//                 <p className="text-gray-600">Al Mankhool , Dubai , UAE</p>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-4">
//               <div className="mt-1 rounded-full bg-primary/10 p-3">
//                 <Mail className="h-6 w-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">Email Us</h3>
//                 <p className="text-gray-600">24carservicedubai@gmail.com</p>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-4">
//               <div className="mt-1 rounded-full bg-primary/10 p-3">
//                 <Phone className="h-6 w-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">Call Us</h3>
//                 <p className="text-gray-600">+971 54 569 5980 (24/7 Support)</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
//           <CardHeader>
//             <CardTitle>Send Us a Message</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form className="space-y-4">
//               <div className="grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Phone</label>
//                   <input 
//                     type="tel" 
//                     className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
//                     placeholder="+971"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input 
//                   type="email" 
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Message</label>
//                 <textarea 
//                   rows={4}
//                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
//                   placeholder="How can we help?"
//                 ></textarea>
//               </div>
//               <Button className="w-full" size="lg">
//                 Send Message
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   </section>
//   )
// }



import React from 'react'
import { Mail, MapPin, Phone, Clock, MessageCircle, Star, Shield, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GetTouch() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                          linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className='space-y-8'>
            {/* Header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">24/7 Support</span>
              </div>
              
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
                <span className="bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Get In{" "}
                </span>
                <span className="text-primary">Touch</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Ready to experience premium car service? Our expert team is available 24/7 to provide immediate assistance and personalized solutions.
              </p>
            </div>
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/40 p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600">Al Mankhool, Dubai, UAE</p>
                    <p className="text-sm text-gray-500 mt-1">Mobile service across all Dubai areas</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/40 p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600">24carservicedubai@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">Typically respond within 1 hour</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/40 p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600">+971 54 569 5980</p>
                    <p className="text-sm text-gray-500 mt-1">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Card */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Send Us a Message
                </CardTitle>
              </div>
              <p className="text-gray-600 text-sm">
                Fill out the form below and we'll get back to you within 30 minutes
              </p>
            </CardHeader>
            <CardContent className="pt-2">
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Service Needed</label>
                  <select className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200">
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="maintenance">Regular Maintenance</option>
                    <option value="diagnostic">Car Diagnostic</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none" 
                    placeholder="Tell us about your car issue or service needs..."
                  ></textarea>
                </div>
                
                <Button 
                  className="w-full h-14 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  size="lg"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Send Message
                </Button>
                
                <p className="text-center text-xs text-gray-500">
                  By submitting, you agree to our privacy policy and terms of service
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Available 24/7 for Emergencies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
