import React from 'react';
import './card2.css';

const Card2 = ({name, price, img, color}) => {
    return (
        <div className='card-wrapper2'>
            <img className='card-image2' src={img} alt='nike'></img>
            <h3 className='card-title2'>{name}</h3>
            <div className='card-color2'>{color}</div>
            <div className='card-footer-wrapper2'>
                <span className='card-price2'>${price}</span>
                <button className='cart-button2'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Card2;