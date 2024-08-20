import React from "react";
import Getintouch from "../components/Getintouch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import ContactsLocation from "../components/ContactsLocation";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="">
        <div className="contacts_getInTouch">
          <Getintouch />
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <ContactsLocation />
          </div>
          {/* <div className="col-md-6">
            <Getintouch />
          </div> */}

          {/* <div className="col-md-6 d-flex flex-column align-items-md-end mt-5 mypad">
            <h3 className="text-md-end">İletişim yöntemleri</h3>
            <div className="info">
              <div className="wrap">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="text">
                  <h5>Özbekistan, Taşkent şehri</h5>
                </div>
              </div>
              <div className="wrap">
                <div className="icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="text">
                  <h5>Çalışma saatleri</h5>
                  <p>Pz-Cm 09:00-18:00</p>
                </div>
              </div>
              <div className="wrap">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="text">
                  <a href="tel:+998507034114">+998 33 469 11 01</a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
