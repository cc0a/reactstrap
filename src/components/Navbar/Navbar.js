import React, { Component } from 'react';
import '../../assets/scss/navbar.scss';
import { FaPhone, FaBars } from 'react-icons/fa';

export class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="main-nav">
                    <div class="container">
                        <a class="navbar-brand js-scroll-trigger" id="nav-text" href="#page-top">Lounsberry Law</a>
                        <a href="tel:970-660-4436"><FaPhone className="phone-icon"/><FaBars className="menu-icon"/></a>
                        <h3 className="phone-number">970-660-4436</h3>
                    </div>
                </nav>
            </div> 
        )
    }
}

export default Navbar