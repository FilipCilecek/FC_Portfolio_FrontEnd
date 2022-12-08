import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from './Context';
import '../../styles/eshop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../component-pack/Button';

const Main = ({ handleAddToCart, getSearched }) => {
  const data = React.useContext(ProductsContext);

  /*console.log('MAIN DATA');
  console.log(data);*/
  return (
    <>
      <section className='eshop-products'>
        {getSearched.map((product) => (
          <div className='product' key={product.id}>
            <div className='product-body'>
              <div className='img-wrapper'>
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <h1>{product.title}</h1>
              <div className='product-info'>
                <h2>
                  <div className='rating-icon-wrapper'>
                    <FontAwesomeIcon icon={faStar} className='star-rating' />
                  </div>
                  <p>{product.rating}</p>
                </h2>
                <h2>Na skladu: {product.stock}</h2>
              </div>

              <p>{product.description}</p>
            </div>
            <div className='product-footer'>
              <h2
                style={{
                  color:
                    product.discountPercentage > 15 ? '#d54545' : 'inherit',
                }}
              >
                {product.price}$
                {product.discountPercentage > 15 && (
                  <div className='discount-text'>
                    -{product.discountPercentage.toFixed(1)}%!
                  </div>
                )}
              </h2>

              <Button
                text={'Koupit'}
                size={'sm'}
                onClick={() => handleAddToCart(product)}
              >
                Koupit
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Main;
