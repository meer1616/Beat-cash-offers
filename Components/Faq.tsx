import styles from "./Home.module.css";
import Image from "next/image";
import cn from "classnames";
import { useEffect, useState } from "react";
import { faqData } from './dataFaq'
export default function Faq() {
    const [list, setList] = useState(faqData);

    const handleClick = (id: number) => {
        {
            const things = list.map((item) => {
                if (item.id === id) {
                    item.open = !item.open
                    console.log(id, ' is true');
                }
                else {
                    item.open = false;
                }
                return item;
            })
            setList(things);

        }
    }


    // const [faqDesc, setFaqdesc] = useState(false)
    const [notOfFaqDec, setnotOfFaqDec] = useState(false)
    useEffect(() => {
        setnotOfFaqDec(false)
    }, [notOfFaqDec])

    return (
        <div id="faqs" className={styles.ninePageMain}>
            <div className={styles.ninePage}>
                <div className={styles.ninePageImg}>
                    <Image height={350} width={450} src="/faq.svg" alt="" />

                </div>
                <div className={styles.ninePageCont}>
                    <h1 className={styles.faqHeading} style={{ paddingLeft: '5px', marginBottom: "25px" }}>Frequently Asked Questions</h1>
                    {/* <p style={{ paddingLeft: '5px' }}>Having any questions , we are already to help you</p> */}

                    {list.map((data) => {
                        return (<div key={data.id}>
                            <div className={data.open ? cn(styles.faqFlexforIcon, styles.faqContColor) : cn(styles.faqFlexforIcon, styles.faqCont)}>
                                <p >{data.que} </p><span className={styles.plusMinus} onClick={() => handleClick(data.id)}> {data.open ? '-' : "+"} </span>

                            </div>
                            <p className={data.open ? styles.faqContDescBlock : styles.faqContDescNone}>{data.ans}</p>
                        </div>)
                    })}

                </div>
            </div>
            {/* <div className={styles.clientSideRightDesign}>
                <Image height={250} width={200} src="/rightDesign.png" alt="" />
            </div> */}
        </div>
    )
}
function cx(faqFlexforIcon: string, faqContColor: string): string | undefined {
    throw new Error("Function not implemented.");
}

