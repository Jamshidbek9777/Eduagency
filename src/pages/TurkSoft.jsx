/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Link, Icon, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

function TurkSoft() {
    return (
        <Box className="container" py="200px">
            <VStack spacing={5} align="center">
                {/* <Icon as={FaClock} boxSize={12} color="teal.500" /> */}
                <Heading as="h2" size="xl" color="teal.700">
                    TurkoSoft
                </Heading>
                <Text fontSize="lg" textAlign="center" maxW="600px" color="gray.600">
                    Ta'lim texnologiya transferi
                </Text>
                <Link href="https://www.turkosoft.uz/" isExternal color="teal.500" fontWeight="bold" fontSize="lg">
                    turkosoft.uz <Icon as={FaExternalLinkAlt} ml={2} />
                </Link>
            </VStack>
        </Box>
    );
}

export default TurkSoft;
