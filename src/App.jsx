import './App.css';
import React from 'react';
import Son from './son';
class App extends React.PureComponent {
  state = {
    mes: "i am App"
  }
  changeMes(sonmes) {
    this.setState({
      mes: sonmes
    })
  }
  render() {
    return <div className="App">
      <Son mes={this.state.mes} changeMes={this.changeMes.bind(this)}> </Son>
    </div>
  }
}

export default App;