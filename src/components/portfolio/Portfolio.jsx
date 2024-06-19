import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio container section' id='portfolio'>
      <h2 className='section__title'>projects</h2>

      <div className='project__filters'>
        <span className='project__item'>All</span>
        <span className='project__item'>Creative</span>
        <span className='project__item'>Art</span>
        <span className='project__item'>Design</span>
        <span className='project__item'>Branding</span>
      </div>

      <div className='project__container grid'></div>
    </section>
  )
}

export default Portfolio