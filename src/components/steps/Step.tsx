import styles from "./step.module.css";
import { DiscordLogo } from "phosphor-react";

interface StepProps {
    step: string;
    text: string;
    link?: string;
}

export function Step({ step, text, link }: StepProps) {
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
                    <a href={link}>
                        <DiscordLogo size={32} />
                        <p>Acesse Aqui</p>
                    </a>
                )}
            </div>
        </>
    );
}
