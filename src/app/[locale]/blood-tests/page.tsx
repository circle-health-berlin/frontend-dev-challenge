import Webflow from "@/server/webflow";
import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "./ui";
import styles from "./blood-tests.module.css";
import { ListItemWithIcon } from "./components";

function OverviewSection({ locale, t }: { locale: "en" | "de"; t: any }) {
    return (
        <Section style={{ padding: "80px 0" }}>
            <div className={styles.overviewContainer}>
                <div className="flex flex-row gap-2">
                    <div className="max-w-[560px]">
                        <div className="flex flex-col gap-2">
                            <p className={styles.intro}>
                                {locale === "de"
                                    ? "Wir entscheiden gemeinsam welche spezifischen Blutwerte analysiert werden, je nach individuellen Bedürfnissen und medizinischen Anforderungen."
                                    : "We decide together which specific blood values are analyzed, depending on individual needs and medical requirements."}
                            </p>
                            <ListItemWithIcon icon="test">
                                {t("noWaitingTime")}
                            </ListItemWithIcon>
                            <ListItemWithIcon icon="test">
                                {t("resultsIn1To2Weeks")}
                            </ListItemWithIcon>
                            <ListItemWithIcon icon="test">
                                {t("optionalConsultation")}
                            </ListItemWithIcon>
                        </div>
                    </div>
                    <div className="flex flex-col pl-3">
                        {t("chooseYourBloodTest")}
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default async function BloodTestPage() {
    const locale = (await getLocale()) as "en" | "de";
    const t = await getTranslations("HomePage");
    const w = new Webflow();

    const pageItem = await w.getCMSItem(
        "66213454fe3fa910e0b30733",
        "6675c0e04f099f8cb3840299",
        locale
    );

    return <OverviewSection locale={locale} t={t} />;
}
