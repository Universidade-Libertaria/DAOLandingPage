import styles from "./step.module.css";
import { DiscordLogo } from "phosphor-react";
import { useTranslation } from "react-i18next";

interface StepProps {
    step: string;
    text: string;
    link?: string;
}

export function Step({ step, text, link }: StepProps) {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.stepContainer}>
                    <hr />
                    <h2>{step}</h2>
                    <hr />
                </div>
                <p>{text}</p>
                {link && (
                    <a href={link} target="_blank">
                        <DiscordLogo size={32} />
                        <p>{t("discordButton")}</p>
                    </a>
                )}
            </div>
        </>
    );
}
