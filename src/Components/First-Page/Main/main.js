import React from 'react'
import CartPostalGridCart from "./GridCart/gridCart";
import CartPostal from "./CartPostal/cartPostal";
export default function Main() {
    let InformationCart = [
        {
          id:'id1',
          flexDirection:``,
          titleCart:`High security`,
          paragrafHeader:`The developed program has high security that does not cause the loss of your information during hacking or cyber attacks. So feel free to leave your information to us (it is not true, the website is only programmed and does not have a security programer)`,
          imgLink:`amniat.svg`
        },
        {
          id:'id2',
          flexDirection:``,
          titleCart:`precision`,
          paragrafHeader:`You can safely leave your information to us, we put all your information in the database with great care so that there is no mistake in storage, error, or any problem (real and correct).`,
          imgLink:`degat.svg`
        },
        {
          id:'id1',
          flexDirection:`left`,
          titleCart:`Display`,
          paragrafHeader:`For your understanding of your progress, we have considered the best programs and the best display methods for you so that you can progress with a better understanding of the path.`,
          imgLink:`namayesh.svg`
        },
        {
            id:'id2',
            flexDirection:`left`,
            titleCart:`investment`,
            paragrafHeader:`According to the discussion of all the above, you can make double progress in saving information by using our website, which is a kind of investment. You can be sure that the amount you spend in the days of no money for success will return to you twice in the future. (Of course, it is not true in all cases)`,
            imgLink:`sarmaye.svg`
          },
      ]
  return (
    <main className='ParentOrgDivMain'>
            <CartPostal></CartPostal>
        {
          InformationCart.map((infor)=>
            <CartPostalGridCart             
                id = {infor.id}
                flexDirection = {infor.flexDirection}
                titleCart = {infor.titleCart}
                paragrafHeader = {infor.paragrafHeader}
                imgLink ={infor.imgLink}
                ></CartPostalGridCart>
          )
        }
    </main>
  )
}
