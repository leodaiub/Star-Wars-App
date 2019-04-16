import React, { Component } from 'react';
import Logo from './components/Logo/Logo.js';
import SearchBox from './components/SearchBox/SearchBox';
import Cards from './components/Cards/Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <SearchBox/>
        <Cards/>
      </div>
    );
  }
}

export default App;
