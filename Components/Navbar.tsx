// import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import cn from 'classnames'
import { FaBars } from 'react-icons/fa';
import { useState, useRef } from "react";
import { useEffect } from "react";

export default function Navbar() {

  const inputRef = useRef(null)
  const [classList, setClassList] = useState(false)
  useEffect(() => {
    console.log(inputRef.current);

    // inputRef.current.style.transform = `translateY(-150%)`;

  }, [classList])


  return (

    <nav className='navWrapper'>
      <div className='mainNav'>
        <div className='navbar'>
          <Image height={50} width={250} src="/logo.svg" alt="" />
        </div>
        <div ref={inputRef} className={`${classList ? 'links onClickHamburger' : 'links'}`}>

          <div className='linkContent'>
            <ul ref={inputRef} className={`${classList ? 'ul linkContentResp' : 'ul'}`}>
              <li>
                {/* <Link href="/"> */}
                <a href="#home">Home</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/howitwork"> */}
                <a href="#howitwork">How It Works</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/applynow"> */}
                <a href="#applynow">Apply Now</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/blog"> */}
                <a href="#blog">Blog</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/faqs"> */}
                <a href="#faqs">FAQs</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/contactus"> */}
                <a href="#contactus">Contact Us</a>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </div>

        <div className='sigup'>
          <div className='applyNow'>
            <button className='applyBtn'>Apply Now</button>
          </div>
        </div>
        <div ref={inputRef} className={`${classList ? 'hamburger hamburgerRot' : 'hamburger'}`}><FaBars onClick={() => {
          setClassList(!classList)
          // console.log(classList);


        }} /></div>
      </div>
    </nav>
  );
}
