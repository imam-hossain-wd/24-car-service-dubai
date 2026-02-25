
import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'
import { notFound } from 'next/navigation'
import { services } from '@/data/services';



export const metadata = {
  title: "",
  description: "",
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug)

  if (!service) {
    return notFound()
  }

  return <ServiceDetailsPage service={service} />
}
