import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import React from "react";
import TwoPartners from "./TwoPartners";
import Partners from "./Partners";

function ServiceBlog() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/services/in");
  // };
  return (
    <>
      <div className="services" id="services">
        <div className="container">
          <div className="myItem align-items-center d-flex">
            <div className="title">
              <h2>Hizmetler</h2>
            </div>
            <div className="logo">
              <div className="img">
                <img src="img/logo.png" alt="" />
              </div>
            </div>
          </div>

          <div className="service-blogs">
            <Link to={"/application"}>
              <div className="item d-flex align-items-center">
                <div className="img">
                  <img src="img/service1.png" alt="" />
                </div>
                <div className="info">
                  <h3>Müracaat İşlemleri</h3>
                  <p>
                    Ajans, Türkiye ve Özbekistan'daki eğitim kurumlarına başvuru
                    sürecini kolaylaştırmak için kapsamlı destek sağlar.
                    Öğrencilerin ve akademisyenlerin gerekli belgeleri toplama,
                    başvuru formlarını doldurma ve süreçle ilgili danışmanlık
                    alma konularında rehberlik eder. Çeviri Hizmetleri, Sınav
                    Hazırlık ve Destek, Burs Başvuru Yardımı, Vize Başvuru
                    Desteği
                  </p>
                </div>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </div>
              </div>
            </Link>

            <Link to={"/student-transfer"}>
              <div className="item d-flex align-items-center">
                <div className="img">
                  <img src="img/service2.png" alt="" />
                </div>
                <div className="info">
                  <h3>Öğrenci Transferi</h3>
                  <p>
                    Eğitim ajansı, Türkiye ve Özbekistan arasındaki öğrenci
                    transferlerini kolaylaştırmak için çalışır. Öğrencilerin
                    uygun eğitim kurumlarına yerleştirilmesi, kredi transferleri
                    ve adaptasyon süreçleri konusunda yardımcı olur.
                  </p>
                </div>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </div>
              </div>
            </Link>

            <Link to={"/expert-transfer"}>
              <div className="item d-flex align-items-center">
                <div className="img">
                  <img src="img/service3.png" alt="" />
                </div>
                <div className="info">
                  <h3>Uzman Transferi</h3>
                  <p>
                    Ajans, iki ülke arasındaki akademik ve uzman personel
                    değişimini destekler. Uzman Transferi programları sayesinde,
                    akademisyenler ve uzmanlar bilgi ve deneyimlerini paylaşarak
                    eğitim kalitesini artırırlar
                  </p>
                </div>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </div>
              </div>
            </Link>

            <Link to={"/academic-tour"}>
              <div className="item d-flex align-items-center">
                <div className="img">
                  <img src="img/service4.png" alt="" />
                </div>
                <div className="info">
                  <h3>Türkiye Uluslararası Ofisi</h3>
                  <p>
                    Ajans, Türkiye ve Özbekistan'daki üniversiteler arasında iş
                    birliği fırsatlarını artırmak için danışmanlık hizmetleri
                    sunar. Ortak projeler, müfredat geliştirme ve akademik
                    değişim programları gibi konularda rehberlik eder.
                  </p>
                </div>
                <div className="icon">
                  <i>
                    <FontAwesomeIcon
                      className="fa-gradient"
                      icon={faArrowRight}
                    />
                  </i>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="twoPartners">
          <h3>Ortaklarımız</h3>
          <Partners />
          <TwoPartners />
        </div>
      </div>
    </>
  );
}

export default ServiceBlog;
