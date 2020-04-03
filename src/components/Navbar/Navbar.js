import React, { Component } from 'react';
import '../../assets/scss/navbar.scss';
import { FaPhone, FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state = {
      isOpen: false
    };
    handleToggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
      return (
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaBars className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/" id="nav-hide">Home</Link>
              </li>
              <li>
                <Link to="/rooms" id="nav-hide">Rooms</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }