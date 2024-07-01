import React from 'react';
import './contact.css';
import strawberries from "../../assets/strawberries2.png";
import HeaderSocials from './HeaderSocials';

const Contact = () => {
  return (
    <section className='contact container section' id="contact">
      <h2 className='section__title'>contact information</h2>

      <div className='contact__container grid'>
        <HeaderSocials />


        <form action='mailto:courtneyberry327@gmail.com' method='post' enctype="text/plain" className='contact__form'>
          {/* <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input type='text' className='contact__form-input' placeholder='name' />
            </div>

            <div className='contact__form-div'>
              <input type='email' className='contact__form-input' placeholder='email address' />
            </div>

            <div className='contact__form-div contact__form-subject'>
              <input type='text' className='contact__form-input' placeholder='subject' />
            </div>

            <div className='contact__form-div contact__form-area'>
              <textarea className='contact__form-input' name='' id='' cols='30' rows='10' placeholder='write your message'/>
            </div>
          </div> */}
           

          <button type='submit' value='send' className='btn'>send an email</button>
        </form>

      </div>

      <div className='contact container section contact-info'>
        <h3>email: courtneyberry327@gmail.com  |  phone: (615)878-4517</h3>
      </div>
      <div className='strawberry__div'>
        <img src={strawberries} alt='' className='strawberries__img'/>
      </div>
    </section>
  )
}

export default Contact