import Webflow from "@/server/webflow"
import { getLocale } from "next-intl/server"

const getItem = async (slug: string, locale: "en" | "de") => {
  const w = new Webflow()
  const item = await w.getCMSItemsBySlug("661c4c457401665bb35f2c7f", slug, locale)
  return item
}


import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug
  const locale = await getLocale()

  // fetch data
  const treatment = await getItem(slug, locale as "en" | "de")

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: treatment?.fieldData?.name,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

const RichText = ({ html }: { html: string }) => {
  return <div
    dangerouslySetInnerHTML={{ __html: html }}
  />
}

export default async function TreatmentDetailPage(props: Props) {
  const locale = await getLocale()
  const item = await getItem("osteopathy", locale as "en" | "de") //locale as "en" | "de")

  return <div>
    <h1>{item?.fieldData?.name}</h1>
    <RichText html={item?.fieldData?.["hero---description"]} />
  </div>
}