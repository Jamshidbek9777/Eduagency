import { LANGUAGE } from "../tools/constants";
// import { en } from "./EN";
import { ru } from "./RU";
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
         getLanguage() === "ru"
        ? ru[word]
        : tr[word];
};

