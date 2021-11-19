import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state={
      userInput:'',
    };
  }

render () {
  
  return (
    <div class="mirrorInput">
    <input onChange={(e) => this.setState({userInput: e.target.value})} type="text"></input>
    <h1>{this.state.userInput}</h1>
    </div>
  );
};
}

export default App;
