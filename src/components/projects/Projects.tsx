import React from "react";
import styles from "./projects.module.css";

export function Projects() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h3>Editora Konkin:</h3>
                    <p>
                        A <b>Editora Konkin</b> tem o objetivo de disponibilizar
                        toda a grande literatura libertária internacional em
                        português, assim como fomentar a produção autoral
                        brasileira.
                    </p>
                </div>
                <div className={styles.container}>
                    <h3>Gazeta Libertária:</h3>
                    <p>
                        A <b>Gazeta Libertária</b> é um jornal online
                        comprometido em trazer uma visão libertária sobre
                        notícias, além de espalhar e divulgar a cultura
                        libertária, contribuindo com diversos textos sobre
                        política, economia, direito, tecnologia e criptomoedas.
                    </p>
                </div>
                <div className={styles.container}>
                    <h3>Clube da Liberdade:</h3>
                    <p>
                        O <b>Clube da Liberdade</b> é uma plataforma com cursos
                        exclusivos sobre direito, economia, filosofia,
                        libertarianismo, criptomoedas e novas tecnologias.
                        Cursos gratuitos e pagos.
                    </p>
                </div>
            </div>
        </>
    );
}
