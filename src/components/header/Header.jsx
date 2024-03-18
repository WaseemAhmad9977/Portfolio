import React from 'react'
import "./header.css"
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='home'>
       <div className="container header__container">
        <h5>Hello,I'm</h5>
        <h1>Waseem Ahmad</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img className='imga' src={ME} alt="ME"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

       </div>
    </header>
  )
}

export default Header
