import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button bsStyle="primary">Switch name</Button>
      <Person name="Max" age="28"/>
      <Person name="Lidia" age="26">My hobbies: Racing </Person>
      <Person name="Manu" age="29"/>
      </div>
    );
  }
}

export default App;
