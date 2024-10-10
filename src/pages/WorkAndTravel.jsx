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
  
  function WorkAndTravel() {
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
              Work and Travel ile Amerika’da Hayatınızı Değiştirin!
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Özbekistan’ın en güvenilir ve deneyimli Work and Travel firması
              olarak, gençlerimizi ABD’ye hem çalışmak hem de farklı kültürleri
              keşfetmek üzere gönderiyoruz. Her adımda yanınızda olarak, size
              güvenli, keyifli ve kazançlı bir yolculuk sunmayı hedefliyoruz.
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
                  Amerika’da Çalışmak ve Geleceğinize Yatırım Yapmak
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} mt={3} color="gray.600">
                <Text mb={2}>
                  Work and Travel, sadece bir iş programı değildir; aynı zamanda
                  hayatı farklı bir pencereden görmenizi sağlayan eşsiz bir
                  fırsattır. ABD’de çalışarak para kazanırken, uluslararası iş
                  tecrübesi edinir ve özgeçmişinize önemli bir katkı sağlarsınız.
                </Text>
                <Text>
                  Amerikalı işverenler ve çalışanlarla kaynaşarak İngilizce dil
                  becerilerinizi geliştirirsiniz. Bu süreç, gelecek kariyeriniz
                  için altın bir basamak olacaktır.
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
                  Kültürlerin Buluştuğu Nokta
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} mt={3} color="gray.600">
                <Text>
                  Amerika, dünya çapında birçok kültürün bir arada yaşadığı eşsiz
                  bir ülkedir. Farklı kültürlerle iç içe olmak, Özbek
                  misafirperverliği ve değerlerine olan bağlılığınızı dünya çapında
                  tanıtma fırsatıdır.
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
                  Bizimle Work and Travel Yapmanın Avantajları
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} mt={3} color="gray.600">
                <List spacing={3} ml={4}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    <strong>Deneyim ve Güven:</strong> Yılların tecrübesine sahip
                    firmamız, her yıl sayısız öğrenciyi güvenle Amerika’ya
                    göndermektedir.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    <strong>Vize ve Seyahat Desteği:</strong> Belgelerin
                    hazırlanmasından mülakat sürecine kadar her aşamada sizlere
                    rehberlik ediyoruz.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    <strong>ABD’de Destek Hattı:</strong> Amerika’da bulunduğunuz
                    sürede de sizi yalnız bırakmıyoruz.
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
                  Work and Travel Programı Size Ne Kazandırır?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} mt={3} color="gray.600">
                <List spacing={3} ml={4}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    <strong>Maddi Kazanç:</strong> Amerika’da çalışarak, hem kendi
                    harcamalarınızı karşılayacak hem de birikim yapma şansına
                    sahip olacaksınız.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    <strong>Kültürel Zenginlik:</strong> ABD, dünyanın en dinamik
                    ve çeşitli ülkelerinden biridir.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    <strong>Kariyer Fırsatları:</strong> ABD’de elde edeceğiniz
                    uluslararası iş deneyimi, gelecekteki kariyerinizde size büyük
                    avantaj sağlayacaktır.
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
                  Geleceğe Giden Yol Bizimle Başlar
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} mt={3} color="gray.600">
                <Text>
                  Bizimle birlikte bu yolculuğa çıktığınızda, sadece bir iş
                  tecrübesi değil, aynı zamanda hayatınızı değiştirecek bir
                  maceraya atılmış olacaksınız. Ailenizin güvenini kazanmak ve
                  sizin için en iyi olanı sunmak bizim önceliğimizdir.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
  
          <Box mt={8} textAlign="start">
            <Heading as="h4" size="lg" color="black" mb={4}>
              Amerika’da hem çalışmak hem de dünyayı keşfetmek için hazır mısınız?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Geleceğinize yatırım yapmak ve unutulmaz bir deneyim yaşamak için
              bize katılın!
            </Text>
          </Box>
        </Box>
      </>
    );
  }
  
  export default WorkAndTravel;
  