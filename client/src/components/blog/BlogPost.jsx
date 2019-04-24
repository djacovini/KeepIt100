import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import Sidebar from "./Sidebar";

class BlogPost extends Component {
    render() {
        //BlogPost loop start
        const blogpostdata = this.props.blogpostsData.map((blogpost, index) => (
            <div className="col-lg-12" key={index}>
                <div className="blog-item">
                    <Link to={blogpost.postLink} className="blog-img"><img src={blogpost.postImage} alt="blogpost-one" /></Link>
                    <div className="blog-info">
                        <div className="date-box">
                            {blogpost.date} <span className="month">{blogpost.month}</span>
                        </div>
                        <div className="title-meta">
                            <h2><Link to={blogpost.postLink}>{blogpost.posttitle}</Link></h2>
                            <div className="post-meta">
                                <ul>
                                    <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blogpost.authorLink}>{blogpost.authorName}</Link></li>
                                    <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blogpost.CommentsLink}>{blogpost.TotalComments}</Link></li>
                                    <li><Icofont icon="icofont-tags" /> Tags: <Link to={blogpost.TagLink}>{blogpost.TagName}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{blogpost.postContent}</p>
                    </div>
                </div>
            </div>
        ));
        //BlogPost loop END
        return (
            <React.Fragment>
                <section id="blog" className="our-blog main-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">

                                    {blogpostdata}

                                    <div className="col-lg-12 pagination-area text-center">
                                        <ul className="pagination">
                                            <li><Link to= "/#0"><Icofont icon="icofont-simple-left" /> Previous</Link></li>
                                            <li className="active"><Link to= "/#0">1</Link></li>
                                            <li><Link to= "/#0">2</Link></li>
                                            <li><Link to= "/#0">3</Link></li>
                                            <li><Link to= "/#0">4</Link></li>
                                            <li><Link to= "/#0">Next <Icofont icon="icofont-simple-right" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*Sidebar: src/components/blog/Sidebar.jsx*/}
                            <Sidebar />
                            
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
BlogPost.propTypes = {
    blogpostsData: PropTypes.array
};

//Default Props
BlogPost.defaultProps = {

    blogpostsData: [
        {
            postImage: require("../../assets/img/blog-three.jpg"),
            postLink: "/blog-details",
            date: "25",
            month: "Feb",
            posttitle: "Risus commodo viverra maecenas accumsan.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink:  "/#0",
            TotalComments: "06",
            CommentsLink:  "/#0",
            TagName: "lifestyle",
            TagLink:  "/#0", 
        },
        {
            postImage: require("../../assets/img/blog-one.jpg"),
            postLink: "/blog-details",
            date: "25",
            month: "Feb",
            posttitle: "10 hot marketing trends you need.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink:  "/#0",
            TotalComments: "06",
            CommentsLink:  "/#0",
            TagName: "lifestyle",
            TagLink:  "/#0", 
        },
        {
            postImage: require("../../assets/img/blog-two.jpg"),
            postLink: "/blog-details",
            date: "25",
            month: "Feb",
            posttitle: "14 ridiculously cool websites.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink:  "/#0",
            TotalComments: "06",
            CommentsLink:  "/#0",
            TagName: "lifestyle",
            TagLink:  "/#0", 
        },
        
    ]
};

export default BlogPost;