
import { ServiceCard } from "@/components/view/Card/ServiceCard";
import { services } from "@/data/services";
import ServicesHero from "./ServiceHero";

export default function ServicePage() {
  return (
    <div>
        <ServicesHero />
      <div className="container py-12 mx-auto">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Professional automotive services tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

