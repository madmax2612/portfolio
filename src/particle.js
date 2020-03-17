import React from 'react';
import Particles from 'react-particles-js';
import image from './images/image1.jpeg';

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
    <div class="centered" style={{position:"absolute",top:'50%',left:'50%',transform: "translate(-50%, -120%)"}}>
    <p style={{fontSize:'20px',fontFamily:'TimesNewRoman'}}>Hi There, I'm</p>
    <p style={{fontSize:'38px',fontFamily:'TimesNewRoman'}}><center>Yagya</center></p>
    <p style={{fontSize:'20px',fontFamily:'TimesNewRoman'}}>UI Developer</p>
    </div>
    </div> 
</>

)


}