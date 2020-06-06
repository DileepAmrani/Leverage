import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./../../Images/logo.png";
import ProfileIcon from "./../../Images/profile-icon.png";

import "./Navbar.css";
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          style={{ boxShadow: "none", padding: "2% 5%" }}
          dark
          expand="md"
        >
          <MDBNavbarBrand onClick={() => this.props.path().push("/")}>
            <img src={Logo} alt="logo" className="logo" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse}
            style={{ backgroundColor: "#D5DCE0" }}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {
           this.props.isLogin ?
           <MDBNavbarNav right>

                  <MDBNavItem>
                    <MDBNavLink
                      className="text-dark waves-effect waves-light"
                      to="login"
                      style={{ width: '100px' }}
                      onClick={() => this.props.path().push("/login")}
                      
                      >
                      Log in
                </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <button
                      className="signup-btn"
                      onClick={() => this.props.path().push("/signup")}
                      >
                      Sign Up
                </button>
                  </MDBNavItem> 
                  </MDBNavbarNav>
                      : 

                <MDBNavbarNav right>

                   <MDBNavItem>
                    <img src={ProfileIcon} alt='profile-icon' />
                  </MDBNavItem>
                </MDBNavbarNav>
                  
          }
           
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
