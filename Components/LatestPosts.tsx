import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import { FaCalendarAlt } from 'react-icons/fa'
export default function LatestPosts() {
    return (
        <div id="latestposts" className={styles.eightPageMain}>
            <div className={styles.eightPage}>
                <div className={styles.eightPageHeading}>
                    <h1>Latest Posts</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quod!</p>
                </div>
                <div className={styles.eightPageCont}>
                    <div className={styles.eightPageContCmn}>
                        <p>2 July 2021 <FaCalendarAlt /></p>
                        <h3>Owning a house is one of the proudest moments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem ratione omnis et harum blanditiis.</p>
                        <h4>Read Now <Image height={15} width={25} src="/rightArrow.svg" alt="" /></h4>
                    </div>
                    <div className={styles.eightPageContCmn}>
                        <p>2 July 2021 <FaCalendarAlt /></p>
                        <h3>Owning a house is one of the proudest moments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem ratione omnis et harum blanditiis.</p>
                        <h4>Read Now <Image height={15} width={25} src="/rightArrow.svg" alt="" /></h4>
                    </div>
                    <div className={styles.eightPageContCmn}>
                        <p>2 July 2021 <FaCalendarAlt /></p>
                        <h3>Owning a house is one of the proudest moments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem ratione omnis et harum blanditiis.</p>
                        <h4>Read Now <Image height={15} width={25} src="/rightArrow.svg" alt="" /></h4>
                    </div>
                </div>
            </div>
            {/* <div className={styles.faqSideLeftDesign}>
                <Image height={250} width={200} src="/leftDesign.png" alt="" />
            </div> */}
        </div>
    )
}
