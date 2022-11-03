import { Form } from "../components/form/Form";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { Projects } from "../components/projects/Projects";
import { Cta } from "../components/cta/Cta";
import { Step } from "../components/steps/Step";
import { Footer } from "../components/footer/Footer";
import styles from "../styles/home.module.css";
import { useTranslation } from "react-i18next";

export function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Main />
                <Projects />
                <Cta />
                <Step
                    step={t("joinDiscordCTA")}
                    text={t("step1")}
                    link="https://discord.com/invite/universolibertario"
                />
                <Step step={t("tokensCTA")} text={t("step2")} />
                <Step step={t("beFirstCTA")} text={t("step3")} />
                <Form />
                <Footer />
            </div>
        </>
    );
}
