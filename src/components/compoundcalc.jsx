import React from 'react';
import '../App.js';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';
import CompoundChart from './compoundchart.jsx';
import '../styles/compoundcalc.css';
import styled from 'styled-components';
import Inputsubmit from './global-components/Inputsubmit.js';

const Input = styled.input`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #0088a9;
  color: white;
  margin: 0.5em 0.2em;
  padding: 0.25em 1em;
  font-size: 14px;
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

function Compoundcalc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    calculateCompound(values);
  };
  //console.log(errors);

  function calculateCompound(values) {
    // Variables, ktere pouzivam ve funkci pro vypocty
    let investedcalc =
      parseInt(values.start) + values.contribution * 12 * values.lenght;
    let compoundedcalc = values.start;

    let invested_array = [];
    let compounded_array = [];
    let yearly_contribution = parseInt(values.contribution) * 12;

    // Total invested calculation, without compound
    for (let i = 0; i <= values.lenght; i++) {
      if (i === 0) invested_array[i] = parseInt(values.start);
      else {
        invested_array[i] =
          invested_array[i - 1] + parseInt(yearly_contribution);
      }
    }

    // Compounded total values calculation
    for (let i = 0; i <= values.lenght - 1; i++) {
      if (i === 0) {
        compoundedcalc =
          parseInt(compoundedcalc) + compoundedcalc * (values.interest / 100);

        compounded_array[i] = compoundedcalc;
      } else {
        compoundedcalc = parseInt(compoundedcalc) + values.contribution * 12;
        compoundedcalc =
          compoundedcalc + compoundedcalc * (values.interest / 100);

        compounded_array[i] = Math.round(compoundedcalc);
      }
    }

    // Element, co se renderuje
    const element = (
      <>
        <div className='compound-calculation-wrapper'>
          <div>Investováno - {investedcalc},-</div>
          <div>Zůrokováno - {Math.round(compoundedcalc)},-</div>
        </div>
        <CompoundChart
          sendInvested={invested_array}
          sendCompounded={compounded_array}
          sendYears={values.lenght}
        ></CompoundChart>
      </>
    );
    ReactDOM.render(element, document.getElementById('div-calculated'));
  }

  return (
    <>
      <div className='compound-form-wrapper'>
        <form className='compound-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='compound-form-row'>
            <label>Počáteční investice</label>
            <Input
              type='number'
              placeholder='investice ...'
              {...register('start', { required: true, min: 0 })}
            />
          </div>
          <div className='compound-form-row'>
            <label>Měsíční kontribuce</label>
            <Input
              type='number'
              placeholder='kontribuce ...'
              {...register('contribution', { min: 0 })}
            />
          </div>
          <div className='compound-form-row'>
            <label>Délka investování (roky)</label>
            <Input
              type='number'
              placeholder='délka investování ...'
              {...register('lenght', {
                required: true,
                max: 1000,
                min: 1,
              })}
            />
          </div>
          <div className='compound-form-row'>
            <label>Procentuální úrok</label>
            <Input
              type='number'
              placeholder='úrok ...'
              {...register('interest', {
                required: true,
                max: 10000,
                min: 1,
              })}
            />
          </div>
          <Inputsubmit />
        </form>
      </div>

      <div id='div-calculated'></div>
    </>
  );
}

export default Compoundcalc;
