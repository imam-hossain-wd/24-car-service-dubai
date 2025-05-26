

"use client";



import { AppointmentForm } from "@/components/Forms/AppointmentForm";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NotebookPen } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function BookAppointmentButton({
  className = "",
  ...props
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "sm:w-[160px] md:w-[200px] gap-2 bg-green-600 hover:bg-green-700",
            "py-2 text-sm md:py-4 md:text-base lg:py-6 lg:text-lg",
            className
          )}
          {...props}
        >
         <NotebookPen className="h-6 w-6" />
        <span>Book Appointment</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Book Your Service</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-8">
            <AppointmentForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
