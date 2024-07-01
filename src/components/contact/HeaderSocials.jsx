import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='contact__socials'>
        <a href='https://www.linkedin.com/in/courtney-berry-675b49196/' className='contact__social-link' target='_blank' rel="noreferrer">
            <i class="fa-brands fa-linkedin" style={{color: "#428943",}} />
        </a>
        <a href='https://github.com/courtneyberry27' className='contact__social-link' target='_blank' rel="noreferrer">
          <i class="fa-brands fa-github" style={{color: "#428943",}} />
        </a>
    </div>
  )
}

export default HeaderSocials