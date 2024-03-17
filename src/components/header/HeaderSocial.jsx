import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="http://linkedIn.com" target='_blank'><BsLinkedin /></a>
      <a href="http://github.com" target='_blank'><FaGithub /></a>
      <a href="waseemahmad9977@gmail.com" target='_blank'><MdEmail/></a>
    </div>
  )
}

export default HeaderSocial
