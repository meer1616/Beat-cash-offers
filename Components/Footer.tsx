import styles from "./Home.module.css";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerHead}>
                <div className={styles.logoLinks}>
                    <div className={styles.beatCashHeading}>
                        <a href="#home"> <h1 className={styles.textALign} style={{ display: "inline-block" }}>BeatCash</h1><span style={{ fontSize: "30px" }}>offer.com</span></a>
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
                    <p> &copy; 2021, All Rights Reserved By Farehomes, Powered by <a href="#" target="_blank" style={{ textDecoration: "underline" }}> Qwertyvate </a> </p>
                    <p> beatcashoffers.com is offered by Sonoma Pacific Reality,a licensed California real estate broker DRE #02137040  </p>
                    <p> All homes are subject to approval and must be listed with an MLS. All homes are subject to inspections and other limitations.</p>
                    <li style={{ paddingBottom: "30px" }}> All lender are subject to approval before a good As Cash Offer<sup style={{ fontSize: "10px" }}>TM</sup> can be made.</li>
                </div>
                <div className={styles.socialIcons}>
                    <a target="_blank" href="">Terms & Conditions</a> <a href="" target="_blank">Privacy & Policy</a>
                    <p ><a target="_blank" href=""><FaFacebookF />  </a> <a target="_blank" href=""><FaTwitter /></a> <a target="_blank" href=""><FaInstagram /></a></p>
                </div>
            </div>
        </footer>
    )
}
