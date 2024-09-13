/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const TurkiyeDili = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  // useEffect(() => {
  //   console.log("-------");
  // }, [changeLanguage]);

  return (
    <>
      <div className="service-pages">
        <div className="description container">
          <h1>{getText("TurkeyDiliHeading")}</h1>
          <p>{getText("TurkeyDiliParagrf2")}</p>
          <p>
            <span> {getText("TurkeyDiliSpan1")} </span>
            {getText("TurkeyDili1")}
          </p>
          <p>
            <span> {getText("TurkeyDiliSpan2")} </span>
            {getText("TurkeyDili2")}
          </p>
          <p>
            <span> {getText("TurkeyDiliSpan3")} </span>
            {getText("TurkeyDili3")}
          </p>
          <h4>{getText("TurkeyDiliEndFourListTitle")}</h4>
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
          </ul>
        </div>
        {/* <h1 style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>Soon...</h1> */}
      </div>
      <div>
        <Getintouch />
      </div>
    </>
  );
};

export default TurkiyeDili;
