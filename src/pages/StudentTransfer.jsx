import React from "react";
import { getText } from "../locales";

const StudentTransfer = () => {
  return (
    <div className="service-pages">
    <div className="description container">
      <h1>{getText("headerSwiperTitle2")}</h1>
      <p>
        <span> {getText("StudentTransferSpanDesc1")} </span>
        {getText("StudentTransferDesc1")}
      </p>
      <p>
        <span> {getText("StudentTransferSpanDesc2")} </span>
        {getText("StudentTransferDesc2")}
      </p>
      <p>
        <span> {getText("StudentTransferSpanDesc3")} </span>
        {getText("StudentTransferDesc3")}
      </p>
      <p>
        <span> {getText("StudentTransferSpanDesc4")} </span>
        {getText("StudentTransferDesc4")}
      </p>
    </div>
  </div>
  );
};

export default StudentTransfer;
