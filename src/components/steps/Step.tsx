import styles from "./step.module.css";

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
                {link && <a href={link}>Link do Servidor</a>}
            </div>
        </>
    );
}
