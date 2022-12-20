
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productcontext.jsx';


const About = () => {
const {myName} = useProductContext();
    const data ={
      name:'Maria Ecommerce',
      image:'image/shopping.jpg'
    };
    return (
      <>
      {myName}
    <HeroSection myData={data}/>
    </>
    )
  };


export default About

