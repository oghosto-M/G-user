import React from 'react'
import { useState ,useEffect } from 'react';
import './themeModer.css'
export default function ThemeModer() {

    const [ModTheme, setModTheme] = useState('')

useEffect(()=>{
    if (!localStorage.getItem('ModTheme')) {
        localStorage.setItem('ModTheme' , 'white')
        document.querySelector('#ParentCircleMover').style.backgroundColor='#bcffcf'
        setModTheme('white')
        document.querySelector('body').style.setProperty('--Color','black')
        document.querySelector('body').style.setProperty('--backgroundColor','white')

    }else if (localStorage.getItem('ModTheme')==='white'){
        document.querySelector('#ParentCircleMover').style.backgroundColor='#bcffcf'
        setModTheme('white')
        document.querySelector('body').style.setProperty('--Color','black')
        document.querySelector('body').style.setProperty('--backgroundColor','white')
    }else if (localStorage.getItem('ModTheme')==='dark'){
        document.querySelector('#ParentCircleMover').style.backgroundColor='#032d39'
        document.querySelector('#circleMoverThemeModer').classList.remove('ParentCircleMoverThemeModerWhite')
        document.querySelector('#circleMoverThemeModer').classList.add('ParentCircleMoverThemeModerDark')
        setModTheme('dark')
        document.querySelector('body').style.setProperty('--Color','white')
        document.querySelector('body').style.setProperty('--backgroundColor','#222')
    }
},[])
    console.log('Clicked',ModTheme);
    let setModThemeFunction = ()=>{
        if (ModTheme === 'white') {
            document.querySelector('#circleMoverThemeModer').classList.remove('ParentCircleMoverThemeModerWhite')
            document.querySelector('#circleMoverThemeModer').classList.add('ParentCircleMoverThemeModerDark')
            document.querySelector('#ParentCircleMover').style.backgroundColor='#032d39'
            localStorage.setItem('ModTheme' , 'dark')
            setModTheme('dark')
            document.querySelector('body').style.setProperty('--Color','white')
            document.querySelector('body').style.setProperty('--backgroundColor','#222')
            
        }else if(ModTheme === 'dark') {
            document.querySelector('#circleMoverThemeModer').classList.remove('ParentCircleMoverThemeModerDark')
            document.querySelector('#circleMoverThemeModer').classList.add('ParentCircleMoverThemeModerWhite')
            document.querySelector('#ParentCircleMover').style.backgroundColor='#bcffcf'
            localStorage.setItem('ModTheme' , 'white')
            setModTheme('white')
            document.querySelector('body').style.setProperty('--Color','black')
            document.querySelector('body').style.setProperty('--backgroundColor','white')

        }
    }

  return (
    <div id='ParentCircleMover' className='moderThemeParent' onClick={(e)=>setModThemeFunction(e)}>
        <div id='circleMoverThemeModer' className='ParentCircleMoverThemeModerWhite'></div>
    </div>
  )
}
