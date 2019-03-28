import React, { Component } from 'react';
import Logo from './Logo.js';
import SearchBox from './SearchBox.js';
import Cards from './Cards.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        {/*<SearchBox/>
        <Cards/>*/}
      </div>
    );
  }
}

export default App;
