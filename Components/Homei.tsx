import styles from "./Home.module.css";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa'
import Fade from 'react-reveal';


export default function Homei() {
  return (
    <div id="home" className={styles.mainHome}>

      <div className={styles.homeContainer}>

        <Fade left><div className={styles.welcomHomeCont}>
          <h1 className={styles.wlcmTitle}> Give sellers certainity and win with our Good As Cash Offer  <sup style={{ fontSize: "15px" }}>TM</sup></h1>
          <p className={styles.wlcmExtratxt}>
            We help buyers put their best foot forward by enabling them to submit stronger offers with less risk so they can buy with confidence.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>

            <Image height={35} width={35} src="/call.svg" alt="" /> <a href="tel:+1-707-728-5737" className={styles.callNowText}> Call 707-728-5737 </a>
          </div>
          <a href="#applynowform"> <button className={styles.applyBtnHome}>   Apply now </button></a>
          <span className={styles.greenTxt}> <FaArrowRight style={{ fontWeight: "lighter", marginTop: "20px" }}></FaArrowRight> Strengthen your offer today</span>

        </div>
        </Fade>
        <Fade right>

          <div className={styles.welcomeHomeLogo}>
            <Image height={600} width={750} src="/homie.svg" alt="" />
          </div>
        </Fade>
      </div>
    </div >
  );
}
