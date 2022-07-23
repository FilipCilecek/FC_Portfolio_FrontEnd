import React, { useState } from 'react';
import '../App.js';
import '../styles/spofilify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faBackwardStep,
  faBullseye,
  faCaretDown,
  faChalkboard,
  faChartGantt,
  faCirclePlay,
  faDiagramPredecessor,
  faForwardStep,
  faHeart,
  faHeartCirclePlus,
  faHouse,
  faHouseLaptop,
  faMagnifyingGlass,
  faMicrophone,
  faPlay,
  faPlus,
  faRepeat,
  faShuffle,
  faVolumeLow,
} from '@fortawesome/free-solid-svg-icons';
import loginphoto from '../images/spofilify/spofilify-cars.jpg';
import img_2010mix from '../images/spofilify/2010mix.jpg';
import img_beast_mode from '../images/spofilify/beast_mode.jpg';
import img_best_hiphop2020 from '../images/spofilify/best_hiphop2020.jpg';
import img_dailymix1 from '../images/spofilify/dailymix1.jpg';
import img_dailymix2 from '../images/spofilify/dailymix2.jpg';
import img_dailymix3 from '../images/spofilify/dailymix3.jpg';
import img_dailymix4 from '../images/spofilify/dailymix4.jpg';
import img_dailymix5 from '../images/spofilify/dailymix5.jpg';
import img_dailymix6 from '../images/spofilify/dailymix6.jpg';
import img_dance_party from '../images/spofilify/dance_party.jpg';
import img_rap_workout from '../images/spofilify/rap_workout.jpg';
import img_throwback_party from '../images/spofilify/throwback_party.jpg';
import img_tropical_house from '../images/spofilify/tropical_house.jpg';
import img_congratulations from '../images/spofilify/congratulations.jpg';
import { Link } from 'react-router-dom';

