import React, { useState, useEffect } from 'react';
import { HeaderComponent } from './header';
import TopLogo from './images/image.jpeg';
import { Particle } from './particle';
import { AboutCard } from './card';

export const Portfolio = function Portfolio() {


    return (
        <div >
            <HeaderComponent />
            <div className="ui hidden divider"/>
            
           
                        <Particle />

           
            <div>
                <div className="ui container">

                    <div className="ui grid">
                        <div className="ui row stackable one column wide">
                            <div className="column">
                                <AboutCard />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}