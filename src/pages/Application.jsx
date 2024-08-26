/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const Application = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  // useEffect(() => {
  //   console.log("-------");
  // }, [changeLanguage]);

  return (
    <>
      <div className="service-pages">
        <div className="description container">
          <h1>{getText("headerSwiperTitle1")}</h1>
          <div>
            <h2>{getText("ApplicationYardamTitle")}</h2>
            <ul style={{marginTop: "20px"}}>
              <li>
                <p>{getText("ApplicationYardamDesc1")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc2")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc3")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc4")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc5")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc6")}</p>
              </li>
            </ul>
          </div>
          <p>
            <span> {getText("ApplicationProceduresSpanDesc1")} </span>
            {getText("ApplicationProceduresDesc1")}
          </p>
          <p>
            <span> {getText("ApplicationProceduresSpanDesc2")} </span>
            {getText("ApplicationProceduresDesc2")}
          </p>
          <p>
            <span> {getText("ApplicationProceduresSpanDesc3")} </span>
            {getText("ApplicationProceduresDesc3")}
          </p>
          <p>
            <span> {getText("ApplicationProceduresSpanDesc4")} </span>
            {getText("ApplicationProceduresDesc4")}
          </p>
        </div>
      </div>

      <Getintouch />
    </>
  );
};

export default Application;
