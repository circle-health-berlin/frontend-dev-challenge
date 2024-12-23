import Webflow from "@/server/webflow";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function HomePage() {
    const locale = (await getLocale()) as "en" | "de";
    const t = await getTranslations("HomePage");
    const w = new Webflow();

    const pageItem = await w.getCMSItem(
        "66213454fe3fa910e0b30733",
        "6675c0e04f099f8cb3840299",
        locale
    );

    return (
        <div>
            <h1>{t("title")}</h1>
            <Link href="/about">{t("about")}</Link>
        </div>
    );
}
