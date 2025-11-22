
// 'use client'
// import { Clock, Zap, ShieldCheck, CreditCard, Car, CalendarCheck, BadgeCheck, MapPin, ChevronDown, Star, Sparkles } from "lucide-react"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { useState, useMemo } from "react"
// import { cn } from "@/lib/utils"

// export function FAQSection() {
//   const [activeIndex, setActiveIndex] = useState(null)

//   const faqs = [
//     {
//       question: "What are your working hours?",
//       answer: "We're open 24/7 to serve all your car repair needs. Our emergency services are available round the clock for urgent repairs and roadside assistance.",
//       icon: <Clock className="h-5 w-5" />,
//       category: "General"
//     },
//     {
//       question: "How quickly can you repair my car?",
//       answer: "Most standard repairs are completed within 4-6 hours. For complex issues, we provide a free diagnosis and time estimate before starting work. Emergency repairs often completed within 2 hours.",
//       icon: <Zap className="h-5 w-5" />,
//       category: "Services"
//     },
//     {
//       question: "Do you offer warranty on your services?",
//       answer: "Yes! All our repairs come with a 12-month warranty covering both parts and labor. Some premium services include extended warranty options up to 24 months.",
//       icon: <ShieldCheck className="h-5 w-5" />,
//       category: "Warranty"
//     },
//     {
//       question: "What payment methods do you accept?",
//       answer: "We accept cash, all major credit cards, Apple Pay, Google Pay, and bank transfers. Corporate accounts and installment plans are also available for major repairs.",
//       icon: <CreditCard className="h-5 w-5" />,
//       category: "Payment"
//     },
//     {
//       question: "Do you provide loaner cars during repairs?",
//       answer: "Yes, we offer complimentary loaner cars for repairs expected to take more than 24 hours (subject to availability). Premium customers get priority access to our luxury loaner fleet.",
//       icon: <Car className="h-5 w-5" />,
//       category: "Services"
//     },
//     {
//       question: "How often should I service my car?",
//       answer: "We recommend basic service every 5,000 km or 6 months, whichever comes first. Modern cars may have different intervals - consult your manual or our experts for personalized maintenance plans.",
//       icon: <CalendarCheck className="h-5 w-5" />,
//       category: "Maintenance"
//     },
//     {
//       question: "Are your technicians certified?",
//       answer: "All our technicians are ASE-certified with minimum 5 years experience. We specialize in European, American, and Japanese vehicles with ongoing training on the latest technologies.",
//       icon: <BadgeCheck className="h-5 w-5" />,
//       category: "Team"
//     },
//     {
//       question: "What areas do you serve in Dubai?",
//       answer: "We cover all areas of Dubai including Downtown, Marina, JBR, JLT, and surrounding communities. Mobile services available for select repairs with 30-minute average response time.",
//       icon: <MapPin className="h-5 w-5" />,
//       category: "Coverage"
//     },
//     {
//       question: "Do you handle insurance claims?",
//       answer: "Yes, we work directly with all major insurance providers and handle the entire claims process for you. We ensure seamless coordination between repair work and insurance approvals.",
//       icon: <ShieldCheck className="h-5 w-5" />,
//       category: "Insurance"
//     },
//     {
//       question: "What makes your service different?",
//       answer: "We combine 24/7 availability, certified technicians, premium parts, and transparent pricing with a customer-first approach. Our mobile units ensure you never have to visit a workshop.",
//       icon: <Star className="h-5 w-5" />,
//       category: "General"
//     },
//     {
//       question: "Can you service luxury & exotic cars?",
//       answer: "Absolutely! We specialize in luxury European brands including Mercedes, BMW, Audi, Porsche, and exotic vehicles. Our technicians receive specialized training for high-end vehicles.",
//       icon: <Car className="h-5 w-5" />,
//       category: "Services"
//     },
//     {
//       question: "Do you offer emergency roadside assistance?",
//       answer: "Yes, our emergency team is available 24/7 for jump starts, tire changes, fuel delivery, and towing. Average response time is under 30 minutes across Dubai.",
//       icon: <Zap className="h-5 w-5" />,
//       category: "Emergency"
//     }
//   ]

