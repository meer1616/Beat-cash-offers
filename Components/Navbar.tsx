// import styles from "./Navbar.module.css";
import Image from "next/image";
import { FaBars } from 'react-icons/fa';
import { useState, useRef } from "react";
import Zoom from "react-reveal"


export default function Navbar() {

  const inputRef = useRef(null)
  const [classList, setClassList] = useState(false)

  return (

    <nav className='navWrapper'>
      <Zoom cascade>
        <div
          className='mainNav'>
          <div className='navbar'>
            <Image height={50} width={250} src="/logo.svg" alt="" />
          </div>
          <div ref={inputRef} className={`${classList ? 'links onClickHamburger' : 'links'}`}>

            <div className='linkContent'>
              <ul ref={inputRef} className={`${classList ? 'ul linkContentResp' : 'ul'}`}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#howitwork">How It Works</a>
                </li>
                <li>
                  <a href="#applynow">Apply Now</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
                <li>
                  <a href="#contactus">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='sigup'>
            <div className='applyNow'>
              <a href="#applynowform"><button className='applyBtn'> Apply Now  </button> </a>
            </div>
          </div>
          <div ref={inputRef} className={`${classList ? 'hamburger hamburgerRot' : 'hamburger'}`}><FaBars onClick={() => {
            setClassList(!classList)
          }} /></div>
        </div>
      </Zoom>
    </nav>
  );
}
