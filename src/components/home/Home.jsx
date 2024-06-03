import React from 'react';
import './home.css';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home-container' id='home'>
      <div className='intro'>
          
          <h1 className='home__name'>Courtney Berry</h1>
          <span className='home__education'>Full-Stack Developer</span>
         
          <HeaderSocials />

          <a href='#contact' className='btn'>Hire Me!</a>
      </div>

      <ScrollDown />
    </section>
  )
}

export default Home