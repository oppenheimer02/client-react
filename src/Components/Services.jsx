import React from 'react';
import ServiceBox from './ServiceBox';
import Pizza from '../images/Pizza.png';
import Frame1 from '../images/Frame 19.png';
import Frame2 from '../images/feature_1.png';

function Services() {
  return (
    <div id='features'>

    <div className="a-container">
      
      <ServiceBox   image= {Pizza} title='Peaceful Environment' />
      <ServiceBox   image= {Frame1} title='Silent Environment' />
      <ServiceBox   image= {Frame2} title='Hygeinic place' />

      </div>  
    

      </div>
    
  )
}

export default Services;
