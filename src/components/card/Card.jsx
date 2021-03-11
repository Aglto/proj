import React from 'react';
import './card.css';

const Card = ({name, price, img, color}) => {
    return (
        <div className='card-wrapper'>
            <h3 className='card-title'>{name}</h3>
            <div className='card-color'>{color}</div>
            <img className='card-image' src={img} alt='nike'></img>
            <div className='card-footer-wrapper'>
                <span className='card-price'>${price}</span>
                <button className='cart-button'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Card;