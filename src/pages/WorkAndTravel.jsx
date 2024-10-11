/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function WorkAndTravel() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <>
      <Box className="container" pt="200px" maxW="container.md" mx="auto" px={4}>
        {/* Header Section */}
        <Box textAlign="start" mb={8}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="bold"
            color="black"
            mb={4}
          >
            {getText("WorkAndTravelTitle")}
          </Heading>
          <Text fontSize="22px" color="gray.600">
            {getText("WorkAndTravelParagraph")}
          </Text>
        </Box>

        {/* Accordion Section */}
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="xl"
                color="teal.700"
              >
                {getText("WorkAndTravelAccordionTitle1")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} mt={3} color="gray.600">
              <Text mb={2}>
                {getText("WorkAndTravelAccordionParagraph1")}
              </Text>
              <Text>
                {getText("WorkAndTravelAccordionParagraph11")}
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="xl"
                color="teal.700"
              >
                {getText("WorkAndTravelAccordionTitle2")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} mt={3} color="gray.600">
              <Text>
                {getText("WorkAndTravelAccordionParagraph2")}
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="xl"
                color="teal.700"
              >
                {getText("WorkAndTravelAccordionTitle3")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} mt={3} color="gray.600">
              <List spacing={3} ml={4}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="teal.500" />
                  <strong>{getText("WorkAndTravelAccordionParagraph3Strong1")}</strong> {getText("WorkAndTravelAccordionParagraph3P1")}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="teal.500" />
                  <strong>{getText("WorkAndTravelAccordionParagraph3Strong2")}</strong> {getText("WorkAndTravelAccordionParagraph3P2")}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="teal.500" />
                  <strong>{getText("WorkAndTravelAccordionParagraph3Strong3")}</strong> {getText("WorkAndTravelAccordionParagraph3P3")}
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="xl"
                color="teal.700"
              >
                {getText("WorkAndTravelAccordionTitle4")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} mt={3} color="gray.600">
              <List spacing={3} ml={4}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="teal.500" />
                  <strong>{getText("WorkAndTravelAccordionParagraph4Strong1")}</strong> {getText("WorkAndTravelAccordionParagraph4P1")}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="teal.500" />
                  <strong>{getText("WorkAndTravelAccordionParagraph4Strong2")}</strong>  {getText("WorkAndTravelAccordionParagraph4P2")}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="teal.500" />
                  <strong>{getText("WorkAndTravelAccordionParagraph4Strong3")}</strong>  {getText("WorkAndTravelAccordionParagraph4P3")}
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="xl"
                color="teal.700"
              >
                {getText("WorkAndTravelAccordionTitle5")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} mt={3} color="gray.600">
              <Text>
                {getText("WorkAndTravelAccordionParagraph5")}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box mt={8} textAlign="start">
          <Heading as="h4" size="lg" color="black" mb={4}>
            {getText("WorkAndTravelEndTitle")}
          </Heading>
          <Text fontSize="lg" color="gray.600">
            {getText("WorkAndTravelEndParagraph")}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default WorkAndTravel;
