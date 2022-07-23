import React, { useState, useEffect, useRef } from 'react';
import { resolvePath } from 'react-router-dom';
import '../App.js';
import '../styles/gridgame.css';

// https://css-tricks.com/snippets/css/complete-guide-grid/

// Grid state with [] containing current settings
function Grid1(props) {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(3);

  const columnChange = (e) => {
    setColumns(e.target.value);
  };

  const rowChange = (e) => {
    setRows(e.target.value);
  };

  useEffect(() => {}, [columns]);

  return (
    <>
      <section
        className='grid'
        style={{
          gridTemplateColumns: 'repeat(' + columns + ',1fr)',
          gridTemplateRows: 'repeat(' + rows + ',1fr)',
        }}
      >
        <div>TEXT1</div>
        <div>TEXT2</div>
        <div>TEXT3</div>
        <div>TEXT4</div>
        <div>TEXT5</div>
        <div>TEXT6</div>
        <div>TEXT7</div>
        <div>TEXT8</div>
      </section>
      <section className='grid-info'>
        <div className='row'>
          <p>grid-template-columns:</p>
          <select
            name='columns'
            id='columns'
            value={columns}
            onChange={columnChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div className='row'>
          <div>grid-template-rows:</div>
          <select name='rows' id='rows' value={rows} onChange={rowChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </div>
        <div
          className='row'
          id='columns-info'
          style={{ display: columns === '1' ? 'flex' : 'none' }}
        >
          xxx
        </div>
      </section>
    </>
  );
}

function Gridgame() {
  return (
    <>
      <section className='gridgame'>
        <Grid1></Grid1>
      </section>
    </>
  );
}

export default Gridgame;
