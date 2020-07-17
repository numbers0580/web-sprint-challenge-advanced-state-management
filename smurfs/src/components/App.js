import React, { Component } from "react";
import "./App.css";

//Components
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {
  //#55A8FF = Smurf Blue
  //#F52C07 = Papa Smurf Red
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* I will delete most of above divs, import a component, place empty component tag below this comment */}
        <div className="container">
          <SmurfForm />
          <div className="divider"></div>
          <SmurfList />
        </div>
      </div>
    );
  }
}

export default App;
