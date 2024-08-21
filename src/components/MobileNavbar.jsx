import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getLanguage, getText } from "../locales/index";
import { LANGUAGE } from "../tools/constants";

const MobileNavbar = ({ burger, setBurger }) => {
  const changeLanguage = (lang) => {
    localStorage.setItem(LANGUAGE, lang);
    document.location.reload(true);
  };

  // Animation
  const navVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {burger && (
        <motion.div
          className={`mobNav ${burger ? "" : "burgered"}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navVariants}
        >
          <div className="all-menu">
            <ul className="nav-menu">
              <motion.li
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <Link onClick={() => setBurger(!burger)} to="/">
                  {getText("home")}
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <Link onClick={() => setBurger(!burger)} to="/about">
                  {getText("aboutUs")}
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                <Link onClick={() => setBurger(!burger)} to="/services">
                  Bizim hizmetler
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <Link onClick={() => setBurger(!burger)} to="/contacts">
                  {getText("contacts")}
                </Link>
              </motion.li>
            </ul>
            <div className="siteLang d-flex align-items-center">
              <div className="all-menu">
                <ul className="nav-mobile-menu">
                  <li>
                    <a
                      href="#"
                      className="flag-div"
                      onClick={() => changeLanguage("tr")}
                    >
                      <img src="/img/turkey.png" alt="turkey icon" />
                      Turkish
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flag-div"
                      onClick={() => changeLanguage("uz")}
                    >
                      <img src="/img/uzbekistán.png" alt="uzbekistán icon" />
                      O’zbek
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flag-div"
                      onClick={() => changeLanguage("ru")}
                    >
                      <img src="/img/russia.png" alt="russia icon" />
                      Русский
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
