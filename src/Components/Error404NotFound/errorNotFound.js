import React from 'react'
import { useEffect ,useState } from 'react'
import './errorNotFound.css'
import { useThemeMod } from "./../../Hook/useThemeMod/useThemeMod.js";
export default function ErrorNotFound() {
    
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
    const [ImageSrcLink, setImageSrcLink] = useState()
    let random404 = [
        {imageSrc:'404 error with a landscape-amico.svg',explanation:'Unfortunately, because of the wrong way you came, you entered the mountains. There live predatory animals like wolves. Return as soon as possible.'},
        {imageSrc:'404 error with a landscape-bro.svg',explanation:'Unfortunately, because of the wrong path, you have gone to another place. It is better to return before it gets dark'},
        {imageSrc:'404 error with a landscape-cuate.svg',explanation:`Unfortunately, it's dark and you have no way back, and animals like wild wolves threaten you.`}
    ] 
    useEffect(()=>{
        let randomNum = Math.floor(Math.random()*3)
        setImageSrcLink(random404[randomNum]);
    },[])
  return (
    <div className='NotFoundError'>
{   ImageSrcLink ?(<>        <div >
            {ImageSrcLink.imageSrc ? (<img className='imageAbout404Page' src={`${process.env.PUBLIC_URL}/srcImage/404/${ImageSrcLink.imageSrc}`} alt="" />):''}
        </div>
        <div className='paragrafAbout404Page'>
            <p>
                {ImageSrcLink.explanation}
            </p>
        </div></>):''

}
    </div>
  )
}
