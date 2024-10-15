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
                    TurkchaSoati
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.5">
                    O‘zbekistonda Turk tili ta'limiga yangicha yondashuv olib kelgan Turk Tili Darsi, shaxslar va tashkilotlar ehtiyojlariga moslashtirilgan maxsus ta'limlar taqdim etadi. Bizning maqsadimiz, til to‘siqlarini olib tashlash orqali talabalarga muvaffaqiyat sari yo‘l ko‘rsatishdir. Tajribali o‘qituvchilarimiz va innovatsion o‘qitish usullarimiz yordamida Turk tilini tez va samarali o‘rganishingizni ta'minlaymiz.
                </Text>
                <Link href="https://turkchasoati.uz/" isExternal color="teal.500" fontWeight="bold" fontSize="lg">
                    turkchasoati.uz <Icon as={FaExternalLinkAlt} ml={2} />
                </Link>
            </VStack>
            <Image
                src="https://media.istockphoto.com/id/546171270/photo/question-do-you-speak-turkish-written-in-turkish.jpg?b=1&s=170667a&w=0&k=20&c=ks-gITsS_8OnnmRPOfaic0UpCi5n7ugcp7_bCVCHYaE="
                alt="Turkish Language"
                borderRadius="15px"
                boxShadow="md"
            />
        </Box>
    );
}

export default TurkchaSoati;
