import styles from "./Home.module.css";
import Image from "next/image";

export default function AcceptOffer() {
    return (
        <div id="howitwork" className={styles.thirdPageMain}>
            <h1 className={styles.howitworkHeading}>How it works</h1>
            <div className={styles.thirdPage}>
                <div className={styles.firstCard}>
                    <div className={styles.CardImg}>
                        <Image height={200} width={250} src="/card1new.svg" alt="" />
                    </div>
                    <div style={{ marginTop: "15px" }} className={styles.cardinfoDiv}>

                        <p >After connecting with an approved lender*, we will work with them to make sure that your offer is &quot;as good as cash&quot;, buy getting you fully approved for a loan upfront.</p>
                    </div>
                </div>
                <div className={styles.firstCard}>
                    <div className={styles.CardImg}>

                        <Image height={200} width={220} src="/card2new.svg" alt="" />
                    </div>
                    <div className={styles.cardinfoDiv}>
                        <p >We&apos;ll help you find the perfect home and write a competitive offer without
                            a lengthy and unpredicatable financing contingency-giving you an edge over
                            the competition
                        </p>

                    </div>
                </div>
                <div className={styles.firstCard}>
                    <div className={styles.CardImg}>

                        <Image height={200} width={200} src="/card3.svg" alt="" />
                    </div>
                    <div style={{ marginTop: "25px" }} className={styles.cardinfoDiv}>
                        <p>Our Good As Cash Offer™ protects your earnest money deposit in the event that your loan proceeds do not arrive in time. You get confidence and the seller gets certainty.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}
