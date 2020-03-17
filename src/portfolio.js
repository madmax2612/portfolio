import React, { useState, useEffect } from 'react';
import { HeaderComponent } from './header';
import TopLogo from './images/image.jpeg';
import { Footer } from './footer';

export const Portfolio = function Portfolio() {


    return (
        <div >
            <HeaderComponent />
            <div className="ui grid">
                <div className="ui row stackable one column wide">
                    <div className="column">
                        <Footer />
                    </div>
                </div>
            </div>
            <div>
                <div className="ui container">

                    <div className="ui grid">
                        <div className="ui row stackable one column wide">
                            <div className="column">


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}