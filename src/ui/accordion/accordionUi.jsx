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
} from "@chakra-ui/react";
import React from "react";

function AccordionUI() {
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                 3.⁠ ⁠Turkiyenin en iyi universitetleri hangileridir?
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                4.⁠ ⁠türkiyede üniversitede okuyan özbekistanlı öğrenci sayısı kaçtır
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
            İstatistik kurumundan alınan bilgilere göre Türkiyede özel yahut devlette  üniversite okuyan özbek vatandaşı öğrenci sayısı  3896 erkek 2351 kız olmak üzere toplam 6247 öğrenci vardır.
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                5.⁠ ⁠Türk üniversitelerinde okumak  maliyetli mi ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
            Türkiyede her bütçeye hitap özel vakıf üniversiteler bulunmaktadır. Genel olarak çok maliyetli değildir. 
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                 6.⁠ ⁠Türkiye’de  yemek kültürü nasıl?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
            Türkiye yemek kültürü çok çeşitli ve ilgi çekicidir. Türkiye mutfağı dünyanın önde gelen mutfakları arasında yerini almıştır. Özbek öğrenciler için türk mutfağına adapte olmak çok kolay ve keyiflidir.
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                 7.⁠ ⁠Türkiye’de okuyan öğrenciler nerelerde yaşayabilirler ? yurtlar güvenli mi ? ücretleri ne kadar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
            Üniversite öğrencileri genellikle kendi uyruktan insanlarla beraber ev kiralayabilir veya özel yahut devletin  Kredi yurtlar kurumunda kalabilirler. Öğrencilere ilk yıl bir yurt ortamında kalmaları tavsiye edilir.
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                 8.⁠ ⁠İstanbul ilçelerine göre kiralık ev fiyatları yaklaşık ne kadar?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
            15.000 tl ile 30.000 tl arasında değişen ücretlerde öğrenci evi bulmak mümkün.
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                  9.⁠ ⁠Türkiye’de okumak için türkçe seviyeniz ne olmalı?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <p>
            hazırlık sınıfı okumak istemiyorsanız C1 seviyesinde Türkçenizin olması istenmektedir.
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                 10.  Özbeklerin en çok tercih ettiği türk üniversiteleri hangileridirr?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                12.  Özbekistanlı öğrenciler Türkiye’de okumalarında nelere dikkat etmeliler?
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
                13.⁠ ⁠Özbekistanlı ebeveynlerin  en çok sorduğu soru-cevaplar
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
                style={{ fontWeight: "500", fontSize: "20px", padding: "5px" }}
              >
               14.  Öğrenciler hem okuyup hem çalışabilir mi?
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
    </div>
  );
}

export default AccordionUI;
