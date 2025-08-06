import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from './Component/Card'

import "./PricingStyle.css"

const Pricing = () => {
  return (
    <>
     <Navbar/>
     <Header heading = "Pricing Page"/>
     <Card/>
     <Footer/>
    </>
  )
}

export default Pricing
