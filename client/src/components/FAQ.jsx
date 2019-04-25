import React, { Component } from 'react';
// import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import { Accordion, AccordionItem } from "react-sanfona";
// import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Chart from 'react-google-charts';

class FAQ extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="faq ptb-100 bg-dark">
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
                        <div className="faq-content">
                            <div className="row">
                                <div className="content-box col-12">
                                {/* https://docs.google.com/spreadsheets/d/1KT99Zipdi2zd2C7aGdLYGx3ZZ5xIlFLw6VIzatuSzic/edit?usp=sharing?range=A1:H497 */}
                                
                                <Chart
                                chartType="BarChart"
                                spreadSheetUrl="https://docs.google.com/spreadsheets/d/1KT99Zipdi2zd2C7aGdLYGx3ZZ5xIlFLw6VIzatuSzic/edit?usp=sharing"
                                options={{
                                    hAxis: {
                                    format: 'short',
                                    },
                                    vAxis: {
                                    format: 'long',
                                    // format:'scientific'
                                    // format:'long'
                                    // format:'percent'
                                    },
                                }}
                                rootProps={{ 'data-testid': '1' }}
                                />
                                {/* <Chart
                                width={'col-12x'}
                                height={'300px'}
                                chartType="BarChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['City', '2010 Population', '2000 Population'],
                                    ['New York City, NY', 8175000, 8008000],
                                    ['Los Angeles, CA', 3792000, 3694000],
                                    ['Chicago, IL', 2695000, 2896000],
                                    ['Houston, TX', 2099000, 1953000],
                                    ['Philadelphia, PA', 1526000, 1517000],
                                ]}
                                options={{
                                    title: 'Population of Largest U.S. Cities',
                                    chartArea: { width: '75%' },
                                    colors: ['#9800fd', '#62e2e2'],
                                    hAxis: {
                                    title: 'Total Population',
                                    minValue: 0,
                                    },
                                    vAxis: {
                                    title: 'City',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '1' }}
                                /> */}
                                </div>

                                <div className="col-lg-12">
                                    <Accordion
                                        rootTag="div"
                                        className="panel-group"
                                    >
                                        {this.props.faqData.map(item => {
                                            return (
                                                <AccordionItem
                                                    key={item}
                                                    title={item.title}
                                                    expanded={true}
                                                    expandedClassName=""
                                                    className="panel-title panel panel-default"
                                                    titleTag="a"
                                                    titleClassName=""
                                                >
                                                    <div>
                                                        <div className="panel-body">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                                <div className="col-lg-12">
                                    <Chart
                                    width={'col-12'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 11],
                                        ['Eat', 2],
                                        ['Commute', 2],
                                        ['Watch TV', 2],
                                        ['Sleep', 7],
                                    ]}
                                    options={{
                                        title: 'My Daily Activities',
                                        // Just add this option
                                        is3D: true,
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                    />  
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
FAQ.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    // ContentLink: PropTypes.string,
    // ContentTitle: PropTypes.string,
    ContentDescription: PropTypes.string,
    faqData: PropTypes.array
};

//Default Props
FAQ.defaultProps = {
    SectionbgTitle: "SCORES",
    sectionTitle: "CPA-INDEX SCORE",
    sectionDescription:
        "The CPA-Zicklin Index of Corporate Political Disclosure and Accountability, developed in conjunction with the Zicklin Center for Business Ethics Research at the University of Pennsylvania's Wharton School, is the only measure of electoral spending transparency and accountability among the country's largest public corporations. Based on voluntarily disclosed information, the Index measures performance in three areas: disclosure, political spending policy, and board oversight. The Center gathers contribution information and information about transparency and accountability policies directly from companies’ web sites. ",
    
    // ContentTitle: "One More Question?",
    // ContentDescription: "If you have more questions, send us a message and we will answer you as soon as possible.",
    // ContentLink: "/#0",

        faqData: [
        {
            title: "How to download your items?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        },
        {
            title: "View & download invoices?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        },
        {
            title: "What is Item Support?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        },
        {
            title: "How to contact an author?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        }
    ]
};

export default FAQ;
