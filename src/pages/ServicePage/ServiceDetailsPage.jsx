import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  CheckCircle2,
  Wrench,
  Shield,
  Clock,
  MapPin,
  Zap,
  Droplet,
  Settings,
  Fan,
  Phone,
  MessageCircle,
  ArrowRight,
  Calendar
} from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'


function ServiceDetailsPage({ service }) {
  const getServiceIcon = React.useCallback(() => {
    const serviceIcons = {
      Battery: <Zap className="h-6 w-6" />,
      AC: <Fan className="h-6 w-6" />,
      Oil: <Droplet className="h-6 w-6" />,
      Engine: <Settings className="h-6 w-6" />
    }
    const matchedIcon = Object.entries(serviceIcons).find(([key]) =>
      service?.title?.includes(key)
    )

    return matchedIcon?.[1] ?? <Wrench className="h-6 w-6" />
  }, [service?.title])


  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={service?.service_image}
            alt={service?.title || 'Car Service'}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-slate-900/70"></div>
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {service?.title}
            </h1>

            {/* Subheading */}
            <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              {service?.intro?.subheading || `Professional ${service?.title} service in Dubai by certified experts`}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                size="lg"
                className="bg-primary text-white px-8 py-6 text-lg font-semibold shadow-xl shadow-emerald-500/30"
              >
                <Phone className="h-5 w-5 mr-2" />
                {service?.ctaSection?.buttonText || 'Book Now'}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-6 text-lg font-semibold"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-white/80">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm">30 min response</span>
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm">12-month warranty</span>
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm">Mobile service</span>
                </div>
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-6 mt-2  pt-2 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Services Done</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/60">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/60">Availability</div>
              </div>
            </div>
          </div>
        </div>




      </section>

      {/* Service Overview Card */}
      <div className="container px-4 mx-auto -mt-8 relative z-20">
        <Card className="shadow-xl rounded-2xl overflow-hidden border-0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                  {getServiceIcon()}
                </div>
                <h2 className="text-2xl font-bold">{service?.intro?.heading || `Professional ${service?.title} Service`}</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service?.intro?.content}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 p-8 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm">Typically 1-2 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm">12-month warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm">Mobile service available</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm">Same-day booking</span>
                </li>
              </ul>

              <Button className="mt-6 w-full bg-primary text-white" size="lg">
                Book Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Rest of your existing code remains the same */}
      <div className="container px-4 mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-8">
            {/* Why Choose Us */}
            <section>
              <h2 className="text-3xl font-bold mb-8">{service?.whyChooseUs?.heading || `Why Choose Us for ${service?.title}`}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service?.whyChooseUs?.points.map((point, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                        {index % 3 === 0 ? <Wrench className="h-5 w-5" /> :
                          index % 3 === 1 ? <Shield className="h-5 w-5" /> :
                            <CheckCircle2 className="h-5 w-5" />}
                      </div>
                      <p className="font-medium">{point.replace('✅', '').trim()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Timeline */}
            <section>
              <h2 className="text-3xl font-bold mb-8">{service?.ourProcess?.heading || 'Our Service Process'}</h2>
              <div className="relative">
                <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-emerald-500 to-transparent" />

                <div className="space-y-10">
                  {service?.ourProcess?.steps.map((step, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold border-4 border-white">
                        {index + 1}
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{step?.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {service?.faq?.map((item, index) => (
                  <div key={index}>
                    <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                      <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 hover:bg-gray-100">
                        <span className="text-left font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Service Coverage Card */}
            <div className="sticky top-6">
              <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    {service?.serviceCoverage?.heading || 'Service Coverage'}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {service?.serviceCoverage?.note || 'We serve all major areas in Dubai'}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service?.serviceCoverage?.locations?.map((location, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-sm">
                          {location.replace('📍', '').trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Floating CTA Card */}
              <div className="mt-6">
                <Card className="bg-emerald-50 border-2 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text- text-xl">
                      Ready to Book?
                    </CardTitle>
                    <p className="">
                      Get your {service?.title?.toLowerCase()} service today with 24/7 availability
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button
                      // variant="secondary"
                      size="lg"
                      className="w-full font-bold bg-primary text-white"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      // variant="outline"
                      size="lg"
                      className="w-full font-bold "
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailsPage;