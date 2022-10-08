import React from 'react';
import '../App.js';
import '../styles/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignCenter,
  faBarsProgress,
  faChartLine,
  faCircleArrowDown,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <>
      <section className='skills-full'>
        <section className='skills-main'>
          <h1>Můj main stack</h1>
          <div className='skills'>
            <div className='skill'>
              <i class='devicon-react-original'></i>
              <h2>React</h2>
            </div>
            <div className='skill'>
              <i class='devicon-javascript-plain'></i>
              <h2>Javascript</h2>
            </div>
            <div className='skill'>
              <i class='devicon-html5-plain'></i>
              <h2>HTML</h2>
            </div>
            <div className='skill'>
              <i class='devicon-css3-plain'></i>
              <h2>CSS</h2>
            </div>
          </div>
        </section>
        <section className='skills-secondary'>
          <h1>Additional knowledge</h1>
          <div className='skills'>
            <div className='skill'>
              <FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon>
              <h2>Rest API</h2>
            </div>
            <div className='skill'>
              <FontAwesomeIcon icon={faAlignCenter}></FontAwesomeIcon>
              <h2>Responsivity</h2>
            </div>
            <div className='skill'>
              <i class='devicon-csharp-plain'></i>
              <h2>C#</h2>
            </div>
            <div className='skill'>
              <i class='devicon-less-plain-wordmark'></i>
              <h2>Less</h2>
            </div>
            <div className='skill'>
              <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
              <h2>SQL</h2>
            </div>
            <div className='skill'>
              <i class='devicon-bootstrap-plain'></i>
              <h2>Bootstrap</h2>
            </div>
            <div className='skill'>
              <i class='devicon-photoshop-plain'></i>
              <h2>Photoshop</h2>
            </div>
            <div className='skill'>
              <FontAwesomeIcon icon={faBarsProgress}></FontAwesomeIcon>
              <h2>Styled Components</h2>
            </div>
            <div className='skill'>
              <i class='devicon-github-original'></i>
              <h2>GitHub</h2>
            </div>
            <div className='skill'>
              <i class='devicon-wordpress-plain'></i>
              <h2>WordPress</h2>
            </div>
            <div className='skill'>
              <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
              <h2>ChartJS</h2>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Skills;
