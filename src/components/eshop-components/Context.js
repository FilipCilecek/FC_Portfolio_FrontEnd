import axios from 'axios';
import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './Header';
import Main from './Main';

export const ProductsContext = createContext();

const generateRandomStock = () => {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
};

const Context = () => {
  const [productList, setProductlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setProductlist(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const cartChange = (productToChange, operator) => {
    if (operator === '+') {
      setCart([...cart, { ...productToChange }]);
    } else {
      setCart(cart.filter((product) => product !== productToChange));
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchedProduct = productList.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ProductsContext.Provider value={productList}>
      <Header
        cart={cart}
        handleCartChange={cartChange}
        handleSearch={updateSearch}
      ></Header>
      <Main handleAddToCart={addToCart} getSearched={searchedProduct}></Main>
    </ProductsContext.Provider>
  );
};

export default Context;
