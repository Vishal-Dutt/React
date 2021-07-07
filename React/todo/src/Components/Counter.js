import React, { useState } from 'react'

function Counter() {
    console.log("render");
    // In fucntional component the whole functoin renders every time.
    // useState runs only once when the fucntion runs first time it does not run in subsequent reders
    // Hooks are used and defined under fucntion only
    // useState returns an array
    // Comparison to class component
    // this.state={
    //     count:0
    // }
    // this.setState({
    //     count:this.state.count+1
    // })

    // we pass the initial valy of our state to useState as argument
    // useState returns us a pair of values 
    // [variable,setVariableName] = useState(variableValue);
    // current state and a function that can be use to change the current state
    // count is a reference of a state
    // setCount fucntion is used to manipulate state of a count variable
    
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter
