import { useContext, useEffect, useState } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const useHeaderData = () => {
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = [
        { title: getText("headerSwiperTitle1"), description: getText("headerSwiperParagraph1"), headerLink: '/application' },
        { title: getText("headerSwiperTitle2"), description: getText("headerSwiperParagraph2"), headerLink: '/student-transfer' },
        { title: getText("headerSwiperTitle3"), description: getText("headerSwiperParagraph3"), headerLink: '/expert-transfer' },
        // { title: getText("headerSwiperTitle4"), description: getText("headerSwiperParagraph4"), headerLink: "/turkiye-ofisi" }
      ];
      setHeaderData(data);
    };

    fetchData();
  }, [changeLanguage, selectedLanguage]);

  return headerData;
};

export default useHeaderData;
