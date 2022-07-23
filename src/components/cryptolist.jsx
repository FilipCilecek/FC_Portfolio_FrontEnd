import React, { useState, useEffect } from 'react';
import '../App.js';
import axios from 'axios';
import Coin from './cryptolist-components/Coin.js';
import CoinHeader from './cryptolist-components/CoinHeader.js';
import Inputtext from './global-components/Inputtext.js';

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=czk&order=market_cap_desc&per_page=100&page=1&sparkline=false

function Cryptolist() {
  const [cryptoList, setCryptolist] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=czk&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCryptolist(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchedCrypto = cryptoList.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className='crypto-page'>
        <div className='crypto-search-wrapper'>
          <div className='crypto-search'>
            <h1>Vyhledávání</h1>
            <form>
              <Inputtext
                placeholder={'crypto / symbol ...'}
                handleChange={updateSearch}
              ></Inputtext>
            </form>
          </div>
        </div>
        <CoinHeader
          key={'header'}
          name={'Jméno cryptoměny'}
          symbol={'symbol'}
          marketCap={'Tržní kapitalizace'}
          price={'Cena v CZK'}
          priceChange={'24h změna'}
        ></CoinHeader>
        {searchedCrypto.map((crypto) => {
          return (
            <Coin
              key={crypto.id}
              name={crypto.name}
              image={crypto.image}
              symbol={crypto.symbol}
              marketCap={crypto.market_cap}
              price={crypto.current_price}
              priceChange={crypto.price_change_percentage_24h}
            ></Coin>
          );
        })}
      </section>
    </>
  );
}

export default Cryptolist;
