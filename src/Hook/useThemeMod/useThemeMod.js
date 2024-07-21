import React from 'react'
import { useState ,useEffect } from 'react';
export default function useThemeMod() {
    const [ModTheme, setModTheme] = useState('')
    useEffect(()=>{
        if (!localStorage.getItem('ModTheme')) {
            localStorage.setItem('ModTheme' , 'white')
            setModTheme('white')
            document.querySelector('body').style.setProperty('--Color','black')
            document.querySelector('body').style.setProperty('--backgroundColor','white')
        }else if (localStorage.getItem('ModTheme')==='white'){
            setModTheme('white')
            document.querySelector('body').style.setProperty('--Color','black')
            document.querySelector('body').style.setProperty('--backgroundColor','white')
        }else if (localStorage.getItem('ModTheme')==='dark'){
            setModTheme('dark')
            document.querySelector('body').style.setProperty('--Color','white')
            document.querySelector('body').style.setProperty('--backgroundColor','#222')
        }
    },[])
}
