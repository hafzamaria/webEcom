import React from 'react'
import { useGlobalContext } from './Context'
import {useEffect} from 'react'
import ServicesCard from './components/ServicesCard'

const Services = () => {




  const {updateServicesPage} = useGlobalContext();

  useEffect(() => updateServicesPage(),[]);

  return (
    <div>
      <ServicesCard/>
    </div>
  )
}
//   const {services} = useGlobalContext();
//   console.log(services)
//   return (
//     <div>
//       Here are Services
//     </div>
//   )
// }

export default Services
