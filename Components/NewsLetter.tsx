import styles from "./Home.module.css";
import Zoom from "react-reveal";

export default function NewsLetter() {
    return (
        <Zoom>
            <div className={styles.elevenPageMain}>
                <div className={styles.elevenPage}>

                    <h1 className={styles.contactHeading}>Sucbsribe Newsletter for </h1>
                    <h1 style={{ marginBottom: "40px" }} className={styles.contactHeading}>Daily Updates</h1>
                    <div className={styles.newsLetterFlexDiv}>
                        <div className={styles.subscribeEmail}>
                            <input className={styles.subcribeNowInput} type="email" name='email' placeholder='Enter your Email Address' />
                        </div>
                        <div className={styles.subcribeBtn}>
                            <button className={styles.subscribeBtn}> Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}
