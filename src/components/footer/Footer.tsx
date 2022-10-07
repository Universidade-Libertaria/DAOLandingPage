import { TwitterLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <div className={styles.wrapper}>
            <h3>Contact us!</h3>
            <div className={styles.buttonsContainer}>
                <button>
                    <TwitterLogo size={35} />
                </button>
                <button>
                    <InstagramLogo size={35} />
                </button>
                <button>
                    <YoutubeLogo size={35} />
                </button>
            </div>
        </div>
    );
}
