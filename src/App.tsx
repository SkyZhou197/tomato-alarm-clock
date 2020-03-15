import React, { Component } from "react";
import Button from "antd/es/button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}

export default App;
