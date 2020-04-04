import React, { Component } from 'react';
import '../../assets/scss/navbar.scss';
import { FaPhone, FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleClick=()=> {
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }


    render() {
        return (
            <nav className="nav-div">
                <div className="nav-logo">
                    <div className="logo">
                        <a href="#"><h2 className="nav-logo-text">Lounsberry Law</h2></a> 
                    </div>      

                    <div className="btn" onClick={this.handleClick}>
                        <a href="tel:970-660-4436"><FaPhone className="nav-btn" id="phone"/></a>
                        <FaBars className="nav-btn"/>
                    </div> 
                </div>




                <ul className={this.state.isOpen ? 'showNav': 'undefined'}>
                    <li><Link to="/" className="nav-links">Home</Link></li>
                    <li><Link to="/documents-needed" className="nav-links">Documents Needed</Link></li>
                    <li><Link to="/services"className="nav-links">Services</Link></li>
                    <li><a href="#" className="nav-links">Contact</a></li>
                </ul>
            </nav> 
        )
    }
}

export default Navbar;