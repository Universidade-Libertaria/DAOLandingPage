import styles from "../styles/thankYou.module.css";
import logo from "../assets/Logo.svg";
import { DiscordLogo } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function ThankYou() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <img src={logo} alt="" />
                    <h1>Formulário Enviado com Sucesso!</h1>
                    <div className={styles.blackLineContainer}>
                        <p>
                            Entraremos em contato assim que tivermos novidades!
                        </p>

                        <NavLink to="/">Voltar</NavLink>
                    </div>
                </div>
                <div className={styles.discordContainer}>
                    <p>
                        Se quiser ficar atualizado de tudo o que está
                        acontecendo acesse o nosso servidor do Discord
                    </p>
                    <a
                        href="https://discord.gg/universolibertario"
                        target="_blank"
                    >
                        <DiscordLogo size={35} />
                    </a>
                </div>
            </div>
        </>
    );
}
