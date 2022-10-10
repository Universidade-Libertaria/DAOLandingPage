import React from "react";
import styles from "./projects.module.css";
import logoKonkin from "../../assets/logoKonkin.png";
import logoGazeta from "../../assets/logoGazeta.png";
import logoClubeDaLiberdade from "../../assets/logoCL.png";

export function Projects() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <a href="https://konkin.com.br/" target="_blank">
                        <img src={logoKonkin} alt="" />
                    </a>
                    <p>
                        A <b>Editora Konkin</b> tem o objetivo de disponibilizar
                        toda a grande literatura libertária internacional em
                        português, assim como fomentar a produção autoral
                        brasileira.
                    </p>
                </div>
                <div className={styles.container}>
                    <a href="https://gazetalibertaria.news" target="_blank">
                        <img src={logoGazeta} alt="" />
                    </a>
                    <p>
                        A <b>Gazeta Libertária</b> é um jornal online
                        comprometido em trazer uma visão libertária sobre
                        notícias, além de espalhar e divulgar a cultura
                        libertária, contribuindo com diversos textos sobre
                        política, economia, direito, tecnologia e criptomoedas.
                    </p>
                </div>
                <div className={styles.container}>
                    <a
                        href="https://universidadelibertaria.com.br/clube-da-liberdade/"
                        target="_blank"
                    >
                        <img src={logoClubeDaLiberdade} alt="" />
                    </a>
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
