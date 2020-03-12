import React, { useState, useEffect } from 'react';
import { Header } from './header';


export const Portfolio=function Portfolio(){


return(
<>
<header className="header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container"><a href="#intro" className="navbar-brand scrollTo">IT Worker</a>
          <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span className="fa fa-bars"></span></button>
          <div id="navbarcollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#intro" className="nav-link link-scroll">Intro</a></li>
              <li className="nav-item"><a href="#about" className="nav-link link-scroll">About</a></li>
              <li className="nav-item"><a href="#services" className="nav-link link-scroll">Services</a></li>
              <li className="nav-item"><a href="#testimonials" className="nav-link link-scroll">Testimonials</a></li>
              <li className="nav-item"><a href="#references" className="nav-link link-scroll">My work</a></li>
              <li className="nav-item"><a href="#customers" className="nav-link link-scroll">Clients</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link link-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section id="intro" style="background: url(img/home.jpg) center center no-repeat; background-size: cover;" className="intro-section pb-2">
      <div className="container text-center">
        <div data-animate="fadeInDown" className="logo"><img src="img/logo-big.png" alt="logo" width="130"/></div>
        <h1 data-animate="fadeInDown" className="text-shadow mb-5">Hello, hola, नमस्ते !</h1>
        <p data-animate="slideInUp" className="h3 text-shadow text-400">I grind HTML and CSS and then weld them with PHP into beautiful and efficient websites.</p>
      </div>
    </section>

    <section id="about" className="about-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">About me</h2>
        </header>
        <div className="row">
          <div data-animate="fadeInUp" className="col-lg-6">
            <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
            <p>Received overcame oh sensible so at an. Formed do change merely to county it. <strong>Am separate contempt</strong> domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.</p>
            <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-6">
            <div className="skill-item">
              <div className="progress-title">PHP</div>
              <div className="progress">
                <div role="progressbar" style="width: 60%" aria-valuenow="0" aria-valuemin="60" aria-valuemax="100" className="progress-bar progress-bar-skill1"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Javascript</div>
              <div className="progress">
                <div role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="60" aria-valuemax="100" className="progress-bar progress-bar-skill2"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">HTML coding</div>
              <div className="progress">
                <div role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill3"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">SEO</div>
              <div className="progress">
                <div role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill4"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">SEM</div>
              <div className="progress">
                <div role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill5"></div>
              </div>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-sm-6 mx-auto mt-5"><img src="img/about.jpg" alt="This is me - IT worker" className="image rounded-circle img-fluid"/></div>
        </div>
      </div>
      
    </section>


    <section id="services" className="bg-gradient services-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">Services</h2>
        </header>
        <div className="row services text-center">
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-search"></i></div>
            <h3 className="heading mb-3 text-400">Consulting</h3>
            <p className="text-left description">On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-html5"></i></div>
            <h3 className="heading mb-3 text-400">HTML coding</h3>
            <p className="text-left description">Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh determine as.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-tachometer"></i></div>
            <h3 className="heading mb-3 text-400">PHP webdelopment</h3>
            <p className="text-left description">Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal.</p>
          </div>
        </div>
        <hr data-animate="fadeInUp"/>
        <div data-animate="fadeInUp" className="text-center">
          <p className="lead">Would you like to know more or just discuss something?</p>
          <p><a href="#contact" className="btn btn-outline-light link-scroll">Contact me</a></p>
        </div>
      </div>
    </section>
    
</>

)

}