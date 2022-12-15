import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";
import Serve from "./components/Serve";
import Trusted from "./components/Trusted";
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
       <Serve/>
       <Trusted/>
    </>
  );
};

export default Home;
