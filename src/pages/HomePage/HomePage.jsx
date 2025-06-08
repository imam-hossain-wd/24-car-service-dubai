
import Blogs from '@/components/view/Blogs/Blogs'
import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import Reviews from '@/components/view/Reviews/Reviews'
import { TrustedService } from '@/components/view/TrustedService/TrustedService'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import React from 'react'
import BlogPage from '../BlogPage/BlogPage'
import GalleryPage from '../GalleryPage/GalleryPage'
import MapComponent from '@/components/ui/shared/Map/MapComponent'

export default function HomePage() {
    return (
        <>
            <HomeBanner />
            <FeaturedServices />
            <TrustedService />
            <WhoWeAre />
            <Reviews />
            <GalleryPage />
            <BlogPage />
            {/* <Blogs /> */}
            <FAQSection />
            <GetTouch />
            <MapComponent/>
        </>
    )
}
