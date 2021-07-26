import styles from "./Home.module.css";
import Zoom from "react-reveal";
import { useState } from "react";

export default function NewsLetter() {

  let newsLetterAPI: any;
  newsLetterAPI = process.env.NEXT_PUBLIC_NewsLetter;

  const [data, setData] = useState("");

  const handleChange = (e: any) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        newsLetterAPI,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([[data, new Date().toLocaleString()]]),
        }
      );
      await response.json();
      setData("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Zoom>
      <div className={styles.elevenPageMain}>
        <div className={styles.elevenPage}>
          <h1 className={styles.contactHeading}>Subscribe to our Newsletter for </h1>
          <h1
            style={{ marginBottom: "40px" }}
            className={styles.contactHeading}
          >
            Daily Updates
          </h1>
          <div className={styles.newsLetterFlexDiv}>
            <div className={styles.subscribeEmail}>
              <input
                className={styles.subcribeNowInput}
                type="email"
                value={data}
                name="email"
                placeholder="Enter your Email Address"
                onChange={handleChange}
              />
            </div>
            <div className={styles.subcribeBtn}>
              <button className={styles.subscribeBtn} onClick={handleSubmit}> Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
