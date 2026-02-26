import { Button } from "@/components/ui/button";
// import { TrustedService } from "@/components/view/TrustedService/TrustedService";
// import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import { CheckCircle, Phone } from "lucide-react";
import Head from "next/head";
import WhoWeAre from "./WhoWeAre";
import WhyUs from "./WhyUs";
import WhyChooseUs from "./WhyChooseUs";
import AboutHero from "@/components/view/Hero/AboutHero";

export default function AboutPage() {
  return (
    <>

    <AboutHero />

      {/* Who We Are Section */}
      {/* <WhoWeAre /> */}
      <WhoWeAre />

      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="my-12 border-t border-gray-200" />
      </div>

      {/* Trusted Service Section */}
      {/* <TrustedService /> */}
      <WhyUs />
      <WhyChooseUs />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Ready to Experience the Best Car Service in Dubai?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            From emergency repairs to routine maintenance, our dedicated team is here to help 24/7.
          </p>
          <a
            href="/book-service"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition"
          >
            Book a Service Now
          </a>
        </div>
      </section>
    </>
  );
}
