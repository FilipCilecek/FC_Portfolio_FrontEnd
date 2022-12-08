import React from 'react';
import '../App.js';
import '../styles/aboutme.css';
import Imground from './global-components/Imground.js';
import img_me from '../images/aboutme/about_me_me.jpg';
import img_tsuki from '../images/aboutme/about_me_tsuki.jpg';

function Aboutme() {
  return (
    <>
      <div className='about-me'>
        <section className='first-section'>
          <div className='img-wrapper'>
            <Imground
              cls='first-image'
              source={img_me}
              alt={"That's me!"}
              round={'50%'}
            ></Imground>
          </div>
          <div className='section-text'>
            <div className='text'>
              Programování mě zaujalo na škole, kde jsem se naučil základy
              programování v C/C++. Poté jsem se ve volných chvílích doučil C# a
              nastoupil do větší firmy jako back-end developer. Hlavní náplní
              byl vývoj ERP systému a správa databáze. Nyní jsem už třetím rokem
              na pozici Reasearch Analysty, ale rád bych se k vývoji vrátil.
              Konkrétně k webovému front-endu, protože mám rád vizualizaci mé
              práce. Nejvíc mě zaujal React, kvůli jeho všestrannosti a rád bych
              se tomuto library dále věnoval.
            </div>
          </div>
        </section>

        <section className='second-section'>
          <div className='img-wrapper'>
            <Imground
              cls='second-image'
              source={img_tsuki}
              alt={"That's my cat - Tsuki!"}
              round={'0%'}
            ></Imground>
            Má kočka Tsuki, která pořád zlobí.
          </div>
          <div className='section-text'>
            <div className='text'>
              Ohledně zbytku mých znalostí a dovedností se odkáži na svůj
              životopis, který naleznete v menu nahoře.
            </div>
            <div className='text'>
              Jsem otevřen veškerým nabídkám, moje preference je však práce v
              podobě brigády/part-time, než se v tomto oboru pořádně rozkoukám a
              vzájemně zjistíme, zda nám společná spolupráce sedí. Předem děkuji
              za navštívení mé stránky a budu se těšit na případnou spolupráci
              :)
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
