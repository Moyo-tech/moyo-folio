import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/moyosoreweke/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Moyo-tech" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/_moyoweke" target="_blank" rel="noreferrer" ><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials