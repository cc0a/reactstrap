import React, { Component } from 'react';
import '../../assets/scss/team.scss';
import Myra from '../../assets/img/myra.png';
import Liz from '../../assets/img/liz.jpg';
import Christy from '../../assets/img/christy.jpg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export class Header extends Component {
    render() {
        return (
            <div className="team-div">
                  <section class="bg-light page-section" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading" id="team-heading">Meet The Team</h2>
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
            <h4>Myra Sanchez</h4>
            <p class="text-muted">Senior Paralegal</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">The team at Lounsberry Law embraces a forward-thinking, yet practical and personal approach to providing legal services to our clients.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section" id="testimonials-section">


      
      <div className="phone-container"> 
                        <h3 className="phone-number-heading">Call Us at: 970-660-4436</h3>
                        <h4 className="offices">Offices in Denver -and- Loveland</h4>
                    </div>
                </section>
            </div> 
        )
    }
}

export default Header;