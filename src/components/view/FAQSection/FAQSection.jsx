'use client'
import { Clock, Sparkles } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { faqs } from "@/constants/faq"

export function FAQSection() {


  const categories = [...new Set(faqs.map(faq => faq.category))]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFaqs = useMemo(() => {
    return selectedCategory === "All"
      ? faqs
      : faqs.filter(faq => faq.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="relative border bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-8 container mx-auto px-4">
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
              <Accordion className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-12 w-full" type="single" collapsible >
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