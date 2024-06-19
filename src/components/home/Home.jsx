import React from 'react';
import './home.css';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';


const Home = () => {
  return (
    <section className='home-container' id='home'>
      <div className='intro'>
          
          <h1 className='home__name'>courtney berry</h1>
          <span className='home__education'>full-stack developer</span>
         
          <HeaderSocials />

          <a href='#contact' className='btn'>hire me!</a>

          <ScrollDown />
      </div>

    </section>
  )
}

export default Home