import React, { useState, useEffect } from 'react';
import { Header } from './header';


export const Portfolio=function Portfolio(){


return(
<>

<div id="page" className="page">

<header className="header16" id="header16">

       <Header/>
        <div className="intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-content text-left">
                            <div className="svg-logo"><img className="img-responsive" src="images/SVG/Logo-13-white.svg" alt="Watch Video"/></div>
                            <h1 className="margin-auto">Your time is unique</h1>
                            <p>You were put on this earth to achieve your greatest self, to live out your purpose, and
                                to do it courageously.</p>
                            <a href="#" className="btn btn-info button">Read More</a>
                        </div>
                    </div>
                </div>

             
                <div className="features">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-content">
                                <h3><i className="fa fa-wordpress success-ebg"></i> Wordpress</h3>
                                <p>
                                    Probant malis deserunt commodo labore labore do pariatur, concursionibus singulis
                                    multos consequat.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-content">
                                <h3><i className="fa fa-joomla primary-ebg"></i> Joomla</h3>
                                <p>
                                    Probant malis deserunt commodo labore labore do pariatur, concursionibus singulis
                                    multos consequat.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-content">
                                <h3><i className="fa fa-code danger-ebg"></i> Bootstrap</h3>
                                <p>
                                    Probant malis deserunt commodo labore labore do pariatur, concursionibus singulis
                                    multos consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </header>

    {/* <section id="content-section1" className="content-section1">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center section-titles">
                    <h1 className="section-title">Unique Services</h1>
                    <p className="section-para">We are always happy to help you with installing, optimising and promoting
                        your portfolio. All incoming features and updates are also included in the pack.</p>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-content">
                        <i className="fa fa-wordpress skyblue-gradient"></i>
                        <h3>Wordpress</h3>
                        <p>
                            Probant an malis deserunt commodo labore labore do pariatur, culpa concursionibus singulis
                            multos consequat.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-content">
                        <i className="fa fa-joomla blue-gradient"></i>
                        <h3>Joomla</h3>
                        <p>
                            Probant an malis deserunt commodo labore labore do pariatur, culpa concursionibus singulis
                            multos consequat.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-content">
                        <i className="fa fa-code red-gradient"></i>
                        <h3>Bootstrap</h3>
                        <p>
                            Probant an malis deserunt commodo labore labore do pariatur, culpa concursionibus singulis
                            multos consequat.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-content">
                        <i className="fa fa-code red-gradient"></i>
                        <h3>Bootstrap</h3>
                        <p>
                            Probant an malis deserunt commodo labore labore do pariatur, culpa concursionibus singulis
                            multos consequat.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-content">
                        <i className="fa fa-code skyblue-gradient"></i>
                        <h3>Bootstrap</h3>
                        <p>
                            Probant an malis deserunt commodo labore labore do pariatur, culpa concursionibus singulis
                            multos consequat.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-content">
                        <i className="fa fa-code blue-gradient"></i>
                        <h3>Bootstrap</h3>
                        <p>
                            Probant an malis deserunt commodo labore labore do pariatur, culpa concursionibus singulis
                            multos consequat.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section> */}
   
    <section id="content-section20" className="content-section20">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center section-titles">
                    <h1 className="section-title">Take Your Time</h1>
                    <p className="section-para">We are always happy to help you with installing, optimising and promoting
                        your portfolio. All incoming features and updates are also included in the pack.</p>
                </div>
                <div className="col-md-4 col-md-offset-1 mn-top">
                    <div className="media single-content">
                        <h3 className="border-default">We Love Creativity</h3>
                        <p>
                            We are always happy to help you with installing, optimising and promoting your portfolio.
                            All incoming features and updates are also included in the pack.
                        </p>
                        <div><a className="btn btn-info button"><i className="fa fa-apple"></i>Download</a> <a className="btn btn-link">Read More</a></div>
                    </div>
                </div>
                <div className="col-md-5 col-md-offset-1">
                    <div className="screenshot-wrap"><img className="img-responsive" src="images/iphone-screen3.png" alt="iphone image"/></div>
                </div>
            </div>
        </div>
    </section>
  
    <section id="content-section16" className="content-section16">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="highlight-text center-block">
                        <h1>Eden UI is an <span>effortlessly</span>, authentic handcrapted design that suitable for any
                            bussiness</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section id="content-section19" className="content-section19">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-md-offset-1">
                    <div className=""><img className="img-responsive" src="images/iphone-screen1.png" alt="iphone image"/></div>
                </div>
                <div className="col-md-4 col-md-offset-1 mn-top">
                    <div className="media single-content">
                        <div className="media-left pull-left">
                            <i className="fa fa-wordpress skyblue-gradient"></i>
                        </div>
                        <div className="media-body">
                            <h3>Wordpress</h3>
                            <p>
                                Probant an malis deserunt commodo labore labore do atur, concursiobus singulis multos
                                consequat.
                            </p>
                        </div>
                    </div>
                    <div className="media single-content">
                        <div className="media-left pull-left">
                            <i className="fa fa-joomla red-gradient"></i>
                        </div>
                        <div className="media-body">
                            <h3>Joomla</h3>
                            <p>
                                Probant an malis deserunt commodo labore labore do atur, concursiobus singulis multos
                                consequat.
                            </p>
                        </div>
                    </div>
                    <div className="media single-content">
                        <div className="media-left pull-left">
                            <i className="fa fa-cog blue-gradient"></i>
                        </div>
                        <div className="media-body">
                            <h3>Bootstrap</h3>
                            <p>
                                Probant an malis deserunt commodo labore labore do atur, concursiobus singulis multos
                                consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  
    {/* <section id="pricing-plan8" className="pricing-plan8"> */}
        {/* <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center section-titles">
                        <h1 className="section-title">Unique Services</h1>
                        <p className="section-para">We are always happy to help you with installing, optimising and promoting
                            your portfolio. All incoming features and updates are also included in the pack.</p>
                </div>
            </div>
        </div> */}
        {/* <div className="pricing pricing-palden">
            <div className="pricing-item">
                <div className="pricing-deco">
                    <svg className="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px"  xmlns="http://www.w3.org/2000/svg" y="0px">
                                  <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                  <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                  <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                  <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                </svg>
                                
                    <div className="pricing-price">
                        <span className="pricing-currency">$</span>29
                        <span className="pricing-period">/ mo</span>
                    </div>
                    <h3 className="pricing-title">Startup</h3>
                </div>
                </div>
                <ul className="pricing-feature-list">
                    <li className="pricing-feature">1 GB of space</li>
                    <li className="pricing-feature">Support at $25/hour</li>
                    <li className="pricing-feature">Limited cloud access</li>
                </ul>
                <button className="pricing-action">Choose plan</button>
            </div> */}
            {/* <div className="pricing-item pricing__item--featured"> */}
                {/* <div className="pricing-deco"> */}
                    {/* <svg className="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                              
                                </svg>
                             */}
                            
                    {/* <div className="pricing-price">
                        <span className="pricing-currency">$</span>59
                        <span className="pricing-period">/ mo</span>
                    </div> */}
                    {/* <h3 className="pricing-title">Standard</h3> */}
                {/* </div> */}
                {/* <ul className="pricing-feature-list">
                    <li className="pricing-feature">5 GB of space</li>
                    <li className="pricing-feature">Support at $5/hour</li>
                    <li className="pricing-feature">Full cloud access</li>
                </ul>
                <button className="pricing-action">Choose plan</button>
      */}
            
            {/* <div className="pricing-item">
                <div className="pricing-deco"> */}
                    {/* <svg className="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
                                <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
                                <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
                                <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
                                </svg> */}
                    {/* <div className="pricing-price">
                        <span className="pricing-currency">$</span>99
                        <span className="pricing-period">/ mo</span>
                    </div> */}
                    {/* <h3 className="pricing-title">Premium</h3> */}
                {/* </div> */}
                {/* <ul className="pricing-feature-list">
                    <li className="pricing-feature">10 GB of space</li>
                    <li className="pricing-feature">Support at $5/hour</li>
                    <li className="pricing-feature">Full cloud access</li>
                </ul> */}
                {/* <button className="pricing-action">Choose plan</button> */}
               
            {/* </div> */}
            {/* </div> */}
            {/* </section> */}
        

  
    <section id="content-section21" className="content-section21">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <h1 className="quote">"We are always happy to help you with installing, optimising and promoting your
                        portfolio. All incoming features and updates are also included in the pack"</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div><img className="img-responsive center-block" src="images/clients/a.png" alt="client image"/></div>
                </div>
                <div className="col-md-3">
                    <div><img className="img-responsive center-block" src="images/clients/b.png" alt="client image"/></div>
                </div>
                <div className="col-md-3">
                    <div><img className="img-responsive center-block" src="images/clients/c.png" alt="client image"/></div>
                </div>
                <div className="col-md-3">
                    <div><img className="img-responsive center-block" src="images/clients/d.png" alt="client image"/></div>
                </div>
            </div>
        </div>
    </section>
    <section className="counter2">
        <div className="row info-color">
            <div className="col-md-4 info-area text-center">
                <div>
                    <i className="pe-7s-user pe-va"></i>
                    <h4>123</h4>
                    <h3>Members</h3>
                </div>
            </div>
            <div className="col-md-4 info-area text-center">
                <div>
                    <i className="pe-7s-drawer pe-va"></i>
                    <h4>78+</h4>
                    <h3>Reviews</h3>
                </div>
            </div>
            <div className="col-md-4 info-area text-center">
                <div>
                    <i className="pe-7s-study pe-va"></i>
                    <h4>100+</h4>
                    <h3>Awards</h3>
                </div>
            </div>
        </div>
    </section>
  
    <section id="form1" className="form1">
        <div className="container">
            <div className="row">
                <div className="contact-overlay">
                    <div className="col-md-6">
                        <h1 className="section-title">Send Message</h1>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="sr-only">Your Name</label>
                                    <input name="name" className="form-control" placeholder="Your Name" type="text"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="sr-only">Your Email</label>
                                    <input name="email" className="form-control" placeholder="Your Email" type="email"/>
                                </div>
                            </div>
                            <div className="col-sm-12 ">
                                <div className="form-group">
                                    <label className="sr-only">Massage</label>
                                    <textarea className="form-control textarea" name="message" rows="5" placeholder="Massage"></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-default">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-1">
                        <ul className="list-unstyled">
                            <li className="contact-info">Contact Info</li>
                            <li><i className="fa fa-phone-square warning-ecolor"></i> <span>+977 324 644 676 / +800 123 456 789</span>
                            </li>
                            <li><i className="fa fa-home success-ecolor"></i> <span>5 New York City, NY,United States</span>
                            </li>
                            <li><i className="fa fa-envelope danger-ecolor"></i> <span>admin@bootexperts.com</span></li>
                        </ul>
                        <ul className="list-inline social-links">
                            <li className="addr-title"> Social Link</li>
                            <br/>
                            <li><i className="fa fa-facebook-official"></i></li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-google-plus"></i></li>
                            <li><i className="fa fa-dribbble"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        </section>
        
   
   <section id="footer4" className="footer4">
        <div className="item dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 social">
                        <ul className="list-inline">
                             <li><h2><i className="fa fa-gg fa-flip-horizontal footer-logo"></i> EDEN UI</h2></li> 
                            <li><span>©Copyright 2018 | Designed with Eden Builder</span></li>
                            <li className="pull-right">
                                <ul className="list-inline">
                                    <li href="#">About</li>
                                    <li href="#">Contact</li>
                                    <li href="#">Terms</li>
                                    <li href="#">Privacy</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

</section>
</div>

</>
)
}