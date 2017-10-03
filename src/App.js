import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";

class App extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  statesFilling = () => {
    return {
      "NJ": {
        fill: "navy"
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="App">
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default App;
