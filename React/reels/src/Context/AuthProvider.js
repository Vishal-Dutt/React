import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../Firebase';

// context
export const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut()
    }

    // componentDidMount
    useEffect(() => {
        // Adds an observer.
        // componentDidMount
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        // remove listner cleanup
        // runs componentWillUnmount
        return () => {
            unsubscribe();
        }

    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
