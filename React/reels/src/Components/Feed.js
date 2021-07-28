import React from 'react';
import { useEffect, useState, useContext } from 'react';
import Header from './Header';
import { AuthContext } from '../Context/AuthProvider';
import { database, Database } from '../Firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadFile from './UploadFile';
import './Feed.css';
import Posts from './Posts';


function Feed() {
    // Get The Current User Data
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    // 
    useEffect(() => {
        // Fetch the User data of the current data from database
        // .onSnapshot give the document and will be called automatically if user information changes and give the updated data.
        const unsub = database.users.doc(currentUser.uid).onSnapshot((doc) => {
            // console.log(doc.data());
            setUserData(doc.data());
        });
    }, [currentUser])
    return (
        // Fragments
        <>
            {
                userData == null ? <CircularProgress /> : <>
                    <Header userData={userData} />
                    <div className='feed-container'>
                        <div className='center'>
                            <UploadFile userData={userData} />
                            <Posts userData={userData} />
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Feed
