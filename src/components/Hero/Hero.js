import React from 'react'
import './Hero.css'
import heroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div className="hero__above">Sweet fun, full of milk.</div>
                    <h1 className="hero__title">Feel inside cold with our delicious <span>ice-cream.</span></h1>
                    <p className="hero__text">
                    Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.
                    </p>
                    <button className="hero__btn">Buy Now</button>
                </div>
                <img src={heroImage} alt="" className="hero__image" />
            </div>   
        </div>

    </section>
  )
}

export default Hero