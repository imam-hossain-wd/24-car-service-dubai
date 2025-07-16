import Image from "next/image";
import { Button } from "@/components/ui/button";
import {  Users, Shield, Award, Clock } from "lucide-react";
import { images } from "@/utils/assets";
import Link from "next/link";


export function WhoWeAre() {
  return (
   <section className="mx-auto py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="px-4 mx-auto max-w-7xl">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Image Section - Made fully responsive */}
      <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
        <div className="absolute -left-4 md:-left-8 -top-4 md:-top-8 z-0 h-full w-full rounded-2xl bg-primary/10"></div>
        <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl shadow-xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
          <Image
            src={images.whoweare}
            alt="24 Car Service Dubai professional team working on cars"
            fill
            className="object-cover"
            quality={90}
            priority={false}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 text-white">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-green-400" />
              <span className="text-lg md:text-xl font-bold">Since 2010</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          <span className="text-primary">Who We Are</span> - Your Trusted Car Care Partner
        </h2>
        <p className="text-lg text-gray-600">
          <span className="text-primary">24 Car Service Dubai</span> is a premier automotive service center with over a decade of 
          experience serving Dubai's drivers. Our team of certified technicians delivers 
          exceptional car care with honesty and expertise.
        </p>

        {/* Key Points */}
        <div className="space-y-4">
          {[
            {
              icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              title: "Expert Team",
              description: "ASE-certified technicians with 10+ years experience"
            },
            {
              icon: <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              title: "Reliable Service",
              description: "12-month warranty on all repairs and services"
            },
            {
              icon: <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              title: "Award Winning",
              description: "Recognized as Dubai's best auto service center 2023"
            },
            {
              icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              title: "Quick Turnaround",
              description: "90% of repairs completed within 24 hours"
            }
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <div className="mt-0.5 md:mt-1 rounded-full bg-primary/10 p-1.5 md:p-2">
                {point.icon}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">{point.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="rounded-xl bg-primary/5 p-4 md:p-6">
          <h3 className="mb-2 text-lg md:text-xl font-semibold">Our Mission</h3>
          <p className="text-sm md:text-base text-gray-700">
            &ldquo;To provide unparalleled 24/7 on-demand car services throughout Dubai with 
            immediate, reliable, and professional assistance that keeps our customers 
            moving safely on the road.&rdquo;
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button className="h-10 md:h-12 px-6 md:px-8 text-base md:text-lg">
            Meet Our Team
          </Button>
          <Button variant="outline" className="h-10 md:h-12 px-6 md:px-8 text-base md:text-lg border-primary text-primary hover:bg-primary/10">
            Our Story
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}