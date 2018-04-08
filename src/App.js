// PACKAGES
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// CSS
import './App.css';
// COMPONENTS
import HeaderMain from './components/header/header-main.js'
import AboutMain from './components/body/about-main.js'
import ProjectsMain from './components/body/projects-main.js'
import PostsMain from './components/body/posts-main.js'
import FooterMain from './components/footer/footer-main.js'

class App extends Component {
  render() {
    return(
      <div className="App container">
        <div>
          <HeaderMain />
          <Route exact path="/" component={AboutMain} />
          <Route path="/projects" component={ProjectsMain} />
          <Route exact path="/posts" component={PostsMain} />
          {/* <Route path="/posts/:post" component={PostLayout} /> */}
          <FooterMain />
        </div>
      </div>
    );
  }
}

export default App;
