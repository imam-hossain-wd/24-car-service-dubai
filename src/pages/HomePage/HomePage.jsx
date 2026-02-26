

import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import Reviews from '@/components/view/Reviews/Reviews'
import { TrustedService } from '@/components/view/TrustedService/TrustedService'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import React from 'react'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'
import StillHaveAnyQuestions from '@/components/view/StillHaveAnyQuestions/StillHaveAnyQuestions'
import BlogCarousel from '../BlogPage/BlogCarousel'
import { PremiumServiceSlider } from '@/components/view/PremiumServiceSlider/PremiumServiceSlider'





export default function HomePage() {

    return (
        <div>
            <HomeBanner />
            <PremiumServiceSlider />
            <FeaturedServices />
            {/* <GalleryCarousel />
            <VideoSlider /> */}
            <TrustedService />
            <WhoWeAre />
            {/* <GMBReviews /> */}
            <MapComponent />
            <GetTouch />
            <BlogCarousel />
            {/* <BlogPage /> */}
            <Reviews />
            <FAQSection />
            <ServiceAreas />
            <StillHaveAnyQuestions />
        </div>
    )
}
