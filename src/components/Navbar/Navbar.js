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
                        <FaBars className="nav-btn"/>
                    </div> 
                </div>




                <ul className={this.state.isOpen ? 'showNav': 'undefined'}>
                    <li><a href="#" className="nav-links">Home</a></li>
                    <li><a href="#" className="nav-links">Documents Needed</a></li>
                    <li><a href="#" className="nav-links">Services</a></li>
                    <li><a href="#" className="nav-links">Contact</a></li>
                </ul>
            </nav> 
        )
    }
}

export default Navbar;