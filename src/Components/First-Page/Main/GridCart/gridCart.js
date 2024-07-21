// {`${process.env.PUBLIC_URL}/srcImage//Site Stats-rafiki.svg`}
    import React from 'react'
    import './gridCart.css'
    import { useEffect } from 'react';
    import { Link } from 'react-router-dom';
    export default function CartPostMain(props) {
      return (
        <div className='GridCartDivOrgParent'id={`ContainerText${props.id}`} >
            <div className="ContainerText">
                <h1>
                          {props.titleCart}
                </h1>
                <p className='paragrafHeaderCart'>
                          {props.paragrafHeader}
                </p>
                <p className='textParagrafCart'>
                    You can use the links below to get started :
                </p>
                <div className='btnCartParent'>
                  <Link to={'/register'}><button className="btnMoreAndRegister" id='CartbtnMore'>Get Start</button></Link>
                  <Link to={'/login'}><button className="btnMoreAndRegister" id='CartbtnRegister'>Login</button></Link>
                </div>
            </div>
            <div className="">
                <img className='ContainerImage' src={`${process.env.PUBLIC_URL}/srcImage/grid/${props.imgLink}`} alt=""/>
            </div>
        </div>
      )
    }
