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
  switchNameHandler = (newName) => { 
    this.setState({
      persons: [{
        name: newName,
        age: 29
      }, {
        name: "Jess",
        age: 27,
        hobbie: "Racing"
      }, {
        name: "Manu",
        age: 26
      }
      ]
    });
  }
  nameChangeHandler = (event) => { 
    this.setState({
      persons: [{
            name: "Max",
            age: 29
          }, {
            name: event.target.value,
            age: 27,
            hobbie: "Racing"
          }, {
            name: "Manu",
            age: 26
          }
      ]
    })
  }
  render() {
    return (
      <div className="App" >
        <Button bsStyle="primary" onClick={() => this.switchNameHandler("Lollla!")}>Switch name</Button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Max!!!")}
          changed={this.nameChangeHandler}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
