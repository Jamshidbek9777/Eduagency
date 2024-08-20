import { useState } from 'react'
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [burger, setBurger] = useState(false)

  const changeNavbar = () => {

    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value)
    document.location.reload(true)
  }

  return (
    <>



      <div className={`navBar ${navbar ? 'active' : ''}`}>
        <div className="container">
          <div className="row justify-content-between align-items-center ">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="logo">
                <a href="/">
                  <img className='w-100 logoblack' src="../img/logo.png" alt="" />
                </a>
              </div>
            </div>


            <div className={`col-9 mobileWrap ${burger ? '' : 'burgered'} `}>
              <div className={`d-flex justify-content-end align-items-center ${navbar ? "mt-0" : "mt-5"} `}>
                <ul className='nav-menu'>
                  <li>
                    <a onClick={() => setBurger(!burger)} href="/">{getText("home")}</a>
                  </li>
                  <li>
                    <Link onClick={() => setBurger(!burger)} to="/about">{getText("aboutUs")}</Link>
                  </li>
                  <li>
                    <a onClick={() => setBurger(!burger)} href="/services">Bizim hizmetler</a>
                  </li>
                  <li>
                    <Link onClick={() => setBurger(!burger)} to="/contacts">{getText("contacts")}</Link>
                  </li>
                </ul>
                <div className="siteLang d-flex align-items-center">
                <i><img src="img/tr.png" alt="" /></i>
                  <select onChange={changeLanguage}>
                    <option value="uz" selected={getLanguage() === "uz"} >Oʻzbek</option>
                    <option value="en" selected={getLanguage() === "en"} >English</option>
                    <option value="tr" selected={getLanguage() === "tr"} >Türkçe </option>
                  </select>
                </div>
              </div>



            </div>


            <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
              <div className="burger1"></div>
              <div className="burger2"></div>
              <div className="burger3"></div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar
