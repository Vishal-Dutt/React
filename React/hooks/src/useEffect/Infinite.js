import React, { useState, useEffect } from 'react'

// The fucntional component will run infinite no of times
// TO stop it use empty dependency array
function Infinite() {
    console.log('render');
    // useEffect(() => {
    //     console.log('useEffect');
    //     let num = Math.random() * 100;
    //     setCount(num);
    // })
    // Example if data is getting from api so make useEffect as componentDidMount
    useEffect(() => {
        console.log('useEffect');
        let num = Math.random() * 100;
        // Here avoid change in statte in useEffect
        setCount(num);
    }, [])
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default Infinite
