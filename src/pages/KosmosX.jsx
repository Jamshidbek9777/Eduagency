/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Link, Icon, VStack, Image } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

function KosmosX() {
    return (
        <Box
            className="container turkchasoati_page"
            py={{ base: "100px", md: "200px" }}
            px={{ base: "20px", md: "50px" }}

        >
            <VStack spacing={5} align="start" maxW="600px">
                <Heading as="h2" size="xl" color="teal.700" textAlign="left">
                    KosmosX
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.5">
                    Bizning kompaniyamiz O‘zbekistondan talabalarni Turkiyadagi kosmik lagerga jo‘natuvchi yagona vakolatli muassasa bo‘lib, talabalarga ular orzu qilgan kosmik tadqiqotlar tajribasini taqdim etishni maqsad qilgan. Yillar davomida orttirgan tajribamiz bilan biz akademik va qiziqarli tajribani taqdim etamiz. Talabalarning fan va texnikaga qiziqishini oshirish orqali kelajak olimlarini yetishtirishni maqsad qilganmiz.
                </Text>
                <Link href="https://kosmos-x.vercel.app/" isExternal color="teal.500" fontWeight="bold" fontSize="lg">
                    kosmos-x.vercel.app <Icon as={FaExternalLinkAlt} ml={2} />
                </Link>
            </VStack>
            <Image
                src="https://nikvesti.com/images/imageeditor/2023/12/5/280601/280601_656f08721933c2_25897340.jpg"
                borderRadius="15px"
                boxShadow="md"
                className="kosmosX_img"
            />
        </Box>
    );
}

export default KosmosX;
