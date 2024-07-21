import React from 'react'
import Header from "./../First-Page/Header/headerForAnPage/headerFor";
import Footer from "./../First-Page/Footer/footer";
import './about.css'
export default function about() {
  return (
    <div className='AboutPageOrgParent'>
        <Header></Header>
            <div className='AboutPageDivParent'>
              <div className='AboutPageAboutUS'>
                <h1>About us</h1>
                <p>Greeting, I (oghosto-M) am a front-end programmer or freelancer who is interested in JavaScript programming language and react js library. 
                Actually, I made this website as a resume, but if it works well for you, I'd be happy to use it for free.</p>
              </div>
              <div className='AboutPageAboutWeb'>
                <h1>About Website</h1>
                <p>This website is run on the Firebase database and does not have a back-end, so if you are from a country where Firebase does not support you (Iran), use a VPN (Russian server is preferred).</p>
              </div>
              <div className='headerNotAnyMore'>
                (There is nothing else)
              </div>
            </div>
        <Footer></Footer>
    </div>
  )
}
