// import React from 'react'
import React, { useState } from "react";

function Us() {
    // const [msgObj, setMessage] = useState({ message: '' });

    // const handleChange = (e) => {
    //     let val = e.target.value;
    //     msgObj.message = val;
    //     // whenever the setMessage fucntion is call it compare the old state address and new state address to render the changes
    //     // setMessage({ msgObj });
    //     // Below setMessage does not creates a new state ans sets the message in the same state so the render method will not run
    //     // However the change in the state of the oject reflects so overcome this problem use spredoperator 
    //     // setMessage(msgObj);

    //     // setMessage({message:val});
    //     // setMessage({...msgObj,message:val});
    //     // console.log(msgObj);

    //     // above and below both are same
    //     let obj = {message:val};
    //     setMessage(obj);
    // }

    // Let sey we have another property
    const [msgObj, setMessage] = useState({ message: '' ,id:1});
    // const handleChange = (e) => {
    //     let val = e.target.value;
    //     msgObj.message = val;
    //     let obj = {message:val};
    //     setMessage(obj);
    // }

    // if we change the setMessage with only one property then the object is set with that vlalue only the key value get lost 
    // so to save the other keys in the object use spread operator as it create new copy of object at new location
    const handleChange = (e) => {
        let val = e.target.value;
        msgObj.message = val;
        let obj = {...msgObj,message:val};
        setMessage(obj);
    }

    return (
        <div>
            <input type='text' value={msgObj.message} onChange={handleChange}></input>
            <p>{msgObj.message}</p>
        </div>
    )
}

export default Us
