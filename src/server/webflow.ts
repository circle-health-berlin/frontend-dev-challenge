import { WebflowClient } from "webflow-api";

const localeMap = {
    en: "65cc5e91b8c0d5d11e6cd8e6",
    de: "661a471d1f33d6703152c4ef"
}


const collectionSlugMap = {
    'treatments': '661c4c457401665bb35f2c7f',
}

const itemSlugMap = {
    'osteopathy': '661c4c457401665bb35f2c7f',
}


class Webflow {

    webflow: WebflowClient;

    constructor() {
        const accessToken = process.env.WEBFLOW_SITE_TOKEN;
        if (!accessToken) throw new Error("WEBFLOW_TOKEN is required");
        this.webflow = new WebflowClient({ accessToken });
    }


    async getCMSItem(collectionId: string, itemId: string, locale: "en" | "de") {
        const mappedLocale = localeMap[locale];

        return await this.webflow.collections.items.getItemLive(
            collectionId,
            itemId,
            {
                cmsLocaleId: mappedLocale
            }
        )
    }


    async getCMSItemsBySlug(collectionId: string, slug: string, locale: "en" | "de") {
        const mappedLocale = localeMap[locale];
        const all = await this.webflow.collections.items.listItemsLive(collectionId, {
            cmsLocaleId: mappedLocale,
        })

        if (!all.items) return null;
        const found = all.items.find(item => item.fieldData?.slug === slug);
        return found;
    }


}
export default Webflow