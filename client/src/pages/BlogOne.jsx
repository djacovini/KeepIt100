import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

//Import Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class BlogOne extends Component {
  render() {
    //BlogOne loop start
    const blogonedata = this.props.blogonesData.map((blogone, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="blog-item">
                <Link to={blogone.postLink} className="blog-img"><img src={blogone.postImage} alt="blog-one" /></Link>
                <div className="blog-info">
                    <div className="date-box">
                        {blogone.date} <span className="month">{blogone.month}</span>
                    </div>
                    <div className="title-meta">
                        <h2><Link to={blogone.postLink}>{blogone.posttitle}</Link></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blogone.authorLink}>{blogone.authorName}</Link></li>
                                <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blogone.CommentsLink}>{blogone.TotalComments}</Link></li>
                                <li><Icofont icon="icofont-tags" /> Tags: <Link to={blogone.TagLink}>{blogone.TagName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{blogone.postContent}</p>
                </div>
            </div>
        </div>
    ));
    //BlogOne loop END
    return (
        <React.Fragment>

        {/*NavBar: src/components/NavBer.jsx */}
        <NavBar />

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

        <section id="blog" className="our-blog main-blog">
            <div className="container">
                <div className="row">
                    {blogonedata}
                    <div className="col-lg-12 pagination-area text-center">
                        <ul className="pagination">
                            <li><Link to="/#0"><Icofont icon="icofont-simple-left" /> Prev</Link></li>
                            <li className="active"><Link to="/#0">1</Link></li>
                            <li><Link to="/#0">2</Link></li>
                            <li><Link to="/#0">3</Link></li>
                            <li><Link to="/#0">Next <Icofont icon="icofont-simple-right" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/*Footer: src/components/Footer.jsx */}
        <Footer />
        
        </React.Fragment>
    );
  }
}
//Props Types
BlogOne.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    blogonesData: PropTypes.array
};

//Default Props
BlogOne.defaultProps = {
    Title: "Our Blog",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    blogonesData: [
        {
            postImage: require("../assets/img/blog-one.jpg"),
            postLink: "/blog-details",
            date: "25",
            month: "Feb",
            posttitle: "Risus commodo viverra mae.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "#",
            TotalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            postImage: require("../assets/img/blog-two.jpg"),
            postLink: "/blog-details",
            date: "10",
            month: "Feb",
            posttitle: "Best way to learn java.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "#",
            TotalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            postImage: require("../assets/img/blog-three.jpg"),
            postLink: "/blog-details",
            date: "30",
            month: "Jan",
            posttitle: "14 ridiculously cool websites.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "#",
            TotalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            postImage: require("../assets/img/blog-one.jpg"),
            postLink: "/blog-details",
            date: "25",
            month: "Feb",
            posttitle: "How to build a programming career.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "#",
            TotalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            postImage: require("../assets/img/blog-two.jpg"),
            postLink: "/blog-details",
            date: "10",
            month: "Feb",
            posttitle: "10 hot marketing trends you need.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "#",
            TotalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            postImage: require("../assets/img/blog-three.jpg"),
            postLink: "/blog-details",
            date: "30",
            month: "Jan",
            posttitle: "Best programming language to learn.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "#",
            TotalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
    ]
};

export default BlogOne;
