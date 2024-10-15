/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Link, Icon, VStack, Image } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

function TurkchaSoati() {
    return (
        <Box
            className="container turkchasoati_page"
            py={{ base: "100px", md: "200px" }}
            px={{ base: "20px", md: "50px" }}

        >
            <VStack spacing={5} align="start" maxW="600px">
                <Heading as="h2" size="xl" color="teal.700" textAlign="left">
                    TurkoSoft
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.5">
                    «TURKOSOFT» MCHJ Farg'ona viloyatida 2023 yil oktyabr oyida dasturiy ta'minot ishlab chiqaruvchi kompaniya sifatida tashkil etilgan. U Markaziy Osiyoda raqamli texnologiyalarni ishlab chiqarish va uzatish bo'yicha etakchi kompaniya bo'lish uchun tashkil etilgan. Turkiyada Okulaile, MentalUP kabi dasturlarning distribyutoridir. Ushbu dasturiy ta'minotni sotishdan tashqari, biz faoliyat sohalarimizdagi o'zgarishlarni, xususiy va davlat muassasalarining reaktsiyalarini kuzatamiz, ehtiyojlarni tahlil qilish asosida investitsiya va dizayn imkoniyatlarining texnik-iqtisodiy asoslarini yaratamiz. Biz mavjud ma'lumotlarga asoslanib, sherik kompaniyalar bilan birgalikda mahsulot va xizmat paketlarini etkazib berishni rejalashtirmoqdamiz.
                </Text>
                <Link href="https://www.turkosoft.uz/" isExternal color="teal.500" fontWeight="bold" fontSize="lg">
                    turkosoft.uz <Icon as={FaExternalLinkAlt} ml={2} />
                </Link>
            </VStack>
            <Image
                src="https://www.turkosoft.uz/img/header1.png"
                borderRadius="15px"
                boxShadow="md"
                className="turkosoft_img"
            />
        </Box>
    );
}

export default TurkchaSoati;
