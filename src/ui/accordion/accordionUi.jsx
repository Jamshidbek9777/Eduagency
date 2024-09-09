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
import React, { useContext, useState } from "react";
import useListData from "../../data/allLists";
import { getText } from "../../locales";
import { LanguageContext } from "../../context/LanguageContext";

function AccordionUI() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lists, setLists] = useState([]);
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  const allListData = useListData();

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
                {getText("question1Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div style={{color: "#666666"}}>
              <div>
                <h5>1. Kaliteli Yükseköğrenim Olanakları</h5>

                <p style={{ marginTop: "20px" }}>
                  Türkiye, yükseköğretime erişimde %94.2’lik yükseköğretimde
                  okullaşma oranıyla dünyada ikinci ülke konumundadır. Avrupa
                  Yükseköğretim Alanına dâhil olan Türkiye, Bologna Sürecini
                  mükemmel bir şekilde uygulamakta olup; Bologna karnesi 5
                  üzerinden 5’tir. Yani Türkiye’deki bir üniversiteden aldığınız
                  diploma tüm Avrupa ülkelerinde tanınmaktadır! Ders kredi
                  sisteminde Avrupa ile uyumlu olarak AKTS uygulanmakta ve tüm
                  öğrencilere Diploma Eki verilmektedir. Ayrıca Türkiye,
                  Erasmus+ kapsamında değişime katılan en başarılı ülkelerden
                  biridir. Erasmus’un yanı sıra Türkiye’de öğrenci ve öğretim
                  elemanı hareketliliğini destekleyen Mevlana, Farabi gibi
                  birçok değişim programı bulunmaktadır.
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>2. Üniversite ve Program Çeşitliliği</h5>
                <p style={{ marginTop: "20px" }}>
                  85 Milyon nüfuslu Türkiye’de 208 üniversite bulunmaktadır.
                  Öğrenci sayısı 7 milyondan fazladır. Bu öğrenci sayısıyla
                  Türkiye, Avrupa Yükseköğretim Alanında en fazla öğrencisi
                  olan, birinci ülkedir. 208 üniversitede 45.000'den fazla
                  program yer almaktadır. Böylesi bir çeşitlilikte mutlaka
                  kendinize uygun bir üniversite ve program bulacaksınız.
                </p>
              </div>
              <div style={{ marginTop: "20px" }}> 
                <h5>3. Çok Kültürlü Yaşam</h5>
                <p style={{ marginTop: "20px" }}>
                  Binlerce yıldır topraklarında birçok köklü medeniyete ev
                  sahipliği yapmış olan Türkiye, adeta bir kültür mozaiğidir!
                  Sayısız medeniyete ev sahipliği yapmış bu ülkede herkes
                  birbirine karşı hoşgörülü ve saygılıdır. Kendi köklerinizden
                  bir parça bulabileceğiniz, belki de dilinizi konuşan
                  insanlarla tanışabileceğiniz Türkiye, güvenli ve huzurlu
                  ortamıyla öğrenciler için idealdir.
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>4. Doğal Güzellikler</h5>
                <p style={{ marginTop: "20px" }}>
                  Dört mevsimin yaşandığı Türkiye, doğal güzellikleri ile tüm
                  dünyada ün salmıştır. Türkiye’nin etrafını çeviren denizlerde
                  yüzmenin, su sporlarının tadını çıkarabilir; birçok şehirde
                  bulunan dağlarında kayak yapabilir; nehirlerinde rafting
                  deneyebilir ve birçok ekstrem sporu yaşayabilirsiniz. Sadece
                  manzarası ile büyüleyecek sayısız güzelliğe sahip Türkiye’de
                  cennette gibi hissedeceksiniz!
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>5. Tarihi ve Kültürel Birikim</h5>
                <p style={{ marginTop: "20px" }}>
                  Köklü bir geçmişe dayanan Türkiye’de birçoğu UNESCO Kültür
                  Mirası olarak korunan binlerce tarihi ve kültürel eser
                  bulunmaktadır. Günlük yaşantınızda bile sıklıkla
                  karşılaşabileceğiniz izlerin etkisini sürmek isteyeceksiniz!
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>6. Öğrenci Dostu</h5>
                <p style={{ marginTop: "20px" }}>
                  Her şehrinde en az bir üniversite bulunan Türkiye tam bir
                  öğrenci dostu ülkedir! Her üniversitede bulunan sosyal
                  kulüpler, spor takımları, kültürel etkinlikler öğrencileri bir
                  araya getirmekte; uzak coğrafyaları yakın kılmaktadır.
                  Türkiye’ye geldiğinizde şehrin en hareketli noktalarının
                  öğrencilerin sosyalleştiği yerler olduğunu anlayacaksınız!
                  Öğrencilerin takıldığı kafeler, restoranlar, kütüphaneler
                  sayesinde şehirler 24 saat yaşamaktadır.
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>7. Misafirperver Türk Halkı</h5>
                <p style={{ marginTop: "20px" }}>
                  Türk halkının misafirperverliği tüm dünyada dillere destan
                  olmuştur! Bir öğrenci olarak kimden yardım isteseniz size tüm
                  içtenliği ve güleryüzüyle elinden geleni yapacaktır. Türkler,
                  sizi misafirleri olarak ağırlayacak ve memnun kalmanız için
                  birçok ikramda bulunacaktır. Emin olun burada ev özlemi
                  çekmeyeceksiniz!
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>8. Çağı Yakalayan Teknolojik Kampüsler</h5>
                <p style={{ marginTop: "20px" }}>
                  208 üniversitenin hangisine giderseniz gidin, son teknoloji
                  ile donatılmış, modern ve elverişli bir kampüs hayatı
                  yaşayacaksınız.
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>9. Kolay Yaşam Koşulları</h5>
                <p style={{ marginTop: "20px" }}>
                  Türkiye’de yaşam birçok ülkeye göre daha uygundur. Konaklama,
                  yeme-içme, eğlence gibi ihtiyaçlarınızı karşılanabilir bir
                  düzeyde giderebilirsiniz. Üniversite kampüslerinin içlerinde
                  veya yakınlarında yer alan yurtlarda kalabilir ya da makul bir
                  kira ödeyerek ev tutabilirsiniz. Ayrıca bir öğrenci olarak
                  hangi ulaşım aracını seçerseniz seçin, indirimli fiyattan
                  bilet alırsınız veya sinemada izlemek istediğiniz filmi daha
                  ucuza izlersiniz. <br />
                  <br />
                  Ayrıca Türkiye, Asya ve Avrupa kıtalarının ortasında olması
                  nedeniyle ulaşması kolay bir ülkedir. Gezilecek sayısız yere
                  ev sahipliği yapan Türkiye’yi keşfetmek için hangi ulaşım
                  yolunu seçerseniz seçin, varmak istediğiniz yere hızlı ve
                  konforlu bir şekilde varabilirsiniz.
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h5>10. Türkçe Öğrenme Olanağı</h5>
                <p style={{ marginTop: "20px" }}>
                  Türkiye’deki üniversitelerin birçok programının İngilizce
                  olmasının yanı sıra, Dünyada en çok konuşulan 5. dil olan
                  Türkçeyi de öğrenebilirsiniz! Üniversitenizin size sunacağı
                  Türkçe kurslarında hem yeni bir dili öğrenme şansını
                  yakalayabilir hem de birçok farklı kültürden gelen kişilerle
                  arkadaş olabilirsiniz.
                </p>
              </div>
            </div>
            {/* <p>{getText("question1Desc")}</p> */}
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
                {getText("question2Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            {getText("question2Desc1")} <br /> <br />{" "}
            {getText("question2Desc2")} <br /> <br />{" "}
            {getText("question2Desc3")}
            <a
              href="https://eduagency.uz/"
              target="_blank"
              style={{ color: "blue" }}
            >
              {" "}
              eduageny.uz{" "}
            </a>
            {getText("question2Desc4")}
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
                {getText("question3Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <ul>
              <li>
                <p>{getText("question3List1")}</p>
              </li>
              <li>
                <p>{getText("question3List2")}</p>
              </li>
              <li>
                <p>{getText("question3List3")}</p>
              </li>
              <li>
                <p>{getText("question3List4")}</p>
              </li>
              <li>
                <p>{getText("question3List5")}</p>
              </li>
              <li>
                <p>{getText("question3List6")}</p>
              </li>
              <li>
                <p>{getText("question3List7")} </p>
              </li>
              <li>
                <p>{getText("question3List8")} </p>
              </li>
              <li>
                <p>{getText("question3List9")}</p>
              </li>
              <li>
                <p>{getText("question3List10")}</p>
              </li>
              <li>
                <p>{getText("question3List11")} </p>
              </li>
              <li>
                <p>{getText("question3List12")} </p>
              </li>
              <li>
                <p>{getText("question3List13")} </p>
              </li>
              <li>
                <p>{getText("question3List14")}</p>
              </li>
              <li>
                <p>{getText("question3List15")}</p>
              </li>
              <li>
                <p>{getText("question3List16")}</p>
              </li>
              <li>
                <p>{getText("question3List17")}</p>
              </li>
              <li>
                <p>{getText("question3List18")}</p>
              </li>
              <li>
                <p>{getText("question3List19")} </p>
              </li>
              <li>
                <p>{getText("question3List20")}</p>
              </li>
              <li
                style={{ color: "blue", cursor: "pointer", fontSize: "18px" }}
                onClick={handleTekrarClick}
              >
                {getText("questionListLink")}
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
                {getText("question4Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question41Desc")}</p>
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
                {getText("question5Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question5Desc")}</p>
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
                  {getText("question6Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question6Desc")}</p>
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
                  {getText("question7Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question7Desc")}</p>
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
                  {getText("question8Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question8Desc")}</p>
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
                  {getText("question9Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>{getText("question9Desc")}</p>
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
                  {getText("question10Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <p>{getText("question10List1")}</p>
              <p>{getText("question10List2")}</p>
              <p>{getText("question10List3")}</p>
              <p>{getText("question10List4")}</p>
              <p>{getText("question10List5")}</p>
              <p>{getText("question10List6")}</p>
              <p>{getText("question10List7")}</p>
              <p>{getText("question10List8")}</p>
              <p>{getText("question10List9")}</p>
              <p>{getText("question10List10")}</p>
              <p>{getText("question10List11")}</p>
              <p>{getText("question10List12")}</p>
              <p>{getText("question10List13")}</p>
              <p>{getText("question10List14")}</p>
              <p>{getText("question10List15")}</p>
              <p>{getText("question10List16")}</p>
              <p>{getText("question10List17")}</p>
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
                {getText("question11Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              {getText("question11Desc1")}
              <br /> <br />
              {getText("question11Desc2")} <br /> <br />
              {getText("question11Desc3")}
              <br /> <br />
              {getText("question11Desc4")} <br /> <br />
              {getText("question11Desc5")}
              <br /> <br />
              {getText("question11Desc6")}
              <br /> <br />
              {getText("question11Desc7")}
              <br /> <br />
              {getText("question11Desc8")}
              <br /> <br />
              {getText("question11Desc9")}
              <br /> <br />
              {getText("question11Desc10")}
              <br /> <br />
              {getText("question11Desc11")}
              <br /> <br />
              {getText("question11Desc12")}
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
                {getText("question12Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <ul>
              <li>
                <p>{getText("question12Desc1")}</p>
              </li>
              <li>
                <p> {getText("question12Desc2")}</p>
              </li>
              <li>
                <p> {getText("question12Desc3")}</p>
              </li>
              <li>
                <p> {getText("question12Desc4")}</p>
              </li>
              <li>
                <p> {getText("question12Desc5")}</p>
              </li>
              <li>
                <p>{getText("question12Desc6")}</p>
              </li>
              <li>
                <p>{getText("question12Desc7")}</p>
              </li>
              {/* <li><p></p></li> */}
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
                {getText("question13Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
              {getText("question13Desc1")} <br /> <br />
              {getText("question13Desc2")}
              <br />
              <br />
              {getText("question13Desc3")}
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" className="modall">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{getText("questionModalTitle")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3} align="start">
              {allListData.map((item, index) => (
                <Box key={index} p={2} borderRadius="md" bg="gray.50" w="full">
                  {item.linkName}
                </Box>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {getText("linkButton")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AccordionUI;
