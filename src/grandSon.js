import React from 'react';
import { Context1 } from './App';
class GrandSon extends React.Component {
    state = {
        grandsonMes: "孙子组件"
    }
    f1() {
        console.log("孙子组件f1");
    }
    render() {
        return (
            <div className='grandSon'>
                {this.state.grandsonMes}
                <Context1.Consumer>
                    {
                        (value) => {
                            return <div>{value.mes1}</div>
                        }
                    }
                </Context1.Consumer>
            </div>
        );
    }
}
export default GrandSon; 