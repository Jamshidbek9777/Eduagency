/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
} from "@chakra-ui/react";

function TurkiyeBurslari() {
    return (
        <div>
            <div className="container" style={{ paddingTop: "150px" }}>
                <p style={{fontSize: "18px"}}>Türkiye Bursları, Türkiye Cumhuriyeti’nin uluslararası öğrencilere yönelik yürütmekte olduğu, kamu kaynaklı yükseköğrenim burs programıdır. Türkiye Bursları’nın öncelikli amacı, dünya genelindeki başarılı öğrencilere fırsat eşitliği sağlayarak uluslararası standartlarda burslu eğitim almalarını sağlamaktır. Bununla birlikte, Türkiye ile diğer ülkeler arasındaki karşılıklı iş birliğinin geliştirmesi ve akademiden sanata, ekonomiden edebiyata, teknolojiden mimariye kadar pek çok alanda bölgesel ve küresel kalkınmaya katkı sağlanması amaçlanmaktadır.
                    Türkiye’nin sağladığı yükseköğrenim burs programları 2012 yılında “Türkiye Bursları” adıyla markalaşmış ve çalışmalar Yurtdışı Türkler ve Akraba Topluluklar Başkanlığı’nın (YTB) koordinasyonunda yürütülmeye başlanmıştır.
                    Türkiye Bursları, ülkeler arasındaki sosyal, kültürel, politik ve ekonomik bağları genişletme ve geliştirme vizyonuyla uluslararası öğrencilere Türkiye'nin en prestijli üniversitelerinde eğitim ve burs imkânı sağlamayı amaçlamaktadır.
                    Türkiye Bursları, 2012 yılında 42 bin civarında başvuru alırken, 2024 yılında 170 ülkeden 121.830 başvuruya ulaşarak yıllar boyunca başvuru sayısında hızlı bir artış yaşamıştır. Türkiye Bursları kapsamında her yıl yaklaşık 5.000 uluslararası öğrenciye burs verilmektedir. Türkiye Bursları Programından yararlanıp halihazırda eğitimine devam eden yaklaşık 15.000 bursiyer vardır.</p>
                <Accordion allowToggle style={{ paddingTop: "40px" }}>
                    {/* 1. Accordion Item - TÜRKİYE BURSLARI */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    TÜRKİYE BURSLARI
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                Türkiye Bursları, üniversite ve bölüm yerleştirme, aylık burs,
                                üniversite harcı, sağlık sigortası, barınma, Türkçe dil kursu,
                                uçak bileti ile ücretsiz akademik ve kültürel program
                                imkanlarıyla dünyanın en kapsamlı burs programlarından biri
                                olarak kabul görmektedir.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 2. Accordion Item - BURS MİKTARLARI */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    BURS MİKTARLARI
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                · Lisans: Aylık 3.500 TL <br />
                                · Yüksek Lisans Seviyesi: Aylık 5.000 TL <br />
                                · Doktora Seviyesi: Aylık 6.500 TL <br />
                                · Araştırma Burs Programı: Aylık 12.000 TL
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 3. Accordion Item - NEDEN TÜRKİYE BURSLARI */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    NEDEN TÜRKİYE BURSLARI
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                Türkiye Bursları; <br />
                                • Üniversite ve bölüm yerleştirmesi yapar. <br />
                                • Üniversite öğrenim harçlarını karşılar. <br />
                                • 1 senelik Türkçe dil eğitimi sağlar. <br />
                                • Barınma imkanını sağlar. <br />
                                • Uçak biletinizi karşılar. <br />
                                • Sağlık sigortası sağlar. <br />
                                • Aylık burs verir: Lisans: 3.500 TL, Yüksek Lisans: 5.000 TL, Doktora: 6.500 TL.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 4. Accordion Item - BAŞVURULAR */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    BAŞVURULAR
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                Başvurular her yıl 10 Ocak-20 Şubat tarihleri arasında online
                                ve ücretsiz olarak Türkiye Bursları web sayfası üzerinden
                                yapılmaktadır.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 5. Accordion Item - BAŞVURU İÇİN TEMEL KRİTERLER */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}

                                >
                                    BAŞVURU İÇİN TEMEL KRİTERLER
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                Asgari Akademik Başarı Kriteri: <br />
                                · Lisans adayları için: %70 <br />
                                · Yüksek Lisans ve Doktora: %75 <br />
                                · Sağlık Bilimleri adayları: %90
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 6. Accordion Item - UYGUNLUK */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    UYGUNLUK
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                · Tüm ülkelerin vatandaşları <br />
                                · Mezunlar veya mezun olacak olanlar <br />
                                · Araştırmacılar ve akademisyenler
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 7. Accordion Item - UYGUN OLMAYAN GRUPLAR */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    UYGUN OLMAYAN GRUPLAR
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                · Türk vatandaşları ve Türk vatandaşlığını kaybetmiş bireyler <br />
                                · Türk üniversitelerindeki programlara kayıtlı olan bireyler
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* 8. Accordion Item - DEĞERLENDİRME VE SEÇİM */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}
                                >
                                    DEĞERLENDİRME VE SEÇİM
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                            <Text fontSize="md">
                                4 aşamada yapılır: <br />
                                · Ön İnceleme <br />
                                · Uzman Değerlendirme <br />
                                · Mülakat <br />
                                · Nihai Değerlendirme
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    Ön İnceleme
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Tüm başvurular; asgari akademik başarı, düzeyler için belirlenen yaş sınırları, gerekli belgeler gibi temel kriterler üzerinden incelenir.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    Uzman Değerlendirme
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Uygun görülen adayların başvuruları; akademik durum, önceki yeterlilikler, akademik ilgi alanları, kariyer hedefleri, tercihlerinin tutarlığı, niyet mektubunun içeriği/anlaşılırlığı ve sosyal faaliyetlere katılım gibi bir dizi kriterler üzerinden Uzman Komitesi tarafından dikkatlice incelenir.
                            Bu aşamadan sonra, mülakat süreci için kalifiye adayların son listesi oluşturulur.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    Mülakat
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            100’den fazla ülkeden seçilerek son listeye alınan adayları; akademisyen ve uzmanlardan oluşan mülakat komiteleri tarafından değerlendirilir. Genelde 15-30 dakika süren mülakat, aşağıda belirtilen format üzerinden gerçekleştirilir:
                            <ul>
                                <li>Karşılama ve giriş</li>
                                <li>Belgelerin kontrolü</li>
                                <li>Adayın başvuru amacının öğrenilmesi</li>
                                <li>Akademik bilgi ve kariyer hedefleri</li>
                                <li>Kapanış ve aday tarafından komiteye soru sorulması</li>
                            </ul>
                            Mülakata davet edilen adayların, mezun olmamışlar ise, tamamlamış oldukları önceki yılların tüm transkript/karne belgelerini ve sertifikalarını mülakata getirmeleri gerekmektedir.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    flex="1"
                                    textAlign="left"
                                    style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    Nihai Değerlendirme
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Mülakat komiteleri tarafından aday olarak belirlenen başvuru sahiplerinin mülakat sonuçları, nihai seçim komitesi tarafından değerlendirilir ve burs alacak başvuru sahiplerinin listesi oluşturulur.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default TurkiyeBurslari;
