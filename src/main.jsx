import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LanguageProvider>
    <HashRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/application" exact element={<Application />} />
        <Route path="/student-transfer" exact element={<StudentTransfer />} />
        <Route path="/expert-transfer" exact element={<ExpertTransfer />} />
        <Route path="/turkiye-ofisi" exact element={<AcademicTour />} />
        <Route path="/university-community" exact element={<UniversityCom />} />
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
);
