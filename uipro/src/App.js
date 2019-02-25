import React, { Component } from 'react';

import Navbar from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import UI from './components/userpage/UserHomePage'
import './App.css';



class App extends Component {
  render() {
    return (
      <div id="App" class="">
       {/* <UI />*/}
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
