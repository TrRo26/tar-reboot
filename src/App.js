// PACKAGES
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TransitionGroup from 'react-addons-transition-group'
// CSS
import './App.css';
// COMPONENTS
import HeaderMain from './components/header/header-main.js'
import AboutMain from './components/body/about-main.js'
import ProjectsMain from './components/body/projects-main.js'
import PostsMain from './components/body/posts-main.js'
import FooterMain from './components/footer/footer-main.js'
import ShadowWind from './components/content/posts/2015/11-21-shadow_wind/2015-11-21';

class App extends Component {
  render() {
    return(
      <div className="App container">
        <Router>
          <div>
            <HeaderMain />
            <TransitionGroup>
            <Route exact path="/" component={AboutMain} />
            </TransitionGroup>
            <Route exact path="/projects" component={ProjectsMain} />
            <Route path="/posts" component={PostsMain} />
            {/* <Route exact path="/posts/shadow-wind" component={ShadowWind} /> */}
            <FooterMain />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
