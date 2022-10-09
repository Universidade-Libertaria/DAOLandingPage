import styles from "./main.module.css";

export function Main() {
    return (
        <div className={styles.wrapper}>
            <h1>Construindo a liberdade na prática</h1>
            <h3>
                Somos uma organização decentralizada, privada e aberta que
                desenvolve e apoia projetos que defendam a liberdade individual
                e a propriedade privada.
            </h3>

            <a
                href="https://onedrive.live.com/edit.aspx?resid=543CC2324671828D!27805&ithint=file%2cdocx&authkey=!ADYfTRYrpX71JJ8"
                target="_blank"
            >
                Whitepapper
            </a>
            <h2>Alguns de nossos projetos em andamento:</h2>
        </div>
    );
}
