import { useState } from "react";
import { useTranslation } from "react-i18next";
import br from "../../assets/br.svg";
import us from "../../assets/us.svg";
import styles from "./languageSwitcher.module.css";
import { Globe } from "phosphor-react";

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
    const [isSelected, setIsSelected] = useState(false);
    function handleSetIsSelected() {
        setIsSelected(!isSelected);
    }
    return (
        <button
            onClick={handleSetIsSelected}
            className={styles.buttonsContainer}
        >
            <Globe size={25} />
            {languageSwitcher.map((languageOption) => (
                <button
                    style={{
                        display: isSelected ? "block" : "none",
                    }}
                    className={styles.optionsContainer}
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value);
                    }}
                >
                    <img src={languageOption.flag} alt={languageOption.name} />
                    {/* <span>{languageOption.name}</span> */}
                </button>
            ))}
        </button>
    );
};
