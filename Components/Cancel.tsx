import styles from "./Home.module.css";
import Image from "next/image";
import Fade from 'react-reveal';

export default function Cancel() {
    return (
        <div id="winlose" className={styles.secPageMain}>
            <div className={styles.secPage}>
                <Fade right>
                    <div className={styles.cancelCont}>
                        <h1 className={styles.cancelHeading}>Win more. Lose less.</h1>
                        <p>
                            When you make a Good As Cash Offer<sup>TM</sup>, you standout
                            (in a good way) in the sea of competition, and give sellers a reason
                            to choose your offer over the rest.
                        </p>
                    </div>
                </Fade>
                <Fade left>
                    <div className={styles.cancelContCard}>
                        <Image height={900} width={950} src="/wimmore.svg" alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
