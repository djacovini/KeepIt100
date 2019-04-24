import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

class WelcomeServices extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="cta-area cta-bg-img">
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-7 col-lg-7">
                                            <div className="cta-info">
                                                <h2>{this.props.Title}</h2>
                                                <p>{this.props.Content}</p>
                                                
                                                <div className="center-wrap">
                                                    <Link to={this.props.BtnLink} className="btn-a">
                                                        <div className="button">
                                                            {this.props.BtnName}
                                                            <Icofont icon="icofont-long-arrow-right" />
                                                        <div className="mask" /></div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-5 col-lg-5 cta-img">
                                            <img className="img-fluid" src={this.props.Image} alt="mac-pro" /> 
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
WelcomeServices.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    BtnLink: PropTypes.string,
    BtnName: PropTypes.string,
    Image: PropTypes.string,
    
};

//Default Props
WelcomeServices.defaultProps = {
    Title: "We offer best in class service for your needs",
    Content: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    BtnLink: "/#0",
    BtnName: "PURCHASE NOW",
    Image: require("../assets/img/mac-pro.png"),
};
export default WelcomeServices;
