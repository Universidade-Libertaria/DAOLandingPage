import styles from "./main.module.css";

export function Main() {
    return (
        <div className={styles.wrapper}>
            <h1>Construindo a liberdade na prática</h1>
            <h3>
                Somos uma organização descentralizada, privada e aberta que
                desenvolve e apoia projetos que defendam a liberdade individual
                e a propriedade privada.
            </h3>

            <a
                href="https://1drv.ms/w/s!Ao2CcUYywjxUgdkdNh9NFiulfvUknw"
                target="_blank"
            >
                Whitepapper
            </a>
            <h2>Alguns de nossos projetos em andamento:</h2>
        </div>
    );
}
