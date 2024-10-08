/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
function OnlineCertificate() {
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <>
            <div className="service-pages">
                <div className="description container">
                    <h1>{getText("headerSwiperTitle9")}</h1>
                    <p>{getText("OnlineCertificateParagraph")}</p>

                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        style={{ color: "black", fontWeight: "600", fontSize: "24px", }}
                                    >
                                        {getText("OnlineCertificateAccordionTitle")}

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color={"#666666"}>
                                <div style={{ marginLeft: "20px" }}>
                                    <ul>
                                        <li>{getText("OnlineCertificateAccordionList1")}</li>
                                        <li>{getText("OnlineCertificateAccordionList2")}</li>
                                        <li>{getText("OnlineCertificateAccordionList3")}</li>
                                        <li>{getText("OnlineCertificateAccordionList4")}</li>
                                        <li>{getText("OnlineCertificateAccordionList5")}</li>
                                    </ul>
                                    <p>{getText("OnlineCertificateEndParagraph")}</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
            <div>
                <Getintouch />
            </div>
        </>
    )
}

export default OnlineCertificate

