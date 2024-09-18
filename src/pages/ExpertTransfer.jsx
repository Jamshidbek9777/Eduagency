/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Helmet from "../components/Helmet";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const ExpertTransfer = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const metaDescription = "EduAgency provides expert transfer services for educational professionals in Turkey and Uzbekistan. Our tailored solutions include short-term, project-based, and long-term assignments, ensuring a seamless transition and successful placement.";

  const metaKeywords = "expert transfer, educational consultancy, Turkey education, Uzbekistan education, short-term transfer, project-based transfer, long-term contracts, academic professionals, EduAgency";

  return (
    <>
      <Helmet
        title={getText("headerSwiperTitle3")}
        description={metaDescription}
        link="/expert-transfer"
        keywords={metaKeywords}
      />

      <div className="service-pages">
        <div className="description container">
          <h1>{getText("headerSwiperTitle3")}</h1>
          <div>
            <h2>{getText("ExpertTransferYardamTitle")}</h2>

            <ul style={{ marginTop: "20px" }}>
              <li>
                <p>{getText("ExpertTransferYardamDesc1")}</p>
              </li>
              <li>
                <p>{getText("ExpertTransferYardamDesc2")}</p>
              </li>
              <li>
                <p>{getText("ExpertTransferYardamDesc3")}</p>
              </li>
            </ul>
          </div>
          <h2>{getText("ExpertTransferSecondTitle")}</h2>
          <p style={{ marginTop: "20px" }}>
            <span>{getText("ExpertTransferSpan1")}</span>
            {getText("ExpertTransfer1")}
          </p>
          <p>
            <span>{getText("ExpertTransferSpan2")}</span>
            {getText("ExpertTransfer2")}
          </p>
          <p>
            <span>{getText("ExpertTransferSpan3")}</span>
            {getText("ExpertTransfer3")}
          </p>
          <p>
            <span>{getText("ExpertTransferSpan4")}</span>
            {getText("ExpertTransfer4")}
          </p>
        </div>
      </div>

      <Getintouch />
    </>
  );
};

export default ExpertTransfer;
