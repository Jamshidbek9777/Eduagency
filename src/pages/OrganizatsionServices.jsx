/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";
function OrganizatsionServices() {
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <>
            <div className="service-pages">
                <div className="description container">
                    <h1>{getText("headerSwiperTitle4")}</h1>
                    {/* <p>{getText("TurkeyDiliParagrf2")}</p> */}
                    {/* <p style={{marginLeft: "15px"}}>{getText("TurkeyDiliSpan1")}</p> */}
                    <p style={{ marginLeft: "15px" }}>{getText("OrganizationP1")}</p>
                    <p style={{ marginLeft: "15px" }}>{getText("OrganizationP2")}</p>
                    <p>
                        {/* <span>{getText("TurkeyDiliSpan2")}</span> */}
                        {/* {getText("TurkeyDili2")} */}
                    </p>
                    <p>
                        {/* <span>{getText("TurkeyDiliSpan3")}</span> */}
                        {/* {getText("TurkeyDili3")} */}
                    </p>
                    {/* <h4>{getText("TurkeyDiliEndFourListTitle")}</h4>
          <ul style={{ marginTop: "10px" }}>
            <li>
              <p>{getText("TurkeyDiliList1")}</p>
            </li>
            <li>
              <p>{getText("TurkeyDiliList2")}</p>
            </li>
            <li>
              <p>{getText("TurkeyDiliList3")}</p>
            </li>
            <li>
              <p>{getText("TurkeyDiliList4")}</p>
            </li>
          </ul> */}
                </div>
            </div>
            <div>
                <Getintouch />
            </div>
        </>
    )
}

export default OrganizatsionServices