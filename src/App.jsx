import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Getintouch from "./components/Getintouch";
import Partners from "./components/Partners";
import ServiceBlog from "./components/ServiceBlog";

const App = () => {
  
  return (
    <>
      <Header />
      <Partners />
      <ServiceBlog />
      <About
        title={"Hakkımızda"}
        desc={
          "Ajans, Türkiye ve Özbekistan'daki üniversiteler arasında iş birliği fırsatlarını artırmak için danışmanlık hizmetleri sunar. Ortak projeler, müfredat geliştirme ve akademik değişim programları gibi konularda rehberlik eder."
        }
      />
      <Getintouch />
    </>
  );
};

export default App;
