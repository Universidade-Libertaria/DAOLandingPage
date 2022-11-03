import styles from "./header.module.css";
import Logo from "../../assets/Logo.svg";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageSwitcher/LanguageSwitcher";

export function Header() {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles.wrapper}>
                <img src={Logo} alt="" />
                <span>
                    <LanguageSwitcher />
                </span>
            </div>
        </>
    );
}
