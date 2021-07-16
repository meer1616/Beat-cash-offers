import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";

export default function Cancel() {
    return (
        <div id="winlose" className={styles.secPageMain}>
            <div className={styles.secPage}>
                <div className={styles.cancelCont}>
                    <h1 className={styles.cancelHeading}>Win more . Lose less .</h1>
                    <p>
                        when you make a Good As Cash offer<sup>TM</sup>,you standout
                        (in a good way) in sea of competition,and give sellers a reason
                        to choose your offer over the rest
                    </p>
                </div>
                <div className={styles.cancelContCard}>

                    <Image height={950} width={1000} src="/winLose.svg" alt="" />

                </div>
            </div>
        </div>
    )
}
