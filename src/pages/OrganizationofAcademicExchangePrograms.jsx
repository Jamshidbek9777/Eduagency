/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

function OrganizationofAcademicExchangePrograms() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);
    return (
        <>
            <div className="container" style={{ paddingTop: "150px" }}>
                <p style={{ fontSize: "22px" }}>{getText("headerSwiperParagraph11")}</p>
                <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "20px", marginTop: "20px", fontSize: "30px"}}>Hizmetlerimiz:</h4>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        1. Öğrenci Değişim Programları:

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Öğrencilere, yurt dışında eğitim alma, yeni kültürlerle tanışma ve farklı akademik sistemlerle çalışma fırsatı sunuyoruz. Bu programlar kapsamında üniversiteler arası iş birliklerini yöneterek, öğrencilere hem akademik hem de sosyal beceriler kazandıracak deneyimler sağlıyoruz. Ayrıca, öğrencilerin yurtdışına gidiş sürecini en kolay hale getirmek için başvuru, kabul ve kayıt süreçlerinde danışmanlık veriyoruz.</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        2. Akademisyen Değişim Programları:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Üniversiteler ve araştırma kurumları için akademisyen değişim programları organize ediyoruz. Bu programlar, öğretim üyelerine yurt dışında ders verme, araştırma yapma ve uluslararası akademik ağlar kurma fırsatı tanıyor. Ayrıca bu süreçte üniversiteler arası protokollerin oluşturulmasını, vize ve konaklama işlemlerinin sorunsuz yürümesini sağlıyoruz.</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        {/* <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        3. Yurt Dışı Staj Programları:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Yurt dışında staj yapmak isteyen öğrencilere, küresel firmalarla bağlantılar kurarak, kariyer gelişimlerine katkı sağlayacak staj programları sunuyoruz. Bu programlar sayesinde öğrenciler, uluslararası iş dünyasına adım atarak profesyonel yetkinliklerini geliştirme şansı elde ediyorlar.</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        4. Dil Eğitim Programları:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Öğrencilerin ve akademisyenlerin yurtdışındaki akademik ve sosyal hayata adapte olabilmeleri için, özel olarak tasarlanmış dil eğitim programları sunuyoruz. Bu programlar, özellikle eğitim alacakları ülkenin diline yönelik olup, onların daha hızlı uyum sağlamalarına ve akademik başarılarını artırmalarına yardımcı oluyor.</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem> */}

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        Süreç Yönetimi:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Firmamız, her adımda profesyonel destek sunarak akademik değişim sürecinin her aşamasını titizlikle yönetir. Öğrenci ve akademisyenlerin başvuru sürecinden, üniversitelerle iletişim kurmalarına, vize işlemlerinden, konaklama ve kültürel uyumlarına kadar kapsamlı bir hizmet sunmaktayız. Ayrıca, yurt dışı eğitim hayatına uyum sağlamalarını kolaylaştırmak için danışmanlık hizmetleri de veriyoruz.</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        Üniversite ve Kurumlar Arası İş Birlikleri:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Uluslararası akademik değişim programlarını başarıyla yürütmek için üniversitelerle ve akademik kurumlarla sıkı bir iş birliği içerisindeyiz. Hem Türkiye’de hem de diğer ülkelerde eğitim kurumlarıyla yapılan anlaşmalar sayesinde, öğrenci ve akademisyenlerin en iyi koşullarda bu deneyimi yaşamasını sağlıyoruz.</p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        Kültürel ve Akademik Gelişim:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Akademik değişim programlarının yalnızca eğitimle sınırlı olmadığının farkındayız. Katılımcılarımızın yeni kültürleri tanıyarak küresel bir bakış açısı kazanmalarını önemsiyoruz. Bu nedenle, kültürel uyum programları, sosyal etkinlikler ve yerel rehberlik hizmetleri gibi ek hizmetler de sunarak, yurtdışındaki yaşamı daha anlamlı ve unutulmaz kılmayı hedefliyoruz.
                                    </p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        fontWeight="bold"
                                        fontSize="xl"
                                        color="teal.700"
                                    >
                                        Sonuç Olarak:
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} mt={3} color="gray.600">
                                <div style={{ marginLeft: "20px" }}>
                                    <p>Firmamız, akademik değişim programları alanında uzmanlaşmış bir ekiple, öğrenciler ve akademisyenler için en uygun ve avantajlı programları sunar. Hem akademik hem de kişisel gelişimlerine katkı sağlamak isteyen herkesi, dünya standartlarında bir eğitim deneyimi yaşamaları için destekliyoruz.
                                    </p>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>


                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default OrganizationofAcademicExchangePrograms