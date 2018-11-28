import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Stella",
        age: 27
      },
      {
        name: "Manu",
        age:26
      }
    ]
  }
  render() {
    return (
      <div className="App" >
        <Button bsStyle="primary">Switch name</Button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
