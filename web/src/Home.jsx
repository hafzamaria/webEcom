import React from 'react'
import Serve from './components/Serve'
import Trusted from './components/Trusted'
import HeroSection from './components/HeroSection'
import FeatureProducts from './components/FeatureProducts';



const Home = () => {
  const data ={
    name:'Maria Store',
    image:'image/shop.jpg'
  };
  return(
    <>
  <HeroSection myData={data}/>
  <FeatureProducts/>
  <Serve/>
       <Trusted/>
       </>
  )


};



export default Home

