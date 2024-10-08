
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
function LearningLeader() {
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <>
            <div className="service-pages">
                <div className="description container">
                    <h1>{getText("headerSwiperTitle10")}</h1>
                    <p>{getText("InternationalTeacherParagraph")}</p>

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
                                        {getText("InternationalTeacherAccordionTitle1")}

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color={"#666666"}>
                                <div style={{ marginLeft: "20px" }}>
                                    <ul>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle1Paragraph1Span1")}</span> {getText("InternationalTeacherAccordionTitle1Paragraph1")}</li>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle1Paragraph1Span2")}</span> {getText("InternationalTeacherAccordionTitle1Paragraph2")}</li>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle1Paragraph1Span3")}</span> {getText("InternationalTeacherAccordionTitle1Paragraph3")}</li>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle1Paragraph1Span4")}</span> {getText("InternationalTeacherAccordionTitle1Paragraph4")}</li>
                                    </ul>
                                    <p>{getText("OnlineCertificateEndParagraph")}</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        as="span"
                                        flex="1"
                                        textAlign="left"
                                        style={{ color: "black", fontWeight: "600", fontSize: "24px", }}
                                    >
                                        {getText("InternationalTeacherAccordionTitle2")}

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color={"#666666"}>
                                <div style={{ marginLeft: "20px" }}>
                                    <ul>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle2Paragraph1Span1")}</span> {getText("InternationalTeacherAccordionTitle2Paragraph1")}</li>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle2Paragraph1Span2")}</span> {getText("InternationalTeacherAccordionTitle2Paragraph2")}</li>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle2Paragraph1Span3")}</span> {getText("InternationalTeacherAccordionTitle2Paragraph3")}</li>
                                        <li><span style={{ fontWeight: "600", color: "black" }}>{getText("InternationalTeacherAccordionTitle2Paragraph1Span4")}</span> {getText("InternationalTeacherAccordionTitle2Paragraph4")}</li>
                                    </ul>
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

export default LearningLeader



// export default LearningLeader