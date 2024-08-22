import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InputMask from "react-input-mask";

const Getintouch = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TOKEN = "6595677829:AAGkeV8LwYLNGNjsu8xus7o6gkFkOhvp1sQ";
  const USERID = "-1002173244569";

  const encodeText = (text) => encodeURIComponent(text);

  const sendFeedback = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const text = `Name: ${name}\nMessage: ${description}\nPhone number: ${phone}\nEmail: ${
      email.length === 0 ? "Email is empty" : email}\n Services: ${service}`;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${encodeText(
          text
        )}`
      );
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setName("");
      setPhone("+998");
      setEmail("");
      setDescription("");
      setService("");
    }
  };

  return (
    <div className="Getintouch mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="img">
              <img
                className="w-100 img-getInTouch"
                src="img/getintouch.png"
                alt="Contact Us"
              />
            </div>
          </div>
          <div className="col-md-7">
            <form onSubmit={sendFeedback}>
              <h3>Danışmanlık alın</h3>
              <p>
                Sorularınızı cevaplamaya hazırız. Bize yazın, sizinle en kısa
                sürede iletişime geçelim.
              </p>
              <div className="row">
                <div className="inputWrap col-sm-6">
                  <InputMask
                    placeholder="Adınız"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control"
                    name="name"
                    required
                    type="text"
                  />
                </div>
                <div className="inputWrap col-sm-6">
                  <InputMask
                    placeholder="Telefon numaranız"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="form-control"
                    name="phone"
                    required
                    mask="+999999999999"
                    type="text"
                  />
                </div>
                <div className="inputWrap">
                  <InputMask
                    placeholder="E-posta"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                    name="email"
                    required
                    type="email"
                  />
                </div>
                <div className="inputWrap">
                  <select
                    onChange={(e) => setService(e.target.value)}
                    value={service}
                    className="form-control select-style"
                    name="service"
                    required
                  >
                    <option value="" disabled>
                      Ne tür hizmetlerle ilgileniyorsunuz?
                    </option>
                    <option value="Service 1">Muracaat İşlemleri</option>
                    <option value="Service 2">Öğrenci Transferi</option>
                    <option value="Service 3">Uzman Transferi</option>
                    <option value="Service 4">Fuar Organizasyonları</option>
                    <option value="Service 4">Akademik tur organizasyonları</option>
                    <option value="Service 4">Üniversiteler Arası İş Birliği Danışmanlığı</option>
                  </select>
                </div>
              </div>
              <div className="inputWrap">
                <textarea
                  placeholder="Mesaj"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="form-control"
                  name="message"
                  required
                />
              </div>
              <p className="bottom-top-p">
                "Gönder" butonuna tıklayarak şartları kabul etmiş olursunuz{" "}
                <a href="#">kişisel verilerin işlenmesi.</a>
              </p>
              <button type="submit" disabled={isLoading} className="btn">
                {isLoading ? (
                  <span
                    style={{ color: "#fff" }}
                    className="spinner-border-sm spinner-border ms-2"
                  ></span>
                ) : (
                  "Göndermek"
                )}
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
