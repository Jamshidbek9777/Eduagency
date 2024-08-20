import { LANGUAGE } from "../tools/constants";
// import { en } from "./EN";
import { en } from "./EN";
import { uz } from "./UZ";
import { tr } from "./TR";

import 'swiper/css';

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
    return getLanguage() === "uz"
        ? uz[word]
        :
         getLanguage() === "en"
        ? en[word]
        : tr[word];
};

