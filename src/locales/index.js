// src/locales/index.js
import { en } from "./EN";
import { uz } from "./UZ";
import { tr } from "./TR";
import { LANGUAGE } from "../tools/constants";
// eslint-disable-next-line no-unused-vars
import uzb from "../../public/img/uzbekistán.png"


export const flagImages = {
    uz: uzb,
    en: "/img/usa.png",
    tr: "/img/tr.png",
};

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
};



export const getText = (word) => {

    return getLanguage() === "uz"
        ? uz[word]
        : getLanguage() === "en"
            ? en[word]
            : tr[word];
};
