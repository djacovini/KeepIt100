import React, { Component } from "react";
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
// import LandingPage from "./pages/LandingPage";
// // import MapPage from "./pages/MapPage";
// // import CalcPage from "./pages/CalcPage";
// import queryString from "query-string";

//? === FIRST IMPORTS FOR TEMPLATE ===
//! = removed BrowserRouter from import below =
import { Route, Switch, Redirect } from 'react-router-dom';
import Page from "react-page-loading";
import { CSSTransition } from "react-transition-group";

//? === PACKAGE CSS IMPORTS ===
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//? === TEMPLATE CSS IMPORTS ===
import "../src/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color/color-default.css"

//? === IMPORT COMPONENTS ===
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import BlogOne from "./pages/BlogOne";
import BlogTwo from "./pages/BlogTwo";
import SingleBlog from "./pages/SingleBlog";
import ScrollUpBtn from "./components/ScrollUp";




class App extends Component {
  render() {
      return (
          <div className="App">
              <Page loader={"comet-spin"} color={"#fe5619"} size={50}>
                  <div>
                      <Route
                          render={({ location }) => (
                              <CSSTransition
                                  key={location.key}
                                  timeout={{ enter: 900, exit: 900 }}
                                  classNames="fade"
                              >
                                  <section className="route-section">
                                      <Switch location={location}>
                                          <Route
                                              path="/blog-details"
                                              component={SingleBlog}
                                          />
                                          <Route
                                              path="/blog-two"
                                              component={BlogTwo}
                                          />
                                          <Route
                                              path="/blog-one"
                                              component={BlogOne}
                                          />
                                          <Route
                                              path="/home-three"
                                              component={HomeThree}
                                          />
                                          <Route
                                              path="/home-two"
                                              component={HomeTwo}
                                          />
                                          <Route
                                              path="/"
                                              component={HomeOne}
                                          />
                                          <Redirect to="/not-found" />
                                      </Switch>
                                  </section>
                              </CSSTransition>
                          )}
                      />
                      {/* ScrollUpBtn: src/components/ScrollUp.jsx */}
                      <ScrollUpBtn />
                  </div>
              </Page>
          </div>
      );
  }
}



export default App;


// import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import Page from "react-page-loading";
// import { CSSTransition } from "react-transition-group";

//Package CSS
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";

//Template CSS Style
// import "../src/style.css";
// import "./assets/css/responsive.css";
// import "./assets/css/color/color-default.css"


//Import Component
// import HomeOne from "./pages/HomeOne";
// import HomeTwo from "./pages/HomeTwo";
// import HomeThree from "./pages/HomeThree";
// import BlogOne from "./pages/BlogOne";
// import BlogTwo from "./pages/BlogTwo";
// import SingleBlog from "./pages/SingleBlog";
// import ScrollUpBtn from "./components/ScrollUp";






  //! === THE ORIGINAL CLASS APP ===
  // class App extends Component {
  //   componentWillMount(){
  //     var query = queryString.parse(this.props.location.search);
  //     if (query.token) {
  //       window.localStorage.setItem("jwt", query.token);
  //       this.props.history.push("/");
  //     }
  //   }
  //   render(){
  
  //   return (
  //     <Router>
  //       <div>
  //         <Nav />
  //         <Switch>
  //         {/* <Route exact path="/" component={LandingPage} />
  //           <Route exact path="/map" component={MapPage} />
  //           <Route exact path="/calc" component={CalcPage} /> */}
  //         </Switch>
  //         <a href="http://localhost:4000/auth/google" class="button">
  //           <div>
  //             <span class="svgIcon t-popup-svg">
  //               <svg
  //                 class="svgIcon-use"
  //                 width="25"
  //                 height="37"
  //                 viewBox="0 0 25 25"
  //               >
  //                 <g fill="none" fill-rule="evenodd">
  //                   <path
  //                     d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
  //                     fill="#4285F4"
  //                   />
  //                   <path
  //                     d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
  //                     fill="#34A853"
  //                   />
  //                   <path
  //                     d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
  //                     fill="#FBBC05"
  //                   />
  //                   <path
  //                     d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
  //                     fill="#EA4335"
  //                   />
  //                 </g>
  //               </svg>
  //        </span>
  //      <span class="button-label">Sign in with Google</span>
  //    </div>
  // </a>
  //       </div>
  //     </Router>
  //   );
  // }
  // }