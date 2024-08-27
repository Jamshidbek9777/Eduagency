/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { allLists } from "../../data/allLists";

function AccordionUI() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lists, setLists] = useState([]);

  const handleTekrarClick = () => {
    const extractedLists = Array.from(document.querySelectorAll("li")).map(
      (item) => item.innerText
    );
    setLists(extractedLists);
    onOpen();
  };
  return (
    <div className="accordion_ui">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                1.⁠ ⁠Türkiyede okumanın avantajları nelerdir?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <a
              href="https://www.studyinturkiye.gov.tr/StudyinTurkey/ShowDetail?rID=r/bj33XIqnc=&&cId=PE4Nr0mMoY4="
              target="_blank"
              style={{ color: "blue" }}
            >
              Link
            </a>
            <p>bu linkteki yozmalari qoyalim</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                 2.⁠ ⁠Özbekler Turkiyada qanday shartlarda o'qiy oladilar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            O'zbek fuqarolari turkiyede bepul burslu va ucretli sifatida o'qiy
            oladilar. <br /> <br /> ücretsiz o'qish uchun YÖS imtihaninam
            girerek muvaffaqiyatli bo'lishi kerak. Bundan tashqari, qanday qilib
            o'qisangiz YTB burslaridan foyda olishingiz mumkin. <br /> <br />{" "}
            geniş için bilgi
            <a
              href="https://eduagency.uz/"
              target="_blank"
              style={{ color: "blue" }}
            >
              {" "}
              eduageny.uz{" "}
            </a>
            bilan irtibata o'tishingiz.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                 3.⁠ ⁠Turkiyenin en iyi universitetleri hangileridir?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <ul>
              <li>
                <p>Koç Üniversitesi</p>
              </li>
              <li>
                <p>Hacettepe Üniversitesi</p>
              </li>
              <li>
                <p>Orta Doğu Teknik Üniversitesi (ODTÜ)</p>
              </li>
              <li>
                <p>Ankara Üniversitesi </p>
              </li>
              <li>
                <p>İstanbul Teknik Üniversitesi (İTÜ)</p>
              </li>
              <li>
                <p>İstanbul Üniversitesi</p>
              </li>
              <li>
                <p>Sabancı Üniversitesi </p>
              </li>
              <li>
                <p>Gazi Üniversitesi </p>
              </li>
              <li>
                <p>Ege Üniversitesi</p>
              </li>
              <li>
                <p>İstanbul Üniversitesi-Cerrahpaşa</p>
              </li>
              <li>
                <p>İhsan Doğramacı Bilkent Üniversitesi </p>
              </li>
              <li>
                <p>Gebze Teknik Üniversitesi </p>
              </li>
              <li>
                <p>Marmara Üniversitesi </p>
              </li>
              <li>
                <p>Yıldız Teknik Üniversitesi</p>
              </li>
              <li>
                <p>Erciyes Üniversitesi</p>
              </li>
              <li>
                <p>Atatürk Üniversitesi</p>
              </li>
              <li>
                <p>Boğaziçi Üniversitesi</p>
              </li>
              <li>
                <p>Dokuz Eylül Üniversitesi</p>
              </li>
              <li>
                <p>Fırat Üniversitesi </p>
              </li>
              <li>
                <p>Çukurova Üniversitesi </p>
              </li>
              <li
                style={{ color: "blue", cursor: "pointer", fontSize: "18px" }}
                onClick={handleTekrarClick}
              >
                Tekrar...
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                4.⁠ ⁠türkiyede üniversitede okuyan özbekistanlı öğrenci sayısı
                kaçtır
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              İstatistik kurumundan alınan bilgilere göre Türkiyede özel yahut
              devlette üniversite okuyan özbek vatandaşı öğrenci sayısı 3896
              erkek 2351 kız olmak üzere toplam 6247 öğrenci vardır.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                5.⁠ ⁠Türk üniversitelerinde okumak maliyetli mi ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              Türkiyede her bütçeye hitap özel vakıf üniversiteler
              bulunmaktadır. Genel olarak çok maliyetli değildir.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                 6.⁠ ⁠Türkiye’de yemek kültürü nasıl?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              Türkiye yemek kültürü çok çeşitli ve ilgi çekicidir. Türkiye
              mutfağı dünyanın önde gelen mutfakları arasında yerini almıştır.
              Özbek öğrenciler için türk mutfağına adapte olmak çok kolay ve
              keyiflidir.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                 7.⁠ ⁠Türkiye’de okuyan öğrenciler nerelerde yaşayabilirler ?
                yurtlar güvenli mi ? ücretleri ne kadar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              Üniversite öğrencileri genellikle kendi uyruktan insanlarla
              beraber ev kiralayabilir veya özel yahut devletin Kredi yurtlar
              kurumunda kalabilirler. Öğrencilere ilk yıl bir yurt ortamında
              kalmaları tavsiye edilir.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                 8.⁠ ⁠İstanbul ilçelerine göre kiralık ev fiyatları yaklaşık ne
                kadar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              15.000 tl ile 30.000 tl arasında değişen ücretlerde öğrenci evi
              bulmak mümkün.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                  9.⁠ ⁠Türkiye’de okumak için türkçe seviyeniz ne olmalı?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              hazırlık sınıfı okumak istemiyorsanız C1 seviyesinde Türkçenizin
              olması istenmektedir.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                 10. Özbeklerin en çok tercih ettiği türk üniversiteleri
                hangileridirr?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <p>ANADOLU ÜNİVERSİTESİ</p>
              <p>BANDIRMA ONYEDİ EYLÜL ÜNİVERSİTESİ</p>
              <p>BOLU ABANT İZZET BAYSAL ÜNİVERSİTESİ</p>
              <p>DOKUZ EYLÜL ÜNİVERSİTESİ</p>
              <p>FATİH SULTAN MEHMET VAKIF ÜNİVERSİTESİ</p>
              <p>İSTANBUL ATLAS ÜNİVERSİTESİ</p>
              <p>İSTANBUL KENT ÜNİVERSİTESİ</p>
              <p>İSTANBUL RUMELİ ÜNİVERSİTESİ</p>
              <p>İSTANBUL ŞİŞLİ MESLEK YÜKSEKOKULU</p>
              <p>İSTANBUL TOPKAPI ÜNİVERSİTESİ</p>
              <p>İSTANBUL ÜNİVERSİTESİ</p>
              <p>İSTANBUL YENİ YÜZYIL ÜNİVERSİTESİ</p>
              <p>KARABÜK ÜNİVERSİTESİ</p>
              <p>KIRKLARELİ ÜNİVERSİTESİ</p>
              <p>ONDOKUZ MAYIS ÜNİVERSİTESİ</p>
              <p>SAĞLIK BİLİMLERİ ÜNİVERSİTESİ</p>
              <p>SAKARYA ÜNİVERSİTESİ</p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                12. Özbekistanlı öğrenciler Türkiye’de okumalarında nelere
                dikkat etmeliler?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              2024 Turkiyaning eng yaxshi universitetlari umumiy tartibini
              yozishni davom ettirishda incelashingiz mumkin.{" "}
              <a
                href="https://newtr.urapcenter.org/Rankings/2023-2024/GENEL-SIRALAMASI-2023"
                target="_blank"
              >
                URAP
              </a>{" "}
              rasmiy sahifasiga tashrif buyurishingiz mumkin .
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                13.⁠ ⁠Özbekistanlı ebeveynlerin en çok sorduğu soru-cevaplar
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              2024 Turkiyaning eng yaxshi universitetlari umumiy tartibini
              yozishni davom ettirishda incelashingiz mumkin.{" "}
              <a
                href="https://newtr.urapcenter.org/Rankings/2023-2024/GENEL-SIRALAMASI-2023"
                target="_blank"
              >
                URAP
              </a>{" "}
              rasmiy sahifasiga tashrif buyurishingiz mumkin .
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                // style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
                className="accerdionHeading"
              >
                14. Öğrenciler hem okuyup hem çalışabilir mi?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              2024 Turkiyaning eng yaxshi universitetlari umumiy tartibini
              yozishni davom ettirishda incelashingiz mumkin.{" "}
              <a
                href="https://newtr.urapcenter.org/Rankings/2023-2024/GENEL-SIRALAMASI-2023"
                target="_blank"
              >
                URAP
              </a>{" "}
              rasmiy sahifasiga tashrif buyurishingiz mumkin .
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" className="modall">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Türkiye'deki üniversitelerin listesi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3} align="start">
              {allLists.map((item, index) => (
                <Box key={index} p={2} borderRadius="md" bg="gray.50" w="full">
                  {item.linkName}
                </Box>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              kapatmak
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AccordionUI;
