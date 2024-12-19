import Image from "next/image"
import styles from "./footer.module.css"
import { getTranslations } from "next-intl/server"
import Link, { LinkProps } from "next/link"

interface FooterContactLinkProps extends LinkProps {
    children: React.ReactNode
    icon: string
}

const FooterContactLink = ({ children, ...props }: FooterContactLinkProps) => {
    return <Link {...props} className={styles.contactLink}>
        <Image src={props.icon} alt="" width={24} height={24} />
        {children}
    </Link>
}

const CompanyInfo = async () => {
    const t = await getTranslations("Footer.Company")
    return <div className={styles.column}>
        <Image src="/logo.svg" alt="Circle logo" width={80} height={26} />
        <p className={styles.address}>
            {t("name")}<br />
            {t("address")}<br />
            {t("zip")}, {t("city")}
        </p>
        <div className={styles.contact}>
            <FooterContactLink icon={t("phone.icon")} href={t("phone.href")}>
                {t("phone.label")}
            </FooterContactLink>
            <FooterContactLink icon={t("whatsapp.icon")} href={t("whatsapp.href")}>
                {t("whatsapp.label")}
            </FooterContactLink>
            <FooterContactLink icon={t("email.icon")} href={t("email.href")}>
                {t("email.label")}
            </FooterContactLink>
        </div>
    </div>
}


const OpeningHours = async () => {
    return <div className={styles.column}>
        <h3>Opening hours</h3>
        <p>Monday - Friday: 9:00 - 17:00</p>
        <p>Saturday: 9:00 - 12:00</p>
        <p>Sunday: Closed</p>
    </div>
}

export default async function Footer() {
    
    return <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.row}>
                <CompanyInfo />
                <OpeningHours/>
            </div>
        </div>
    </footer>
}