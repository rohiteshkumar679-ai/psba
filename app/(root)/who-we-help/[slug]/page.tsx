// app/who-we-help/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AudienceDetailPage from "@/app/_components/pages/who-we-help/AudienceDetailPage";
import {
  audiences,
  getAudienceBySlug,
} from "@/data/audiences";

type AudiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return audiences.map((audience) => ({
    slug: audience.slug,
  }));
}

export async function generateMetadata({
  params,
}: AudiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);

  if (!audience) {
    return {
      title: "Page Not Found | PSBA",
    };
  }

  return {
    title: audience.seoTitle,
    description: audience.seoDescription,

    alternates: {
      canonical: `/who-we-help/${audience.slug}`,
    },

    openGraph: {
      title: audience.seoTitle,
      description: audience.seoDescription,
      url: `/who-we-help/${audience.slug}`,
      type: "website",
    },
  };
}

export default async function AudiencePage({
  params,
}: AudiencePageProps) {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);

  if (!audience) {
    notFound();
  }

  return <AudienceDetailPage audience={audience} />;
}