import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
    render() {
        //About loop start
        const aboutdata = this.props.aboutsData.map((about, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="about-info">
                    <Icofont icon={about.Icon} />
                    <h3>{about.title}</h3>
                    <p>{about.content}</p>
                </div>
            </div>
        ));
        //About loop END
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row">
                        {aboutdata}
                    </div>
                </div>
            </section>   
            </React.Fragment>
        );
    }
}
//Props Types
About.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    SectionbgTitle: "About",
    sectionTitle: "About Us",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
        aboutsData: [
        {
            Icon: "icofont-binoculars",
            title: "Backgrounds",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-direction-sign",
            title: "Our Approach",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-thermometer",
            title: "Methodology",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-users-social",
            title: "Our Rich Experience",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-money",
            title: "Value for Money",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-unique-idea",
            title: "Flexible Development",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
    ]
};

export default About;
