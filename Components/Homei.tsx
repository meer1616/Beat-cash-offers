import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import { FaMapMarkerAlt, FaAt, FaPhoneVolume } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa'

export default function Homei() {
  return (
    <div id="home" className={styles.mainHome}>
      <div className={styles.homeContainer}>
        <div className={styles.welcomHomeCont}>
          <h1 className={styles.wlcmTitle}> Give sellers certainity and win with our Good As Cash Offer <sup style={{ fontSize: "15px" }}>TM</sup></h1>
          <p className={styles.wlcmExtratxt}>
            we help buyers put their best foot forward by enabling them to submit stronger offers with less risk so they can buy with confidence
          </p>
          <button className={styles.applyBtnHome}>Apply now</button>
          <span className={styles.greenTxt} style={{ color: "green", marginLeft: "20px" }}> <FaArrowRight style={{ fontWeight: "lighter", marginTop: "20px" }}></FaArrowRight> Strengthen your offer today</span>

        </div>
        <div className={styles.welcomeHomeLogo}>
          <Image height={500} width={620} src="/homie.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
