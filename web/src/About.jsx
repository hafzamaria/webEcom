import {useEffect} from 'react'
import HeroSection from './components/HeroSection'
import {useGlobalContext} from './Context';

const About = () => {
  // const data ={
  //   name:"Maria Momina",
  //   image:'./image/about1.jpg'
  // }
  const {updateAboutPage} =useGlobalContext();
  useEffect( () => updateAboutPage(), []);

  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default About
