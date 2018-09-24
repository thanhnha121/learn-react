import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Animation.css';
import AppJsx from './AppJsx';
import Components from './Components';
import State from './State';
import Props from './Props';
import SetState from './SetState';
import ForceUpdate from './ForceUpdate';
import FindDomNode from './FindDomNode';
import LifecycleMethods from './LifecycleMethods';
import Form from './Form';
import Event from './Event';
import Refs from './Refs';
import Key from './Key';
import Animation from './Animation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="AppJsx leason"><AppJsx /></div>
        <div className="Components leason"><Components /></div>
        <div className="State leason"><State /></div>
        <div className="Props leason"><Props /></div>
        <div className="SetState leason"><SetState /></div>
        <div className="ForceUpdate leason"><ForceUpdate /></div>
        <div className="FindDomNode leason"><FindDomNode /></div>
        <div className="LifecycleMethods leason"><LifecycleMethods /></div>
        <div className="Form leason"><Form /></div>
        <div className="Event leason"><Event /></div>
        <div className="Refs leason"><Refs /></div>
        <div className="Key leason"><Key /></div>
        <div className="Animation leason"><Animation /></div>

      </div>
    );
  }
}

export default App;
