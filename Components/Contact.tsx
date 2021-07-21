import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import Fade from "react-reveal";
import { useState } from "react";

export default function Contact() {
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
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/riya03/google_sheets/yjCpsRsbyiBxlsCy?tabId=Sheet1",
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
    } catch (err) {
      console.log(err);
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
          <div className={styles.contactForm}>
            <div className={cn(styles.contactInfoCont, styles.ContactUsform)}>
              <h1 className={styles.contactHeading}>Get in Touch with Us</h1>
              <form method="POST" onSubmit={handleSubmit}>
                <div>
                  <label className={styles.labelOfForm} htmlFor="">
                    First Name
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
                    Last Name
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
                    Phone Number
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
                    Email Address
                  </label>
                  <input
                    className={styles.inputOfForm}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.contactUsSubmitDiv}>
                  <button type="submit" className={styles.ContactUsSubmitBtn}>
                    Submit{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
