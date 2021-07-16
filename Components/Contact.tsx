import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import { FaMapMarkerAlt, FaAt, FaPhoneVolume } from 'react-icons/fa';
export default function Contact() {
    return (
        <div id="contactus" className={styles.tenPageMain}>

            <div className={styles.tenPage}>
                <div className={styles.contactImg}>
                    <Image height={700} width={700} src="/contactImg.svg" alt="" />
                </div>


                <div className={styles.contactForm}>
                    <div className={cn(styles.contactInfoCont, styles.ContactUsform)}>
                        <h1 className={styles.contactHeading}>Get in Touch with Us</h1>

                        <form method="POST">

                            {/* <div className={styles.contactInputField}> */}
                            <div>
                                <label className={styles.labelOfForm} htmlFor="">
                                    First Name
                                </label>
                                <input
                                    className={cn(styles.inputOfForm, styles.inputOfContactUsForm)}
                                    type="text"
                                    name="firstname"
                                />
                            </div>
                            <div>
                                <label className={styles.labelOfForm} htmlFor="">
                                    Last Name
                                </label>
                                <input
                                    className={cn(styles.inputOfForm)}
                                    type="text"
                                    name="lastname"
                                />
                            </div>
                            {/* </div> */}
                            {/* <div className={styles.contactInputField}> */}
                            <div>
                                <label className={styles.labelOfForm} htmlFor="">
                                    Phone Number
                                </label>
                                <input
                                    className={cn(styles.inputOfForm, styles.inputOfContactUsForm)}
                                    type="phone number"
                                    name="phone number"
                                />
                            </div>
                            <div>
                                <label className={styles.labelOfForm} htmlFor="">
                                    Email Address
                                </label>
                                <input
                                    className={styles.inputOfForm}
                                    type="email"
                                    name="email"
                                />
                            </div>
                            {/* </div> */}

                            <div className={styles.contactUsSubmitDiv}>
                                <button type='submit' className={styles.ContactUsSubmitBtn}>Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
