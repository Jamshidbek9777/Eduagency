import { faArrowRight, faChalkboardUser, faFileInvoice, faGraduationCap, faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faSitemap } from '@fortawesome/free-solid-svg-icons/faSitemap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
    return (
        <div className='services' id='services'>
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
                    <div className="item d-flex align-items-center">
                        <div className="img">
                            <img src="img/service1.png" alt="" />
                        </div>
                        <div className="info">
                            <h3>Muracaat İşlemleri</h3>
                            <p>
                                Ajans, Türkiye ve Özbekistan'daki eğitim kurumlarına başvuru sürecini kolaylaştırmak için kapsamlı destek sağlar. Öğrencilerin ve akademisyenlerin gerekli belgeleri toplama, başvuru formlarını doldurma ve süreçle ilgili danışmanlık alma konularında rehberlik eder.
                                Çeviri Hizmetleri, Sınav Hazırlık ve Destek, Burs Başvuru Yardımı,
                                Vize Başvuru Desteği
                            </p>
                        </div>
                        <div className="icon">
                            <i><FontAwesomeIcon icon={faArrowRight}/></i>
                        </div>
                    </div>
                    <div className="item d-flex align-items-center">
                        <div className="img">
                            <img src="img/service2.png" alt="" />
                        </div>
                        <div className="info">
                            <h3>Öğrenci Transferi</h3>
                            <p>
                            Eğitim ajansı, Türkiye ve Özbekistan arasındaki öğrenci transferlerini kolaylaştırmak için çalışır. Öğrencilerin uygun eğitim kurumlarına yerleştirilmesi, kredi transferleri ve adaptasyon süreçleri konusunda yardımcı olur.
                            </p>
                        </div>
                        <div className="icon">
                            <i><FontAwesomeIcon icon={faArrowRight}/></i>
                        </div>
                    </div>
                    <div className="item d-flex align-items-center">
                        <div className="img">
                            <img src="img/service3.png" alt="" />
                        </div>
                        <div className="info">
                            <h3>Uzman Transferi</h3>
                            <p>
                            Ajans, iki ülke arasındaki akademik ve uzman personel değişimini destekler. Uzman transferi programları sayesinde, akademisyenler ve uzmanlar bilgi ve deneyimlerini paylaşarak eğitim kalitesini artırırlar
                            </p>
                        </div>
                        <div className="icon">
                            <i><FontAwesomeIcon icon={faArrowRight}/></i>
                        </div>
                    </div>
                    <div className="item d-flex align-items-center">
                        <div className="img">
                            <img src="img/service4.png" alt="" />
                        </div>
                        <div className="info">
                            <h3>Turkiye Uluslararasi Ofisi</h3>
                            <p>
                            Ajans, Türkiye ve Özbekistan'daki üniversiteler arasında iş birliği fırsatlarını artırmak için danışmanlık hizmetleri sunar. Ortak projeler, müfredat geliştirme ve akademik değişim programları gibi konularda rehberlik eder.
                            </p>
                        </div>
                        <div className="icon">
                            <i><FontAwesomeIcon className='fa-gradient' icon={faArrowRight}/></i>
                        </div>
                    </div>
                </div>

            
                <div className="row justify-content-around mt-4">
                    {/* <div className="col-md-4 col-sm-6">
                        <div className="card">
                            <span><FontAwesomeIcon icon={faSitemap} /></span>

                            <h6> Fuar organizasyonları</h6>
                            <p>
                            Türkiye-Özbekistan Eğitim İş Birliği Ajansı, akademik tur ve fuar organizasyonları düzenleyerek, eğitim kurumlarının tanıtımını yapar ve iki ülke arasındaki akademik iş birliğini teşvik eder. Bu etkinlikler, öğrenciler ve akademisyenler için yeni fırsatlar yaratır.

                            </p>
                        </div>
                    </div> */}
                    {/* <div className="col-md-4 col-sm-6">
                        <div className="card">
                            <span><FontAwesomeIcon icon={faSitemap} /></span>

                            <h6> Akademik tur organizasyonları</h6>
                            <p>
                            Türkiye-Özbekistan Eğitim İş Birliği Ajansı, akademik tur ve fuar organizasyonları düzenleyerek, eğitim kurumlarının tanıtımını yapar ve iki ülke arasındaki akademik iş birliğini teşvik eder. Bu etkinlikler, öğrenciler ve akademisyenler için yeni fırsatlar yaratır.

                            </p>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    )
}

export default Services
