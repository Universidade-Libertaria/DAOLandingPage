import React from "react";
import styles from "./projects.module.css";
import logoKonkin from "../../assets/logoKonkin.png";
import logoGazeta from "../../assets/logoGazeta.png";
import logoClubeDaLiberdade from "../../assets/logoCL.png";
import { useTranslation } from "react-i18next";

export function Projects() {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <a href="https://konkin.com.br/" target="_blank">
                        <img src={logoKonkin} alt="" />
                    </a>
                    <p>{t("konkin")}</p>
                </div>
                <div className={styles.container}>
                    <a href="https://gazetalibertaria.news" target="_blank">
                        <img src={logoGazeta} alt="" />
                    </a>
                    <p>{t("gazeta")}</p>
                </div>
                <div className={styles.container}>
                    <a
                        href="https://universidadelibertaria.com.br/clube-da-liberdade/"
                        target="_blank"
                    >
                        <img src={logoClubeDaLiberdade} alt="" />
                    </a>
                    <p>{t("cl")}</p>
                </div>
            </div>
        </>
    );
}
