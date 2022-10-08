import React from 'react';
import '../App.js';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Divnextpage from './global-components/Divnextpage.js';

function Home() {
  return (
    <>
      <main className='home-main'>
        <section className='interduce'>
          <h2>Zdravím, jmenuji se</h2>
          <h1>Filip Cileček.</h1>
          <h1>Robím weby od A do Z.</h1>
          <p>
            Jsem junior front-end developer, který se specializuje na React
            library a vše kolem něj. Momentálně pracuji na rozvoji svých
            dovedností a exploruji, co vše se dá s Reactem dělat.
          </p>
          <p>Veškeré info a odkazy na kontakt najdeš zde -</p>
          <Link to='/about-me' id='nav-contact'>
            <button>About me page</button>
          </Link>
        </section>
        <Divnextpage text={'Znalosti'}></Divnextpage>
      </main>
    </>
  );
}

export default Home;
