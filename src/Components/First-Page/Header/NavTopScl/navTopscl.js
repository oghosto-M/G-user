import React from 'react'
import './navTopscl.css'
export default function navTopscl() {
    window.addEventListener('scroll',function (e) {
        let divParentSc = document.querySelector('.NavTopperSCL')
          let scroler = document.documentElement.scrollTop
          let scrolHeight = document.documentElement.scrollHeight
          let clientHeight = document.documentElement.clientHeight
          let w = Math.floor((scroler)/(scrolHeight-clientHeight)*100)
            if (divParentSc) {
                divParentSc.style.width = `${w}%`
            }
        })
  return (
    <div className='NavTopperSCL'>
        
    </div>
  )
}
