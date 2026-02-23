

import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import Reviews from '@/components/view/Reviews/Reviews'
import { TrustedService } from '@/components/view/TrustedService/TrustedService'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import React from 'react'
import BlogPage from '../BlogPage/BlogPage'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import { PremiumServiceSlider } from '@/components/view/Card/ServiceScenarios'
import { getLocalBusinessSchema } from '@/schemas/localBusinessSchema'
import { getOrganizationSchema } from '@/schemas/organizationSchema'
import ServicesSection from '@/components/Services'
import GMBReviews from '@/components/view/GmbReviews/GmbReviews'
import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'
import StillHaveAnyQuestions from '@/components/view/StillHaveAnyQuestions/StillHaveAnyQuestions'




export default function HomePage() {

    return (
        <div>
            <HomeBanner />
            {/* <PremiumServiceSlider /> */}
            {/* <ServicesSection /> */}
            <FeaturedServices />
            {/* <GalleryCarousel />
            <VideoSlider /> */}
            <TrustedService />
            <WhoWeAre />
            {/* <GMBReviews /> */}
            <MapComponent />
            <GetTouch />
            <BlogPage />
            <Reviews />
            <FAQSection />
            <ServiceAreas />
            <StillHaveAnyQuestions />
        </div>
    )
}
