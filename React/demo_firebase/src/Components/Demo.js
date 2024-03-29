import React, { useState, useEffect } from 'react'
import firebase from './Firebase';

function Demo() {
    // console.log(firebase);
    const auth = firebase.auth();
    // Take eamil and password 
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            console.log(email + "  " + password);
            setError(true);
            // predefined firebase funcion for authentication
            let res = await auth.signInWithEmailAndPassword(email, password);
            console.log(res.user);
            setUser(res.user);
            setLoading(false);
        } catch (e) {
            // setError("Failed to Sign In");
            setError(e.message);
            setTimeout(() => {
                setError('');
            }, 2000)
            setLoading(false);
        }
        setPassword('');
        setEmail('');
    }

    // handleSignOut is a async funtino 
    const handleSignOut = async () => {
        try {
            setLoading(true);
            let res = await auth.signOut();
            console.log(res);
            setUser(null);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setTimeout(() => {
                setError('');
            }, 2000);
            setLoading(false);
        }
    }

    return (
        <>
            {
                // if loading then show loading if user is null the show login form 
                loading ? <h1>Please Wait..... Loading</h1> : user === null ?
                    <div>
                        <label>
                            Email:
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Password:
                            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <button onClick={handleSubmit}>Sign In </button>
                        {/* if failed to loign show error otherwire show empty */}
                        {error ? <h1>{error}</h1> : <></>}
                    </div> :
                    <>
                        {/* if user is signed in then show which use is signed in and show sign out buttom */}
                        <h2>{user.uid} is Signed In</h2>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
            }
        </>
    )
}

export default Demo
