import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '../component-pack/Button';

const CartContainer = styled('div')``;

const CartHeader = styled('div')`
  box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 50%);
  background-color: #00a2ca;
  display: flex;
  align-items: center;
  border-radius: 6px;
  svg {
    background: transparent;
    padding: 5px 4px 5px 10px;
    @media (max-width: 472px) {
      display: none;
    }
  }
  p {
    display: flex;
    background: transparent;
    padding: 5px 10px 5px 4px;
    @media (max-width: 578px) {
      padding: 2px 5px 2px 4px;
    }
  }
`;

const CartListContainer = styled('div')`
  position: absolute;
  right: 5%;
  @media (max-width: 550px) {
    margin-top: 15px;
  }
  @media (max-width: 472px) {
    margin-top: 20px;
  }
`;

const CartList = styled('ul')`
  border: 1px solid #00a2ca;
  color: #00a2ca;
  box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 50%);
  border-radius: 6px;
  &:first-child {
    padding: 0.5em 0.2px;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  transition: all 0.2s ease-out 0.2s;
  &:hover {
    background-color: #0087a91c;
  }
`;

const Hdr = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  padding-left: clamp(120px, 10%, 200px);
  padding-right: 5%;
  @media (max-width: 550px) {
    padding-top: 50px;
    padding-left: 5%;
  }
`;

const H1Text = styled('h1')`
  font-size: clamp(18px, 2vw, 30px);
`;

const Form = styled('form')`
  flex-grow: 1;
`;

const StyledInput = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
  color: #00a2ca;
  background: transparent;
  border: 1px solid #00a2ca;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);
  width: clamp(120px, 50%, 60%);
  &:hover,
  &:focus {
    background: #0087a91c;
  }
`;

const BtnCartWrapper = styled.div`
  display: flex;
  background-color: transparent;
`;

const DivCartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  h3 {
    background-color: transparent;
  }
  p {
    background-color: transparent;
  }
`;

const DivCartBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  transition: all 0.2s ease-out 0.2s;
`;

const DivCartBottomText = styled(DivCartBottom)`
  padding: 0px;
  margin-right: 10px;
`;

const BtnCartControls = styled.button`
  height: 1rem;
  width: 1rem;
  background-color: #00a2ca;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  margin: 2px;
  &:first-child {
    margin-left: 5px;
  }
`;

const DivPayAlert = styled.div`
  position: absolute;
  width: 100%;
  height: 3rem;
  padding: 0.75rem;
  background-color: green;
  @media (max-width: 625px) {
    height: 4.5rem;
  }
  @media (max-width: 550px) {
    margin-top: 10px;
  }
  @media (max-width: 476px) {
    margin-top: 15px;
  }
`;

const Header = ({ cart, handleCartChange, handleSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const calcTotal = (product) => {
    return product.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
  };

  const handlePay = () => {
    setIsAlert(true);

    setTimeout(() => {
      setIsAlert(false);
    }, 7000);
  };

  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <Hdr>
        <H1Text>Demo e-shop</H1Text>
        <Form>
          <StyledInput
            placeholder={'Vyhledávání ...'}
            variant='outline'
            onChange={handleSearch}
          />
        </Form>
        <CartContainer>
          <CartHeader onClick={toggling}>
            <FontAwesomeIcon icon={faCartShopping} className='star-rating' />
            <p>Košík ({cart.length})</p>
          </CartHeader>
        </CartContainer>
      </Hdr>
      {cart.length > 0 && isOpen && (
        <CartListContainer>
          <CartList>
            {cart.map((product, idx) => (
              <ListItem key={idx}>
                <DivCartItemInfo>
                  <h3>{product.title}</h3>
                  <p>{product.price}$</p>
                </DivCartItemInfo>
                <BtnCartWrapper>
                  <BtnCartControls
                    onClick={() => handleCartChange(product, '+')}
                  >
                    +
                  </BtnCartControls>
                  <BtnCartControls
                    onClick={() => handleCartChange(product, '-')}
                  >
                    -
                  </BtnCartControls>
                </BtnCartWrapper>
              </ListItem>
            ))}
            <DivCartBottom>
              <DivCartBottomText>
                <p>Celkově : {calcTotal(cart)}$</p>
              </DivCartBottomText>
              <Button
                text={'Zaplatit'}
                size={'sm'}
                onClick={handlePay}
              ></Button>
            </DivCartBottom>
          </CartList>
        </CartListContainer>
      )}
      {isAlert && (
        <DivPayAlert>
          Nyní by proběhlo přesměrování do košíku, bohužel je toto jen demo
          verze:(
        </DivPayAlert>
      )}
    </>
  );
};

export default Header;
