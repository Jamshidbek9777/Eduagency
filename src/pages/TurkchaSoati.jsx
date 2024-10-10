/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Link, Icon, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaClock } from "react-icons/fa";

function TurkchaSoati() {
    return (
        <Box className="container" py="200px">
            <VStack spacing={5} align="center">
                <Icon as={FaClock} boxSize={12} color="teal.500" />
                <Heading as="h2" size="xl" color="teal.700">
                    TurkchaSoati
                </Heading>
                <Text fontSize="lg" textAlign="center" maxW="600px" color="gray.600">
                    Turk Dunyo eshiklarini oching…
                </Text>
                <Link href="https://turkchasoati.uz/" isExternal color="teal.500" fontWeight="bold" fontSize="lg">
                    turkchasoati.uz <Icon as={FaExternalLinkAlt} ml={2} />
                </Link>
            </VStack>
        </Box>
    );
}

export default TurkchaSoati;
