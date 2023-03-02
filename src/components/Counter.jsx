import { useState } from 'react';

const Counter = ({counter}) => {

    const [count, setCount] = useState(counter);
    const [text, setText] = useState('');

    function increment() {
        if (count % 10 === 0 && count > 0) {
            setCount(count => count + 1);
            setText(`You've reached ${count}`);

        } else {
            setCount(count => count + 1);
            setText(``);
        }
    }

    function decrement() {
        setCount(count => count - 1);
    }

    function reset() {
        setCount(0);
    }

        return (
            <div className="app">
                <div className="counter">{count} {text}</div>
                <div className="controls">
                    <button onClick={increment}>INC</button>
                    <button onClick={decrement}>DEC</button>
                    <button onClick={reset}>RESET</button>
                </div>
            </div>
        )
    
}
export default Counter;

