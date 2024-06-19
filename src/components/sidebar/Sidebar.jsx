import React from 'react';
import './sidebar.css';
import Logo from "../../assets/new-logo-nowords.png";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className='nav__logo'>
        <img id='logo' src={Logo} alt='' />
      </a>

      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'>
                <i className='icon-home'></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'>
                <i className='icon-eyeglass'></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#resume" className='nav__link'>
                <i className='icon-briefcase'></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#portfolio" className='nav__link'>
                <i className='icon-notebook'></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#contact" className='nav__link'>
                <i className='icon-paper-plane'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='nav__footer'>
      </div>
    </aside>
  )
}

export default Sidebar