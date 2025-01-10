import React from 'react'
import './Products.css'
import BrownBread from '../../assets/Brown Bread.png'
import Cayenne from '../../assets/Cayenne chocolate.png'
import SweetCorn from '../../assets/Sweet corn.png'

const Products = () => {
  return (
    <section className='products'>
        <h1 className="products__title">
        Our Product
        </h1>
        <ul className="products__list">
            <li className="products__item">ICE CREAM</li>
            <li className="products__item">CAYENNE CHOCOLATE</li>
            <li className="products__item">CAKE BATTER</li>
            <li className="products__item">CANDY CANE</li>
            <li className="products__item">PLATTERS</li>
            <li className="products__item">DESSERT</li>
        </ul>
        <div className="products__wrapper">
            <div className="wrapper__item">
                <img src={BrownBread} alt="" />
                <div className="wrapper__content">
                    <h3 className="wrapper__title">Brown Bread</h3>
                    <p className="wrapper__text">Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <p className='wrapper__price'>$19.55 <span className='wrapper__oldPrice'>$22.55</span></p>
                    <button className="wrapper__btn">Buy Now</button>
                </div>
            </div>
            <div className="wrapper__item" style={{flexDirection: 'row-reverse'}}>
            <img src={Cayenne} alt="" />
                <div className="wrapper__content" style={{ textAlign: 'right'}}>
                    <h3 className="wrapper__title">Cayenne chocolate</h3>
                    <p className="wrapper__text">Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <p className='wrapper__price'>$19.55 <span className='wrapper__oldPrice'>$22.55</span></p>
                    <button className="wrapper__btn">Buy Now</button>
                </div>
                
            </div>
            <div className="wrapper__item">
                <img src={SweetCorn} alt="" />
                <div className="wrapper__content">
                    <h3 className="wrapper__title">Sweet corn</h3>
                    <p className="wrapper__text">Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <p className='wrapper__price'>$19.55 <span className='wrapper__oldPrice'>$22.55</span></p>
                    <button className="wrapper__btn">Buy Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products