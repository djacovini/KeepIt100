import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom';

class BannerTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="home" className="hompage-slides-wrapper">
                    <div className="single-slider-item slide-bg-1">
                        <div className="diplay-table">
                            <div className="display-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <span
                                                    className={
                                                        isVisible
                                                            ? "hero-text animated fadeInDown slow opacityOne"
                                                            : "opacityZero"
                                                    }
                                                >
                                                    {this.props.TopTitle}
                                                </span>

                                                <h1
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne"
                                                            : "opacityZero"
                                                    }
                                                >
                                                    {this.props.Title}
                                                </h1>
                                                <p
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne"
                                                            : "opacityZero"
                                                    }
                                                >
                                                    {this.props.Content}
                                                </p>
                                                <div className="center-wrap">
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
                                        </div>
                                    </div>
                                )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
//Props Types
BannerTwo.propTypes = {
    TopTitle: PropTypes.string,
    Title: PropTypes.string,
    Content: PropTypes.string,
    BtnLink: PropTypes.string,
    BtnName: PropTypes.string,
};

//Default Props
BannerTwo.defaultProps = {
    TopTitle: "Clean & Creative",
    Title: "Fully Responsive Design",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    BtnLink:  "/#",
    BtnName: "get started",
};

export default BannerTwo;
