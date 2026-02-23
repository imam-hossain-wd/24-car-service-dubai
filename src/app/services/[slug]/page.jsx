
import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'
import { notFound } from 'next/navigation'
import { services } from '@/data/services';


export default async function ServiceDetailPage({ params }) {

  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug)

  console.log(service, 'service detail page--')

  if (!service) {
    return notFound()
  }

  return <ServiceDetailsPage service={service} />
}
