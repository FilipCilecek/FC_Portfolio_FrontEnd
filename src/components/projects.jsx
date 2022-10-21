import React from 'react';
import '../App.js';
import '../styles/projects.css';
import { useState, useEffect, useRef } from 'react';
import Snake from './snake';
import Compoundcalc from './compoundcalc.jsx';
import Flexboxgame from './flexboxgame.jsx';
import Spofilify from './spofilify.jsx';
import Cryptolist from './cryptolist.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRodSnake,
  faArrowTrendUp,
  faArrowLeft,
  faShuffle,
  faBorderAll,
  faS,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import img_snake from '../images/projects/snake_s.jpg';
import img_compound from '../images/projects/compound.jpg';
import img_flex from '../images/projects/flex.jpg';
import img_spofilify from '../images/projects/spofilify.jpg';
import img_crypto from '../images/projects/crypto.jpg';
import Btnback from './global-components/Btnback.js';

// Compound interest calculator
function Projects() {
  const [project, setProject] = useState(null);
  const previousproject = useRef('');
  let rndr = '';

  useEffect(() => {}, [project]);

  if (project === null) {
    rndr = (
      <>
        <div className='projects'>
          <div className='project'>
            {/*Spofilify*/}
            <div className='project-wrapper'>
              <Link to='/spofilify'>
                <img src={img_spofilify} alt='' draggable='false' />
                <h1>Spofilify</h1>
                <div className='project-details'>
                  <div className='slider-header-wrapper'>
                    <h1>Spofilify</h1>
                  </div>
                  <p>
                    Kopie nejznámější music streamovací platformy. S tímto
                    projektem jsem se zaměřil hlavně na základní front-end se
                    vším vytvořeno od základu. Hlavní věc byla vyřešení gridu a
                    celkové partial-responsivity, která je stejná, jako
                    desktopová verze originálu.
                  </p>
                  <p>HTML, CSS - LESS, trochu Reactu.</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='project'>
            {/*Crypto list*/}
            <div
              className='project-wrapper'
              onClick={() => {
                previousproject.current = project;
                setProject('cryptolist');
              }}
            >
              <img src={img_crypto} alt='' draggable='false' />
              <h1>Crypto list</h1>
              <div className='project-details'>
                <div className='slider-header-wrapper'>
                  <h1>Crypto list</h1>
                </div>
                <p>
                  Tento cryptocurrency list top coinů jsem vytvořil hlavně kvůli
                  integrace API v Reactu skrz Axios. Taktéž vylepšeno o
                  vyhledávání podle jména, nebo zkratky coinu.
                </p>
                <p>HTML, CSS - LESS, React, API - Axios</p>
              </div>
            </div>
          </div>
          <div className='project'>
            {/*Compound calc*/}
            <div
              className='project-wrapper'
              onClick={() => {
                previousproject.current = project;
                setProject('compound');
              }}
            >
              <img src={img_compound} alt='' draggable='false' />
              <h1>Úroková kalkulačka</h1>
              <div className='project-details'>
                <div className='slider-header-wrapper'>
                  <h1>Úroková kalkulačka</h1>
                </div>
                <p>
                  Úroková kalkulačka s výpočtem investice vs. zůrokované částky.
                  Při tomto projektu jsem se zaměřil hlavně na vizualizaci
                  pomocí chartu. Taktéž jsem použil Styled Components pro
                  případnou lepší scalabilitu.
                </p>
                <p>HTML, CSS - LESS, React, Styled Components, ChartJS</p>
              </div>
            </div>
          </div>
          <div className='project'>
            {/*Flexbox training*/}
            <div
              className='project-wrapper'
              onClick={() => {
                previousproject.current = project;
                setProject('flexboxgame');
              }}
            >
              <img src={img_flex} alt='' draggable='false' />
              <h1>Flexbox training</h1>
              <div className='project-details'>
                <div className='slider-header-wrapper'>
                  <h1>Flexbox training</h1>
                </div>
                <p>
                  Projekt vytvořen pro pochopení flexboxu i interaktivní změnou
                  flex attributů. Tyto změny provedeny pomocí Reactových
                  useStatů.
                </p>
                <p>HTML, CSS - LESS, React</p>
              </div>
            </div>
          </div>
          <div className='project'>
            {/*Snake*/}
            <div
              className='project-wrapper'
              onClick={() => {
                previousproject.current = project;
                setProject('snake');
              }}
            >
              <img src={img_snake} alt='' draggable='false' />
              <h1>Snake</h1>
              <div className='project-details'>
                <div className='slider-header-wrapper'>
                  <h1>Snake</h1>
                </div>
                <p>
                  Basic snake game udělaný v Reactu. Tímto projektem jsem přišel
                  do Reactu s tím, že jsem chtěl zjistit rozdíl mezi
                  JavaScriptem. Většina tohoto projektu je zkopírována z
                  tutoriálu s tím, že jsem přidal pár svých přídavků.
                </p>
                <p>HTML, CSS - LESS, React</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (project === 'spofilify') {
  } else {
    rndr = (
      <div className='functional-buttons'>
        {/*<button onClick={() => setProject(null)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Zpátky
    </button>*/}
        <Btnback setProject={() => setProject(null)}></Btnback>
      </div>
    );
  }

  return (
    <>
      <div className='wrapper'>{rndr}</div>
      {project === 'snake' && <Snake></Snake>}
      {project === 'compound' && <Compoundcalc></Compoundcalc>}
      {project === 'flexboxgame' && <Flexboxgame></Flexboxgame>}
      {project === 'spofilify' && (
        <Spofilify stateChanger={setProject}></Spofilify>
      )}
      {project === 'cryptolist' && <Cryptolist></Cryptolist>}
    </>
  );
}

export default Projects;
