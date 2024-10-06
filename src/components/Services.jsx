/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Getintouch from "./Getintouch";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Helmet from "../components/Helmet";
import NewCards from "./NewCards";

const Services = () => {
  const navigate = useNavigate();
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <>
      <Helmet
        title={getText("ServicesPageTitle") || "Our Services"}
        description={
          getText("ServicesPageDesc") ||
          "Explore our range of services to assist you."
        }
        link="/services"
        keywords="services, education, consulting, university"
      />

      {/* <div className="services" id="services" style={{ marginTop: "150px" }}>
        <div className="container">
          <div className="service-blogs">
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

            <Link to={"/turkiye-dili"}>
              <div className="item d-flex align-items-center">
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
              </div>
            </Link>


          </div>

        </div>

        <div style={{ marginTop: "120px" }}>
          <Getintouch />
        </div>
      </div> */}
      <div style={{marginTop: "150px"}}>
        <NewCards />
      </div>
    </>
  );
};

export default Services;
