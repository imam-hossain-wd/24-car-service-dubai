import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import ServiceSchema from '@/components/schemas/ServiceSchema'

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug);

  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug)

  if (!service) {
    return notFound()
  }

  return <>
    <ServiceSchema service={service} />
    <ServiceDetailsPage service={service} />
  </>
}
