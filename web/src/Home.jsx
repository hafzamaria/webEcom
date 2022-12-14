import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Contact from "./Contact";
import { useGlobalContext } from "./Context";
import Services from "./Services";

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
      {/* <Services />
      <Contact /> */}
    </>
  );
};

export default Home;
