import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMain from './components/header/header-main.js'
import FooterMain from './components/footer/footer-main.js'
import BodyMain from './components/body/body-main.js'

class App extends Component {
  render() {
    return(
      <div className="App container">
        <HeaderMain />
        <BodyMain />
        <FooterMain />
      </div>
    );
  }
}

export default App;





{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> */}