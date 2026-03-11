import React from 'react'
import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import Reviews from '@/components/view/Reviews/Reviews'
import { TrustedService } from '@/components/view/TrustedService/TrustedService'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import StillHaveAnyQuestions from '@/components/view/StillHaveAnyQuestions/StillHaveAnyQuestions'
import BlogCarousel from '../BlogPage/BlogCarousel'
// import ServiceAreas from '../ContactPage/ServiceAreas'
import HomeHero from '@/components/view/Hero/HomeHero'
import FaqStructuredData from '@/seo/schemas/FaqStructuredData'
import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb'
import { BookOpen, FileText, Home } from 'lucide-react'
import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'


export default function HomePage() {

    const breadcrumbItems = [
        {
            label: 'Blog',
            href: '/blog',
            icon: <BookOpen className="h-4 w-4 text-emerald-600" />
        },
        {
            label: 'All Articles',
            href: '/articles',
            icon: <FileText className="h-4 w-4 text-emerald-600" />
        },
    ];


    return (
        <div>
        <AppBreadcrumb />
            <FaqStructuredData />
            <HomeHero />
            {/* <PremiumServiceSlider /> */}
            <FeaturedServices />
            <TrustedService />
            <WhoWeAre />
            <MapComponent />
            <GetTouch />
            <BlogCarousel />
            <Reviews />
            <FAQSection />
            <ServiceAreas />
            {/* <ServiceAreas /> */}
            <StillHaveAnyQuestions />
        </div>
    )
}


           