import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales/index";

const Navbar = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);
  const [navbarActive, setNavbarActive] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isActive = localStorage.getItem("navbarActive");
    if (isActive) setNavbarActive(true);
  }, []);

  const handleScroll = () => {
    setNavbarActive(window.scrollY >= 30);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = burgerOpen ? "hidden" : "auto";
  }, [burgerOpen]);

  const handleLinkClick = (path) => {
    localStorage.setItem("activeLink", path);
  };

  const navItems = [
    { to: "/student-transfer", text: getText("headerSwiperTitle2") },
    { to: "/expert-transfer", text: getText("headerSwiperTitle3") },
    { to: "/application", text: getText("headerSwiperTitle1") },
    { to: "/turkiye-dili", text: getText("headerSwiperTitle5") },
    { to: "/organization-services", text: getText("headerSwiperTitle4") },
    { to: "/turkiye-burslari", text: getText("headerSwiperTitle6") },
    { to: "/official-representative-services", text: getText("headerSwiperTitle7") },
    { to: "/about", text: getText("aboutUs") },
    { to: "/services", text: getText("services") },
    { to: "/question", text: getText("question") },
    { to: "/contacts", text: getText("contacts") },
  ];

  const navVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.5 } },
    exit: { opacity: 0, x: "100%", transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.5 } },
  };

  return (
    <>
      <div className={`navBar ${navbarActive ? "active" : ""}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="logo">
                <Link to="/">
                  <img className="w-100 logoblack" src="/img/logo.png" alt="logo" />
                </Link>
              </div>
            </div>

            <nav className="nav-menu-pc d-flex justify-content align-items-center">
              <ul className="nav-menu">
                {navItems.map((item) => (
                  <li key={item.to} onClick={() => handleLinkClick(item.to)}>
                    <Link to={item.to} className={location.pathname === item.to ? "active-link" : ""}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="siteLang d-flex align-items-center">
                <img src={selectedFlag} alt="language flag" style={{ width: "20px", objectFit: "cover" }} />
                <select onChange={(e) => changeLanguage(e.target.value)} value={selectedLanguage}>
                  <option value="uz">Oʻzbek</option>
                  <option value="en">English</option>
                  <option value="tr">Türkçe</option>
                </select>
              </div>
            </nav>

            <div onClick={() => setBurgerOpen((prev) => !prev)} className={`burger pr-4 ml-auto d-flex`}>
              <img src={burgerOpen ? "/img/opened-burger.png" : "/img/burger.svg"} alt="burger" />
            </div>
          </div>
        </div>
      </div>

      <motion.div className={`mobNav`} initial="hidden" animate={burgerOpen ? "visible" : "hidden"} exit="exit" variants={navVariants}>
        <div className="all-menu">
          <motion.ul className="nav-menu">
            {navItems.map((item, index) => (
              <motion.li key={item.to} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } } }}>
                <Link onClick={() => setBurgerOpen(false)} to={item.to}>
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className="siteLang d-flex align-items-center">
            <div className="all-menu">
              <ul className="nav-mobile-menu">
                {[
                  { img: "/img/turkey.png", text: "Turkish", val: "tr" },
                  { img: "/img/uzb.png", text: "O'zbek", val: "uz" },
                  { img: "/img/usa.png", text: "English", val: "en" },
                ].map((lang, index) => (
                  <motion.li key={lang.text} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } } }}>
                    <a
                      href="#"
                      className="flag-div"
                      onClick={() => {
                        changeLanguage(lang.val);
                        setBurgerOpen(false);
                      }}
                    >
                      <img src={lang.img} alt={lang.text} style={{ width: "20px", objectFit: "cover" }} />
                      {lang.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
