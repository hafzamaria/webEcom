import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";


const Home = () => {
  // const data={
  //   name:'Hafza Maria',
  //   image:'./image/hero1.jpg'
  // }

  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
     
    </>
  );
};

export default Home;
