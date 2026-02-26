// Services Page Structured Data

export default function ServicesPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.24carservicedubai.com/services#itemlist",
    "name": "24 Car Service Dubai - Complete Auto Repair Services in Dubai",
    "description":
      "Explore all mobile car repair and maintenance services offered by 24 Car Service Dubai including battery replacement, jump start, AC repair, alternator repair, and emergency roadside assistance across Dubai.",
    "url": "https://www.24carservicedubai.com/services",
    "numberOfItems": 15,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "provider": {
      "@id": "https://www.24carservicedubai.com/#localbusiness"
    },
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Car Battery Replacement Dubai",
          "url": "https://www.24carservicedubai.com/services/car-battery-replacement-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Car Jump Start Service Dubai",
          "url": "https://www.24carservicedubai.com/services/car-jump-start-service-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Car AC Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/car-ac-repair-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Alternator Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/alternator-repair-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Car Starter Motor Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/car-starter-motor-repair-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Car Radiator Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/car-radiator-repair-and-replacement-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Service",
          "name": "Fuel Pump Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/fuel-pump-repair-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Service",
          "name": "Car Brake Pad Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/car-brake-pad-repair-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Service",
          "name": "Engine Oil Change Dubai",
          "url": "https://www.24carservicedubai.com/services/engine-oil-change-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Service",
          "name": "Car Maintenance Dubai",
          "url": "https://www.24carservicedubai.com/services/car-maintenance-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 11,
        "item": {
          "@type": "Service",
          "name": "ABS System Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/abs-system-repair-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 12,
        "item": {
          "@type": "Service",
          "name": "Auto Repair Service Dubai",
          "url": "https://www.24carservicedubai.com/services/auto-repair-service-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 13,
        "item": {
          "@type": "Service",
          "name": "Car Mechanic Service Dubai",
          "url": "https://www.24carservicedubai.com/services/car-mechanic-service-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 14,
        "item": {
          "@type": "Service",
          "name": "Emergency Car Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/emergency-car-repair-dubai"
        }
      },
      {
        "@type": "ListItem",
        "position": 15,
        "item": {
          "@type": "Service",
          "name": "Onsite Car Repair Dubai",
          "url": "https://www.24carservicedubai.com/services/onsite-car-repair-dubai"
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