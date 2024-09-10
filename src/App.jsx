import './App.css';
import React from 'react';

class App extends React.Component {
  button=(num1, num2, num3) => {
    console.log(num1, num2, num3);
  }
    
  render() {
  return (
    <div className="App">
       {/* <div onClick={this.button}>button</div> */}
       {/* <div></div> */}
       <div onClick={this.button.bind(this, 1, 2, 3)}>button</div>
    </div>
    );
  }
} 

export default App;