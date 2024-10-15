/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Link, Icon, VStack, Image } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Airtravel() {
    return (
        <Box
            className="container turkchasoati_page"
            py={{ base: "100px", md: "200px" }}
            px={{ base: "20px", md: "50px" }}

        >
            <VStack spacing={5} align="start" maxW="600px">
                <Heading as="h2" size="xl" color="teal.700" textAlign="left">
                    Air Travel
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.5">
                    Work & Travel — bu talabalarga yozgi ta'til paytida AQShda ishlash va sayohat qilish imkoniyatini beruvchi dasturdir. Ushbu dastur orqali talaba o'zining ingliz tilini yaxshilash, yangi madaniyatni o'rganish va xalqaro tajriba orttirish imkoniyatiga ega bo'ladi.
                </Text>
                <Link href="https://travel-khaki-one.vercel.app/" isExternal color="teal.500" fontWeight="bold" fontSize="lg">
                    travel-khaki-one.vercel.app <Icon as={FaExternalLinkAlt} ml={2} />
                </Link>
            </VStack>
            <Image
                src="https://travel-khaki-one.vercel.app/img/travel.png"
                borderRadius="15px"
                boxShadow="md"
                className="kosmosX_img"
            />
        </Box>
    );
}

export default Airtravel;
