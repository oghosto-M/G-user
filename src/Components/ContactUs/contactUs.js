import React from 'react'
import Header from "./../First-Page/Header/headerForAnPage/headerFor";
import Footer from "./../First-Page/Footer/footer";
import "./contactUs.css";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FiAlignRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function contactUs() {
    let navigatorCopyText = event =>{
        window.location.href = "tel:+98-9398896930";
      }
      const handleRedirect = () => {
        window.location.href = 'mailto:mirzaiemohammad594@gmail.com';
      };
  return (
    <div className='ContactUsPageDivOrgParent'>
        <Header></Header>  
        <div className='ContactUsDiv'>
            <h1>Ways of communication</h1>
            <ul>
                <li>GitHub<span>=={'>'}</span><Link to={'https://github.com/oghosto-M'}><FiGithub size={20}></FiGithub></Link></li>
                <li>Telegram<span>=={'>'}</span><Link to={'https://t.me/oghostoM'}><LiaTelegram size={20}></LiaTelegram></Link></li>
                <li>PhoneNumber<span>=={'>'}</span><div onClick={()=>navigatorCopyText()}><MdOutlinePhonelinkRing size={20}></MdOutlinePhonelinkRing></div></li>
                <li>Gmail<span>=={'>'}</span><div onClick={()=>handleRedirect()}><CgMail size={20}></CgMail></div></li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
  )
}
