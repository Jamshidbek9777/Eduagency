/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
} from "@chakra-ui/react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function TurkiyeBurslari() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);
    return (
        <div>
            <div className="container" style={{ paddingTop: "150px" }}>
                <p style={{ fontSize: "18px" }}>{getText("TurkiyeBurslariP")}</p>
                <Accordion allowToggle style={{ paddingTop: "40px" }}>
                    {/* 1. Accordion Item - TÜRKİYE BURSLARI */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    {getText("TurkiyeBurslariAccordion1Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                {getText("TurkiyeBurslariAccordion1P")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 2. Accordion Item - BURS MİKTARLARI */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    {getText("TurkiyeBurslariAccordion2Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                <ul>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion2List1")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion2List2")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion2List3")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion2List4")}</li>
                                </ul>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 3. Accordion Item - NEDEN TÜRKİYE BURSLARI */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    {getText("TurkiyeBurslariAccordion3Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                <ul>
                                    <p style={{ fontSize: "18px", color: "black", fontWeight: "500" }}>{getText("TurkiyeBurslariAccordion3ListTitle")}</p>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion3List1")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion3List2")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion3List3")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion3List4")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion3List5")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion3List6")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion3List7")}</li>
                                </ul>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 4. Accordion Item - BAŞVURULAR */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    {getText("TurkiyeBurslariAccordion4Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                {getText("TurkiyeBurslariAccordion4P")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 5. Accordion Item - BAŞVURU İÇİN TEMEL KRİTERLER */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}

                                >
                                    {getText("TurkiyeBurslariAccordion5Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                <ul>
                                    <p style={{ fontSize: "18px", color: "black", fontWeight: "500" }}>{getText("TurkiyeBurslariAccordion5ListTitle")}</p>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion5List1")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion5List2")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion5List3")}</li>
                                </ul>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 6. Accordion Item - UYGUNLUK */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    {getText("TurkiyeBurslariAccordion6Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                <ul>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion6List1")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion6List2")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion6List3")}</li>
                                </ul>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* style={{ listStyle: "inside" }} */}
                    {/* style={{ fontSize: "18px", color: "black", fontWeight: "500" }} */}

                    {/* 7. Accordion Item - UYGUN OLMAYAN GRUPLAR */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    {getText("TurkiyeBurslariAccordion7Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                <ul>
                                    <li style={{ listStyle: "inside" }}>{getText('TurkiyeBurslariAccordion7List1')}</li>
                                    <li style={{ listStyle: "inside" }}>{getText('TurkiyeBurslariAccordion7List2')}</li>
                                </ul>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 8. Accordion Item - DEĞERLENDİRME VE SEÇİM */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    {getText("TurkiyeBurslariAccordion8Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                <ul>
                                    <p style={{ fontSize: "18px", color: "black", fontWeight: "500" }}>{getText("TurkiyeBurslariAccordion8ListTitle")}</p>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion8List1")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion8List2")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion8List3")}</li>
                                    <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion8List4")}</li>
                                </ul>
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TurkiyeBurslariAccordion9Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {getText("TurkiyeBurslariAccordion9P")}
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TurkiyeBurslariAccordion10Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {getText("TurkiyeBurslariAccordion10P")}
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TurkiyeBurslariAccordion11Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <ul>
                                <p style={{ fontSize: "18px", color: "black", fontWeight: "500" }}>{getText("TurkiyeBurslariAccordion11ListTitle")}</p>
                                <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion11List1")}</li>
                                <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion11List2")}</li>
                                <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion11List3")}</li>
                                <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion11List4")}</li>
                                <li style={{ listStyle: "inside" }}>{getText("TurkiyeBurslariAccordion11List5")}</li>
                            </ul>
                            <p>{getText("TurkiyeBurslariAccordion11P")}</p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TurkiyeBurslariAccordion12Title")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {getText("TurkiyeBurslariAccordion12P")}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default TurkiyeBurslari;
