/* eslint-disable no-unused-vars */
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text
} from "@chakra-ui/react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function OfficialRepresentativeServices() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);
    return (
        <div className="container offical-rep" style={{ paddingTop: "50px" }}>
            <div className="description">
                <h1>
                    {getText("OfficialRepresentativeServicesTitle")}
                </h1>
                <p>
                    {getText("OfficialRepresentativeServicesP")}
                </p>

                <h2>{getText("OfficialRepresentativeServicesH2")}</h2>

                <Accordion allowToggle style={{ marginTop: "20px" }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black" }}
                                    fontSize="24px"
                                >
                                    {getText("OfficialRepresentativeServicesAccordionTitle1")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color="#666666">
                            <Text fontSize="md">
                                {getText("OfficialRepresentativeServicesAccordionP1")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black" }}
                                    fontSize="24px"
                                >
                                    {getText("OfficialRepresentativeServicesAccordionTitle2")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color="#666666">
                            <Text fontSize="md">
                                {getText("OfficialRepresentativeServicesAccordionP2")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black" }}
                                    fontSize="24px"
                                >
                                    {getText("OfficialRepresentativeServicesAccordionTitle3")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color="#666666">
                            <Text fontSize="md">
                                {getText("OfficialRepresentativeServicesAccordionP3")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black" }}
                                    fontSize="24px"
                                >
                                    {getText("OfficialRepresentativeServicesAccordionTitle4")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color="#666666">
                            <Text fontSize="md">
                                {getText("OfficialRepresentativeServicesAccordionP4")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black" }}
                                    fontSize="24px"
                                >
                                    {getText("OfficialRepresentativeServicesAccordionTitle5")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color="#666666">
                            <Text fontSize="md">
                                {getText("OfficialRepresentativeServicesAccordionP5")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black" }}
                                    fontSize="24px"
                                >
                                    {getText("OfficialRepresentativeServicesAccordionTitle6")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color="#666666">
                            <Text fontSize="md">
                                {getText("OfficialRepresentativeServicesAccordionP6")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black" }}
                                    fontSize="24px"
                                >
                                    {getText("OfficialRepresentativeServicesAccordionTitleQ")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color="#666666">
                            <Text fontSize="md">
                                <ul>
                                    <li>
                                        <span>{getText("OfficialRepresentativeServicesAccordionQSpan1")}</span> {getText("OfficialRepresentativeServicesAccordionQP1")}
                                    </li>
                                    <li>
                                        <span>{getText("OfficialRepresentativeServicesAccordionQSpan2")}</span> {getText("OfficialRepresentativeServicesAccordionQP2")}
                                    </li>
                                    <li>
                                        <span>{getText("OfficialRepresentativeServicesAccordionQSpan3")}</span> {getText("OfficialRepresentativeServicesAccordionQP3")}
                                    </li>
                                    <li>
                                        <span>{getText("OfficialRepresentativeServicesAccordionQSpan4")}</span> {getText("OfficialRepresentativeServicesAccordionQP4")}
                                    </li>
                                </ul>
                                <span>{getText("OfficialRepresentativeServicesAccordionEndSpan")}</span>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default OfficialRepresentativeServices;
