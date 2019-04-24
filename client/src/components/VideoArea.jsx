import React, { Component } from 'react';
import PropTypes from "prop-types";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class VideoArea extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true });
    }

  render() {
    return (
        <React.Fragment>
            <section className="video-area video-bg">
                <div className="diplay-table">
                    <div className="display-table-cell">
                        <div className="video-inner-content">
                            <div className="button__holder">
                                <ModalVideo
                                    channel="youtube"
                                    isOpen={this.state.isOpen}
                                    videoId="vr0qNXmkUJ8"
                                    onClose={() =>
                                        this.setState({
                                            isOpen: false
                                        })
                                    }
                                />
                                <span 
                                    onClick={this.openModal} 
                                    className="plus popup-youtube"
                                >
                                </span>
                            </div>
                            <h1>{this.props.Title}</h1>
                            <p>{this.props.Content}</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
VideoArea.propTypes= {
    Title: PropTypes.string,
    Content: PropTypes.string,
}
VideoArea.defaultProps = {
    Title: "Watch Video",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor",
}
export default VideoArea;
