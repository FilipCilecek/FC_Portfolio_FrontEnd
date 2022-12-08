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
              Nyní již skoro 3 roky pracuji jako Research Analysta ve větší
              korporátní firmě. Předešlá práce je blíže k oboru - byl jsem
              back-end C# programátor - i když pouze na kratší dobu, naučilo mě
              to dost o tom, jak věci fungují v reálném světě. Před touto
              zkušeností jsem znal programování pouze ze školy. Konkrétně C#
              jsem se dodatečně naučil po škole.
            </div>
            <div className='text'>
              K programování se chci vrátit - konkrétně chci přesedlat na
              front-end, protože mám rád vizualizaci své práce. Jako hlavní
              library jsem si vybral React, který mi přišel ze všech možností
              nejsympatyčtější a práce s componenty a hooky mi příjde zajímavá.
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
          </div>
          <div className='section-text'>
            <div className='text'>
              Ohledně zbytku mých znalostí a dovedností se odkáži na svůj
              životopis, který naleznete v menu nahoře.
            </div>
            <div className='text'>
              V dnešní době inflace a nejistoty hledám cokoliv v podobě
              brigády/part-time jako front-endista, než se v tomto oboru pořádně
              rozkoukám a vzájemně zjistíme, zda nám společná spolupráce sedí.
              Předem děkuji za navštívění mé stránky a budu se těšit na
              případnou spolupráci :)
            </div>
            <div className='text'>
              Pro zlepšení nálady přikládám ještě fotku své kočky - Tsuki.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
