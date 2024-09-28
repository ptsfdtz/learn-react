import React from 'react';
export default function TectHoc(UserCom) {
    return class extends React.Component {
        state = {
            x: 0,
            y: 0
        }

        componentDidMount() {
            window.addEventListener("mousemove", (e) => {
                let x = e.clientX;
                let y = e.clientY;
                this.setState({
                    x: x,
                    y: y
                })
            })
        }

        render() {
            return <>
                < UserCom x={this.state.x} y={this.state.y} {...this.props}></UserCom >
            </>
        }
    }
}