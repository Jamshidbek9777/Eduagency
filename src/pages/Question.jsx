/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales";
import AccordionUI from "../ui/accordion/accordionUi";

function Question() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div style={{ marginTop: "200px" }}>
      <div className="container">
        <h2 style={{marginBottom: "20px"}}>{getText("questionTitle")}</h2>
        <AccordionUI />
      </div>
    </div>
  );
}

export default Question;
