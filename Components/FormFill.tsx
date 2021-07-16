import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import React, { useState, useRef } from "react";

export default function FormFill() {

    const rangeInp = useRef(null);
    console.log(rangeInp.current);
    const [range, setRange] = useState("50")

    const handleRangeValue = () => {
        setRange(range)

    }


    return (
        <div id="applynow" className={styles.forthPageMain}>
            <div className={styles.forthPage}>
                <div className={styles.formCont}>

                    <h1 className={styles.DreamPropHead}>Let us help you win your dream home </h1>

                    <div className={styles.formArrow}>
                        <Image height={500} width={600} src="/goToForm.svg" alt="" />
                    </div>
                </div>
                <div className={styles.formDetail}>
                    <div className={styles.form}>
                        <div className={styles.formHeading}>Apply Now</div>
                        <div className={styles.fillformDetail}>
                            <div className={styles.forPad}>
                                <div className={styles.fstlstName}>
                                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                                        {/* className={cn(styles.card2, styles.cmnCard)} */}
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
                                {/*  */}
                                <div className={styles.fstlstName}>
                                    {/* className={cn(styles.card2, styles.cmnCard)} */}
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
                                    {/* <div className={styles.que1}></div> */}
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
                                            <div className="slidecontainer">
                                                <input onInput={handleRangeValue} ref={rangeInp} type="range" min="1" max="100" value={range} className="slider" id="myRange" />
                                                <p>Value: <span id="demo"></span></p>
                                            </div>
                                        </div>
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


                                    {/*  */}
                                    {/* <div className={styles.queDiv}>
                                        <label
                                            className={cn(styles.labelOfForm, styles.q3label)}
                                            htmlFor=""
                                        >
                                            Are you currently working with agent ?

                                        </label>
                                        <div className={styles.formFillRadioBtnDiv}>
                                            <div>

                                                <input type="radio" id="yes" name="q3" value="Yes" />
                                                <label className={styles.q1radioBtn} htmlFor="">
                                                    Yes
                                                </label>
                                            </div>
                                            <div>
                                                <input type="radio" id="no" name="q3" value="No" />
                                                <label htmlFor="">No</label>

                                            </div>
                                        </div>
                                    </div> */}
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
            {/* <div className={styles.formSideLeftDesign}>
                <Image height={250} width={200} src="/leftDesign.png" alt="" />
            </div> */}
        </div>
    )
}
