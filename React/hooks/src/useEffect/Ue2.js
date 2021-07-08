import React, { useEffect, useState } from 'react'
// Second variation of useEffect
// Used Achieve funtionaly same as componentDidMount
// As empty dependency array is passed the useEffect will run only first time afther the first render method So it will behave as componentDidMount.
// There is presence of dependency array
// we pass Empty dependency array
// It will run only once after the first render and do not run after that
function Ue2() {
    // Runs only one time when render is run first time
    const [count, setCount] = useState(0);
    // It will run only once after first render only so it behave same as componentDidMount
    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`
    }, [])
    console.log('render');
    return (
        <div>
            <p>You Clicked the button {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
            {/* onClick is an event. And on event we pass defination of fucntion on events ans the fucntion is execulted/called by the button(in this case).The aboe is fucntion defination*/}

            {/* <button onClick={setCount(count + 1)}>Click</button> */}
            {/* Above line is function call it will give an error */}
        </div>
    )
}

export default Ue2
