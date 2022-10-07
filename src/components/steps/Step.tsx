import styles from "./step.module.css";

interface StepProps {
    step: string;
    text: string;
}

export function Step({ step, text }: StepProps) {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.stepContainer}>
                    <hr />
                    <h2>{step}</h2>
                    <hr />
                </div>
                <p>{text}</p>
            </div>
        </>
    );
}
