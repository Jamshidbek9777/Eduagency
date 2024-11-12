/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales";
import { Link } from "react-router-dom";

function NewCards() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div className="container newcards justify-content-center h-100 gap-5 mt-5">
      <Link to={"/student-transfer"}>
        <div className="custom-card">
          <div className="icon-container icon2">
            <p className="icon-number">01</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle2")}</h1>
            <p className="desc">{getText("headerSwiperParagraph2")}</p>
          </div>
        </div>
      </Link>

      <Link to={"/work-and-travel"}>
        <div className="custom-card">
          <div className="icon-container icon3">
            <p className="icon-number">02</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">Work & Travel</h1>

            <p className="desc">{getText("WorkAndTravelParagraph")}</p>
          </div>
        </div>
      </Link>

      {/* <Link to={"/organization-of-academic-exchange-programs"}>
        <div className="custom-card">
          <div className="icon-container icon3">
            <p className="icon-number">04</p>
          </div>
          <div className="icon">
            <img src="https://eduagency.uz/img/service2.png" alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title">{getText("headerSwiperTitle11")}</h1>

            <p className="desc">{getText("headerSwiperParagraph11")}</p>
          </div>
        </div>
      </Link> */}
    </div>
  );
}

export default NewCards;
