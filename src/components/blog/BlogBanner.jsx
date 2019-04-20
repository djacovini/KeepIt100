import React, { Component } from 'react';
import PropTypes from "prop-types";

class BlogBanner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bread-cumbs-area bread-cumbs-bg">
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                    <h1>{this.props.Title}</h1>
                                    <p>{this.props.Content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        );
    }
}
//Props Types
BlogBanner.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
};

//Default Props
BlogBanner.defaultProps = {
    Title: "Blog with sidebar",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
};

export default BlogBanner;
