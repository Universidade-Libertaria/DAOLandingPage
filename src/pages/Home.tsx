import { Form } from "../components/form/Form";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { Projects } from "../components/projects/Projects";
import { Cta } from "../components/cta/Cta";
import { Step } from "../components/steps/Step";
import { Footer } from "../components/footer/Footer";
import styles from "../styles/home.module.css";

export function Home() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Main />
                <Projects />
                <Cta />
                <Step
                    step="Entre no Servidor do Discord"
                    text="
                    É onde acontece o dia a dia, onde os membros interagem, discutem os próximos passos e fazem os projetos acontecerem. Lá você encontra tudo que precisa para poder participar da DAO. "
                    link="https://discord.com/invite/universolibertario"
                />
                <Step
                    step="Receba e utilize as Tokens da UL"
                    text="Você recebe tokens da UL ao realizar atividades na DAO ou ao doar para o projeto. Depois, você pode utilizar suas tokens para ajudar a decidir o futuro da DAO e de seus projetos ou para comprar os produtos e serviços da organização."
                />
                <Step
                    step="Seja um dos primeiros"
                    text="Seja um dos primeiros a entrar para a DAO. Preencha o formulário abaixo e fique sabendo assim que as tokens estiverem disponíveis!
                    "
                />
                <Form />
                <Footer />
            </div>
        </>
    );
}
