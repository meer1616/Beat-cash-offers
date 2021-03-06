import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Zoom from "react-reveal";
import { default as NumberFormat } from "react-number-format";
import Fade from 'react-reveal'

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      rail: {
        color: "#18316e",
      },
      root: {
        color: "#091638",
        height: 3,
        padding: "13px 0",
      },
      track: {
        height: 5,
        borderRadius: 2,
        color: "#18316e"
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
    },
  },
});

export default function FormFill() {
  const [range, setRange] = useState("250000");
  const [timeToContact, setTimeToContact] = useState("");
  const [lender, setLender] = useState("");
  const [agent, setAgent] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formReqField, setFormReqField] = useState(false)
  let formFillAPI: any;
  formFillAPI = process.env.NEXT_PUBLIC_FormFill;

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    zipCode: ""
  });

  const {
    firstname,
    lastname,
    phonenumber,
    email,
    zipCode
  } = data;

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    if (!firstname || !lastname || !phonenumber || !email) {
      alert("Please enter the required field")
      setFormReqField(true)
    } else {


      try {
        const response = await fetch(
          formFillAPI,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([
              [
                firstname,
                lastname,
                phonenumber,
                email,
                timeToContact,
                lender,
                agent,
                range,
                zipCode,
                new Date().toLocaleString(),
              ],
            ]),
          }
        );
        await response.json();
        setData({
          ...data,
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
          zipCode: ""
        });
        setTimeToContact("")
        setAgent("")
        setLender("")
        setSubmitSuccess(true)
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 4000);
      } catch (err) {
        console.log(err);
      }
    }

  };

  return (
    <div id="applynow" className={styles.forthPageMain}>
      <div className={styles.forthPage}>
        <div className={styles.formCont}>
          <Zoom cascade>
            {" "}
            <h1 className={styles.DreamPropHead}>
              Let us help you win your dream home{" "}
            </h1>{" "}
          </Zoom>

          <div className={styles.formArrow}>
            <Image
              objectPosition="100% 50%"
              height={1000}
              width={1200}
              src="/gotoForm.png"
              alt="arrow"
            />
          </div>
        </div>
        {submitSuccess ? <div>
          <Fade>
            <div className={styles.ninePageImg}>
              <Image height={800} width={800} src="/applyNowSuccess.svg" alt="" />
            </div>
          </Fade>
        </div> :
          <div id="applynowform" className={styles.formDetail}>
            <div className={styles.form}>
              <div className={styles.formHeading}>Apply Now</div>
              <div className={styles.fillformDetail}>
                <div className={styles.forPad}>
                  <div className={styles.fstlstName}>
                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                      <label className={styles.labelOfForm} htmlFor="">
                        First Name <span style={{ color: "red" }}>*</span>
                      </label>
                      {/* {formReqField && <p style={{ color: "red", fontSize: "10px" }}>Please enter required field</p>} */}

                      <input
                        className={styles.inputOfForm}
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                      <label className={styles.labelOfForm} htmlFor="">
                        Last Name <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className={styles.inputOfForm}
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.fstlstName}>
                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                      <label className={styles.labelOfForm} htmlFor="">
                        Phone Number <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className={styles.inputOfForm}
                        type="phone number"
                        name="phonenumber"
                        value={phonenumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={cn(styles.fname, styles.gapbtwnElem)}>
                      <label className={styles.labelOfForm} htmlFor="">
                        Email Address <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className={styles.inputOfForm}
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
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
                          value="Morning"

                          // onChange={(e)=>{setTimeToContact(e.target.value)}}
                          onChange={(e) => {
                            setTimeToContact(e.target.value);
                          }}
                          checked={timeToContact === "Morning"}

                        />
                        <label className={styles.q2radioBtn} htmlFor=""> Morning </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="q1no"
                          name="q2"
                          value="Afternoon"
                          onChange={(e) => { setTimeToContact(e.target.value); console.log("checked afternoon", e.target.checked) }}
                          checked={timeToContact === "Afternoon"}
                        />
                        <label className={styles.q2radioBtn} htmlFor=""> Afternoon </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="q1no"
                          name="q2"
                          value="Evening"
                          onChange={(e) => { setTimeToContact(e.target.value) }}
                          checked={timeToContact === "Evening"}

                        // onChange={handleChange}

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
                        Are you currently working with a lender?
                    </label>
                      <div className={styles.formFillRadioBtnDiv}>
                        <div>
                          <input
                            type="radio"
                            id="q1yes"
                            name="q1"
                            value="Yes"
                            onChange={(e) => { setLender(e.target.value) }}
                            checked={lender === "Yes"}
                          // }
                          // onChange={handleChange}
                          />
                          <label className={styles.q1radioBtn} htmlFor="">
                            Yes
                        </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="q1no"
                            name="q1"
                            value="No"
                            onChange={(e) => { setLender(e.target.value) }}
                            checked={lender === "No"}

                          // onChange={handleChange}
                          />
                          <label htmlFor=""> No</label>
                        </div>
                      </div>

                      <div className={styles.que4Div}>
                        <label
                          className={cn(styles.labelOfForm, styles.q1label)}
                          htmlFor=""
                        >
                          Are you already working with an agent?
                      </label>
                        <div className={styles.formFillRadioBtnDiv}>
                          <div>
                            <input
                              type="radio"
                              id="q4yes"
                              name="q4"
                              value="Yes"
                              onChange={(e) => { setAgent(e.target.value) }}
                              // onChange={handleChange}
                              checked={agent === "Yes"}
                            />
                            <label className={styles.q1radioBtn} htmlFor="">
                              {" "}
                            Yes
                          </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="q4no"
                              name="q4"
                              value="No"
                              onChange={(e) => { setAgent(e.target.value) }}
                              checked={agent === "No"}

                            // onChange={handleChange}

                            />

                            <label htmlFor=""> No</label>
                          </div>
                        </div>
                      </div>
                      <div className={styles.expectToSpend}>
                        <label htmlFor="">How much do you expect to spend?</label>
                        <p style={{ margin: "15px 0", color: "#091638" }}>
                          Value :{" "}
                          <NumberFormat
                            value={range}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                          />
                        </p>
                        <ThemeProvider theme={muiTheme}>
                          {/* <Slider
                                                    defaultValue={250000}
                                                    aria-labelledby="discrete-slider-small-steps"
                                                    onChange={(e, value) => {
                                                        setRange(value.toString())
                                                    }}
                                                    step={50}
                                                    min={250000}
                                                    max={1000000}
                                                    style={{ color: "black" }}
                                                /> */}
                          {
                            // reset ? (
                            //   <Slider
                            //     // defaultValue={0.00000005}
                            //     defaultValue={250000}

                            //     // getAriaValueText={valuetext}
                            //     aria-labelledby="discrete-slider-small-steps"
                            //     step={50}
                            //     // marks
                            //     min={250000}
                            //     max={1000000}
                            //   // valueLabelDisplay="auto"
                            //   />
                            // )  (
                            <Slider
                              // defaultValue={0.00000005}
                              defaultValue={250000}
                              onChange={(e, value) => {
                                setRange(value.toString());
                              }}
                              // getAriaValueText={valuetext}
                              aria-labelledby="discrete-slider-small-steps"
                              step={50000}
                              // marks
                              min={250000}
                              max={1000000}
                            // valueLabelDisplay="auto"
                            />
                            // )
                          }

                        </ThemeProvider>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>$250,000</span> <span>$1,000,000+</span>
                        </div>
                      </div>
                      <br />
                      <div className={styles.ZipDiv}>
                        <label className={styles.labelOfForm} htmlFor="">
                          What zipcode are you looking in?
                      </label>
                        <input
                          className={cn(styles.inputOfForm, styles.concern)}
                          type="zipCode"
                          name="zipCode"
                          value={zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.submit}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  onClick={handleSubmit}
                >
                  Submit
              </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
function reset(reset: any) {
  throw new Error("Function not implemented.");
}

