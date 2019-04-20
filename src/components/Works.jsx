import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";


const images = [
    require("../assets/img/work-1.jpg"),
    require("../assets/img/work-2.jpg"),
    require("../assets/img/work-3.jpg"),
    require("../assets/img/work-4.jpg"),
    require("../assets/img/work-5.jpg"),
    require("../assets/img/work-6.jpg")
  ];
  
  const smallImages = [
      require("../assets/img/work-1.jpg"),
      require("../assets/img/work-2.jpg"),
      require("../assets/img/work-3.jpg"),
      require("../assets/img/work-4.jpg"),
      require("../assets/img/work-5.jpg"),
      require("../assets/img/work-6.jpg")
  ];

class Works extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">
                                            {this.props.SectionbgTitle}
                                        </span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[0]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[1]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[2]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[3]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[4]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[5]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                            <div className="box-content">
                                                 
                                                <ul className="icon">
                                                    <li>
                                                        <span 
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Works.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Works.defaultProps = {
    SectionbgTitle: "works",
    sectionTitle: "works",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
};

export default Works;
