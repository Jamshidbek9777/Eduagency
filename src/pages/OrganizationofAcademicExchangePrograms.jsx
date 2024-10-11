/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

function OrganizationofAcademicExchangePrograms() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);
    return (
        <>
            <div className="container" style={{ paddingTop: "150px" }}>
                <p style={{ fontSize: "22px" }}>{getText("headerSwiperParagraph11")}</p>
                <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "20px", marginTop: "20px", fontSize: "30px" }}>{getText("OrganizationofAcademicExchangeProgramsAccordionServicesTitle")}</h4>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        {getText("OrganizationofAcademicExchangeProgramsAccordionTitle1")}

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>{getText("OrganizationofAcademicExchangeProgramsAccordionParagraph1")}</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        {getText("OrganizationofAcademicExchangeProgramsAccordionTitle2")}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>{getText("OrganizationofAcademicExchangeProgramsAccordionParagraph2")}</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        {getText("OrganizationofAcademicExchangeProgramsAccordionTitle3")}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>{getText("OrganizationofAcademicExchangeProgramsAccordionParagraph3")}</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        {getText("OrganizationofAcademicExchangeProgramsAccordionTitle4")}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>{getText("OrganizationofAcademicExchangeProgramsAccordionParagraph4")}</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        {getText("OrganizationofAcademicExchangeProgramsAccordionTitle5")}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>{getText("OrganizationofAcademicExchangeProgramsAccordionParagraph5")}
                                    </p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        {getText("OrganizationofAcademicExchangeProgramsAccordionTitle6")}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>{getText("OrganizationofAcademicExchangeProgramsAccordionParagraph6")}
                                    </p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>


                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default OrganizationofAcademicExchangePrograms