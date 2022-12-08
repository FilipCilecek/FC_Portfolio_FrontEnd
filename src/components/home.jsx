import React from 'react';
import '../App.js';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Divnextpage from './global-components/Divnextpage.js';
import resume from '../images/Cilecek_Filip_Zivotopis.pdf';

function Home() {
  return (
    <>
      <main className='home-main'>
        <section className='interduce'>
          <h2>Zdravím, jmenuji se</h2>
          <h1>Filip Cileček.</h1>
          <h1>Robím weby od A do Z.</h1>
          <p>
            Jsem front-end developer, který se specializuje na React library a
            vše kolem něj. Momentálně pracuji na rozvoji svých dovedností a
            hledám pracovní zkušenost, kde bych mohl prohloubit své znalosti.
          </p>
          <p>Veškeré info a odkazy na spojení a případnou spolupráci -</p>
          <div className='home-links'>
            <Link className='home-link' to='/projekty' id='nav-contact'>
              <button>Projekty</button>
            </Link>
            <Link className='home-link' to='/znalosti' id='nav-contact'>
              <button>Znalosti</button>
            </Link>
            <Link
              className='home-link'
              to={resume}
              id='nav-contact'
              download
              target='_blank'
            >
              <button>Životopis</button>
            </Link>
          </div>
        </section>
        <Divnextpage page={'projekty'}></Divnextpage>
      </main>
    </>
  );
}

export default Home;
