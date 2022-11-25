import React from 'react';
import '../App.js';
import '../styles/component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignCenter,
  faBarsProgress,
  faChartLine,
  faCircleArrowDown,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import Button from './component-pack/Button.js';
import Input from './component-pack/Input.js';
import { text } from '@fortawesome/fontawesome-svg-core';

function Componentpack() {
  return (
    <>
      <h1>Component Pack</h1>
      <div className='component-pack-wrapper'>
        <div className='component-pack-section'>
          <div className='wrapper-div'>
            <p>Button</p>
            <Button text={'Default'} />
          </div>
          <div className='wrapper-div'>
            <p>Button variant="outline"</p>
            <Button text={'Default'} variant='outline' />
          </div>
          <div className='wrapper-div'>
            <p>Button variant="text"</p>
            <Button text={'Default'} variant='text' />
          </div>
        </div>

        <div className='component-pack-section'>
          <div className='wrapper-div'>
            <p>Button disableShadow</p>
            <Button text={'Default'} disableShadow />
          </div>
          <div className='wrapper-div'>
            <p>Button disabled</p>
            <Button text={'Default'} disabled />
          </div>
          <div className='wrapper-div'>
            <p>Button variant="text" disabled</p>
            <Button text={'Default'} variant={'text'} disabled />
          </div>
        </div>
        <div className='component-pack-section'>
          <div className='wrapper-div'>
            <p>Button size="sm"</p>
            <Button text={'Default'} size={'sm'} />
            <div className='wrapper-div'>
              <p>Button size="md"</p>
              <Button text={'Default'} size={'md'} />
            </div>
            <div className='wrapper-div'>
              <p>Button size="lg"</p>
              <Button text={'Default'} size={'lg'} />
            </div>
          </div>
        </div>
        <div className='component-pack-section'>
          <div className='wrapper-div'>
            <p>Input</p>
            <Input placeholder={'Default'} />
          </div>
          <div className='wrapper-div'>
            <p>Input variant="outline"</p>
            <Input placeholder={'Default'} variant='outline' />
          </div>
          <div className='wrapper-div'>
            <p>Input variant="text"</p>
            <Input placeholder={'Default'} variant='text' />
          </div>
        </div>
        <div className='component-pack-section'>
          <div className='wrapper-div'>
            <p>Input type="password"</p>
            <Input placeholder={'Default'} type='password' />
          </div>
          <div className='wrapper-div'>
            <p>Input variant="outline" type="submit" value="Poslat"</p>
            <Input variant='outline' type='submit' value='Poslat'></Input>
          </div>
          <div className='wrapper-div'>
            <p>Input variant="text" type="month"</p>
            <Input placeholder={'Default'} variant='outline' type='month' />
          </div>
        </div>
        <div className='component-pack-section'>
          <p>Login pomocí komponent</p>
          <form>
            <div className='form-row'>
              <label>Login:</label>
              <Input placeholder={'login ...'} variant='outline' />
            </div>
            <div className='form-row'>
              <label>Password:</label>
              <Input
                placeholder={'password ...'}
                variant='outline'
                type='password'
              />
            </div>
            <div className='form-row padding-top10'>
              <Input
                placeholder={'Default'}
                variant='outline'
                type='submit'
                value='Login'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Componentpack;
