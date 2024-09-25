import { useContext, useEffect, useState } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const useHeaderData = () => {
    const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = [
                { title: getText("headerSwiperTitle2"), description: getText("headerSwiperParagraph2"), headerLink: '/student-transfer', bgImage: "/img/header2.png", mobBgImage: "/img/headerMob2.jpg" },
                { title: getText("headerSwiperTitle3"), description: getText("headerSwiperParagraph3"), headerLink: '/expert-transfer', bgImage: "/img/header3.png", mobBgImage: "/img/headerMob3.jpg" },
                { title: getText("headerSwiperTitle1"), description: getText("headerSwiperParagraph1"), headerLink: '/application', bgImage: "/img/header-bg.png", mobBgImage: "/img/7129ee73fb9c15e17860c99924215444.png" },
                { title: getText("headerSwiperTitle4"), description: getText("headerSwiperParagraph4"), headerLink: "/turkiye-dili", bgImage: "/img/header4.jpg", mobBgImage: "/img/header4.jpg" },
            ];
            setHeaderData(data);
        };

        fetchData();
    }, [changeLanguage, selectedLanguage]);

    return headerData;
};

export default useHeaderData;