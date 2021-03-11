import React from 'react';
import Card2 from '../card2/card2';
import './list-view2.css';
import {connect} from 'react-redux';


const ListView2 = ({products}) => {
    
    return (
        <ul className='card-list2'>
            {products.map((item, i) => {
               return <li className='card-item2' key={i}>
                    <Card2
                        name={item.name}
                        price={item.price}
                        img={item.img}
                        color={item.color}
                    />
                </li>
            })}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

export default connect(mapStateToProps, null)(ListView2);