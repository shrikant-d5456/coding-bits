import React, { useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import Herosection from '../pages/Herosection';
import Testimonial from '../pages/Testimonial';

const Home = () => {
  
  return (
    <>
    <Header/>
    <Herosection/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home
