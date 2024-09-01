/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Swiper from "../components/Swipper";
import Partners from "./Partners";
import TwoPartners from "./TwoPartners";
import Getintouch from "./Getintouch";
import ServiceMobile from "./ServiceMobile";
import ServiceBlog from "./ServiceBlog";
import { getText } from "../locales";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

const Services = () => {
  const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/services/in");
  // };

  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  // useEffect(() => {
  //   console.log("-------");
  // }, [changeLanguage]);

  return (
    <>
      <div className="services" id="services" style={{ marginTop: "150px" }}>
        <div className="container">
          <div className="service-blogs">
            <Link to={"/application"}>
              <div className="item d-flex align-items-center">
                <div className="imgAndInfo">
                  <div className="img">
                    <img src="img/service1.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>{getText("headerSwiperTitle1")}</h3>
                    <p>{getText("headerSwiperParagraph1")}</p>
                  </div>
                </div>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </div>
              </div>
            </Link>
            <Link to={"/student-transfer"}>
              <div className="item d-flex align-items-center">
                <div className="imgAndInfo">
                  <div className="img">
                    <img src="img/service2.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>{getText("headerSwiperTitle2")}</h3>
                    <p>{getText("headerSwiperParagraph2")}</p>
                  </div>
                </div>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </div>
              </div>
            </Link>
            <Link to={"/expert-transfer"}>
              <div className="item d-flex align-items-center">
                <div className="imgAndInfo">
                  <div className="img">
                    <img src="img/service3.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>{getText("headerSwiperTitle3")}</h3>
                    <p>{getText("headerSwiperParagraph3")}</p>
                  </div>
                </div>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </div>
              </div>
            </Link>
            {/* <div className="item d-flex align-items-center">
              <div className="imgAndInfo">
                <div className="img">
                  <img src="img/service4.png" alt="" />
                </div>
                <div className="info">
                  <h3>{getText("headerSwiperTitle4")}</h3>
                  <p>{getText("headerSwiperParagraph4")}</p>
                </div>
              </div>
              <div className="icon">
                <i>
                  <FontAwesomeIcon
                    className="fa-gradient"
                    icon={faArrowRight}
                  />
                </i>
              </div>
            </div> */}
          </div>

          {/* <ServiceBlog /> */}
        </div>

        <div style={{ marginTop: "120px" }}>
          <Getintouch />
        </div>
      </div>
    </>
  );
};

export default Services;
