import React from 'react'
import './Section2.css'
import section2Image from '../../assets/section2-image.png'


const Section2 = () => {
  return (
    <section className='section2'>
       <div className="container">
       <div className="section2__wrapper">
            <div className="section2__content">
                <h2 className="section2__title">
                Brown Sugar Oatmea
                </h2>
                <p className="section2__text">
                Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.
                </p>
                <button className="section2__btn">See Details</button>
            </div>    
            <div className="section2__image">
                <img src={section2Image} alt="" />
            </div>
        </div>
       </div>
    </section>
  )
}

export default Section2