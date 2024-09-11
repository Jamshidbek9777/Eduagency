/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Getintouch from "./components/Getintouch";
import Partners from "./components/Partners";
import ServiceBlog from "./components/ServiceBlog";
import ReactGA from "react-ga4";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-KSW67VFGP9");

    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <Header />
      {/* <Partners /> */}
      <ServiceBlog />
      {/* <About
        title={"Hakkımızda"}
        desc={
          "Ajans, Türkiye ve Özbekistan'daki üniversiteler arasında iş birliği fırsatlarını artırmak için danışmanlık hizmetleri sunar. Ortak projeler, müfredat geliştirme ve akademik değişim programları gibi konularda rehberlik eder."
        }
      /> */}
      <Getintouch />
    </>
  );
};

export default App;
