import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import { useEffect, useState } from "react";
import { faqData } from './dataFaq'
import Fade from 'react-reveal'
import ReactGA from "react-ga"

export default function Faq() {
    const [list, setList] = useState(faqData);

    const handleClick = (id: number) => {

        ReactGA.event({
            category: "Click Element",
            action: `clicked the span in Faq ${id}`
        })

        {
            const things = list.map((item) => {
                if (item.id === id) {
                    item.open = !item.open
                }
                else {
                    item.open = false;
                }
                return item;
            })
            setList(things);
        }
    }
    const [notOfFaqDec, setnotOfFaqDec] = useState(false)
    useEffect(() => {
        setnotOfFaqDec(false)
    }, [notOfFaqDec])

    return (
        <div id="faqs" className={styles.ninePageMain}>
            <div className={styles.ninePage}>
                <Fade right>
                    <div className={styles.ninePageImg}>
                        <Image height={500} width={500} src="/faq.svg" alt="" />
                    </div>
                </Fade>
                <Fade left>
                    <div className={styles.ninePageCont}>
                        <h1 className={styles.faqHeading} style={{ paddingLeft: '5px', marginBottom: "35px" }}>Frequently Asked Questions</h1>
                        {list.map((data) => {
                            return (<div key={data.id}>
                                <div className={data.open ? cn(styles.faqFlexforIcon, styles.faqContColor) : cn(styles.faqFlexforIcon, styles.faqCont)}>
                                    <p style={{ padding: "10px " }}>{data.que} </p><span className={styles.plusMinus} onClick={() => handleClick(data.id)}> {data.open ? '-' : "+"} </span>
                                </div>
                                <p className={data.open ? styles.faqContDescBlock : styles.faqContDescNone} >{data.ans}</p>
                            </div>)
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    )
}


