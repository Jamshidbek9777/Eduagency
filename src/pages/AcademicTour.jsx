/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Helmet from "../components/Helmet";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <h1>{getText("headerSwiperTitle5")}</h1>
          <a href="https://turkchasoati.uz/" target="_blank" rel="noopener noreferrer" className="styled-link">
            <div className="turktiliicon">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ width: "30px" }}><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg> TurkchaSoati
            </div>
          </a>





          {/* <p>{getText("TurkeyDiliParagrf2")}</p>
          <p>{getText("TurkeyDiliParagrf2")}</p>
          <p style={{marginLeft: "15px"}}>{getText("TurkeyDiliSpan1")}</p>
          <p style={{ marginLeft: "15px" }}>{getText("TurkeyDiliSpan12")}</p>
          <p style={{ marginLeft: "15px" }}>{getText("TurkeyDiliSpan123")}</p>
          <p>
            <span>{getText("TurkeyDiliSpan2")}</span>
            <span>{getText("TurkeyDiliSpan2")}</span>
            {getText("TurkeyDili2")}
          </p>
          <p>
            <span>{getText("TurkeyDiliSpan3")}</span>
            <span>{getText("TurkeyDiliSpan3")}</span>
            {getText("TurkeyDili3")}
          </p> */}
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
