import React from 'react';
import Card from '../card/Card';
import './list-view.css';
import {connect} from 'react-redux';

const ListView = ({products}) => {
    return (
        <ul className='card-list'>
            {products.map((item, i) => {
               return <li key={i}>
                    <Card
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

export default connect(mapStateToProps, null)(ListView);