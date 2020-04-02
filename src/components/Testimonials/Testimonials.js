import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './testimonials.scss';

export class Testimonials extends Component {
    render() {
        return (
            <div className="testimonial-container">
                <h2 className="testimonial-heading">What People Have to Say About Lounsberry Law:</h2>
                <div id="slider">
                    <CarouselProvider
                        naturalSlideWidth={40}
                        naturalSlideHeight={4}
                        totalSlides={3}
                        isPlaying={true}
                    >
                        <Slider id="testimonial-slider">
                            <Slide index={0}>
                                <h3 className="testimonial-statement">I really loved Christy from her professional expertise to her speedy recovery of our lives!</h3>
                                <br />
                                <p className="testimonial-person">-Catherine V.</p>
                            </Slide>
                            <Slide index={1}>
                                <h3 className="testimonial-statement">I was nervous about the process of bankruptcy, Lounsberry Law Office made the whole process relaxed and comfortable.</h3>
                                <br />
                                <p className="testimonial-person">-Adele C.</p>
                            </Slide>
                            <Slide index={2}>
                                <h3 className="testimonial-statement">Lounsberry Law was very responsive to all of my questions and concerns.</h3>
                                <br />
                                <p className="testimonial-person">-Jason C.</p>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        )
    }
}

export default Testimonials;