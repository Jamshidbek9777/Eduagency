import React from "react";
import { getText } from "../locales";

const ExpertTransfer = () => {
  return (
    <div className="service-pages">
    <div className="description container">
      <h1>{getText("headerSwiperTitle3")}</h1>
      <p>
        <span> {getText("ExpertTransferSpan1")} </span>
        {getText("ExpertTransfer1")}
      </p>
      <p>
        <span> {getText("ExpertTransferSpan2")} </span>
        {getText("ExpertTransfer2")}
      </p>
      <p>
        <span> {getText("ExpertTransferSpan3")} </span>
        {getText("ExpertTransfer3")}
      </p>
      <p>
        <span> {getText("ExpertTransferSpan4")} </span>
        {getText("ExpertTransfer4")}
      </p>
    </div>
  </div>
  );
};

export default ExpertTransfer;
