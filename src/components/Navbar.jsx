import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";
import { getLanguage, getText } from "../locales/index";
import { LANGUAGE } from "../tools/constants";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isActive = localStorage.getItem("navbarActive");
    if (isActive) {
      setNavbar(true);
    }
  }, []);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
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

  const handleToggleNavbar = () => {
    setNavbar(!navbar);
    localStorage.setItem("navbarActive", !navbar);
  };

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value);
    document.location.reload(true);
  };

  const handleLinkClick = (path) => {
    localStorage.setItem("activeLink", path);
  };

  const handleOpenMobileNav = () => {
    setBurger((prevBurger) => !prevBurger);
  };

  const handleDropdownHover = (state) => {
    setIsDropdownOpen(state);
  };

  const activeLink = localStorage.getItem("activeLink") || location.pathname;

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
                <li onClick={() => handleLinkClick("/")}>
                  <Link
                    to="/"
                    className={activeLink === "/" ? "active-link" : ""}
                  >
                    {getText("home")}
                  </Link>
                </li>
                <li onClick={() => handleLinkClick("/about")}>
                  <Link
                    to="/about"
                    className={activeLink === "/about" ? "active-link" : ""}
                  >
                    {getText("aboutUs")}
                  </Link>
                </li>
                <li
                  onMouseEnter={() => handleDropdownHover(true)}
                  onMouseLeave={() => handleDropdownHover(false)}
                >
                  <Link
                    to="/services"
                    className={activeLink === "/services" ? "active-link" : ""}
                  >
                    Bizim hizmetler
                  </Link>
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isDropdownOpen ? 1 : 0,
                      y: isDropdownOpen ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  >
                    <li>
                      <Link to="/application">Muracaat İşlemleri</Link>
                    </li>
                    <li>
                      <Link to="/student-transfer">Öğrenci Transferi</Link>
                    </li>
                    <li>
                      <Link to="/expert-transfer">Uzman Transferi</Link>
                    </li>
                    <li>
                      <Link to="/academic-tour">Turkiye Uluslararasi Ofisi</Link>
                    </li>
                  </motion.ul>
                </li>
                <li onClick={() => handleLinkClick("/contacts")}>
                  <Link
                    to="/contacts"
                    className={activeLink === "/contacts" ? "active-link" : ""}
                  >
                    {getText("contacts")}
                  </Link>
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
