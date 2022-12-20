import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

    const data ={
      name:'Maria Ecommerce',
      image:'image/shopping.jpg'
    };
    return <HeroSection myData={data}/>
  
  };


export default About

