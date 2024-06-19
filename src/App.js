import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Resume from './components/resume/Resume.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
