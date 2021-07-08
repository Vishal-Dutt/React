import React, { useState, useEffect } from 'react'
// useEffect with cleanUp
function Uewc() {
    const [count, setCount] = useState(0);
    console.log('Render');
    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
        // cleanUp
        // React performs the cleanup when the component unmounts.
        // cleanUp is basically while return we return a fucntion which will run after the predecessor useEffect and before the successor useEffect
        // useEffect act as componentDidUnmount()

        // return will act as componentDidUpdate()
        // useEffect will run again and again
        return ()=>{
            alert(`I will be called before the next useEffect is called ${count}`)
        }
    })

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </div>
    )
}

export default Uewc
