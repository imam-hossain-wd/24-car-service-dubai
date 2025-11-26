// components/ServicesGrid.tsx
'use client'

import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = ({ services }) => {
    
  return (
    <div className="w-[90%] md:w-[80%] lg:container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};