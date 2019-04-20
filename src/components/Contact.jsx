import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import axios from "axios";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            number: "",
            message: "",
            successMsg: ""
        };
    }
    handleForm = e => {
        let that = this;
        axios
            .post("https://formcarry.com/s/qJalZsYuqY-", this.state, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                document.getElementById("contactForm").reset();
                that.setState({
                    successMsg: "Thank you! We received your message"
                });
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {});
    };

    handleFields = e => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <React.Fragment>
                <section id="contact" className="contact-area ptb-100">
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
                            <div className="col-lg-4 col-md-4">
                                <div className="address-area">
                                    <div className="addess">
                                        <Icofont icon="icofont-google-map"/>
                                        <h4>{this.props.AddTitle}</h4>
                                        <p>{this.props.Address}</p>
                                    </div>
                                    <div className="email">
                                        <Icofont icon="icofont-email"/>
                                        <h4>{this.props.EmailTitle}</h4>
                                        <p>{this.props.Email}</p>
                                    </div>
                                    <div className="phone">
                                        <Icofont icon="icofont-phone"/>
                                        <h4>{this.props.PhoneTitle}</h4>
                                        <p>{this.props.Phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="contact-form">
                                    <ValidationForm
                                        id="contactForm"
                                        onSubmit={(e, formData, inputs) => {
                                            e.preventDefault();
                                            this.handleForm(formData);
                                        }}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="name"
                                                        id="name"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your name"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your email address"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="subject"
                                                        id="subject"
                                                        type="text"
                                                        successMessage=""
                                                        errorMessage="Please enter your email subject"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="number"
                                                        id="number"
                                                        type="text"
                                                        successMessage=""
                                                        errorMessage="Please enter your phone number"
                                                        className="form-control"
                                                        placeholder="Phone"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="message"
                                                        id="description"
                                                        multiline
                                                        placeholder="Your message"
                                                        className="form-control"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please write your message"
                                                        rows="5"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="center-wrap">
                                            <div className="button">
                                                <button type="submit">Submit <Icofont icon="icofont-long-arrow-right"/> </button>
                                                <div className="mask"></div>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </ValidationForm>
                                    {this.state.successMsg !== "" ? (
                                        <div className="col-md-12"> 
                                            <div id="contact_send_status">
                                                <h3 className="contactMsg">
                                                    {this.state.successMsg}
                                                </h3>
                                            </div>
                                         </div>
                                    ) : null}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Contact.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    AddTitle: PropTypes.string,
    Address: PropTypes.string,
    EmailTitle: PropTypes.string,
    Email: PropTypes.string,
    PhoneTitle: PropTypes.string,
    Phone: PropTypes.string,
};

//Default Props
Contact.defaultProps = {
    SectionbgTitle: "Contact",
    sectionTitle: "Our Contact",
    sectionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    AddTitle: "Address",
    Address: "2750 Quadra Street Victoria, Canada.",
    EmailTitle: "Email",
    Email: "roxy@gmail.com",
    PhoneTitle: "Phone",
    Phone: "+1-325-555-0156",
};
export default Contact;
