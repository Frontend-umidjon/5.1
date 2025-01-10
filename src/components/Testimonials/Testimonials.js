import React from 'react'
import './Testimonials.css'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import avatar from '../../assets/testimonial1.png'
import avatar2 from '../../assets/testimonial2.png'
import testimonailImg from '../../assets/testimonials-section.png'
import upscore from '../../assets/upscore.svg'
import downscore from '../../assets/upscoreDown.svg'

const Testimonials = () => {
  return (
    <section className='testimonials'>
        <div className="container">
            <div className="testimonials__wrapper">
                <div className="testimonials__content">
                    <div className="testimonials__account">
                        <img src={avatar} alt="" />
                        <div className="testimonials__account-content">
                            <h3 className="testimonials__account-title">Adele A. McNeill</h3>
                            <p className="testimonials__account-text">AMIRICAN</p>
                        </div>
                    </div>
                    <div className="testimonials__text">
                        <span style={{marginRight: '12px'}}><img src={upscore} alt="" /></span>
                        Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.
                        <span style={{marginLeft: '12px'}}><img src={downscore} alt="" /></span>
                    </div>
                    <div className="accounts__list">
                        <button style={{opacity: '0.5'}} ><FaChevronLeft /></button>
                        <img src={avatar2} alt="" />
                        <img src={avatar} alt="" className='active' />
                        <img src={avatar} alt="" style={{width: '35px', height: '35px'}} />
                        <button><FaChevronRight /></button>
                    </div>
                </div>
                <img src={testimonailImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Testimonials