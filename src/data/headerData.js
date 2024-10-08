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
                { title: getText("headerSwiperTitle3"), description: getText("headerSwiperParagraph3"), headerLink: '/expert-transfer', bgImage: "/img/19-1100_056-scaled.jpg", mobBgImage: "/img/19-1100_056-scaled.jpg" },
                { title: getText("headerSwiperTitle1"), description: getText("headerSwiperParagraph1"), headerLink: '/application', bgImage: "/img/header-bg.png", mobBgImage: "/img/7129ee73fb9c15e17860c99924215444.png" },
                { title: getText("headerSwiperTitle4"), description: getText("headerSwiperParagraph4"), desc2: getText("headerSwiperParagraph41"), headerLink: "/organization-services", bgImage: "/img/akademiktur2.jpg", mobBgImage: "/img/akademiktur2.jpg", customColor: "#0556FF" },
                { title: getText("headerSwiperTitle5"), description: getText("headerSwiperParagraph5"), headerLink: "/turkiye-dili", bgImage: "/img/turkdili2.jpg", mobBgImage: "/img/turkdili2.jpg" },
                { title: getText("headerSwiperTitle8"), description: getText("headerSwiperALink"), headerLink: "/educational-technologies", bgImage: "/img/egitim.png", mobBgImage: "/img/egitim.png" },
                { title: getText("headerSwiperTitle7"), description: getText("OfficialRepresentativeServicesTitle"), headerLink: '/official-representative-services', bgImage: "/img/header3.png", mobBgImage: "/img/headerMob3.jpg" },
                { title: getText("headerSwiperTitle6"), description: getText("TUrkiyeBurslariOtherText"), headerLink: '/turkiye-burslari', bgImage: "/img/turkey-scholarship-1.jpg", mobBgImage: "/img/turkey-scholarship-1.jpg" },
                { title: getText("headerSwiperTitle9"), description: getText("headerSwiperParagraph9"), headerLink: '/online-certificate', bgImage: "/img/certificate1.jpg", mobBgImage: "/img/certificate1.jpg" },
                { title: getText("headerSwiperTitle10"), description: getText("headerSwiperParagraph10"), headerLink: '/international-teacher', bgImage: "/img/teacher.avif", mobBgImage: "/img/teacher.avif" },

            ];
            setHeaderData(data);
        };

        fetchData();
    }, [changeLanguage, selectedLanguage]);

    return headerData;
};

export default useHeaderData;