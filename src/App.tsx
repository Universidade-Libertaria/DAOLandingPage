import { Footer } from "./components/footer/Footer";
import { Form } from "./components/form/Form";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import styles from "./styles/app.module.css";
import "./styles/global.css";

export function App() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Form />
            <Footer />
        </div>
    );
}

