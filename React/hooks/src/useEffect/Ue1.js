import React, { useEffect, useState } from 'react'

// function Ue1() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <p>You Clicked the button {count} times</p>
//             <button onClick={() => { setCount(count + 1) }}>Click</button>

//         </div>
//     )
// }

// useEffect first Variation 
// Runs after every render of functional component
// No optioanal dependency array is passed
// It runs after every render of fucntional component 
// It is mixture of componentDidMount + compnentDidUpdate
// As componentDidMount runs only once after render and compnentDidUpdate runs no of times the state changes
// Application to make UI fast
// 
function Ue1() {
    console.log('render');
    // runs after every render
    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`
    })
    // Runs when the funtional component runs for the first time
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You Clicked the button {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </div>
    )
}

export default Ue1