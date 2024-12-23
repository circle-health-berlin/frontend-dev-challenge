import Webflow from "@/server/webflow";
import { getLocale } from "next-intl/server";

const getItem = async (slug: string, locale: "en" | "de") => {
    const w = new Webflow();
    return await w.getCMSItemsBySlug("661c4c457401665bb35f2c7f", slug, locale);
};

export default async function TreatmentDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const locale = (await getLocale()) as "en" | "de";
    const item = await getItem(params.slug, locale);

    if (!item) {
        return <div>404 - Treatment Not Found</div>;
    }

    return (
        <div>
            <h1>{item.fieldData.name}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: item.fieldData["hero---description"],
                }}
            />
        </div>
    );
}
