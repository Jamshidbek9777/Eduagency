/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "../sass/about.scss";
import Partners from "../components/Partners";
import About from "../components/About";
import Getintouch from "../components/Getintouch";
import MobileAboutPage from "./MobileAboutPage";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import AboutText from "../components/AboutText";
import Helmet from "../components/Helmet";

function AboutPage() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <>
      <Helmet
        title={getText("AboutPageTitle") || "About Us"}
        description={getText("AboutPageDesc") || "Learn more about our agency and services."}
        link="/about"
        keywords="about, EduAgency, Uzbekistan, education"
      />

      <div className="about-page" style={{ marginTop: "250px" }}>
        <div className="container">
          <AboutText />
          <div className="partners-div-p">
            <Partners />
          </div>
        </div>
        <Getintouch />
      </div>

      <MobileAboutPage />
    </>
  );
}

export default AboutPage;