//   const categories = [...new Set(faqs.map(faq => faq.category))]
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   const filteredFaqs = useMemo(() => {
//     return selectedCategory === "All"
//       ? faqs
//       : faqs.filter(faq => faq.category === selectedCategory)
//   }, [selectedCategory])

//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative py-16 md:py-20 container mx-auto px-4">
//         {/* Header Section - Reduced Margin */}
//         <div className="text-center mb-12 max-w-4xl mx-auto">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
//             <Sparkles className="h-4 w-4 text-primary" />
//             <span className="text-sm font-medium text-primary">Quick Answers</span>
//           </div>

//           <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
//             <span className="bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
//               Frequently Asked{" "}
//             </span>
//             <span className="text-primary">Questions</span>
//           </h2>

//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Everything you need to know about our premium mobile car repair services in Dubai
//           </p>
//         </div>

//         {/* Category Filter Only - Reduced Margin */}
//         <div className="max-w-2xl mx-auto mb-8">
//           <div className="flex flex-wrap gap-2 justify-center">
//             <button
//               onClick={() => setSelectedCategory("All")}
//               className={cn(
//                 "px-3 py-2 rounded-lg text-sm font-medium transition-all border",
//                 selectedCategory === "All"
//                   ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
//                   : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary/50"
//               )}
//             >
//               All Questions
//             </button>
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={cn(
//                   "px-3 py-2 rounded-lg text-sm font-medium transition-all border",
//                   selectedCategory === category
//                     ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
//                     : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary/50"
//                 )}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Two Column FAQ Grid - Reduced Gap */}
//         <div className="max-w-6xl mx-auto">
//           {filteredFaqs.length > 0 ? (
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
//               {filteredFaqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={cn(
//                     "group relative overflow-hidden rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg",
//                     activeIndex === `item-${index}`
//                       ? "border-primary shadow-md shadow-primary/10"
//                       : "border-gray-200 dark:border-gray-700 "
//                   )}
//                 >
//                   <Accordion type="single" collapsible className="w-full">
//                     {filteredFaqs.map((faq, index) => (
//                       <div
//                         key={index}
//                         className="group relative overflow-hidden rounded-xl border bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg border-gray-200 dark:border-gray-700 hover:border-primary/50 data-[state=open]:border-primary data-[state=open]:shadow-md data-[state=open]:shadow-primary/10"
//                       >
//                         <AccordionItem value={`item-${index}`} className="border-0">
//                           <AccordionTrigger className="flex w-full items-center justify-between p-4 text-left hover:no-underline [&[data-state=open]>svg:rotate-180">
//                             <div className="flex items-center gap-3 flex-1">
//                               <div className="p-2 rounded-lg bg-primary/10 text-primary transition-all duration-300 flex-shrink-0 data-[state=open]:bg-primary data-[state=open]:text-white">
//                                 {faq.icon}
//                               </div>
//                               <div className="flex-1 text-left">
//                                 <h3 className="text-base font-semibold text-gray-900 dark:text-white pr-4">
//                                   {faq.question}
//                                 </h3>
//                                 <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full mt-1">
//                                   {faq.category}
//                                 </span>
//                               </div>
//                             </div>
//                           </AccordionTrigger>
//                           <AccordionContent className="px-4 pb-4 pt-2 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
//                             {faq.answer}
//                           </AccordionContent>
//                         </AccordionItem>
//                       </div>
//                     ))}
//                   </Accordion>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <div className="text-gray-400 mx-auto mb-3">
//                 <Clock className="h-8 w-8 inline" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
//               <p className="text-gray-600 dark:text-gray-300">Try selecting a different category</p>
//             </div>
//           )}
//         </div>

//       </div>
//     </section>
//   )
// }


'use client'
import { Clock, Zap, ShieldCheck, CreditCard, Car, CalendarCheck, BadgeCheck, MapPin, ChevronDown, Star, Sparkles } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const faqs = [
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

  const categories = [...new Set(faqs.map(faq => faq.category))]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFaqs = useMemo(() => {
    return selectedCategory === "All"
      ? faqs
      : faqs.filter(faq => faq.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-16 md:py-20 container mx-auto px-4">
        {/* Header Section - Reduced Margin */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Quick Answers</span>
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              Frequently Asked{" "}
            </span>
            <span className="text-primary">Questions</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our premium mobile car repair services in Dubai
          </p>
        </div>

        {/* Category Filter Only - Reduced Margin */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-all border",
                selectedCategory === "All"
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary/50"
              )}
            >
              All Questions
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all border",
                  selectedCategory === category
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column FAQ Grid - Fixed: Single Accordion wrapping all items */}
        <div className="max-w-6xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="">
              <Accordion className="grid grid-cols-2 lg:grid-cols-2 gap-2 mb-12 w-full" type="single" collapsible >
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl border bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg border-gray-200 dark:border-gray-700 hover:border-primary/50 data-[state=open]:border-primary data-[state=open]:shadow-md data-[state=open]:shadow-primary/10 last:mb-0"
                  >
                    <AccordionItem value={`item-${index}`} className="border-0">
                      <AccordionTrigger className="flex w-full items-center justify-between p-4 text-left hover:no-underline [&[data-state=open]>svg:rotate-180">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary transition-all duration-300 flex-shrink-0 data-[state=open]:bg-primary data-[state=open]:text-white">
                            {faq.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white pr-4">
                              {faq.question}
                            </h3>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full mt-1">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mx-auto mb-3">
                <Clock className="h-8 w-8 inline" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}