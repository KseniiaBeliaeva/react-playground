import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import { Button } from 'reactstrap';

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
    ],
    showPersons: false
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
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    return (
      <div className="App" >
      <Button color="danger" onClick={this.togglePersonsHandler}>Switch name</Button>
        { this.state.showPersons === true ? 
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!!!")}
            changed={this.nameChangeHandler}>My hoddie: Racing </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
