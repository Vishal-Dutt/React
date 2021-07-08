import React, { useState, useEffect } from 'react'
// useEffect with cleanUp
function Uewc() {
    const [count, setCount] = useState(0);
    console.log('Render');

    // useEffect act as componentDidMount()
    // return will act as componentWillUnmount()
    // useEffect will run only for one time in lifecycle
    // run just before unmount of component

    // useEffect will act as combination of componentDidMount() and componentDidUpdate()
    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
        // cleanUp Optional
        return ()=>{
            alert(`I will be called before the next useEffect is called ${count}`)
        }
    },[])

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </div>
    )
}

export default Uewc
