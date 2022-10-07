import styles from "./header.module.css";
import Logo from "../../assets/logo.svg";

export function Header() {
    return (
        <>
            <div className={styles.wrapper}>
                <img src={Logo} alt="" />
            </div>
        </>
    );
}
