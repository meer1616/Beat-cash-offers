import Navbar from "../Components/Navbar";
import Homei from "../Components/Homei";
import Footer from "../Components/Footer";
import Cancel from "../Components/Cancel";
import AcceptOffer from "../Components/AcceptOffer";
import FormFill from "../Components/FormFill";
import LatestPosts from "../Components/LatestPosts";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import NewsLetter from "../Components/NewsLetter";
import Head from "next/head"
import styles from "./modal.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa"
import Zoom from "react-reveal";
import cn from "classnames"



export default function Home() {

  const [modal, setModal] = useState(true)

  return (

    <div>
      <Head>
        <title>Farehomes</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Write A Competitive Letter With Farehomes | Buy With Confidence" />
        <meta property="og:description" content="Farehomes Will Assist You To Draft An Offer Letter That Can Help You To Buy Home Free From Contingencies | Get Best Home Financing Offer Letter Near You." />
        <meta property="og:image" content={`/FarehomesLogo2.png`} />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:alt" content="farehomes" />
        {/* <meta property="og:image:height" content="200" />
        <meta property="og:image:width" content="200" /> */}
      </Head>
      {<Zoom >
        <div className={modal ? styles.modalOuter : styles.outerModalNone}><div className={modal ? styles.modalMain : cn(styles.Opacity, styles.modalMain)}>


          <p className={styles.closeModalIcon}><FaTimesCircle onClick={() => { setModal(false); }} style={{ fontSize: "25px", color: "gray", cursor: "pointer" }} /></p>
          <div className={styles.modalDiv}>
            <div className={styles.modalImgDiv}>
              <Image height={450} width={500} src="/modalImg.svg" alt="" />
            </div>
            <div className={styles.modalContDiv}>
              <p className={styles.modalSmallHeading}>Can&apos;t Wait to </p>
              <h1 className={styles.orangeHeading} >Congratulate on Your New Home</h1>
              <h3 className={styles.modalSmallHeading}>Start Writing Your
                Good as Cash Offer™ Today.</h3>
              <div className={styles.modalSubmitDiv}>
                <input type="email" placeholder="Email Address" /><button>Submit</button>
              </div>
            </div>

          </div>
        </div>
        </div>
      </Zoom>
      }

      <div className={modal ? styles.Opacity : styles.abc}>

        <Navbar />
        <Homei />
        <Cancel />
        <AcceptOffer />
        <FormFill />
        <Faq />
        <LatestPosts />
        <Contact />
        <NewsLetter />
        <Footer />
      </div>

    </div>
  );
}
