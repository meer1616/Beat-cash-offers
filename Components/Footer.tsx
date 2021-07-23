import styles from "./Home.module.css";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import ReactGA from 'react-ga'

export default function Footer() {

    const handleClick = (socialIcon: String) => {
        ReactGA.event({
            category: "Click Element",
            action: `clicked ${socialIcon}`
        })

    }
    return (
        <footer className={styles.footer}>
            <div className={styles.footerHead}>
                <div className={styles.logoLinks}>
                    <div className={styles.beatCashHeading}>
                        <a href="#home"> <h1 className={styles.textALign} style={{ display: "inline-block" }}>BeatCash</h1><span style={{ fontSize: "30px" }}>offers.com</span></a>
                    </div>
                    <div className={styles.footerLinks}>
                        <ul>
                            <li>
                                <a href="#howitwork">How it works</a>
                            </li>
                            <li>
                                <a href="#getqualified">Get Qualified</a>
                            </li>
                            <li>
                                <a href="#faqs">FAQs</a>
                            </li>
                            <li>
                                <a href='#contactus'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerContact}>
                    <p style={{ fontSize: "25px" }}>Contact Us</p>
                    <p style={{ margin: "10px 0" }}><a href="#">hello@beatcashoffers.com</a></p>
                    <p>(707) 328-6039</p>
                </div>
            </div>
            <hr style={{ margin: "20px" }} />
            <div className={styles.footerHead}>
                <div className={styles.fotterInfo}>
                    <p> &copy; 2021, All Rights Reserved By Farehomes, Powered by <a href="https://qwertyvate.com" target="_blank" style={{ textDecoration: "underline" }} rel="noreferrer"> Qwertyvate </a> </p>
                    <p> beatcashoffers.com is offered by Sonoma Pacific Reality, a licensed California real estate broker DRE #02137040  </p>
                    <p> All homes are subject to approval and must be listed with an MLS. All homes are subject to inspections and other limitations.</p>
                    <li style={{ paddingBottom: "30px", listStyle: "none" }}>* All lender are subject to approval before a good As Cash Offer<sup style={{ fontSize: "10px" }}>TM</sup> can be made.</li>
                </div>
                <div className={styles.socialIcons}>
                    <a target="_blank" href="">Terms & Conditions</a> <a href="" target="_blank">Privacy & Policy</a>
                    <p ><a onClick={() => handleClick('Facebook')} target="_blank" href=""><FaFacebookF />  </a> <a onClick={() => handleClick('Twitter')} target="_blank" href=""><FaTwitter /></a> <a onClick={() => handleClick('Instagram')} target="_blank" href=""><FaInstagram /></a></p>
                </div>
            </div>
        </footer>
    )
}
