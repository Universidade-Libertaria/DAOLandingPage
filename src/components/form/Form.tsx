import { useTranslation } from "react-i18next";
import styles from "./form.module.css";
export function Form() {
    const { t } = useTranslation();
    return (
        <>
            <h2 className={styles.donateTittle}>{t("participate")}</h2>
            <form
                autoComplete="false"
                role="form"
                method="post"
                action="https://libertarianuniversity.org/form/submit?formId=19"
                id="mauticform_daoprevenda"
                data-mautic-form="daoprevenda"
                encType="multipart/form-data"
                className={styles.form}
            >
                <div
                    className="mauticform-error"
                    id="mauticform_daoprevenda_error"
                />
                <div
                    className={styles.mauticformMessage}
                    id="mauticform_daoprevenda_message"
                />
                <div className={styles.mauticforminnerform}>
                    <div
                        className="mauticform-page-wrapper mauticform-page-1"
                        data-mautic-form-page={1}
                    >
                        <div
                            id="mauticform_daoprevenda_nome"
                            className="mauticform-row mauticform-text mauticform-field-1"
                        >
                            <input
                                id="mauticform_input_daoprevenda_nome"
                                name="mauticform[nome]"
                                className="mauticform-input"
                                type="text"
                                placeholder={t("formName")}
                                required
                            />
                            <span
                                className="mauticform-errormsg"
                                style={{ display: "none" }}
                            />
                        </div>
                        <div
                            id="mauticform_daoprevenda_sobrenome"
                            className="mauticform-row mauticform-text mauticform-field-2"
                        >
                            <input
                                id="mauticform_input_daoprevenda_sobrenome"
                                name="mauticform[sobrenome]"
                                className="mauticform-input"
                                type="text"
                                placeholder={t("formLastName")}
                                required
                            />
                            <span
                                className="mauticform-errormsg"
                                style={{ display: "none" }}
                            />
                        </div>
                        <div
                            id="mauticform_daoprevenda_email"
                            className="mauticform-row mauticform-email mauticform-field-3"
                        >
                            <input
                                id="mauticform_input_daoprevenda_email"
                                name="mauticform[email]"
                                className="mauticform-input"
                                type="email"
                                placeholder={t("formEmail")}
                                required
                            />
                            <span
                                className="mauticform-errormsg"
                                style={{ display: "none" }}
                            />
                        </div>
                        <div
                            id="mauticform_daoprevenda_numero_de_contato"
                            className="mauticform-row mauticform-tel mauticform-field-4"
                        >
                            <input
                                id="mauticform_input_daoprevenda_numero_de_contato"
                                name="mauticform[numero_de_contato]"
                                className="mauticform-input"
                                type="tel"
                                placeholder={t("formContact")}
                                required
                            />
                            <span
                                className="mauticform-errormsg"
                                style={{ display: "none" }}
                            />
                        </div>
                        <div id="mauticform_daoprevenda_valor_da_doacao">
                            <select
                                id="mauticform_input_daoprevenda_valor_da_doacao"
                                name="mauticform[valor_da_doacao]"
                                required
                            >
                                <option value="" disabled selected hidden>
                                    {t("formValue")}
                                </option>
                                <option value="At?? 500">{t("value1")}</option>
                                <option value="Entre 500 - 1000 ">
                                    {t("value2")}
                                </option>
                                <option value="Entre 1000 - 5000">
                                    {t("value3")}
                                </option>
                                <option value="5000 +">{t("value4")}</option>
                            </select>
                            <span
                                className="mauticform-errormsg"
                                style={{ display: "none" }}
                            />
                        </div>
                        <div
                            id="mauticform_daoprevenda_submit"
                            className="mauticform-row mauticform-button-wrapper mauticform-field-6"
                        >
                            <button
                                type="submit"
                                name="mauticform[submit]"
                                id="mauticform_input_daoprevenda_submit"
                                className="mauticform-button btn btn-default"
                            >
                                {t("submitButton")}
                            </button>
                        </div>
                    </div>
                </div>
                <input
                    type="hidden"
                    name="mauticform[formId]"
                    id="mauticform_daoprevenda_id"
                    defaultValue={19}
                />
                <input
                    type="hidden"
                    name="mauticform[return]"
                    id="mauticform_daoprevenda_return"
                />
                <input
                    type="hidden"
                    name="mauticform[formName]"
                    id="mauticform_daoprevenda_name"
                    defaultValue="daoprevenda"
                />
            </form>
        </>
    );
}
