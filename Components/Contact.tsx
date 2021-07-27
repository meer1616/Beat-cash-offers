import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import Fade from "react-reveal";
import { useState } from "react";

export default function Contact() {

  let contactUsAPI: any;
  contactUsAPI = process.env.NEXT_PUBLIC_ContactUs;
  const [thankyouModal, setThankyouModal] = useState(false)
  const [reqField, setReqField] = useState(false)

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
  });

  const { firstname, lastname, phonenumber, email } = data;

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!firstname || !lastname || !phonenumber || !email) {
      setReqField(true)
      setTimeout(() => {
        setReqField(false)
      }, 5000);
    }
    else {

      try {
        const response = await fetch(
          contactUsAPI,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([
              [
                firstname,
                lastname,
                phonenumber,
                email,
                new Date().toLocaleString(),
              ],
            ]),
          }
        );
        await response.json();
        setData({
          ...data,
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
        });
        setThankyouModal(true)
        setTimeout(() => {
          setThankyouModal(false)
        }, 4000);
      } catch (err) {
        console.log(err);
      }
    }

  };
  return (
    <div id="contactus" className={styles.tenPageMain}>
      <div className={styles.tenPage}>
        <Fade left>
          <div className={styles.contactImg}>
            <Image
              className={styles.cImg}
              height="500px"
              width="700px"
              src="/contact.png"
              alt=""
            />
          </div>
        </Fade>
        <Fade right>
          {
            thankyouModal ? <div>
              <Fade>
                <div className={styles.ninePageImg}>
                  <Image height="500px"
                    width="700px" src="/contactSuccess.svg" alt="" />
                </div>
              </Fade>
            </div> : <div className={styles.contactForm}>
              <div className={cn(styles.contactInfoCont, styles.ContactUsform)}>
                <h1 className={styles.contactHeading}>Get in Touch with Us</h1>
                <form method="POST" onSubmit={handleSubmit}>
                  <div>
                    <label className={styles.labelOfForm} htmlFor="">
                      First Name <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      className={cn(
                        styles.inputOfForm,
                        styles.inputOfContactUsForm
                      )}
                      type="text"
                      name="firstname"
                      value={firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className={styles.labelOfForm} htmlFor="">
                      Last Name <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      className={cn(styles.inputOfForm)}
                      type="text"
                      name="lastname"
                      value={lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className={styles.labelOfForm} htmlFor="">
                      Phone Number <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      className={cn(
                        styles.inputOfForm,
                        styles.inputOfContactUsForm
                      )}
                      type="phone number"
                      name="phonenumber"
                      value={phonenumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className={styles.labelOfForm} htmlFor="">
                      Email Address <span style={{ color: "red" }}> * </span>
                    </label>
                    <input
                      className={styles.inputOfForm}
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  {reqField && <p style={{ color: "red", fontSize: "18px" }}>Please Enter the required field</p>}
                  <div className={styles.contactUsSubmitDiv}>
                    <button type="submit" className={styles.ContactUsSubmitBtn}>
                      Submit{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          }

        </Fade>
      </div>
    </div>
  );
}
