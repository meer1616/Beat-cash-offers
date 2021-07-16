import styles from "./Home.module.css";
import Image from "next/image";

export default function AcceptOffer() {
    return (
        <div id="howitwork" className={styles.thirdPageMain}>
            <h1>How it works</h1>
            <div className={styles.thirdPage}>
                <div className={styles.firstCard}>
                    <div className={styles.CardImg}>

                        <Image height={200} width={200} src="/card1.svg" alt="" />
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ad minus hic excepturi, unde voluptas ratione officia dolorem assumenda quis, sunt ab perferendis.</p>
                </div>
                <div className={styles.firstCard}>
                    <div className={styles.CardImg}>

                        <Image height={200} width={200} src="/card2.svg" alt="" />
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ad minus hic excepturi, unde voluptas ratione officia dolorem assumenda quis, sunt ab perferendis.</p>
                </div>
                <div className={styles.firstCard}>
                    <div className={styles.CardImg}>

                        <Image height={200} width={200} src="/card3.svg" alt="" />
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ad minus hic excepturi, unde voluptas ratione officia dolorem assumenda quis, sunt ab perferendis.</p>
                </div>
            </div>

        </div>
    )
}
