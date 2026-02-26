// components/schemas/BatteryReplacementSchema.tsx

export default function BatteryReplacementSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.24carservicedubai.com/services/car-battery-replacement-dubai#service",
        "name": "Car Battery Replacement Dubai",
        "description":
          "24/7 mobile car battery replacement in Dubai. Fast on-site battery installation, computerized testing, and premium battery brands with warranty. No towing required.",
        "url": "https://www.24carservicedubai.com/services/car-battery-replacement-dubai",
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "serviceType": "Mobile Car Battery Replacement",
        "provider": {
          "@id": "https://www.24carservicedubai.com/#localbusiness"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceLocation": {
            "@type": "Place",
            "name": "Customer Location in Dubai"
          },
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+971545695980",
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
          }
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.24carservicedubai.com/services/car-battery-replacement-dubai",
          "priceCurrency": "AED",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AED",
            "price": "Contact for price"
          },
          "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Car Battery Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Computerized Battery Test"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "New Battery Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Battery Terminal Inspection"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Charging System Check"
              }
            }
          ]
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://www.24carservicedubai.com/services/car-battery-replacement-dubai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does car battery replacement take in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most mobile battery replacements are completed within 20–30 minutes after our technician arrives at your location."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide mobile battery replacement anywhere in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our technicians provide on-site battery replacement at homes, offices, parking areas, and roadside locations across Dubai."
            }
          },
          {
            "@type": "Question",
            "name": "Which battery brands do you install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We install genuine batteries from trusted brands such as AC Delco, Amaron, Bosch, Exide, and Varta, all with manufacturer warranty."
            }
          },
          {
            "@type": "Question",
            "name": "Is your service available 24/7?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer 24/7 emergency car battery replacement throughout Dubai, including late night and weekend support."
            }
          },
          {
            "@type": "Question",
            "name": "Can you also replace my car key battery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide car key battery replacement using genuine CR2032, CR2025, and other compatible batteries."
            }
          }
        ]
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.24carservicedubai.com/services/car-battery-replacement-dubai#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.24carservicedubai.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.24carservicedubai.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Car Battery Replacement Dubai",
            "item": "https://www.24carservicedubai.com/services/car-battery-replacement-dubai"
          }
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