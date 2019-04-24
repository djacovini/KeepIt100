import React, { Component } from 'react';
import { Modal, Form } from "react-bootstrap";
import Icofont from 'react-icofont';

class SearchModal extends Component {
    constructor(props, context) {
        super(props, context);

            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

        handleClose() {
            this.setState({ show: false });
        }

        handleShow() {
            this.setState({ show: true });
        }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleShow} className="search-toggle">
                    <Icofont icon="icofont-search-1" />
                </button>
                                                                            
                <Modal show={this.state.show} onHide={this.handleClose} className="search-modal text-center modal fade">
                    <Modal.Body>
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="header-search-form">
                                    <Form>
                                        <input type="text" placeholder="Search" />
                                        <button><Icofont icon="icofont-search-1" /></button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}

export default SearchModal;
