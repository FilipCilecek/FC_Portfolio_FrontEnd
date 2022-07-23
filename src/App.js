import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutme from './components/aboutme';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Spofilify from './components/spofilify';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<>home</>} />
          <Route exact path='/projekty' element={<Projects />} />
          <Route exact path='/znalosti' element={<Skills />} />
          <Route exact path='/about-me' element={<Aboutme />} />
          <Route exact path='/kontakt' element={<Contact />} />
          <Route exact path='/spofilify' element={<Spofilify />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
