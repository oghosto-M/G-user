import React from 'react'
import Header from "./Header/header.js";
import  Main from "./Main/main.js";
import Footer from "./Footer/footer.js";
import './FirstPage.css'
export default function FirstPage() {
  return (
    <div className='HomePage'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
