// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import './App.css';
// IMAGES
  // import logo from './logo.svg';
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
          <Route path="/" exact component={AboutMain}/>
          <Route path="/projects" component={ProjectsMain}/>
          <Route path="/posts" component={PostsMain}/>
          <FooterMain />
        </div>
      </div>
    );
  }
}

export default App;
