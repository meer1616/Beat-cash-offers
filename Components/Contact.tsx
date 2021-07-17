import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import Fade from 'react-reveal'

export default function Contact() {
    return (
        <div id="contactus" className={styles.tenPageMain}>

            <div className={styles.tenPage}>
                <Fade left>


                    <div className={styles.contactImg}>
                        <Image className={styles.cImg} height="500px" width="700px" src="/contact.png" alt="" />
                    </div>
                </Fade>
                <Fade right>

                    <div className={styles.contactForm}>
                        <div className={cn(styles.contactInfoCont, styles.ContactUsform)}>
                            <h1 className={styles.contactHeading}>Get in Touch with Us</h1>
                            <form method="POST">
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
                                <div className={styles.contactUsSubmitDiv}>
                                    <button type='submit' className={styles.ContactUsSubmitBtn}>Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    )
}
