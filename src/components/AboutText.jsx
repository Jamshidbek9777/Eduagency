/* eslint-disable no-unused-vars */
import React from "react";
import { getText } from "../locales";

function AboutText() {
  return (
    <>
      <div className="about-texts">
        <h2>EduAgency</h2>

        <div>
          <p>{getText("AboutPageTextP1")}</p>

          <p>{getText("AboutPageTextP2")}</p>

          <p>{getText("AboutPageTextP3")}</p>

          <p>{getText("AboutPageTextP4")}</p>
        </div>

        <h4>{getText("AboutPageTextUlFirst")}</h4>
        <p>{getText("AboutPageTextUlDesc")}</p>

        <h3>{getText("AboutPageTextUlHeading")}</h3>
        <ul style={{ marginTop: "20px" }}>
          <li>
            <p>{getText("AboutPageTextUlp1")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp2")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp3")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp4")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp5")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp6")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp7")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp8")}</p>
          </li>
          <li>
            <p>{getText("AboutPageTextUlp9")}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutText;
