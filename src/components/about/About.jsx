import React from 'react';
import './about.css';
import Me from "../../assets/me.JPG";
import AboutBox from './AboutBox';
import resume from '../../assets/CourtneyBerry_6158784517.docx'

const About = () => {
  return (
    <section className='about container section' id="about">
      <h2 className='section__title'>about me</h2>

      <div className='about__container grid'>
        <img src={Me} alt='' className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>hi! i'm courtney berry, and i specialize in full-stack application
             development.
            i also have experience with AI and machine learning 
            within the scope of application development.</p>
            <a href={resume} className='btn'>Download Resume</a>
          </div>

          <div className='about__skills grid'>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>app development</h3>
                <span className='skills__number'>85%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage app-dev'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>app architecture</h3>
                <span className='skills__number'>60%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage app-arch'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>ui/ux</h3>
                <span className='skills__number'>60%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage ui-ux'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>ai & ml</h3>
                <span className='skills__number'>60%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage ai-ml'></span>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About;