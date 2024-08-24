/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const AcademicTour = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  useEffect(() => {
    console.log("-------");
  }, [changeLanguage]);

  return (
    <>
      <div className="service-pages">
        <div className="description container">
          <h1>{getText("TurkeyOfisHeading")}</h1>
          <p>{getText("TurkeyOfisParagrf")}</p>
          <p>{getText("TurkeyOfisParagrf2")}</p>
          <p>
            <span> {getText("TurkeyOfisSpan1")} </span>
            {getText("TurkeyOfis1")}
          </p>
          <p>
            <span> {getText("TurkeyOfisSpan2")} </span>
            {getText("TurkeyOfis2")}
          </p>
          <p>
            <span> {getText("TurkeyOfisSpan3")} </span>
            {getText("TurkeyOfis3")}
          </p>
          <p>
            <span> {getText("TurkeyOfisSpan4")} </span>
            {getText("TurkeyOfis4")}
          </p>
          <p>
            <span> {getText("TurkeyOfisSpan5")} </span>
            {getText("TurkeyOfis5")}
          </p>
          <p>
            <span> {getText("TurkeyOfisSpan6")} </span>
            {getText("TurkeyOfis6")}
          </p>
          <p>{getText("TurkeyOfisEndTitle")}</p>
        </div>
      </div>
      <div>
        <Getintouch />
      </div>
    </>
  );
};

export default AcademicTour;
