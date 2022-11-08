import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from "js-cookie";

import enJson from './translations/en.json';
import ptBrJson from './translations/ptBr.json';
import esJson from './translations/es.json';

i18n.use(initReactI18next).init({
    fallbackLng: Cookies.get('i18next') || 'ptBR',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: enJson,
        ptBR: ptBrJson,
        es: esJson
    },
    
})

export default i18n;