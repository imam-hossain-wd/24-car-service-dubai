import { BadgeCheck, CalendarCheck, Car, Clock, CreditCard, MapPin, ShieldCheck, Star, Zap } from "lucide-react";

 export const faqs = [
    {
      question: "What are your working hours?",
      answer: "We're open 24/7 to serve all your car repair needs. Our emergency services are available round the clock for urgent repairs and roadside assistance.",
      icon: <Clock className="h-5 w-5" />,
      category: "General"
    },
    {
      question: "How quickly can you repair my car?",
      answer: "Most standard repairs are completed within 4-6 hours. For complex issues, we provide a free diagnosis and time estimate before starting work. Emergency repairs often completed within 2 hours.",
      icon: <Zap className="h-5 w-5" />,
      category: "Services"
    },
    {
      question: "Do you offer warranty on your services?",
      answer: "Yes! All our repairs come with a 12-month warranty covering both parts and labor. Some premium services include extended warranty options up to 24 months.",
      icon: <ShieldCheck className="h-5 w-5" />,
      category: "Warranty"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, Apple Pay, Google Pay, and bank transfers. Corporate accounts and installment plans are also available for major repairs.",
      icon: <CreditCard className="h-5 w-5" />,
      category: "Payment"
    },
    {
      question: "Do you provide loaner cars during repairs?",
      answer: "Yes, we offer complimentary loaner cars for repairs expected to take more than 24 hours (subject to availability). Premium customers get priority access to our luxury loaner fleet.",
      icon: <Car className="h-5 w-5" />,
      category: "Services"
    },
    {
      question: "How often should I service my car?",
      answer: "We recommend basic service every 5,000 km or 6 months, whichever comes first. Modern cars may have different intervals - consult your manual or our experts for personalized maintenance plans.",
      icon: <CalendarCheck className="h-5 w-5" />,
      category: "Maintenance"
    },
    {
      question: "Are your technicians certified?",
      answer: "All our technicians are ASE-certified with minimum 5 years experience. We specialize in European, American, and Japanese vehicles with ongoing training on the latest technologies.",
      icon: <BadgeCheck className="h-5 w-5" />,
      category: "Team"
    },
    {
      question: "What areas do you serve in Dubai?",
      answer: "We cover all areas of Dubai including Downtown, Marina, JBR, JLT, and surrounding communities. Mobile services available for select repairs with 30-minute average response time.",
      icon: <MapPin className="h-5 w-5" />,
      category: "Coverage"
    },
    {
      question: "Do you handle insurance claims?",
      answer: "Yes, we work directly with all major insurance providers and handle the entire claims process for you. We ensure seamless coordination between repair work and insurance approvals.",
      icon: <ShieldCheck className="h-5 w-5" />,
      category: "Insurance"
    },
    {
      question: "What makes your service different?",
      answer: "We combine 24/7 availability, certified technicians, premium parts, and transparent pricing with a customer-first approach. Our mobile units ensure you never have to visit a workshop.",
      icon: <Star className="h-5 w-5" />,
      category: "General"
    },
    {
      question: "Can you service luxury & exotic cars?",
      answer: "Absolutely! We specialize in luxury European brands including Mercedes, BMW, Audi, Porsche, and exotic vehicles. Our technicians receive specialized training for high-end vehicles.",
      icon: <Car className="h-5 w-5" />,
      category: "Services"
    },
    {
      question: "Do you offer emergency roadside assistance?",
      answer: "Yes, our emergency team is available 24/7 for jump starts, tire changes, fuel delivery, and towing. Average response time is under 30 minutes across Dubai.",
      icon: <Zap className="h-5 w-5" />,
      category: "Emergency"
    }
  ]