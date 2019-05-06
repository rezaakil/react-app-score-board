import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <User name="Chuck"  />
          <User name="Bruce"  />
          <User name="Arnold"  />
          <User name="Sly"  />
        </main>
      </div>
    );
  }
}
export default App;

