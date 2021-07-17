import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import React, { useState, useRef } from "react";
import { Slider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from '@material-ui/styles';
import { motion } from "framer-motion"
import Zoom from "react-reveal";

const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {

            rail: {
                color: '#18316e'
            },
            root: {
                color: "#091638",
                height: 3,
                padding: "13px 0",
            },
            track: {
                height: 5,
                borderRadius: 2,
                color: '#18316e'

            },
            thumb: {
                height: 20,
                width: 20,
                backgroundColor: "#091638",
                border: "1px solid currentColor",
                marginTop: -9,
                marginLeft: -11,
                boxShadow: "0 2px 15px gray",
                color: "#fff",
            },
        }
    }
});

export default function FormFill() {

    const [range, setRange] = useState("250")



    return (
        <div id="applynow" className={styles.forthPageMain}>
            <div className={styles.forthPage}>
                <div className={styles.formCont}>

                    <Zoom cascade>  <h1 className={styles.DreamPropHead}>Let us help you win your dream home </h1> </Zoom>

                    <div className={styles.formArrow}>
                        <Image objectPosition="100% 50%" height={1000} width={1000} src="/goToForm.svg" alt="" />
                    </div>
                </div>
                <div id="applynowform" className={styles.formDetail}>
                    <div className={styles.form}>
                        <div className={styles.formHeading}>Apply Now</div>
                        <div className={styles.fillformDetail}>
                            <div className={styles.forPad}>
                                <div className={styles.fstlstName}>
                                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                                        <label className={styles.labelOfForm} htmlFor="">
                                            First Name
                                        </label>
                                        <input
                                            className={styles.inputOfForm}
                                            type="text"
                                            name="firstname"
                                        />
                                    </div>
                                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                                        <label className={styles.labelOfForm} htmlFor="">
                                            Last Name
                                        </label>
                                        <input
                                            className={styles.inputOfForm}
                                            type="text"
                                            name="lastname"
                                        />
                                    </div>
                                </div>
                                <div className={styles.fstlstName}>
                                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                                        <label className={styles.labelOfForm} htmlFor="">
                                            Phone Number
                                        </label>
                                        <input
                                            className={styles.inputOfForm}
                                            type="phone number"
                                            name="phone no"
                                        />
                                    </div>
                                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                                        <label className={styles.labelOfForm} htmlFor="">
                                            Email Address
                                        </label>
                                        <input
                                            className={styles.inputOfForm}
                                            type="email"
                                            name="email"
                                        />
                                    </div>

                                </div>
                                <div className={styles.queDiv}>

                                    <label
                                        className={cn(styles.labelOfForm, styles.q2label)}
                                        htmlFor=""
                                    >
                                        Best Time to contact you
                                    </label>

                                    <div className={styles.formFillRadioBtnDiv}>
                                        <div>

                                            <input
                                                type="radio"
                                                id="q1yes"
                                                name="q2"
                                                value="rightNow"
                                            />

                                            <label className={styles.q2radioBtn} htmlFor=""> Morning</label>
                                        </div>
                                        <div>

                                            <input
                                                type="radio"
                                                id="q1no"
                                                name="q2"
                                                value="withinAMonth"
                                            />
                                            <label className={styles.q2radioBtn} htmlFor=""> Afternoon</label>
                                        </div>
                                        <div>

                                            <input
                                                type="radio"
                                                id="q1no"
                                                name="q2"
                                                value="justLookingAround  "
                                            />
                                            <label htmlFor=""> Evening</label>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.que}>
                                    <div className={styles.queDiv}>
                                        <label
                                            className={cn(styles.labelOfForm, styles.q1label)}
                                            htmlFor=""
                                        >
                                            Are you currently working with lender ?
                                        </label>
                                        <div className={styles.formFillRadioBtnDiv}>
                                            <div>
                                                <input type="radio" id="q1yes" name="q1" value="Yes" />
                                                <label className={styles.q1radioBtn} htmlFor=""> Yes</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="q1no" name="q1" value="No" />
                                                <label htmlFor=""> No</label>
                                            </div>
                                        </div>

                                        <div className={styles.que4Div}>
                                            <label
                                                className={cn(styles.labelOfForm, styles.q1label)}
                                                htmlFor=""
                                            >
                                                Are you already working with an agent ?
                                            </label>
                                            <div className={styles.formFillRadioBtnDiv}>
                                                <div>

                                                    <input type="radio" id="q4yes" name="q4" value="Yes" />
                                                    <label className={styles.q1radioBtn} htmlFor=""> Yes</label>
                                                </div>
                                                <div>

                                                    <input type="radio" id="q4no" name="q4" value="No" />
                                                    <label htmlFor=""> No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.expectToSpend}>
                                            <label htmlFor="">How much do you expect to spend ?</label>
                                            <p style={{ margin: "15px 0", color: "#091638" }}>Value : ${range}<span id="demo"></span></p>
                                            {/* 
                                            <div className="slidecontainer">
                                                <input style={{ width: "100%", marginTop: "15px" }} onChange={(e) => { setRange(e.target.value) }} ref={rangeInp} type="range" min="250" max="1000000" value={range} className={styles.slider} id="myRange" />
                                                <div style={{ display: "flex", justifyContent: "space-between", }}><span>250k</span> <span>1000000k</span></div>
                                            </div> */}
                                            {/* <InputRange
                                                maxValue={20}
                                                minValue={0}
                                                value={range}
                                                onChange={(e) => { setRange(e.target.value) }} /> */}
                                            {/* <Slider
                                                onChange={(e) => { e.target.value }}
                                                defaultValue={0}
                                                value={range}
                                                aria-labelledby="discrete-slider-always"
                                                valueLabelDisplay="on"
                                            /> */}
                                            <ThemeProvider theme={muiTheme}>
                                                <Slider
                                                    defaultValue={250000}
                                                    aria-labelledby="discrete-slider-small-steps"
                                                    onChange={(e, value) => {
                                                        setRange(value.toString())
                                                    }}
                                                    min={250000}
                                                    max={1000000}
                                                    // valueLabelDisplay="auto"
                                                    style={{ color: "black" }}
                                                />
                                            </ThemeProvider>
                                            <div style={{ display: "flex", justifyContent: "space-between", }}><span>$250,000</span> <span>$1,000,000+</span></div>

                                        </div>
                                        <br />
                                        <div className={styles.ZipDiv}>
                                            <label className={styles.labelOfForm} htmlFor="">
                                                Zip Code Where are you looking to buy
                                            </label>
                                            <input
                                                className={cn(styles.inputOfForm, styles.concern)}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.submit}>
                            <button type="submit" className={styles.submitBtn}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
