import { useContext, useEffect, useState } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const useHeaderData = () => {
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = [
        { title: getText("headerSwiperTitle1"), description: getText("headerSwiperParagraph1"), headerLink: '/application', bgImage: "/img/header-bg.png" },
        { title: getText("headerSwiperTitle2"), description: getText("headerSwiperParagraph2"), headerLink: '/student-transfer', bgImage: "/img/İlk Slider.jpg" },
        { title: getText("headerSwiperTitle3"), description: getText("headerSwiperParagraph3"), headerLink: '/expert-transfer', bgImage: "/public/img/İkinci Slider.jpg" },
        // { title: getText("headerSwiperTitle4"), description: getText("headerSwiperParagraph4"), headerLink: "/turkiye-ofisi" }
      ];
      setHeaderData(data);
    };

    fetchData();
  }, [changeLanguage, selectedLanguage]);

  return headerData;
};

export default useHeaderData;
