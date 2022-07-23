import React from 'react';
import '../../styles/coin.css';

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className='coin-wrapper'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='Coin' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-info'>
          <p className='coin-price'>{price},-czk</p>
          <p className='coin-marketcap'>{marketCap.toLocaleString()},-czk</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
