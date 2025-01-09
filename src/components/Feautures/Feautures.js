import React from 'react'
import './Feautures.css'
import car from '../../assets/car.svg'
import sushi from '../../assets/sushi.svg'
import cashBack from '../../assets/cash-back.svg'
import delivery from '../../assets/fast-delivery.svg'


const Feautures = () => {
  return (
    <section className='feautures'>
        <div className="container">
            <div className="feautures__wrapper">
                <div className="feautures__item">
                    <div className="feautures__icon">
                        <img src={car} alt="" />
                    </div>
                    <h3 className="feautures__title">Free Shipping</h3>
                    <p className="feautures__text">Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className="feautures__item">
                    <div className="feautures__icon">
                        <img src={sushi} alt="" />
                    </div>
                    <h3 className="feautures__title">Quick Packaging</h3>
                    <p className="feautures__text">Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className="feautures__item">
                    <div className="feautures__icon">
                        <img src={cashBack} alt="" />
                    </div>
                    <h3 className="feautures__title">100% Money Back</h3>
                    <p className="feautures__text">Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className="feautures__item">
                    <div className="feautures__icon">
                        <img src={delivery} alt="" />
                    </div>
                    <h3 className="feautures__title">Fast Delivery</h3>
                    <p className="feautures__text">Last Chance! Free shipping on all orders ends today.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feautures