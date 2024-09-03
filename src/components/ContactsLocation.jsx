/* eslint-disable no-unused-vars */


import { useContext, useEffect } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const ContactsLocation = () => {

  const { selectedLanguage, selectedFlag, changeLanguage } =
  useContext(LanguageContext);

  // useEffect(()=>{
  //   console.log("-------");
    
  // },[changeLanguage])

  return (
    <div className="contactsLocation">
      <div className="">
        <div className="row">
          <div className="contact-blog-p">
            <div className="col-12 text-center mb-5 container">
              <h1>{getText("contactsLocationHeading")}</h1>
            </div>
            <div className="contact-blog container">
              <div className="contact-blog-in">
                <img src="/img/credit-card-icon.png" alt="" />
                <h4>{getText("contactsLocationNumber")}</h4>
                <a href="tel:+998334691101">+998 (33) 469-11-01</a>
              </div>
              <div className="contact-blog-in">
                <img src="/img/calendar-icon.png" alt="" />
                <h4>{getText("contactsLocationContact")}</h4>
                <p>Pazartesi - Cumartesi 9:00 - 18:00</p>
              </div>
              <div className="contact-blog-in">
                <img src="/img/map-icon.png" alt="" />
                <h4>{getText("contactsLocationMap")}</h4>
                <p>Mukimi Street 7, 100013, Tashkent, Uzbekistan</p>
              </div>
              <div className="contact-blog-in">
                <img src="/img/passports-icon.png" alt="" />
                <h4>{getText("contactsLocationEmail")}</h4>
                <a href="mail:info@eduagency.uz" target="_blank">info@eduagency.uz</a>
              </div>
            </div>
          </div>
          <div className="row align-items-center ">
            <div className="col-lg-6 ml-auto"></div>
          </div>
        </div>
        <div className="map">
          <iframe
            className="w-100"
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d537.2113744837891!2d71.79764787400728!3d40.38832276118418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzE3LjkiTiA3McKwNDcnNTIuMyJF!5e0!3m2!1sru!2s!4v1702739578826!5m2!1sru!2s"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsLocation;
