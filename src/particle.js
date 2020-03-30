import React from 'react';
import Particles from 'react-particles-js';
import image from './images/image1.jpeg';
import './index.css';
export const Particle=function Particle(){

return(
<>
<div className="App"> 
     
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 30
	        },
	        "size": {
	            "value": 2
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} 
    style={{ opacity:0.6,background:`url(${image})`}}
    />
  
    </div> 
</>

)


}