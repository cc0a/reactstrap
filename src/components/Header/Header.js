import React, { Component } from 'react';
import { FaPhone } from 'react-icons/fa';
import '../../assets/scss/masthead.scss';
import '../../assets/scss/lounsway.scss';

export class Header extends Component {
    render() {
        return (
            <div className="masthead">
                <header class="masthead" id="masthead-specific">
                <div class="col-md-12" id="banner-div">
                                <h3>WE ARE STILL IN OPERATION! FREE PHONE CONSULT!</h3>
                                <h3>BANKRUPTCIES ARE STILL BEING PROCESSED BY PHONE CONFERENCE!</h3>
                            </div>
                        <div class="container">
                            <div class="intro-text" id="masthead-phrase-1">
                                <div id="masthead-phrase-1">You Are Not Alone</div>
                                    </div>
                                <div class="intro-text" id="masthead-phrase-1">
                            <div id="masthead-phrase-2">$599 Bankruptcy</div>
                        </div>
                    </div>
                </header>
                <div class="louns-way">
                    <h3 className="louns-way-heading">The Lounsberry Way</h3> 
                    <p className="louns-way-content">For the last 25 years, Lounsberry Law has endeavored to deliver exceptional, affordable legal services to our clients. We believe there's something to be said for doing things right the first time.</p>
                </div>
            </div> 
        )
    }
}

export default Header;