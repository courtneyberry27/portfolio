import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
const[items, setItems] = useState(Menu);

  return (
    <section className='portfolio container section' id='portfolio'>
      <h2 className='section__title'>projects</h2>

      <div className='project__filters'>
        <span className='project__item'>all projects</span>
        <span className='project__item'>personal projects</span>
        <span className='project__item'>university projects</span>
        <span className='project__item'>work projects</span>
      </div>

      <div className='project__container grid'>
        {items.map((elem) => {
          const{id, image, title, category} = elem;
          return (
            <div className='project__card' key={id}>
                <div className='project__thumbnail'> 
                  <img src={image} alt='' className='project__img' />
                </div>

                <span className='project__category'>{category}</span>
                <h3 className='project__title'>{title}</h3>
                <a href='#' className='project__button'>
                  <i className='icon-link project__button-icon'></i>
                </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio