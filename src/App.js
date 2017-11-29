import React, { Component } from 'react';
import './App.css';

import People from './People.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      people: {
        count: 0
      }
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          loading: false,
          people: responseJSON
        });
      })
      .catch((error) => {
        const errorStatus = error.response ? error.response.status : 500;
        if (errorStatus === 404){
          this.setState({
            loading: false,
            error: 'Star Wars API not found (404)'
          });
        } else {
          this.setState({
            loading: false,
            error: 'Unable to connect to Star Wars API'
          });
        }
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Wars</h1>
          <h4 className="App-subtitle">May the force be with you!</h4>
          <div className="App-count">Results: {this.state.people.count}</div>
        </header>
        <div className="App-body">
          <People people={this.state.people} loading={this.state.loading} error={this.state.error}/>
        </div>
      </div>
    );
  }
}

export default App;
