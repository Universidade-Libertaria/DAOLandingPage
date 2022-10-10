import {
    TwitterLogo,
    InstagramLogo,
    YoutubeLogo,
    FacebookLogo,
} from "phosphor-react";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <div className={styles.wrapper}>
            <h3>Nossas Redes Sociais</h3>
            <div className={styles.buttonsContainer}>
                <a href="https://twitter.com/UniversidadeLi3" target="_blank">
                    <TwitterLogo size={35} />
                </a>
                <a
                    href="https://www.instagram.com/libertariauniversidade/"
                    target="_blank"
                >
                    <InstagramLogo size={35} />
                </a>
                <a
                    href="https://www.youtube.com/c/UniversidadeLibert%C3%A1ria"
                    target="_blank"
                >
                    <YoutubeLogo size={35} />
                </a>
                <a
                    href="https://www.facebook.com/universidadelibertariaoficial/"
                    target="_blank"
                >
                    <FacebookLogo size={35} />
                </a>
            </div>
        </div>
    );
}
