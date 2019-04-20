import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {
  render() {
      //Service loop start
      const servicedata = this.props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <Icofont icon={service.icon} />
                </div>
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ));
    //Service loop END
    return (
        <React.Fragment>
            <section id="services" className="services ptb-100">
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
                        {servicedata}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    SectionbgTitle: "Services",
    sectionTitle: "Services",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",

    servicesData: [
        {
            icon: "icofont-automation",
            heading: "Creative Solutions",
            description:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
        },
        {
            icon: "icofont-bullseye",
            heading: "Excellent Features",
            description:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
        },
        {
            icon: "icofont-woman-in-glasses",
            heading: "Friendly Support",
            description:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
        },
        {
            icon: "icofont-chart-growth",
            heading: "SEO & Advertising",
            description:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
        },
        {
            icon: "icofont-network-tower",
            heading: "Marketing & Consulting",
            description:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
        },
        {
            icon: "icofont-laptop-alt",
            heading: "Design & Development",
            description:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
        },
    ]
};

export default Services;
