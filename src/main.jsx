/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

import ScrollToTop from "./components/ScrollToTop.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Application from "./pages/Application.jsx";
import StudentTransfer from "./pages/StudentTransfer.jsx";
import ExpertTransfer from "./pages/ExpertTransfer.jsx";
import AcademicTour from "./pages/AcademicTour.jsx";
import UniversityCom from "./pages/UniversityCom.jsx";
import Contacts from "./pages/Contacts.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Services from "./components/Services.jsx";
import ServicesLinksIn from "./pages/ServicesLinksIn.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Question from "./pages/Question.jsx";
import TurkiyeDili from "./pages/AcademicTour.jsx";
import OrganizatsionServices from "./pages/OrganizatsionServices.jsx";
import TurkiyeBurslari from "./pages/TurkiyeBurslari.jsx";
import OfficialRepresentativeServices from "./pages/OfficialRepresentativeServices.jsx";
import EducationalTechnologies from "./pages/EducationalTechnologies.jsx";
import OnlineCertificate from "./pages/OnlineCertificate.jsx";
import LearningLeader from "./pages/LearningLeader.jsx";
import WorkAndTravel from "./pages/WorkAndTravel.jsx";
import TurkchaSoati from "./pages/TurkchaSoati.jsx";
import TurkSoft from "./pages/TurkSoft.jsx";
import KosmosX from "./pages/KosmosX.jsx";
import OrganizationofAcademicExchangePrograms from "./pages/OrganizationofAcademicExchangePrograms.jsx";
import Airtravel from "./pages/Airtravel.jsx";
import Certificate from "./pages/Certificate.jsx";
import EUstoz from "./pages/EUstoz.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <LanguageProvider>
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/application" exact element={<Application />} />
          <Route path="/student-transfer" exact element={<StudentTransfer />} />
          <Route path="/expert-transfer" exact element={<ExpertTransfer />} />
          <Route path="/turkiye-dili" exact element={<TurkiyeDili />} />
          <Route path="/educational-technologies" exact element={<EducationalTechnologies />} />
          <Route path="/organization-services" exact element={<OrganizatsionServices />} />
          <Route path="/turkiye-burslari" exact element={<TurkiyeBurslari />} />
          <Route path="/official-representative-services" exact element={<OfficialRepresentativeServices />} />
          <Route path="/online-certificate" exact element={<OnlineCertificate />} />
          <Route path="/international-teacher" exact element={<LearningLeader />} />
          <Route path="/turkchasoati" exact element={<TurkchaSoati />} />
          <Route path="/organization-of-academic-exchange-programs" exact element={<OrganizationofAcademicExchangePrograms />} />
          <Route path="/work-and-travel" exact element={<WorkAndTravel />} />
          <Route path="/airtravel" exact element={<Airtravel />} />
          <Route path="/certificate" exact element={<Certificate />} />
          <Route path="/e-ustoz" exact element={<EUstoz />} />
          <Route path="/turksoft" exact element={<TurkSoft />} />
          <Route path="/kosmosx" exact element={<KosmosX />} />
          <Route path="/contacts" exact element={<Contacts />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/services/in" exact element={<ServicesLinksIn />} />
          <Route path="/question" exact element={<Question />} />
        </Routes>
        <Footer />
        {/* <Up /> */}
      </HashRouter>
    </LanguageProvider>
  </ChakraProvider>
);
