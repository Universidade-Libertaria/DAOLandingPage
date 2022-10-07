import { Form } from "./components/form/Form";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Cta } from "./components/cta/Cta";
import { Step } from "./components/steps/Step";
import { Footer } from "./components/footer/Footer";
import styles from "./styles/app.module.css";
import "./styles/global.css";

export function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Main />
                <Cta />
                <Step
                    step="Step 1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, maiores. Alias, incidunt tenetur! Exercitationem accusamus molestiae rerum a aut provident obcaecati perferendis earum, nobis placeat in eos illum velit sed?"
                />
                <Step
                    step="Step 2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, maiores. Alias, incidunt tenetur! Exercitationem accusamus molestiae rerum a aut provident obcaecati perferendis earum, nobis placeat in eos illum velit sed?"
                />
                <Step
                    step="Step 3"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, maiores. Alias, incidunt tenetur! Exercitationem accusamus molestiae rerum a aut provident obcaecati perferendis earum, nobis placeat in eos illum velit sed?"
                />
                <Form />
                <Footer />
            </div>
        </>
    );
}
