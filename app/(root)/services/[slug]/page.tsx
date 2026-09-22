// app/services/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/app/_components/pages/services/ServiceDetailPage";
import { getServiceBySlug, services } from "@/data/serviceData";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | PSBA",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,

    alternates: {
      canonical: `/services/${service.slug}`,
    },

    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}