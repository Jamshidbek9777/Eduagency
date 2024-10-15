/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Link, Icon, VStack, Image } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

function TurkiyeBurslari() {
    return (
        <Box
            className="container turkchasoati_page"
            py={{ base: "100px", md: "200px" }}
            px={{ base: "20px", md: "50px" }}

        >
            <VStack spacing={5} align="start" maxW="600px">
                <Heading as="h2" size="xl" color="teal.700" textAlign="left">
                    Turkiya Burslari
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.5">
                    Biz, Turkiya Grantlari bo'yicha ixtisoslashgan, ta'lim dunyosiga yo'n beradigan maslahat firmamiz. Maqsadimiz, O'zbekistondagi yoshlarga jahon standartlariga mos ta'lim olish imkoniyatini yaratish.

                    Turkiyaning nufuzli universitetlarida grant asosida ta'lim olish imkoniyatlarini taqdim etib, talabalarimizga orzularidan ham yuqori marralarga erishish yo'lida yordam beramiz.

                    Akademik maqsadlaringiz qanday bo'lishidan qat'i nazar, biz bu yo'lda siz bilan birga yurib, to'g'ri universitet va grant dasturlarini tanlashda ko'maklashamiz.

                    Sizning muvaffaqiyatingiz uchun zarur bo'lgan barcha ma'lumotlar, qo'llab-quvvatlash va yo'l-yo'riqlarni taqdim etishni va'da qilamiz.
                </Text>
                <Link href="http://turkiyaburslari.uz/" isExternal color="teal.500" fontWeight="bold" fontSize="lg">
                    turkiyaburslari.uz <Icon as={FaExternalLinkAlt} ml={2} />
                </Link>
            </VStack>
            <Image
                src="https://tokboxvideoarchive.s3.eu-west-3.amazonaws.com/blogs/images/1yiWDqWnt4VrpjqPjcXdobzK7n8cOUcJYPbgHc6Y.webp"
                borderRadius="15px"
                boxShadow="md"
                className="kosmosX_img"
            />
        </Box>
    );
}

export default TurkiyeBurslari;
