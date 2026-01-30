// components/StructuredData.tsx
export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            // 1. ORGANIZATION SCHEMA (Brand Identity)
            {
                "@type": "Organization",
                "@id": "https://www.24carservicedubai.com/#organization",
                "name": "24 Car Service Dubai",
                "url": "https://www.24carservicedubai.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.24carservicedubai.com/logo.png" // Use your actual logo URL
                },
                "sameAs": [
                    "https://www.facebook.com/profile.php?id=61561559056313",
                    "https://www.youtube.com/@SaifulCarRepairBatteryfixing",
                    "https://www.pinterest.com/24carservice"
                ]
            },
            // 2. WEBSITE SCHEMA (Search & Domain Connection)
            {
                "@type": "WebSite",
                "@id": "https://www.24carservicedubai.com/#website",
                "url": "https://www.24carservicedubai.com/",
                "name": "24 Car Service Dubai",
                "publisher": { "@id": "https://www.24carservicedubai.com/#organization" },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.24carservicedubai.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            // 3. LOCAL BUSINESS SCHEMA (Direct GBP Alignment)
            {
                "@type": "AutoRepair", // Highly specific category
                "@id": "https://www.24carservicedubai.com/#localbusiness",
                "name": "Saiful Car Repair & Battery Fixing Dubai", // Matches GBP Name
                "parentOrganization": { "@id": "https://www.24carservicedubai.com/#organization" },
                "url": "https://www.24carservicedubai.com/",
                "telephone": "+971545695980",
                "priceRange": "$$",
                "image": "https://www.24carservicedubai.com/hero-image.png",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Al Mankhool",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 25.2434555,
                    "longitude": 55.2924542
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday"
                        ],
                        "opens": "00:00",
                        "closes": "00:00"
                    }
                ],
                // "areaServed": [
                //     { "@type": "City", "name": "Dubai" },
                //     { "@type": "Neighborhood", "name": "Al Satwa" },
                //     { "@type": "Neighborhood", "name": "Jumeirah" },
                //     { "@type": "Neighborhood", "name": "Al Bada'a" },
                //     { "@type": "Neighborhood", "name": "Al Jaddaf" },
                //     { "@type": "Neighborhood", "name": "Al Karama" },
                //     { "@type": "Neighborhood", "name": "Oud Metha" },
                //     { "@type": "Neighborhood", "name": "Al Mankhool" },
                //     { "@type": "Neighborhood", "name": "Al Jaffiliya" },
                //     { "@type": "Neighborhood", "name": "Downtown Dubai" }
                // ],
                "areaServed": [
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "AdministrativeArea", "name": "Al Mankhool" },
                    { "@type": "AdministrativeArea", "name": "Al Jafiliya" },
                    { "@type": "AdministrativeArea", "name": "Zaa'beel First" },
                    { "@type": "AdministrativeArea", "name": "Al Rigga" },
                    { "@type": "AdministrativeArea", "name": "Al Satwa" },
                    { "@type": "AdministrativeArea", "name": "Al Raffa" },
                    { "@type": "AdministrativeArea", "name": "Deira" },
                    { "@type": "AdministrativeArea", "name": "Al Hudaiba" },
                    { "@type": "AdministrativeArea", "name": "al hudaiba" },
                    { "@type": "AdministrativeArea", "name": "Jumeirah 1" },
                    { "@type": "AdministrativeArea", "name": "Jumeirah 2" },
                    { "@type": "AdministrativeArea", "name": "Jumeirah 3" },
                    { "@type": "AdministrativeArea", "name": "Dubai Silicon Oasis" },
                    { "@type": "AdministrativeArea", "name": "City Walk" },
                    { "@type": "AdministrativeArea", "name": "Downtown Dubai" },
                    { "@type": "AdministrativeArea", "name": "Dubai Marina" },
                ],
                "hasMap": "https://www.google.com/maps?cid=13525343863552602330", // Replace with your CID
                "sameAs": [
                    "https://www.facebook.com/profile.php?id=61561559056313",
                    "https://www.youtube.com/@SaifulCarRepairBatteryfixing",
                    "https://www.pinterest.com/24carservice"
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}