import styles from "../styles/thankYou.module.css";
import logo from "../assets/Logo.svg";
import { DiscordLogo } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ThankYou() {
    const [t] = useTranslation();
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <img src={logo} alt="" />
                    <h1>{t("TPTitle")}</h1>
                    <div className={styles.blackLineContainer}>
                        <p>{t("TPSubtitle")}</p>

                        <NavLink to="/">{t("TPVoltarButton")}</NavLink>
                    </div>
                </div>
                <div className={styles.discordContainer}>
                    <p>{t("TPDiscordCTA")}</p>
                    <a
                        href="https://discord.gg/universolibertario"
                        target="_blank"
                    >
                        <DiscordLogo size={35} />
                    </a>
                </div>
            </div>
        </>
    );
}
