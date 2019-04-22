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
                                    <h2>About Us</h2>
                                    <p>We decided to make an application to expose those companies who decide to be transparent with the public about their political spending.</p>
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
        // {
        //     Icon: "icofont-binoculars",
        //     title: "Backgrounds",
        //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        // },
        {
            Icon: "icofont-direction-sign",
            title: "Our Approach",
            content: "Our idea was to bring to light an important topic that not too many people know about. This, to us, is an important discussion that we felt could have been covered better than some sites do. We hope to make this information in this more understandable to the public and create a more visual experience.",
        },
        // {
        //     Icon: "icofont-thermometer",
        //     title: "Methodology",
        //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        // },
        {
            Icon: "icofont-users-social",
            title: "Public Discussion",
            content: "Most of our own members didn't know this existsed let alone ever had a discussion about political transparency in the business world. Our hope is to have this be a more diuscussable topic for those who dont have the time or energy to invest in the political/financial world.                                    ",
        },
        {
            Icon: "icofont-money",
            title: "Value for Money",
            content: "The money that you and all others spend have the potential to influence political parties and members. Understanding this is a big part of the public discussion and without knowing who gives your money spent to specific political parties it can be very difficult to make your dollars count for what you value.",
        },
        // {
        //     Icon: "icofont-unique-idea",
        //     title: "Flexible Development",
        //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        // },
    ]
};

export default About;
