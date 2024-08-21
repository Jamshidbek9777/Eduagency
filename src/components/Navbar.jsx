import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { getLanguage, getText } from "../locales/index";
import { LANGUAGE } from "../tools/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value);
    document.location.reload(true);
  };

  const handleOpenMobileNav = () => {
    setBurger((prevBurger) => !prevBurger);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = burger ? "hidden" : "auto";
  }, [burger]);

  return (
    <>
      <div className={`navBar ${navbar ? "active" : ""}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="logo">
                <a href="/">
                  <img
                    className="w-100 logoblack"
                    src="../img/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>

            <div
              className={`d-flex nav-menu-pc justify-content align-items-center ${
                navbar ? "mt-0" : "mt-5"
              }`}
            >
              <ul className="nav-menu">
                <li>
                  <Link to="/">{getText("home")}</Link>
                </li>
                <li>
                  <Link to="/about">{getText("aboutUs")}</Link>
                </li>
                <li>
                  <Link to="/services">Bizim hizmetler</Link>
                </li>
                <li>
                  <Link to="/contacts">{getText("contacts")}</Link>
                </li>
              </ul>
              <div className="siteLang d-flex align-items-center">
                <i>
                  <img src="img/tr.png" alt="" />
                </i>
                <select onChange={changeLanguage}>
                  <option value="uz" selected={getLanguage() === "uz"}>
                    Oʻzbek
                  </option>
                  <option value="en" selected={getLanguage() === "en"}>
                    English
                  </option>
                  <option value="tr" selected={getLanguage() === "tr"}>
                    Türkçe
                  </option>
                </select>
              </div>
            </div>

            <div
              onClick={handleOpenMobileNav}
              className={`burger pr-4 ml-auto d-flex d-lg-none`}
            >
              {burger ? (
                <img src="/img/opened-burger.png" alt="burger" />
              ) : (
                <img src="/img/burger.svg" alt="burger" />
              )}
            </div>
          </div>
        </div>
      </div>

      {burger && <MobileNavbar burger={burger} setBurger={setBurger} />}
    </>
  );
};

export default Navbar;
