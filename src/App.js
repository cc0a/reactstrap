import React from 'react';
import './App.css';
import './assets/scss/services.scss';
import './assets/scss/masthead.scss';
import './assets/scss/navbar.scss';
import './assets/scss/lounsway.scss';
import './assets/scss/team.scss';
import { MdAttachMoney } from 'react-icons/md';
import { FaHandsHelping, FaPhone } from 'react-icons/fa';
import AboutImg from './assets/img/about.jpg';
import Myra from './assets/img/myra.png';
import Liz from './assets/img/liz.jpg';
import Christy from './assets/img/christy.jpg';

function App() {
  return (
    <div className="App">

  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="main-nav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" id="nav-text" href="#page-top">Lounsberry Law</a>
      <a href="tel:970-660-4436"><FaPhone className="phone-icon"/></a>
      </div>
  </nav>

  {/* <!-- Header --> */}
  <header class="masthead" id="masthead-specific">
    <div class="container">
      <div class="intro-text" id="masthead-phrase-1">
        <div id="masthead-phrase-1">You Are Not Alone</div>
      </div>
    </div>
  </header>

<div class="louns-way">
          <h3 className="louns-way-heading">The Lounsberry Way</h3> 
          <p className="louns-way-content">For the last 25 years, Lounsberry Law has endeavored to deliver exceptional, affordable legal services to our clients. We believe there's something to be said for doing things right the first time, every time.</p>
</div>

  {/* <!-- Services --> */}
  <section class="page-section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading" id="services-heading">Services</h2>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-6">
          <span class="fa-stack fa-4x">
            <MdAttachMoney className="services-dollar-icon"/>
          </span>
          <h4 class="service-heading">Bankruptcy</h4>
          <p id="services-content">Lounsberry Law Office is dedicated to helping people and keeping costs low. Bankruptcy is much less stressful when someone takes the time to explain the process. We care about our clients. We provide free credit repair information after your bankruptcy is discharged, which takes approximately four months.</p>
        </div>
        <div class="col-md-6">
          <span class="fa-stack fa-4x">
            <FaHandsHelping />
          </span>
          <h4 class="service-heading">SSI Assistance</h4>
          <p id="services-content">If you are suffering from a disability and you cannot do the work you did before, cannot adjust to other work because of your medical conditions, and your disability has lasted or is expected to last for at least one year or result in death, you may be eligible for SSD benefits.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Team --> */}
  <section class="bg-light page-section" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member">
            <img className="about-image" src={Liz} />
            <h4>Elizabeth Lounsberry</h4>
            <p class="text-muted">Attorney at Law</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
          <img className="about-image" src={Christy} />
            <h4>Christy Hawes</h4>
            <p class="text-muted">Business Manager</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img className="about-image" src={Myra} />
            <h4>Myra</h4>
            <p class="text-muted">Office Assistant</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">The team at Lounsberry Law embraces a forward-thinking, yet practical and personal approach to providing legal services to our clients. Bringing a personal yet professional touch to our interactions with clients.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Clients --> */}
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Contact --> */}
  <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Contact Us</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Footer --> */}
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
