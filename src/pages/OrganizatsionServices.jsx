/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
function OrganizatsionServices() {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      <div className="service-pages">
        <div className="description container">
          <h1>{getText("headerSwiperTitle4")}</h1>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    style={{ color: "black", fontWeight: "600", fontSize: "24px", }}
                  >
                    {getText("OrganizationP1")}

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} mt={3} color={"#666666"}>
                <div style={{ marginLeft: "20px" }}>
                  <h4>Geleceğin Kaşifleri İçin Uzay Kampı Macerası</h4>
                  <p>Uzay, insanlık tarihinin en büyük keşif alanı ve geleceğin en büyük fırsatlarını barındırıyor. Şimdi bu sonsuz serüveni Özbekistan’dan Türkiye’ye taşıyoruz! Eğitim ajansımız, genç öğrencilerimize unutulmaz bir uzay kampı deneyimi sunarak onların bilim ve teknoloji dünyasına adım atmalarını sağlıyor.</p>

                  <h4>Neden Uzay Kampı?</h4>
                  <p>Uzay kampı, sadece bir eğitim programı değil, aynı zamanda geleceğe yapılan bir yatırımdır. Öğrenciler burada astronot eğitimi alarak, bilimsel deneylerle yeteneklerini keşfeder ve teknolojiye dayalı projelerle hayal gücünü zorlarlar. Uzay kampı sayesinde gençler, bilim ve mühendislik gibi geleceği şekillendiren alanlarda kendilerini geliştirme fırsatı bulur.</p>

                  <h4>Eğitimde Mükemmellik, Güvende Fark Yaratan Hizmet</h4>
                  <p>Ajansımız, öğrencilerimizin her adımında yanlarında! Türkiye’nin en prestijli uzay kampı programlarına katılım sürecinde uçak bileti rezervasyonundan konaklamaya, rehberlikten güvenliğe kadar her detay titizlikle planlanıyor. Ailelerin gözleri arkada kalmasın diye, tüm süreç boyunca öğrencilerimizin yanında oluyor, onların güvenliğini ve konforunu önceliyoruz.</p>
                  <h4>Uzay Kampı İle Sınırlarını Aş, Geleceğe Hazırlan</h4>
                  <p>Bu eşsiz deneyimi yaşayarak, Özbekistanlı öğrencilerimiz hayallerini gerçekleştirme yolunda büyük bir adım atacaklar. Uzay Kampı ile öğrenciler, bilim ve teknoloji ile iç içe bir öğrenme yolculuğuna çıkarak hem kişisel hem de akademik olarak gelişecekler.</p>

                  <span>Geniş bilgi için arayın!</span>
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
                    style={{ color: "black", fontWeight: "600", fontSize: "24px", }}
                  >
                    2-Konferans-Seminer-Sınav organizasyonu

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} mt={3} color={"#666666"}>
                {/* <div style={{ marginLeft: "20px" }}>
                  <h4>Geleceğin Kaşifleri İçin Uzay Kampı Macerası</h4>
                  <p>Uzay, insanlık tarihinin en büyük keşif alanı ve geleceğin en büyük fırsatlarını barındırıyor. Şimdi bu sonsuz serüveni Özbekistan’dan Türkiye’ye taşıyoruz! Eğitim ajansımız, genç öğrencilerimize unutulmaz bir uzay kampı deneyimi sunarak onların bilim ve teknoloji dünyasına adım atmalarını sağlıyor.</p>

                  <h4>Neden Uzay Kampı?</h4>
                  <p>Uzay kampı, sadece bir eğitim programı değil, aynı zamanda geleceğe yapılan bir yatırımdır. Öğrenciler burada astronot eğitimi alarak, bilimsel deneylerle yeteneklerini keşfeder ve teknolojiye dayalı projelerle hayal gücünü zorlarlar. Uzay kampı sayesinde gençler, bilim ve mühendislik gibi geleceği şekillendiren alanlarda kendilerini geliştirme fırsatı bulur.</p>

                  <h4>Eğitimde Mükemmellik, Güvende Fark Yaratan Hizmet</h4>
                  <p>Ajansımız, öğrencilerimizin her adımında yanlarında! Türkiye’nin en prestijli uzay kampı programlarına katılım sürecinde uçak bileti rezervasyonundan konaklamaya, rehberlikten güvenliğe kadar her detay titizlikle planlanıyor. Ailelerin gözleri arkada kalmasın diye, tüm süreç boyunca öğrencilerimizin yanında oluyor, onların güvenliğini ve konforunu önceliyoruz.</p>
                  <h4>Uzay Kampı İle Sınırlarını Aş, Geleceğe Hazırlan</h4>
                  <p>Bu eşsiz deneyimi yaşayarak, Özbekistanlı öğrencilerimiz hayallerini gerçekleştirme yolunda büyük bir adım atacaklar. Uzay Kampı ile öğrenciler, bilim ve teknoloji ile iç içe bir öğrenme yolculuğuna çıkarak hem kişisel hem de akademik olarak gelişecekler.</p>

                  <span>Geniş bilgi için arayın!</span>
                </div> */}
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>
      </div>
      <div>
        <Getintouch />
      </div>
    </>
  )
}

export default OrganizatsionServices