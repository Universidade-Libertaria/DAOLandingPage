import { useTranslation } from "react-i18next";
import br from "../../assets/br.svg";
import us from "../../assets/us.svg";
import styles from "./languageSwitcher.module.css";

const languageSwitcher = [
    {
        name: "Português",
        value: "ptBR",
        flag: br,
    },
    {
        name: "English",
        value: "en",
        flag: us,
    },
];

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.wrapper}>
            {languageSwitcher.map((languageOption) => (
                <button
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value);
                    }}
                >
                    <img src={languageOption.flag} alt={languageOption.name} />
                    <span>{languageOption.name}</span>
                </button>
            ))}
        </div>
    );
};
