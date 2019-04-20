import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Page from "react-page-loading";
import { CSSTransition } from "react-transition-group";

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template CSS Style
import "../src/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color/color-default.css"


//Import Component
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
