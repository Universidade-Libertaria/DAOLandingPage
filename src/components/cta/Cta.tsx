import { useTranslation } from "react-i18next";
import styles from "./cta.module.css";

export function Cta() {
    const { t } = useTranslation();
    return (
        <div className={styles.wrapper}>
            <hr />
            <h2>{t("daoCTA")}</h2>
            <hr />
        </div>
    );
}
