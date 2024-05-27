import React, { useState } from "react";
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrementar = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter">
            <p> Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>

        </div>
    )
}

export default Counter;