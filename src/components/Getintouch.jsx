import { useState } from "react";
import { getText } from "../locales";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Getintouch = () => {
  const [form1] = useState(false);
  const [form2] = useState(false);
  const [form3] = useState(false);
  const [form4] = useState(false);
  const TOKEN = "6595677829:AAGkeV8LwYLNGNjsu8xus7o6gkFkOhvp1sQ";
  const USERID = "-1002173244569";
  // import { CHAT_ID } from "../constants";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [email, setEmail] = useState("");
  const [desription, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Name: ${name}.%0AMessage: ${desription}.%0APhone number: ${phone}%0AEmail: ${
    email.length == 0 ? "Email is empty" : email
  }.`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();

    axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${text}`
    );

    // https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}

    toast.success("Gonderildi");
    setIsLoading(false);
    setName("");
    setPhone("");
    setDescription("");
    setEmail("");
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
                alt=""
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
                  {/* <h6 className={`${form1 ? "active" : ""}`}>Adınız</h6> */}
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
                  {/* <h6 className={`${form2 ? "active" : ""}`}>Telefon numaranız</h6> */}
                  <InputMask
                    placeholder="Telefon numaranız"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="form-control"
                    name="phone"
                    required
                    type="number"
                  />
                </div>
                <div className="inputWrap">
                  {/* <h6 className={`${form3 ? "active" : ""}`}>Email</h6> */}
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
              </div>
              <div className="inputWrap">
                {/* <h6 className={`last ${form4 ? "actives" : ""}`}>Mesaj*</h6> */}
                <textarea
                  placeholder="Mesaj"
                  onChange={(e) => setDescription(e.target.value)}
                  value={desription}
                  className="form-control"
                  name="message"
                  required
                />
              </div>
              <p className="bottom-top-p">"Gönder" butonuna tıklayarak şartları kabul etmiş olursunuz <a href="#">kişisel verilerin işlenmesi.</a></p>
              <button disabled={isLoading} className="btn">
                {isLoading ? (
                  <span
                    style={{ color: "#fff" }}
                    className="spinner-border-sm spinner-border ms-2"
                  ></span>
                ) : (
                  ""
                )}
                Göndermek
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
