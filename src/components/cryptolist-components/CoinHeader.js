import React from 'react';
import '../../styles/coin.css';

const CoinHeader = ({ name, symbol, price, marketCap, priceChange }) => {
  return (
    <div className='coin-wrapper'>
      <div className='coin-row' id='coin-header'>
        <div className='coin'>
          <h1>{name}</h1>
          <p className='coin-symbol' id='header-symbol'>
            {symbol}
          </p>
        </div>
        <div className='coin-info'>
          <p className='coin-price'>{price}</p>
          <p className='coin-marketcap'>{marketCap}</p>
          <p className='coin-percent'>{priceChange}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;
