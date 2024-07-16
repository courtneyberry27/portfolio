import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className='about__box'>
            <i className='about__icon icon-fire' />

            <div>
                <h3 className='about__title'>34</h3>
                <span className='about_subtitle'>Projects completed</span>
            </div>
        </div>

        <div className='about__box'>
            <i className='about__icon icon-cup' />

            <div>
                <h3 className='about__title'>1372</h3>
                <span className='about_subtitle'>Cups of Coffee</span>
            </div>
        </div>

        <div className='about__box'>
            <i className='about__icon icon-people' />

            <div>
                <h3 className='about__title'>6</h3>
                <span className='about_subtitle'>Team Projects</span>
            </div>
        </div>

        <div className='about__box'>
            <i className='about__icon icon-badge' />

            <div>
                <h3 className='about__title'>5</h3>
                <span className='about_subtitle'>Certifications & Degrees</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox
