import React from 'react'
import './AppDesc.css'
import appFoto from '../../assets/application.png'
import select from '../../assets/handtap.png'
import cart from '../../assets/cart.png'
import order from '../../assets/order.png'
import google from '../../assets/googleplay.png'
import apple from '../../assets/applelogo.png'

const AppDesc = () => {
  return (
    <section className='appDesc'>
        <div className="container">
           <div className="appDesc__wrapper">
           <img src={appFoto} alt="" />
           <div className="appDesc__content">
                <h2 className="appDesc__title">
                Simple Way To Order Your Food
                </h2>
                <p className="appDesc__text">
                Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.
                </p>
                <div className="appDesc__steps">
                    <div className="appDesc__item"><span><img src={select} alt="" /></span>Select Your Food</div>
                    <div className="appDesc__item"><span><img src={cart} alt="" /></span>Add To Cart</div>
                    <div className="appDesc__item"><span><img src={order} alt="" /></span>Order Your Food</div>
                </div>
                <div className="appDesc__download">
                    <a href="#"><img src={google} alt="" /></a>
                    <a href="#"><img src={apple} alt="" /></a>
                </div>
           </div>
           </div>
        </div>
    </section>
  )
}

export default AppDesc