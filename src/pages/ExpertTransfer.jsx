// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const ExpertTransfer = () => {
  // eslint-disable-next-line no-unused-vars
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  // useEffect(() => {
  //   console.log("-------");
  // }, [changeLanguage]);

  return (
    <>
      <div className="service-pages">
        <div className="description container">
          <h1>{getText("headerSwiperTitle3")}</h1>
          <div>
            <h2>{getText("ExpertTransferYardamTitle")}</h2>

            <ul style={{marginTop: "20px"}}>
              <li>
                <p>{getText("ExpertTransferYardamDesc1")}</p>
              </li>
              <li>
                <p>{getText("ExpertTransferYardamDesc2")}</p>
              </li>
              <li>
                <p>{getText("ExpertTransferYardamDesc3")}</p>
              </li>
              <li>
                <p>{getText("ExpertTransferYardamDesc4")}</p>
              </li>
              <li>
                <p>{getText("ExpertTransferYardamDesc5")}</p>
              </li>
            </ul>
          </div>
          <p>
            <span> {getText("ExpertTransferSpan1")} </span>
            {getText("ExpertTransfer1")}
          </p>
          <p>
            <span> {getText("ExpertTransferSpan2")} </span>
            {getText("ExpertTransfer2")}
          </p>
          <p>
            <span> {getText("ExpertTransferSpan3")} </span>
            {getText("ExpertTransfer3")}
          </p>
          <p>
            <span> {getText("ExpertTransferSpan4")} </span>
            {getText("ExpertTransfer4")}
          </p>
        </div>
      </div>

      <Getintouch />
    </>
  );
};

export default ExpertTransfer;
