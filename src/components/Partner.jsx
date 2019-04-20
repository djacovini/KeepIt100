import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Partners extends Component {
    render() {
        //Partner loop start
        const partnerData = this.props.partnersData.map((partner, index) => (
            <div className="single-partner-logo" key={index}>
                <Link to={partner.partnerLink} className="logo-preview">
                    <img src={partner.partnerLogo} alt="partnerLogo" />
                </Link>
            </div>
        ));
        //Partner loop END
        return (
            <React.Fragment>
                <section className="our-partners ptb-100">
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
                            <OwlCarousel
                                className="owl-theme partners-slides"
                                dots= {false}
                                loop={true}
                                margin={100}
                                autoplay={true}
                                smartSpeed={1000}
                                nav={true}
                                navText={[
                                    "<i class='icofont-arrow-left'></i>",
                                    "<i class='icofont-arrow-right'></i>"
                                ]}
                                responsive={{
                                    0: { items: 1 },
                                    768: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 5
                                    }
                                }}
                            >
                                {partnerData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Partners.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    partnersData: PropTypes.array
};

//Default Props
Partners.defaultProps = {
    SectionbgTitle: "Partners",
    sectionTitle: "Our Partners",
    sectionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    partnersData: [
        {
            partnerLogo: require("../assets/img/partners-logo/img1.png"),
            partnerLink: "/#0"
        },
        {
            partnerLogo: require("../assets/img/partners-logo/img2.png"),
            partnerLink: "/#0"
        },
        {
            partnerLogo: require("../assets/img/partners-logo/img3.png"),
            partnerLink: "/#0"
        },
        {
            partnerLogo: require("../assets/img/partners-logo/img4.png"),
            partnerLink: "/#0"
        },
        {
            partnerLogo: require("../assets/img/partners-logo/img5.png"),
            partnerLink: "/#0"
        },
        {
            partnerLogo: require("../assets/img/partners-logo/img3.png"),
            partnerLink: "/#0"
        }
    ]
};
export default Partners;
