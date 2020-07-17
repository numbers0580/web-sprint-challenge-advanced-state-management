import React, { Component } from "react";
import "./App.css";

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {
  //#55A8FF = Smurf Blue
  //#F52C07 = Papa Smurf Red
  render() {
    return (
      <div className="App">
        <h1 style={{width: '90%', background: '#F52C07', color: 'white', textAlign: 'center'}}>SMURFS! 2.0 W/ Redux</h1>
        {/* I will delete most of above divs, import a component, place empty component tag below this comment */}
        <div style={{width: '90%', height: '100vh', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-around'}}>
          <SmurfForm />
          <div style={{width: '2px', height: '90%', background: 'black'}}></div>
          <SmurfList />
        </div>
      </div>
    );
  }
}

export default App;
