import React, { useState, useEffect } from 'react'
import './Ue3.css'
// function Ue3() {
//     console.log('render');
//     const [count, setCount] = useState(0);
//     const [darkMode, setDarkMode] = useState(false);
//     useEffect(() => {
//         console.log('useEffect');
//         document.title = `clicked ${count} times`
//     })
//     return (
//         <div className={darkMode ? "view dark-mode" : "view"}>
//             <label htmlFor='dark Mode'>DarkMode</label>
//             <input type='checkbox' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//             <button onClick={() => { setCount(count + 1) }}>{count}</button>
//         </div>
//     )
// }

// Problem in the below code is the useEffect will also run for darkMode 
// In first render the render and useEffect will be log on the console but if we change the darkMode the useEffect will also run as the useEffect in this case
// is the first variation of the useEffect and it will run after every render so to overcome this we add state in the dependency array.
// function Ue3() {
//     console.log('render');
//     const [count, setCount] = useState(0);
//     const [darkMode, setDarkMode] = useState(false);
//     useEffect(() => {
//         console.log('useEffect');
//         document.title = `Clicked ${count} times`;
//     })
//     return (
//         <div className={darkMode ? "view dark-mode" : "view"} >
//             <label htmlFor='dark Mode'>DarkMode</label>
//             <input type='checkbox' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//             <button onClick={() => { setCount(count + 1) }}>{count}</button>
//         </div>
//     )
// }


// Third Variation of useEffect
// Non empty dependency Array
// The value that we passed in the dependency array only when they change then the useEffect runs
// It runs after those renders that are caused due to the state change of the passed values.
function Ue3() {
    console.log('render');
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    // It will run only when count state change 
    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
    },[count])

    // useEffect(() => {
    //     console.log('useEffect');
    //     document.title = `Clicked ${count} times`;
    // },[count,darkMode])


    return (
        <div className={darkMode ? "view dark-mode" : "view"} >
            <label htmlFor='dark Mode'>DarkMode</label>
            <input type='checkbox' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
        </div>
    )
}
export default Ue3
