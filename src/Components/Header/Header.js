import React from 'react'
import "./Header.css"

import headerImg from "../../assets/Heroimg.jpg"

const Header = ({heading}) => {
  return (
    <section className='header' style={{backgroundImage: `url(${headerImg})`, backgroundSize:"cover", backgroundPosition:"fixed"}}>
        <h1>{heading}</h1>
   <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
    </section>
  )
}
  export default Header