import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter,
            text: ``
        }
    }

    increment = () => {
        if (this.state.counter % 10 === 0 && this.state.counter > 0) {
            this.setState(state => ({
                counter: state.counter + 1,
                text: `You've reached ${this.state.counter}`
            }))
        } else {
            this.setState(state => ({
                counter: state.counter + 1,
                text: ``
            }))
        }
    }

    decrement = () => {
        this.setState(state => ({
            counter: state.counter - 1
        }))
    }

    reset = () => {
        this.setState(state => ({
            counter: state.counter = 0,
            text: ``
        }))
    }

    render() {
        return (
            <div className="app">
                <div className="counter">{this.state.counter} {this.state.text}</div>
                <div className="controls">
                    <button onClick={this.increment}>INC</button>
                    <button onClick={this.decrement}>DEC</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}
export default Counter;

