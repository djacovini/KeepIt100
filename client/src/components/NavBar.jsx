import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchModal from "./SearchModal";

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("menu-shrink");
                elem.classList.add("fixed-top");
            } else {
                elem.classList.remove("menu-shrink");
                elem.classList.remove("fixed-top");
            }
        });
        window.scrollTo(0, 0);
        
    
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
  render() {
    return (
        <React.Fragment>
            {/* Start Top Header */}
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="address-bar">
                                <ul className="list-inline">
                                    <li><a href={this.props.mailLink}><Icofont icon="icofont-email"/> {this.props.mail}</a></li>
                                    <li><a href={this.props.numberLink}><Icofont icon="icofont-ui-call" /> {this.props.Number}</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-5">
                            <div className="social-icons">
                                <ul className="list-inline">
                                    <li><a href={this.props.facebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                                    <li><a href={this.props.twitterLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-twitter" /></a></li>
                                    <li><a href={this.props.instagramLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Top Header */}

            <Navbar
                id="navbar"
                bg="light"
                expand="lg"
                className="navbar navbar-expand-md navbar-light"
                collapseOnSelect={true}
            >
                <Container>
                    <Navbar.Brand className="navbar-brand logo">
                        <React.Fragment>
                            <LinkContainer exact to="/">
                                <img 
                                    src={this.props.MainLogo}
                                    alt="Logo" 
                                />
                            </LinkContainer>
                        </React.Fragment>
                    </Navbar.Brand>

                    <Navbar.Brand className="navbar-brand logo-2"> 
                            <React.Fragment>
                               <LinkContainer exact to="/">
                                    <img 
                                        className="img-fluid" 
                                        src={this.props.Logo2}
                                        alt="Logo"
                                    />
                                </LinkContainer>
                            </React.Fragment>
                    </Navbar.Brand>

                    <Navbar.Toggle 
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        id="collaspe-btn"
                    />
                    <Navbar.Collapse 
                        id="navbarSupportedContent"
                    >
                        <Nav className="navbar-nav ml-auto">
                        {this.props.pageName === "home" ? (
                            <React.Fragment>
                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="smooths nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Home
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Services
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="works"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Works
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        About
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="team"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Team
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="blog"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Blog
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="pricing"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Pricing
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Contact
                                    </Link>
                                </Nav.Item>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Home
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Services
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Works
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        About
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Team
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Blog
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Pricing
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Contact
                                    </NavLink>
                                </Nav.Item>
                            </React.Fragment>
                        )}
                        </Nav>
                    </Navbar.Collapse>
                    
                    <div className="header-search">
                        <SearchModal />
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    );
  }
}
//Props Types
NavBar.propTypes = {
    mailLink: PropTypes.string,
    mail: PropTypes.string,
    numberLink: PropTypes.string,
    Number: PropTypes.string,
    facebookLink: PropTypes.string,
    twitterLink: PropTypes.string,
    instagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    MainLogo: PropTypes.string,
    Logo2: PropTypes.string,
};

//Default Props
NavBar.defaultProps = {
    MainLogo: require('../assets/img/logo.png'),
    Logo2: require('../assets/img/logo2.png'),
    mailLink: "mailto:name@email.com",
    mail: "support@roxy.com ",
    numberLink: "callto:+4917640206387",
    Number: "+4917640206387",
    facebookLink: "//facebook.com/envato",
    twitterLink: "//twitter.com/envato",
    instagramLink: "//instagram.com/envato/",
};
export default NavBar;
