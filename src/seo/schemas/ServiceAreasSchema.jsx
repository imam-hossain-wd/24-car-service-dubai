// components/ServiceAreasSchema.tsx

export default function ServiceAreasSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.24carservicedubai.com/area-we-serve#areas",
    "name": "24 Car Service Dubai Service Areas",
    "description":
      "24 Car Service Dubai provides 24/7 mobile car repair, battery replacement, and roadside assistance across all major areas of Dubai including Al Mankhool, Deira, Jumeirah, Dubai Marina, and Downtown Dubai.",
    "url": "https://www.24carservicedubai.com/area-we-serve",
    "numberOfItems": 14,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "provider": {
      "@id": "https://www.24carservicedubai.com/#localbusiness"
    },
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "Al Mankhool",
          "url": "https://www.24carservicedubai.com/area-we-serve/al-mankhool"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Zaa'beel First",
          "url": "https://www.24carservicedubai.com/area-we-serve/zaabeel-first"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Al Raffa",
          "url": "https://www.24carservicedubai.com/area-we-serve/al-raffa"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Al Satwa",
          "url": "https://www.24carservicedubai.com/area-we-serve/al-satwa"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Deira",
          "url": "https://www.24carservicedubai.com/area-we-serve/deira"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Al Hudaiba",
          "url": "https://www.24carservicedubai.com/area-we-serve/al-hudaiba"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Jumeirah 1",
          "url": "https://www.24carservicedubai.com/area-we-serve/jumeirah-1"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Jumeirah 2",
          "url": "https://www.24carservicedubai.com/area-we-serve/jumeirah-2"
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Jumeirah 3",
          "url": "https://www.24carservicedubai.com/area-we-serve/jumeirah-3"
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Dubai Silicon Oasis",
          "url": "https://www.24carservicedubai.com/area-we-serve/dubai-silicon-oasis"
        }
      },
      {
        "@type": "ListItem",
        "position": 11,
        "item": {
          "@type": "Place",
          "name": "City Walk",
          "url": "https://www.24carservicedubai.com/area-we-serve/city-walk"
        }
      },
      {
        "@type": "ListItem",
        "position": 12,
        "item": {
          "@type": "Place",
          "name": "Dubai Marina",
          "url": "https://www.24carservicedubai.com/area-we-serve/dubai-marina"
        }
      },
      {
        "@type": "ListItem",
        "position": 13,
        "item": {
          "@type": "Place",
          "name": "Downtown Dubai",
          "url": "https://www.24carservicedubai.com/area-we-serve/downtown-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 14,
        "item": {
          "@type": "Place",
          "name": "Al Jafiliya",
          "url": "https://www.24carservicedubai.com/area-we-serve/al-jafiliya"
        }
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