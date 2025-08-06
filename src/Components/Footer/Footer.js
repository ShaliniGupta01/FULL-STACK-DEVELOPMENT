import React from 'react'
import { Link } from 'react-router-dom'
import fb from "../../assets/facebook.png"
import insta from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

import "./Footer.css";

const Footer = () => {

  const social = [fb, insta, twitter]
  return (
  <Footer>
    <h1>GLX TRVL</h1>

    <div className='links'>
    <h3>Useful Links</h3>
     <div className='link'>
       <Link to="/">Home</Link>
       <Link to="/training">Training</Link>
       <Link to="/pricing">Pricing</Link>
       <Link to="/contact">Contact</Link>
     </div>
    </div>

    <div className='social'>
     {
      social.map((item)=>{
      return (
        <img src={item} alt=''/>
      )
      })
     }
    </div>
  </Footer>
  )
}

export default Footer
