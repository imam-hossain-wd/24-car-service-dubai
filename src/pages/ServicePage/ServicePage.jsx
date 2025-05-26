'use client'

import { ServicesGrid } from "@/components/view/Card/ServicesGrid";
import servicesData from "../../data/services.json";


export default function ServicePage() {
  return (
    <div className="container py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Professional automotive services tailored to your needs
        </p>
      </div>

      <ServicesGrid services={servicesData.services} />
    </div>
  );
}

   