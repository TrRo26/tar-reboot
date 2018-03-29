// PACKAGES
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// CSS
import './index.css'
// COMPONENTS
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Router>
      <App />
    </Router>, document.getElementById('root')
);

registerServiceWorker();
