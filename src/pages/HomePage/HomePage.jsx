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
import ServiceAreas from '../ContactPage/ServiceAreas'
import HomeHero from '@/components/view/Hero/HomeHero'
import FaqStructuredData from '@/seo/schemas/FaqStructuredData'





export default function HomePage() {

    return (
        <div>
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
            {/* <ServiceAreas /> */}
            <ServiceAreas />
            <StillHaveAnyQuestions />
        </div>
    )
}
