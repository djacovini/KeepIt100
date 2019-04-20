import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class BlogSidebar extends Component {
    render() {
        //Sidebar Posts loop start
            const sidebardata = this.props.sideData.map((sidebar, index) => (
                <div className="single-post" key={index}>
                    <Link to={sidebar.postsLink}><img src={sidebar.Image} alt="post" /></Link>
                    <h4><Link to={sidebar.postsLink}>{sidebar.PostTitle}</Link></h4>
                    
                    <div className="post-meta">
                        <p>{sidebar.postContent}</p>
                        <ul>
                            <li><Icofont icon="icofont-calendar" /> Date: {sidebar.postDate}</li>
                        </ul>
                    </div>
                </div>
            ));
        //Sidebar Posts loop END

        //Sidebar Categories loop start
        const categoriedata = this.props.categoriesData.map((categories, index) => (
            <li className="list-group-item" key={index}>
                <Link to={categories.categorieLink}>{categories.categorieName}</Link>
            </li>
        ));
        //Sidebar Categories loop END

        //Sidebar Tags loop start
        const tagdata = this.props.tagsData.map((tag, index) => (
            <li key={index}> 
                <Link to={tag.tagLink}>{tag.tagName}</Link>
            </li>
        ));
        //Sidebar Tags loop END

    return (
        <React.Fragment>
            <div className="col-lg-4">
                <div className="side-widget">
                    <div className="search-form">
                        <form>
                            <input type="text" className="form-control" id="" placeholder="Search" />
                            <button type="submit" className="btn btn-default"><Icofont icon="icofont-search-2" /></button>
                        </form>
                    </div>
                </div>
                
                <div className="side-widget">
                    <h3>{this.props.widgetTitle1}</h3>

                    {sidebardata}
                    
                </div>
                
                <div className="side-widget">
                    <h3>{this.props.widgetTitle2}</h3>

                    {sidebardata}

                </div>
                
                <div className="side-widget">
                    <h3>{this.props.widgetTitle3}</h3>
                    <ul className="list-group">
                        {categoriedata}
                    </ul>
                </div>
                
                <div className="side-widget">
                    <h3>{this.props.widgetTitle4}</h3>
                    <ul className="list-tags">
                        {tagdata}
                    </ul>
                </div>
            </div> 
        </React.Fragment>
    );
  }
}
//Props Types
BlogSidebar.propTypes = {
    widgetTitle1: PropTypes.string,
    widgetTitle2: PropTypes.string,
    widgetTitle3: PropTypes.string,
    widgetTitle4: PropTypes.string,
    sideData: PropTypes.array,
    categoriesData: PropTypes.array,
    tagsData: PropTypes.array,
};

//Default Props
BlogSidebar.defaultProps = {
    widgetTitle1: "Popular posts",
    widgetTitle2: "Recent posts",
    widgetTitle3: "Categories",
    widgetTitle4: "Tags",
    sideData: [
        {
            postsLink: "/#0",
            Image: require("../../assets/img/post_1.jpg"),
            PostTitle: "Lorem ipsum dolor sit amet",
            postContent: "Lorem ipsum dolor sit amet",
            postDate: "10 Mar",
        },
        {
            postsLink: "/#0",
            Image: require("../../assets/img/post_2.jpg"),
            PostTitle: "Lorem ipsum dolor sit amet",
            postContent: "Lorem ipsum dolor sit amet",
            postDate: "10 Mar",
        },
        {
            postsLink: "/#0",
            Image: require("../../assets/img/post_3.jpg"),
            PostTitle: "Lorem ipsum dolor sit amet",
            postContent: "Lorem ipsum dolor sit amet",
            postDate: "10 Mar",
        },
    ],
    categoriesData: [
        {
            categorieLink: "/#0",
            categorieName: "Business",
        },
        {
            categorieLink: "/#0",
            categorieName: "Technology",
        },
        {
            categorieLink: "/#0",
            categorieName: "Food",
        },
        {
            categorieLink: "/#0",
            categorieName: "Family",
        },
    ],
    tagsData: [
        {
            tagLink: "/#0",
            tagName: "Business",
        },
        {
            tagLink: "/#0",
            tagName: "Family",
        },
        {
            tagLink: "/#0",
            tagName: "Technology",
        },
        {
            tagLink: "/#0",
            tagName: "Business",
        },
        {
            tagLink: "/#0",
            tagName: "Food",
        },
        {
            tagLink: "/#0",
            tagName: "Technology",
        },
        {
            tagLink: "/#0",
            tagName: "Technology",
        },
        {
            tagLink: "/#0",
            tagName: "Business",
        },
        {
            tagLink: "/#0",
            tagName: "Food",
        },
        {
            tagLink: "/#0",
            tagName: "Technology",
        },
    ]

};


export default BlogSidebar;
