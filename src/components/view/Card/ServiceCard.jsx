'use client'

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Wrench,
  Droplet,
  Fan,
  Battery,
  Settings,
  NotebookPen,
  Info,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Calendar,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Enhanced icon mapping with better visual hierarchy
const getServiceIcon = (title, className = "h-6 w-6") => {
  const iconProps = { className: cn(className, "transition-transform duration-300 group-hover:scale-110") };

  if (title.includes("Battery")) return <Battery {...iconProps} className={cn(iconProps.className, "text-amber-500")} />;
  if (title.includes("AC") || title.includes("Air")) return <Fan {...iconProps} className={cn(iconProps.className, "text-sky-500")} />;
  if (title.includes("Oil")) return <Droplet {...iconProps} className={cn(iconProps.className, "text-emerald-500")} />;
  if (title.includes("Brake")) return <Wrench {...iconProps} className={cn(iconProps.className, "text-rose-500")} />;
  if (title.includes("Radiator")) return <Droplet {...iconProps} className={cn(iconProps.className, "text-blue-500")} />;
  if (title.includes("Engine")) return <Settings {...iconProps} className={cn(iconProps.className, "text-violet-500")} />;
  if (title.includes("ABS")) return <Wrench {...iconProps} className={cn(iconProps.className, "text-orange-500")} />;
  if (title.includes("DenamoCraft")) return <Sparkles {...iconProps} className={cn(iconProps.className, "text-primary")} />;
  return <Wrench {...iconProps} className={cn(iconProps.className, "text-primary")} />;
};

// Service badge component for better visual hierarchy
const ServiceBadge = ({ children, className }) => (
  <span className={cn(
    "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm shadow-sm",
    className
  )}>
    {children}
  </span>
);

export const ServiceCard = ({ service, priority = false }) => {
  // Default image if none provided
  const imageUrl = service?.service_image || '/images/default-service.jpg';

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100/80 hover:border-primary/20">

      {/* Premium Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />

      {/* Image Container with Modern Design */}
      <div className="relative h-48 sm:h-52 md:h-56 lg:h-48 xl:h-52 overflow-hidden">
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={service?.title || "Car service"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
        />

        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <ServiceBadge className="bg-primary text-white border-0 shadow-lg">
            <Star className="h-3 w-3 fill-white" />
            Popular
          </ServiceBadge>
          <ServiceBadge className="bg-white/95 text-gray-700 border border-gray-200">
            <Clock className="h-3 w-3 text-primary" />
            24/7 Available
          </ServiceBadge>
        </div>

        {/* Title Section - Modern Card Header */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className="flex items-end gap-3">
            {/* Icon Circle with Glass Effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500" />
              <div className="relative bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-xl border border-white/50 group-hover:scale-110 transition-transform duration-300">
                {getServiceIcon(service?.title, "h-6 w-6 sm:h-7 sm:w-7")}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-md md:text-lg font-bold text-white leading-tight flex-1">
              {service.cardTitle ? service.cardTitle : service.title }
            </h3>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-4">
        {/* Features List with Modern Design */}
        <div className="space-y-1.5 mb-3">
          {service?.features?.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 group/feature">
              <div className="mt-0.5 relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm group-hover/feature:blur-md transition-all" />
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 relative z-10 group-hover/feature:scale-110 transition-transform" />
              </div>
              <span className="text-xs sm:text-sm text-gray-600 group-hover/feature:text-gray-900 transition-colors flex-1 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Price or Additional Info (Optional) */}
        {service?.price && (
          <div className="mb-4 flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-100">
            <span className="text-xs text-gray-500">Starting from</span>
            <span className="text-lg font-bold text-primary">{service.price}</span>
          </div>
        )}

        {/* Action Buttons - Modern Split Design */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 border-gray-200 hover:border-primary bg-white hover:bg-primary/5 text-gray-700 hover:text-primary transition-all duration-300 group/btn h-9"
            asChild
          >
            <Link href={`/services/${service?.slug}`} className="flex items-center justify-center gap-2">
              <Info className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium">Details</span>
            </Link>
          </Button>

          <Button
            className="flex-[1.5] bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-xl transition-all duration-300 group/btn h-9"
            asChild
          >
            <Link href="/book-appointment" className="flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
              <span className="text-xs sm:text-sm font-medium">Book Now</span>
              <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Trust Badge (Optional) */}
        {/* <div className="mt-4 flex items-center gap-3 text-[10px] sm:text-xs text-gray-400 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3 text-primary" />
            <span>Warranty Included</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-primary" />
            <span>Same Day Service</span>
          </div>
        </div> */}
      </div>

      {/* Premium Corner Accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-700" />
      </div>
    </div>
  );
};

// Optional: Grid Container Component for better organization
export const ServiceGrid = ({ children, className }) => {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6",
      className
    )}>
      {children}
    </div>
  );
};

// Optional: Skeleton Loader for better UX
export const ServiceCardSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-5 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="space-y-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-3 bg-gray-200 rounded w-full" />
          ))}
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-gray-200 rounded flex-1" />
          <div className="h-10 bg-gray-200 rounded flex-[1.5]" />
        </div>
      </div>
    </div>
  );
};