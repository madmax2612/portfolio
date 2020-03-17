import React from 'react';
import Particles from 'react-particles-js';
import image from './images/image1.jpeg';

export const Footer=function Footer(){

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
    <div class="centered" style={{position:"absolute",top:'50%',left:'50%',transform: "translate(-50%, -50%)"}}>
    <p style={{fontSize:'28px'}}>Hi I Am Yagya</p>
    <p style={{fontSize:'28px'}}>I am a Developer</p>
    </div>
    </div> 
</>

)


}