import { useTranslation } from "react-i18next";
import styles from "./main.module.css";

export function Main() {
    const { t } = useTranslation();
    return (
        <div className={styles.wrapper}>
            <h1>{t("title")}</h1>
            <h3>{t("subtitle")}</h3>

            <a
                href="https://1drv.ms/w/s!Ao2CcUYywjxUgdkdNh9NFiulfvUknw"
                target="_blank"
            >
                {t("whitepaperButton")}
            </a>
            <h2>{t("projectsCTA")}</h2>
        </div>
    );
}
