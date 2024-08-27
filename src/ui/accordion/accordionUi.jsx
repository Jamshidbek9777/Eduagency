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
              {" "}eduageny.uz{" "}
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
            2009-yilda ODTU (Orta Doğu Teknik Universiteti) Enformatik Enstitüsü
            binosida qurilgan URAP Araştırma Laboratuvarı Turkiya va Dunyo
            umumiy indeksida nashr qilinmoqda. Here you go ılaştırılma va keng
            çapta kurumlarning rivojlanishiga ochiq yanlarının farqlanishiga
            yordam beradi. <br /> <br /> Turkiyaning oliy o'quv yurtlarining
            akademik muvaffaqiyatlari baholanadi. Barcha bu unchaliklarni
            to'plash tartibi belgilanmaydi.
            <br /> <br />
            <ul>
              <li>
                <p>Makale Puani</p>
              </li>
              <li>
                <p>Atif Puani</p>
              </li>
              <li>
                <p>Doktora Puani</p>
              </li>
              <li>
                <p>Bilimsel Dokuman Puani</p>
              </li>
              <li>
                <p>Öğretim a'zosining öğrenciye oranı Puani</p>
              </li>
              <li>
                <p>Xalqaro hamkorlik puanı</p>
              </li>
              <li>
                <p>Yurtiçi hamkorlik Puani</p>
              </li>
              <li>
                <p>TÜBİTAK Loyiha Puani</p>
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionUI;
