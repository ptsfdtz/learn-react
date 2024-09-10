import './App.css';
import React from 'react';

function App() {
  function Fnhello() {
    return <div>Hello function</div>;
  }
  // 将 classHello 改为 ClassHello
  class ClassHello extends React.Component {
    render() {
      return <div>Hello class</div>;
    }
  }
  let com1 = <Fnhello />;
  let com2 = <ClassHello />;
  // 这里的 JSX 代码将会被编译成 React.createElement() 函数调用
  console.log(com1);
  console.log(com2);
  let obj = { name: "ptsfdtz" };
  // let arr = [com1,1,2,3,com2]
  return (
    <div className="App">
      {"Hello"}
      {obj.name}
      {true? <div>true</div> : <div>false</div>}
      {false ? <div>true</div> : <div>false</div>}
      {undefined}
      <Fnhello />
      <ClassHello />
    </div>
  );
}

export default App;
