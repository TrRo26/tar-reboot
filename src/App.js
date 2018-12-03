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
import PhotosMain from './components/body/photos-main.js'
import FooterMain from './components/footer/footer-main.js'

class App extends Component {

  	componentDidMount() {
		var nav = document.querySelector('.main-nav')
		console.log(nav)
		var position = 0
		
		// && !nav.className.match(/\bsmall\b/)

		window.addEventListener('scroll', function() {
			if(window.pageYOffset > 100) {
				nav.className += ' small'
			} else {
				nav.className = 'main-nav'
			}
		})
	}

	render() {
		return(
		<div className="App container">
			<Router>
			<div>
				<div className="main-nav">
					<HeaderMain />
				</div>
				<div className="main-wrapper">
					<TransitionGroup>
						<Route exact path="/" component={AboutMain} />
					</TransitionGroup>
					{/* <Route exact path="/projects" component={ProjectsMain} /> */}
					<Route path="/posts" component={PostsMain} />
					<Route path="/photos" component={PhotosMain} />

				</div>
				<div className="footer-main">
					<FooterMain />
				</div>
			</div>
			</Router>
		</div>
		)
  	}
}

export default App;
