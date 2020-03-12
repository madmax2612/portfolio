import React,{useEffect,useState} from 'react';
import { Header } from './header';
import { Navbar, Form, Nav,FormControl,Button, NavDropdown, ProgressBar } from 'react-bootstrap';


export const About = function About(){

const [state,setState]=useState(false);	

const clickFunction=function clickFunction(){
console.log("hello")
setState(true);
	
} 


return(
<>
{/* <Header/>         */}
{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="" style={{alignContent:'right'}}>YAGYA PRAKASH PATI</Navbar.Brand>
  {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
  {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
    {/* <Nav className="mr-auto"> */}
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
        {/* <NavDropdown.Item href="">Action</NavDropdown.Item>
        <NavDropdown.Item href="">Another action</NavDropdown.Item>
        <NavDropdown.Item href="">Something</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
      {/* </NavDropdown> */}
    {/* </Nav> */}
    {/* <Nav> */}
      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    {/* </Nav> */}
  {/* </Navbar.Collapse> */}
{/* </Navbar>          */}
{/* <section class="banner_area"> */}
            {/* <div class="box_1620"> */}
				{/* <div class="banner_inner d-flex align-items-center">
					<div class="container">
						<div class="banner_content text-center">
							<h2>Portfolio</h2> */}
							{/* <div class="page_link">
								<a href="index.html">Home</a>
								<a href="portfolio.html">Portfolio</a>
				// 			</div> */}
				 		{/* </div> */}
				{/* </div> */}
				 {/* </div> */}
            {/* </div> */}
         {/* </section> */}
        <section class="home_banner_area">
           	<div class="container box_1620">
           		<div class="banner_inner d-flex align-items-center">
					   
					<div class="banner_content">
						<div class="media">
							<div class="d-flex">
								<img src="img/personal.jpg" alt="#image"/>
							</div>
							<div class="media-body">
								<div class="personal_text">
									<h6>Hello Everybody, i am</h6>
									<h3>YAGYA PRAKASH</h3>
									<h4>Software Developer</h4>
									
									<ul class="list basic_info">
										<li><a href="#"><i class="lnr lnr-calendar-full"></i> 26th December, 1994</a></li>
										<li><a href="#"><i class="lnr lnr-phone-handset"></i>+91 8368886265</a></li>
										<li><a href="#"><i class="lnr lnr-envelope"></i>prakshyagya@gmail.com</a></li>
										<li><a href="#"><i class="lnr lnr-home"></i> Mumbai, Maharastra</a></li>
									</ul>
									<ul class="list personal_social">
										<li><a href="https://www.linkedin.com/in/yagya-prakash-67ab1ab3/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
										<li><a href="https://github.com/madmax2612" target="_blank"><i class="fa fa-github"></i></a></li>
										{/* <li><a href="https://github.com/madmax2612" target="_blank"><i class="fa fa-gitlab"></i></a></li> */}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>

		<section className="welcome_area p_120" style={{paddingTop:'220px',paddingBottom:'220px'}}>
        	<div className="container">
			<div className="container">
        		<div className="row welcome_inner">
        			<div className="col-lg-6">
        				<div className="welcome_text">
        					<h4>About Myself</h4>
        					<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
        					<div className="row">
        						<div className="col-md-4">
        							<div className="wel_item">
        								<i className="lnr lnr-database"></i>
        								<h4>$2.5M</h4>
        								<p>Total Donation</p>
        							</div>
        						</div>
        						<div className="col-md-4">
        							<div className="wel_item">
        								<i className="lnr lnr-book"></i>
        								<h4>1465</h4>
        								<p>Total Projects</p>
        							</div>
        						</div>
        						<div className="col-md-4">
        							<div className="wel_item">
        								<i className="lnr lnr-users"></i>
        								<h4>3965</h4>
        								<p>Total Volunteers</p>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col-lg-6">
        				<div className="tools_expert">
        					<div className="skill_main">
								<div className="skill_item">
									<h4>After Effects <span class="counter">85</span>%</h4>
									{/* <div className="progress_br">
										<div className="progress"> */}
											{/* <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div> */}
											<ProgressBar animated now={45} />
										{/* </div>
									</div> */}
								</div>
								<div className="skill_item">
									<h4>Photoshop <span className="counter">90</span>%</h4>
									<div className="progress_br">
										<div className="progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
								<div class="skill_item">
									<h4>Illustrator <span class="counter">70</span>%</h4>
									<div className="progress_br">
										<div className="progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
								<div class="skill_item">
									<h4>Sublime <span class="counter">95</span>%</h4>
									<div className="progress_br">
										<div className="progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
								<div class="skill_item">
									<h4>Sketch <span className="counter">75</span>%</h4>
									<div className="progress_br">
										<div className="progress">
											<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
        				</div>
        			</div>
        		</div>
        	</div>
			</div>
        </section>



        <section class="home_gallery_area p_120">
        	<div class="container">
        		<div class="main_title">
        			<h2>Our Latest Featured Projects</h2>
        			<p>Who are in extremely love with eco friendly system.</p>
        		</div>
        		<div class="isotope_fillter">
        			<ul class="gallery_filter list">
						<li class="active" data-filter="*"><a href="#">All</a></li>
						<li data-filter=".brand"><a href="#">Vector</a></li>
						<li data-filter=".manipul"><a href="#">Raster</a></li>
						<li data-filter=".creative"><a href="#">UI/UX</a></li>
						<li data-filter=".design"><a href="#">Printing</a></li>
					</ul>
        		</div>
        	</div>
        	<div class="container">
        		<div class="gallery_f_inner row imageGallery1">
        			<div class="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-1.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-1.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>3D Helmet Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-2.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-2.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>2D Vinyl Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-3.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-3.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>Creative Poster Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand creative print">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-4.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-4.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>Embosed Logo Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand manipul design">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-5.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-5.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>3D Disposable Bottle</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			<div class="col-lg-4 col-md-4 col-sm-6 brand creative">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-6.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-6.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>3D Logo Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        		</div>
				{/* {state?
				<div class="container">
        		<div class="gallery_f_inner row imageGallery1">
        			<div class="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
        				<div class="h_gallery_item">
        					<div class="g_img_item">
        						<img class="img-fluid" src="img/gallery/project-1.jpg" alt=""/>
        						<a class="light" href="img/gallery/project-1.jpg"><img src="img/gallery/icon.png" alt=""/></a>
        					</div>
        					<div class="g_item_text">
        						<h4>3D Helmet Design</h4>
        						<p>Client Project</p>
        					</div>
        				</div>
        			</div>
        			</div>
					</div>
					
				:''} */}
				{/* {!state?	
        		<div class="more_btn" onClick={clickFunction}>
        			<a class="main_btn" >Load More Items</a>
        		</div>
				:""} */}
        	</div>
        </section>
             <footer class="footer_area p_120">
        	<div class="container">
        		<div class="row footer_inner">
        			<div class="col-lg-5 col-sm-6">
        				<aside class="f_widget ab_widget">
        					<div class="f_title">
        						<h3>About Me</h3>
        					</div>
        					<p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
        					<p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
        				</aside>
        			</div>
        			<div class="col-lg-5 col-sm-6">
        				<aside class="f_widget news_widget">
        					<div class="f_title">
        						<h3>Newsletter</h3>
        					</div>
        					<p>Stay updated with our latest trends</p>
        					<div id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative">
                                	<div class="input-group d-flex flex-row">
                                        <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email"/>
                                        <button class="btn sub-btn"><span class="lnr lnr-arrow-right"></span></button>		
                                    </div>				
                                    <div class="mt-10 info"></div>
                                </form>
                            </div>
        				</aside>
        			</div>
        			<div class="col-lg-2">
        				<aside class="f_widget social_widget">
        					<div class="f_title">
        						<h3>Follow Me</h3>
        					</div>
        					<p>Let us be social</p>
        					<ul class="list">
        						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
        						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
        						<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
        						<li><a href="#"><i class="fa fa-behance"></i></a></li>
        					</ul>
        				</aside>
        			</div>
        		</div>
        	</div>
        </footer>

</>

    )


}