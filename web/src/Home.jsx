import React from 'react'
import Serve from './components/Serve'
import Trusted from './components/Trusted'
import HeroSection from './components/HeroSection'



const Home = () => {
  const data ={
    name:'Maria Store',
    image:'image/shop.jpg'
  };
  return(
    <>
  <HeroSection myData={data}/>
  <Serve/>
       <Trusted/>
       </>
  )


};



export default Home

