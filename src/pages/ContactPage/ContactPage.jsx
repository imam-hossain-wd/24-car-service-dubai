
// import GetTouch from '@/components/view/GetTouch/GetTouch'
// import MapComponent from '@/components/ui/shared/Map/MapComponent'
// import { WhatsAppButton } from '@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton'
// import { CallNowButton } from '@/components/ui/shared/Buttons/CallNowButton/CallNowButton'
// import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'

// export default function ContactPage() {
//   return (
//     <div>
//       <div className="bg-white">
//         {/* Enhanced Hero Section */}
//         <section className="relative h-[50vh] md:h-[70vh] min-h-[200px] w-full overflow-hidden">
//           {/* Background Image with Parallax Effect */}
//           <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmzcvexar/image/upload/v1752751674/24_car_service_contact_us_y2xjdv.webp')] bg-cover bg-center bg-no-repeat scale-110 animate-zoom-in-out"></div>

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

//           {/* Content */}
//           <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
//             <div className="max-w-4xl space-y-2">
//               <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl animate-fade-in-up">
//                 Contact Our <span className="text-primary">Car Experts</span>
//               </h1>
//               <p className="mt-2 w-[90%] text-xl text-white/90 sm:text-2xl md:max-w-3xl mx-auto animate-fade-in-up delay-100">
//                 24/7 professional support for all your vehicle needs across Dubai
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 mt-4 animate-fade-in-up delay-200">
//                 {/* <Button size="lg" className="bg-primary hover:bg-primary/90">
//                   <Phone className="w-5 h-5 mr-2" /> Call Now
//                 </Button> */}
//                 <CallNowButton />
//                 {/* <Button size="lg" variant="outline" className="text-white border-white text-black hover:bg-white/10">
//                   <Mail className="w-5 h-5 mr-2" /> Email Us
//                 </Button> */}
//                 <WhatsAppButton />
//               </div>
//             </div>
//           </div>

//         </section>


//         <GetTouch />


//         {/* service areas */}
//         <ServiceAreas />
//         {/* service areas */}



//         {/* Map Section */}
//         <section className="py-8 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="mx-auto max-w-4xl text-center mb-12">
//               <h2 className="text-3xl font-bold sm:text-4xl mb-4">
//                 Our <span className="text-primary">Service Center</span> in Dubai
//               </h2>
//               <p className="text-lg text-gray-600">
//                 Visit our state-of-the-art facility in Al Quoz Industrial Area
//               </p>
//             </div>
//             <MapComponent />
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }


// app/contact/page.tsx

import MapComponent from '@/components/ui/shared/Map/MapComponent'
import { WhatsAppButton } from '@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton'
import { CallNowButton } from '@/components/ui/shared/Buttons/CallNowButton/CallNowButton'
import ContactHero from './ContactHero'
import GetTouch from './GetTouch'
import QuickContact from './QuickContact'
import ServiceAreas from './ServiceAreas'


export default function ContactPage() {
  return (
    <div>
      <div className="bg-white">
        {/* New Hero Section with Complete Text */}
        <ContactHero />

        {/* Get in Touch Section */}
        <GetTouch />

        {/* Quick Contact Bar */}
        <QuickContact />

        {/* Service Areas */}
        <ServiceAreas />

        {/* Map Section with Enhanced Info */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#007A55]">OUR LOCATION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Our <span className="text-[#007A55]">Service Center</span> in Al Mankhool
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Proudly serving customers across Dubai including Al Mankhool, Deira, Jumeirah, 
                Dubai Marina, Downtown Dubai, and nearby areas.
              </p>
            </div>
            <MapComponent />
          </div>
        </section>

        {/* Business Information for SEO */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/AutoRepair">
            <span itemProp="name">Saiful Car Repair & Battery Fixing Dubai</span>
            <span itemProp="alternateName">24 Car Service Dubai</span>
            <span itemProp="description">Need fast and reliable car repair in Dubai? We are available 24/7 to assist you anywhere in the city. Whether you need car battery replacement, emergency jump start, AC repair, or onsite mechanical service, our mobile technicians are ready to reach your location quickly.</span>
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Al Mankhool</span>
              <span itemProp="addressLocality">Dubai</span>
              <span itemProp="addressCountry">UAE</span>
            </span>
            <span itemProp="telephone">+971545695980</span>
            <span itemProp="email">24carservicedubai@gmail.com</span>
            <span itemProp="url">https://www.24carservicedubai.com</span>
            <span itemProp="openingHours">Mo-Su 00:00-23:59</span>
          </div>
        </div>
      </div>
    </div>
  )
}
