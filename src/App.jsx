import './App.css';
import React from 'react';

function App() {
  function HelloWorld() {
    return <div>Hello World</div>;
  }
  class ClassHello extends React.Component {
    render() {
      return <div>Hello World</div>;
    }
  }
  let hello = HelloWorld();

  return (
    <div className="App">
      {hello}
      <HelloWorld />
      <ClassHello />
    </div>
  );
}


export default App;