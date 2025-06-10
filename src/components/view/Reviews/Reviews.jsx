// import React from 'react'
// import { Star } from 'lucide-react'
// import { Card ,CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// export default function Reviews() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
//             What Our <span className="text-primary">Clients Say</span>
//           </h2>
//           <div className="flex justify-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
//             ))}
//           </div>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {[ 
//             {
//               name: "Ahmed K.",
//               rating: 5,
//               comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
//               date: "2 days ago"
//             },
//             {
//               name: "Sarah M.",
//               rating: 5,
//               comment: "Honest mechanics who actually care. Didn&apos;t try to upsell unnecessary repairs like other shops.",
//               date: "1 week ago"
//             },
//             {
//               name: "Rajiv P.",
//               rating: 4,
//               comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
//               date: "3 weeks ago"
//             },
//             {
//               name: "Rajiv P.",
//               rating: 4,
//               comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
//               date: "3 weeks ago"
//             },
//             {
//               name: "Rajiv P.",
//               rating: 4,
//               comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
//               date: "3 weeks ago"
//             }
//           ].map((review, i) => (
//             <Card key={i} className="hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm">
//               <CardHeader>
//                 <div className="flex justify-between">
//                   <CardTitle>{review.name}</CardTitle>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, j) => (
//                       <Star 
//                         key={j} 
//                         className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 mb-4">&quot;{review.comment}&quot;</p>
//                 <p className="text-sm text-gray-400">{review.date}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviews = [
  {
    name: "Ahmed K.",
    rating: 5,
    comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
    date: "2 days ago"
  },
  {
    name: "Sarah M.",
    rating: 5,
    comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
    date: "1 week ago"
  },
  {
    name: "Rajiv P.",
    rating: 4,
    comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
    date: "3 weeks ago"
  },
  {
    name: "Fatima L.",
    rating: 5,
    comment: "Fast and transparent service. Explained everything clearly before starting the repair.",
    date: "5 days ago"
  },
  {
    name: "Omar H.",
    rating: 4,
    comment: "Convenient on-site service, but a bit pricey compared to local garages. Still worth it for emergencies.",
    date: "2 weeks ago"
  }
];

export default function Reviews() {
  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-white to-gray-50/50">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <Card className="h-full hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{review.name}</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">&quot;{review.comment}&quot;</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

