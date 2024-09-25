/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Helmet from "../components/Helmet";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const TurkiyeDili = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const metaDescription = "Türk Dili kursları ile Türkçe öğrenin! EduAgency, Türkiye'de üniversite okumak, seyahat etmek veya ticari amaçlarla Türkçe dil eğitimi sunmaktadır. A1'den C1'e kadar sertifika kursları mevcuttur.";

  const metaKeywords = "Türkçe, Türk dili kursları, Türkçe eğitim, Türkiye, A1, B2, C1, sertifika kursları, konuşma kursu, iş Türkçesi, sağlık turizmi Türkçesi";

  return (
    <>
      <Helmet
        title={getText("TurkeyDiliHeading")}
        description={metaDescription}
        link="/turkiye-dili"
        keywords={metaKeywords}
      />

      <div className="service-pages">
        <div className="description container">
          <h1>{getText("TurkeyDiliHeading")}</h1>
          <p>{getText("TurkeyDiliParagrf2")}</p>
          <p>
            <ul>
              <li><p>{getText("TurkeyDiliSpan1")}</p></li>
              <li><p>{getText("TurkeyDiliSpan12")}</p></li>
            </ul>
          </p>
          <p>
            <span>{getText("TurkeyDiliSpan2")}</span>
            {/* {getText("TurkeyDili2")} */}
          </p>
          <p>
            <span>{getText("TurkeyDiliSpan3")}</span>
            {/* {getText("TurkeyDili3")} */}
          </p>
          {/* <h4>{getText("TurkeyDiliEndFourListTitle")}</h4>
          <ul style={{ marginTop: "10px" }}>
            <li>
              <p>{getText("TurkeyDiliList1")}</p>
            </li>
            <li>
              <p>{getText("TurkeyDiliList2")}</p>
            </li>
            <li>
              <p>{getText("TurkeyDiliList3")}</p>
            </li>
            <li>
              <p>{getText("TurkeyDiliList4")}</p>
            </li>
          </ul> */}
        </div>
      </div>
      <div>
        <Getintouch />
      </div>
    </>
  );
};

export default TurkiyeDili;
