import React, { Component } from 'react';

//Import Component
import NavBar from "../components/NavBar";
import BlogPost from "../components/blog/Single";
import Footer from "../components/Footer";

class SingleBlog extends Component {
  render() {
    return (
        <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <NavBar />
            {/* BlogPost: src/components/Blog/BlogPost.jsx */}
            <BlogPost />
            {/* Footer: src/components/Footer.jsx */}
            <Footer />
        </React.Fragment>
    );
  }
}
export default SingleBlog;
