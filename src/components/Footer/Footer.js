import React from 'react'
import './Footer.css'
import footer__logo from '../../assets/logo.png'
import icons__apps from '../../assets/icons__apps.png'
import pay from '../../assets/PayPal.png'
import mastercard from '../../assets/MasterCard.png'
import visa from '../../assets/Visa.png'

const Footer = () => {
  return (
    <div className='footer__list'>
        <div className='footer__items'>
        <div className='footer__logo'>
            <img src={footer__logo} alt="" />
        </div>
        <div className='footer__title'>
            <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>
        </div>
        <div className='footer__icons'>
            <h1>Fllow Us</h1>
            <img src={icons__apps} alt="" />
        </div>
        </div>
   <div className='collection__all'>
        <div className='footer__collection'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact Us</a></li>
        </div>
        <div className='footer__collection2'>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Search Terms</a></li>
            <li><a href="#">Order & Return</a></li>
        </div>
        <div className='new__sletter'>
            <h1>New Sletter</h1>
            <form  className='form'> 
              <input type="Email"  placeholder='Your Email'/>
              <button>Subscribe</button>
            </form>
            <div className='cards'>
                <img src={pay} alt="" />
                <img src={mastercard} alt="" />
                <img src={visa} alt="" />
            </div>
        </div>
        </div>

    </div>
  )
}

export default Footer