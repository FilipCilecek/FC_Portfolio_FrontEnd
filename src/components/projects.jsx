import React from 'react';
import '../App.js';
import '../styles/projects.css';
import { useState, useEffect, useRef } from 'react';
import Snake from './snake';
import Compoundcalc from './compoundcalc.jsx';
import Flexboxgame from './flexboxgame.jsx';
import Gridgame from './gridgame.jsx';
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
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Compound interest calculator
function Projects() {
  const [project, setProject] = useState(null);
  const previousproject = useRef('');
  let rndr = '';

  useEffect(() => {
    //console.log(previousproject.current);
  }, [project]);

  if (project === null) {
    rndr = (
      <>
        <button
          onClick={() => {
            previousproject.current = project;
            setProject('snake');
          }}
        >
          Snake
          <FontAwesomeIcon icon={faRodSnake} />
        </button>
        <button
          onClick={() => {
            previousproject.current = project;
            setProject('compound');
          }}
        >
          Úroková kalkulačka
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </button>
        <button
          onClick={() => {
            previousproject.current = project;
            setProject('flexboxgame');
          }}
        >
          Flexbox training
          <FontAwesomeIcon icon={faShuffle} />
        </button>
        <button
          onClick={() => {
            previousproject.current = project;
            setProject('gridgame');
          }}
        >
          Grid training
          <FontAwesomeIcon icon={faBorderAll} />
        </button>
        <button
          onClick={() => {
            previousproject.current = project;
            setProject('spofilify');
          }}
        >
          <Link to='/spofilify'>Spofilify</Link>
          <FontAwesomeIcon icon={faS} />
        </button>
        <button
          onClick={() => {
            previousproject.current = project;
            setProject('cryptolist');
          }}
        >
          Crypto list
          <FontAwesomeIcon icon={faS} />
        </button>
      </>
    );
  } else if (project === 'spofilify') {
  } else {
    rndr = (
      <div className='functional-buttons'>
        <button onClick={() => setProject(null)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Zpátky
        </button>
      </div>
    );
  }

  return (
    <>
      <div className='projects'>{rndr}</div>
      {project === 'snake' && <Snake></Snake>}
      {project === 'compound' && <Compoundcalc></Compoundcalc>}
      {project === 'flexboxgame' && <Flexboxgame></Flexboxgame>}
      {project === 'gridgame' && <Gridgame></Gridgame>}
      {project === 'spofilify' && (
        <Spofilify stateChanger={setProject}></Spofilify>
      )}
      {project === 'cryptolist' && <Cryptolist></Cryptolist>}
    </>
  );
}

export default Projects;
