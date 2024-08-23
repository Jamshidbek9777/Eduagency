import React from "react";
import { getText } from "../locales";

const AcademicTour = () => {
  return (
    <div className="service-pages">
    <div className="description container">
      <h1>{getText("headerSwiperTitle4")}</h1>
      <p>
        <span> {getText("TurkeyOfisSpan1")} </span>
        {getText("TurkeyOfis1")}
      </p>
      <p>
        <span> {getText("TurkeyOfisSpan2")} </span>
        {getText("TurkeyOfis2")}
      </p>
      <p>
        <span> {getText("TurkeyOfisSpan3")} </span>
        {getText("TurkeyOfis3")}
      </p>
      <p>
        <span> {getText("TurkeyOfisSpan4")} </span>
        {getText("TurkeyOfis4")}
      </p>
    </div>
  </div>
  );
};

export default AcademicTour;
