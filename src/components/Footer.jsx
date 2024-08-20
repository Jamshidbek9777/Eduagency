import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-2 col-sm-3 col-4">
              {/* <div className="logo">
                    <a href="/">
                  <img className='w-100 logoblack' src="../img/logo.png" alt="" />
                </a>
                    </div> */}
            </div>

            {/* <div className="col-md-2 col-5">
                    <ul className="socials d-flex">
                    <li><a href="/"><FontAwesomeIcon icon={faTelegram}/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    </ul>
                </div> */}
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-links">
            <li>
              <a href="/">
                <div className="footer-first-link">
                  <div className="footer_link_and_icon">
                    <h4>Instagram</h4>
                    <img src="/img/footer_instagram.png" alt="instagram icon" />
                  </div>
                  <h5>@Eduagency_In</h5>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="footer-first-link">
                  <div className="footer_link_and_icon">
                    <h4>Facebook</h4>
                    <img src="/img/footer_facebook.png" alt="instagram icon" />
                  </div>
                  <h5>@Eduagency_Fb</h5>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="footer-first-link">
                  <div className="footer_link_and_icon">
                    <h4>Telegram</h4>
                    <img src="/img/footer_telegram.png" alt="instagram icon" />
                  </div>
                  <h5>@Eduagency_Tg</h5>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="footer-first-link">
                  <div className="footer_link_and_icon">
                    <div>
                      <h4>
                        <a href="tel:+998901234567">+998(90) 123 45 67</a>
                      </h4>
                      <h5>@Eduagency</h5>
                    </div>
                    <img src="/img/footer_phone.png" alt="phone" />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
