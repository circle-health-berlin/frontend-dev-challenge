import Webflow from '@/server/webflow';
import { getLocale, getTranslations } from 'next-intl/server';
import { Section } from './ui';
import styles from "./blood-tests.module.css"
import { ListItemWithIcon } from './components';

async function OverviewSection() {

  const locale = await getLocale() as "en" | "de"
  const t = await getTranslations('HomePage');

  return (
    <Section style={{ padding: "80px 0" }}>
      <div className={styles.overviewContainer}>
        <div className="flex flex-row gap-2">
          <div className="max-w-[560px]">
            <div className="flex flex-col gap-2">
              <p className={styles.intro}>
                Wir entscheiden gemeinsam welche spezifischen Blutwerte analysiert werden, je nach individuellen Bedürfnissen und medizinischen Anforderungen.
              </p>
              <ListItemWithIcon icon="test">
                Termin ohne Wartezeit in unserer Praxis
              </ListItemWithIcon>
              <ListItemWithIcon icon="test">
                Ergebnisse innerhalb von 1-2 Wochen
              </ListItemWithIcon>
              <ListItemWithIcon icon="test">
                Optionale Beratung
              </ListItemWithIcon>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            Wähle deinen Bluttest
          </div>
        </div>
      </div>
    </Section>
  )
}

export default async function BloodTestPage() {

  const locale = await getLocale() as "en" | "de"
  const t = await getTranslations('HomePage');
  const w = new Webflow()

  const pageItem = await w.getCMSItem("66213454fe3fa910e0b30733", "6675c0e04f099f8cb3840299", locale)

  return (
    <OverviewSection />

  )
}