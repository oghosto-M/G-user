import React from 'react'
import './../header.css'
import NavTopper from "./../NavTopScl/navTopscl";
import { FiGithub } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FiAlignRight } from "react-icons/fi";
import ThemeControler from "./../../../ThemeModBtn/themeModer";
import { IoHome } from "react-icons/io5";
import { FaUserNinja } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function headerFor() {
    window.addEventListener('scroll',function (e) {
        let Header = document.querySelector('#HeaderContainerChilds2Id')
        let scrolerHead = document.documentElement.scrollTop
    
          if (scrolerHead>2) {
            Header.classList.remove('HeaderContainerParent2')
            Header.classList.add('HeaderContainerParent2-activeFix')

          }else if (scrolerHead<=2) {
            Header.classList.remove('HeaderContainerParent2-activeFix')
            Header.classList.add('HeaderContainerParent2')
          }
        })
    let navigatorCopyText = event =>{
        window.location.href = "tel:+1234567890";
      }
      const handleRedirect = () => {
        window.location.href = 'mailto:mirzaiemohammad594@gmail.com';
      };
  return (
    <div>
                <NavTopper></NavTopper>
        <div className="HeaderContainerParent1">
            <div className="HeaderContainerChilds1">
                <Link to={'https://github.com/oghosto-M'}><div className='IconPublicInWeb'><FiGithub size={19} color='white'></FiGithub></div></Link>
                <Link to={'https://t.me/oghostoM'}><div className='IconPublicInWeb'><LiaTelegram size={19} color='white'></LiaTelegram></div></Link>

            </div>
            <div className="HeaderContainerChilds2">
                Join the <Link to={'/G-user'}><span className='SpanHeaderContainerChilds2'>Guser newsletter</span></Link> now
            </div>
            <div className="HeaderContainerChilds3">
                <div className='IconPublicInWeb' onClick={(e)=>navigatorCopyText(e)}><MdOutlinePhoneIphone size={19} color='white'></MdOutlinePhoneIphone></div>
                <div className='IconPublicInWeb' onClick={(e)=>handleRedirect(e)}><CgMail size={19} color='white'></CgMail></div>
            </div>
        </div>
        <div id='HeaderContainerChilds2Id' className="HeaderContainerParent2">
            <div className="HeaderContainer2Childs1">
            </div>
            <div className="HeaderContainer2Childs2">
                <ul>
            
                    <Link to={'/G-user'}><li className="liNavlinkHeader1"><div className='IconPublicInWeb iconNavHeader'><IoHome size={17}></IoHome></div>Home</li></Link>
                    <Link to={'/about'}><li className="liNavlinkHeader2"><div className='IconPublicInWeb iconNavHeader'><FaUserNinja size={17}></FaUserNinja></div>About</li></Link>
                    <Link to={'/cotactus'}><li className="liNavlinkHeader3"><div className='IconPublicInWeb iconNavHeader'><MdOutlineContactSupport size={17}></MdOutlineContactSupport></div>Contact</li></Link>
                    <Link to={'/control'}><li className="liNavlinkHeader4"><div className='IconPublicInWeb iconNavHeader'><FaUsers size={17}></FaUsers></div>Controler</li></Link>
                </ul>
            </div>
            <div className="HeaderContainer2Childs3">
                <ThemeControler></ThemeControler>
                <Link to={'/login'}><button className='LoginHeaderParentbtn'>Login</button></Link>
            </div>
            <div className='HeaderContainer2Childs4'>
                <div className='IconPublicInWeb HeaderHamberIcon'><FiAlignRight size={30} color={"white"}></FiAlignRight></div>
            </div>
        </div>
    </div>
  )
}
