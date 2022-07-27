import React from 'react'
import {AiFillInstagram, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 ALS Headphones All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiOutlineLinkedin/>
      </p>
    </div>
  )
}

export default Footer