const Spofilify = ({ stateChanger }) => {
  const [showLoginmenu, setShowloginmenu] = useState(false);

  const toggleLoginMenu = () => {
    showLoginmenu === false ? setShowloginmenu(true) : setShowloginmenu(false);
  };

  return (
    <>
      <div className='spofilify'>
        {/*------ HEADER ------*/}
        <header id='spofilify-header'>
          <div className='header-buttons'>
            <Link to='/projekty'>
              <button className='header-button-left'>
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            </Link>
            <Link to='/projekty'>
              <button className='header-button-left'>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </Link>
            <div id='buttons-right'>
              <button id='upgrade-button'>Upgrade</button>
              <button id='login-button' onClick={toggleLoginMenu}>
                <figure>
                  <img src={loginphoto} alt='' draggable='false' />
                </figure>
                <span>Filip Cileček</span>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </div>
          </div>
        </header>
        <div
          id='login-menu'
          style={{ display: showLoginmenu === false ? 'none' : 'flex' }}
        >
          <ul>
            <li>
              <button className='login-menu-button'>Account</button>
            </li>
            <li>
              <button className='login-menu-button'>Profile</button>
            </li>
            <li>
              <button className='login-menu-button'>Upgrade to Premium</button>
            </li>
            <li>
              <button className='login-menu-button'>Log out</button>
            </li>
          </ul>
        </div>
        {/*------ NAVBAR ------*/}
        <nav className='left-navbar'>
          <div className='left-navbar-logo'>
            <FontAwesomeIcon icon={faBullseye} />
            <div>Spofilify</div>
          </div>
          <div className='nav-links'>
            <div className='nav-link'>
              <a href='#'>
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </a>
            </div>
            <div className='nav-link'>
              <a href='#'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span>Search</span>
              </a>
            </div>
            <div className='nav-link'>
              <a href='#'>
                <FontAwesomeIcon icon={faChartGantt} />
                <span>Your Library</span>
              </a>
            </div>
          </div>
          <div className='nav-links'>
            <div className='nav-link'>
              <a href='#'>
                <FontAwesomeIcon icon={faPlus} />
                <span>Create Playlist</span>
              </a>
            </div>
            <div className='nav-link'>
              <a href='#'>
                <FontAwesomeIcon icon={faHeartCirclePlus} />
                <span>Liked Songs</span>
              </a>
            </div>
          </div>
          <hr></hr>
          <ul className='nav-playlists'>
            <li>Discover weekly</li>
            <li>Hits 2010's summer</li>
            <li>Hit Rewind</li>
            <li>Oldchool hits</li>
            <li>Night rides</li>
            <li>Not Justin Bieber</li>
            <li>Workout songs</li>
          </ul>
        </nav>
        {/*------ RECOMMENDED ------*/}
        <section className='main-content'>
          <section className='spofilify-recommended'>
            <h1>Good afternoon</h1>
            <div className='recommended-grid'>
              <div className='recommended-item'>
                <img src={img_2010mix} alt=''></img>
                <span>2010 Mix</span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <div className='recommended-item'>
                <img src={img_dailymix1} alt=''></img>
                <span>Daily mix 1</span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <div className='recommended-item'>
                <img src={img_dailymix2} alt=''></img>
                <span>Daily mix 2</span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <div className='recommended-item'>
                <img src={img_beast_mode} alt=''></img>
                <span>Beast Mode</span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <div className='recommended-item'>
                <img src={img_dailymix3} alt=''></img>
                <span>Daily mix 3</span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <div className='recommended-item'>
                <img src={img_dance_party} alt=''></img>
                <span>Dance party</span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
            </div>
          </section>
          {/*------ MAIN ------*/}
          <section className='spofilify-main'>
            <h1>Made For You</h1>
            <section className='spofilify-main-row'>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix4} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 4</h2>
                <div>Burgos, convolk, LOAT! and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix5} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 5</h2>
                <div>Lil God Dan, Quadeca, Fatboibari and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_rap_workout} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Rap workout</h2>
                <div>Big rap for big reps. You got this.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix6} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 6</h2>
                <div>Joji, Julia Sheer, Charming Horses and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_tropical_house} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Tropical house</h2>
                <div>80purppp, Polo G, Lil Uzi Vert and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_best_hiphop2020} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Best Hip-Hop 2020</h2>
                <div>Hip-hop favourites from 2020 in Canada.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_throwback_party} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Throwback party</h2>
                <div>Here it is, the playlist for the ultimate throwback.</div>
              </div>
            </section>
            {/*------ row2 ------*/}
            <h1>Your top mixes</h1>
            <section className='spofilify-main-row'>
              <div className='spofilify-main-row-item'>
                <img src={img_throwback_party} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Throwback party</h2>
                <div>Here it is, the playlist for the ultimate throwback.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_best_hiphop2020} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Best Hip-Hop 2020</h2>
                <div>Hip-hop favourites from 2020 in Canada.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_tropical_house} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Tropical house</h2>
                <div>80purppp, Polo G, Lil Uzi Vert and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix5} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 5</h2>
                <div>Lil God Dan, Quadeca, Fatboibari and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_rap_workout} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Rap workout</h2>
                <div>Big rap for big reps. You got this.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix6} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 6</h2>
                <div>Joji, Julia Sheer, Charming Horses and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix4} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 4</h2>
                <div>Burgos, convolk, LOAT! and more</div>
              </div>
            </section>
            {/*------ row3 ------*/}
            <h1>Jump back in</h1>
            <section className='spofilify-main-row'>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix6} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 6</h2>
                <div>Joji, Julia Sheer, Charming Horses and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix4} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 4</h2>
                <div>Burgos, convolk, LOAT! and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_throwback_party} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Throwback party</h2>
                <div>Here it is, the playlist for the ultimate throwback.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_rap_workout} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Rap workout</h2>
                <div>Big rap for big reps. You got this.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_best_hiphop2020} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Best Hip-Hop 2020</h2>
                <div>Hip-hop favourites from 2020 in Canada.</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_dailymix5} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Daily Mix 5</h2>
                <div>Lil God Dan, Quadeca, Fatboibari and more</div>
              </div>
              <div className='spofilify-main-row-item'>
                <img src={img_tropical_house} alt=''></img>
                <FontAwesomeIcon icon={faCirclePlay} />
                <h2>Tropical house</h2>
                <div>80purppp, Polo G, Lil Uzi Vert and more</div>
              </div>
            </section>
          </section>
        </section>

        {/*------ PLAYER ------*/}
        <footer className='spofilify-player'>
          {/*------ Playing info ------*/}
          <div className='playing'>
            <img src={img_congratulations} alt=''></img>
            <div id='playing-info'>
              <h1>Congratulations</h1>
              <span>Post Malone, Quavo</span>
            </div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faChalkboard} />
          </div>
          {/*------ Middle controls ------*/}
          <div className='player-controls'>
            <div className='player-controls-buttons'>
              <FontAwesomeIcon icon={faShuffle} />
              <FontAwesomeIcon icon={faBackwardStep} />
              <FontAwesomeIcon icon={faPlay} />
              <FontAwesomeIcon icon={faForwardStep} />
              <FontAwesomeIcon icon={faRepeat} />
              <div className='player-timer'>
                <span>0:00</span>
                <div className='player-track'>
                  <div className='player-knob'></div>
                </div>
                <span>3:40</span>
              </div>
            </div>
            <div className='player-controls-time'></div>
          </div>
          {/*------ Right controls ------*/}
          <div className='player-right-controls'>
            <div className='player-right-controls-buttons'>
              <FontAwesomeIcon
                icon={faMicrophone}
                className='player-right-controls-dissapear'
              />
              <FontAwesomeIcon
                icon={faDiagramPredecessor}
                className='player-right-controls-dissapear'
              />
              <FontAwesomeIcon
                icon={faHouseLaptop}
                className='player-right-controls-dissapear'
              />
              <FontAwesomeIcon icon={faVolumeLow} />
              <div className='volume-track'>
                <div className='volume-knob'></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Spofilify;
