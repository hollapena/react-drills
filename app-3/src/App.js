import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
constructor(){
  super();
  this.state={
    dataArray:['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
    userInput:''
  }
};

listMaker(userInput){
  userInput=userInput.toLowerCase();
  let answer;
  let arr = this.state.dataArray
  let filteredArray=[];
  if(userInput !== ''){
    for(let i = 0; i<arr.length; i++){
      if(arr[i].toLowerCase().includes(userInput)){
        filteredArray.push(arr[i])
      }
    }answer = filteredArray.map((state) => <li>{state}</li>)
  } else {
  answer = arr.map((state) => <li>{state}</li>)
  }
  return answer;
}

render() {
  return (
    <div className="container">
      <h1>State Name Finder</h1>
      <input onChange={(e) => this.setState({userInput:e.target.value})}></input>
      <ul className="list">{this.listMaker(this.state.userInput)}</ul>
    </div>
  );
};
}

export default App;
