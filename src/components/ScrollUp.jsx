import React, { Component } from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class ScrollUpBtn extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <ScrollUpButton
                    style={{
                        padding: 8,
                        width: 40,
                        backgroundColor: "transparent",
                        height: 40,
                        border: "2px solid black",
                        outline: 0,
                        zIndex: 9999,
                    }}
                />
            </React.Fragment>
        );
    }
}

export default ScrollUpBtn;
