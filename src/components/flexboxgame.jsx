import React, { useState, useEffect } from 'react';
import '../App.js';
import '../styles/flexboxgame.css';

function Flexboxgame() {
  const [direction, setDirection] = useState('row');
  const [wrap, setWrap] = useState('nowrap');
  const [justify, setJustify] = useState('flex-start');
  const [alignItems, setAlignitems] = useState('flex-start');
  const [alignContent, setAligncontent] = useState('flex-start');

  const changeDirection = () => {
    direction === 'row' ? setDirection('column') : setDirection('row');

    if (direction === 'row') {
      setDirection('row-reverse');
    } else if (direction === 'row-reverse') {
      setDirection('column');
    } else if (direction === 'column') {
      setDirection('column-reverse');
    } else {
      setDirection('row');
    }
  };

  const changeWrap = () => {
    if (wrap === 'nowrap') {
      setWrap('wrap');
    } else if (wrap === 'wrap') {
      setWrap('wrap-reverse');
    } else {
      setWrap('nowrap');
    }
  };

  const changeJustify = () => {
    if (justify === 'flex-start') {
      setJustify('flex-end');
    } else if (justify === 'flex-end') {
      setJustify('center');
    } else if (justify === 'center') {
      setJustify('space-between');
    } else if (justify === 'space-between') {
      setJustify('space-around');
    } else if (justify === 'space-around') {
      setJustify('space-evenly');
    } else {
      setJustify('flex-start');
    }
  };

  const changeAlignItems = () => {
    if (alignItems === 'flex-start') {
      setAlignitems('flex-end');
    } else if (alignItems === 'flex-end') {
      setAlignitems('center');
    } else if (alignItems === 'center') {
      setAlignitems('stretch');
    } else if (alignItems === 'stretch') {
      setAlignitems('baseline');
    } else {
      setAlignitems('flex-start');
    }
  };

  const changeAlignContent = () => {
    if (alignContent === 'flex-start') {
      setAligncontent('flex-end');
    } else if (alignContent === 'flex-end') {
      setAligncontent('center');
    } else if (alignContent === 'center') {
      setAligncontent('stretch');
    } else if (alignContent === 'stretch') {
      setAligncontent('space-between');
    } else if (alignContent === 'space-between') {
      setAligncontent('space-around');
    } else {
      setAligncontent('flex-start');
    }
  };

  return (
    <>
      <section className='flexgame'>
        <h1>Pohrej si s flexem, stačí kliknout na box</h1>
        <h2>Flex-direction : {direction}</h2>
        <section
          className='flex-direction'
          onClick={changeDirection}
          style={{
            flexDirection:
              direction === 'row'
                ? 'row'
                : direction === 'row-reverse'
                ? 'row-reverse'
                : direction === 'column'
                ? 'column'
                : direction === 'column-reverse'
                ? 'column-reverse'
                : 'row',
          }}
        >
          <div>BOX1</div>
          <div>BOX2</div>
          <div>BOX3</div>
        </section>

        <h2>Flex-wrap : {wrap}</h2>
        <section
          className='flex-wrap'
          onClick={changeWrap}
          style={{
            flexWrap:
              wrap === 'nowrap'
                ? 'nowrap'
                : wrap === 'wrap'
                ? 'wrap'
                : 'wrap-reverse',
          }}
        >
          <div>BOX1</div>
          <div>BOX2</div>
          <div>BOX3</div>
          <div>BOX4</div>
          <div>BOX5</div>
          <div>BOX6</div>
        </section>

        <h2>Justify-content : {justify}</h2>
        <section
          className='justify-content'
          onClick={changeJustify}
          style={{
            justifyContent:
              justify === 'flex-start'
                ? 'flex-start'
                : justify === 'flex-end'
                ? 'flex-end'
                : justify === 'center'
                ? 'center'
                : justify === 'space-between'
                ? 'space-between'
                : justify === 'space-around'
                ? 'space-around'
                : 'space-evenly',
          }}
        >
          <div>BOX1</div>
          <div>BOX2</div>
          <div>BOX3</div>
        </section>
        <h2>Align-items : {alignItems}</h2>
        <section
          className='align-items'
          onClick={changeAlignItems}
          style={{
            alignItems:
              alignItems === 'flex-start'
                ? 'flex-start'
                : alignItems === 'flex-end'
                ? 'flex-end'
                : alignItems === 'center'
                ? 'center'
                : alignItems === 'stretch'
                ? 'stretch'
                : 'baseline',
          }}
        >
          <div>BOX1</div>
          <div>
            <p>
              BOX2 <br />
              BOX2.1
            </p>
          </div>
          <div>BOX3</div>
          <div>
            <p>
              BOX4 <br />
              BOX4.1
              <br />
              BOX4.2
            </p>
          </div>
        </section>
        <h2>Align-content : {alignContent}</h2>
        <section
          className='align-content'
          onClick={changeAlignContent}
          style={{
            alignContent:
              alignContent === 'flex-start'
                ? 'flex-start'
                : alignContent === 'flex-end'
                ? 'flex-end'
                : alignContent === 'center'
                ? 'center'
                : alignContent === 'stretch'
                ? 'stretch'
                : alignContent === 'space-between'
                ? 'space-between'
                : 'space-around',
          }}
        >
          <div>BOX1 Lorem ipsum dolor sit amet.</div>
          <div>
            <p>BOX2</p>
          </div>
          <div>BOX3 Lorem, ipsum dolor.</div>
          <div>
            <p>BOX4 Lorem, ipsum dolor.</p>
          </div>
          <div>
            <p>BOX5</p>
          </div>
          <div>
            <p>BOX6 Lorem ipsum dolor sit.</p>
          </div>
          <div>
            <p>BOX7 Lorem ipsum dolor sit amet.</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Flexboxgame;
