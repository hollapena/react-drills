import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
constructor(){
  super();
  this.state={
    dataArray:['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  };
};

listItems (arr){
  let display=arr.map((state) => <li>{state}</li>);
  return display;
};

render() {
  return (
    <div>
    <h1 className="title">Alphabetical List of States</h1>
    <ul className="stateList">
      {this.listItems(this.state.dataArray)}
    </ul>
    </div>
  );
};
};

export default App;
