import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider';
import { storage, database } from '../Firebase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // File state
    const [file, setFile] = useState(null);
    const { signup } = useContext(AuthContext);
    console.log(signup);
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let res = await signup(email, password);
            let uid = res.user.uid;
            // console.log(uid);

            // https://firebase.google.com/docs/storage/web/upload-files
            // Upload profile image
            // Task give observer of the file to be up uploaded
            const uploadTastListner = storage.ref(`/users/${uid}/profileImage`).put(file);
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            // Gives three call back functions
            // fn1 -> track Progress
            // fn2 -> error
            // fn3 -> success
            uploadTastListner.on('State_channge', fn1, fn2, fn3);
            // Function Fn1 is to track progress bar
            function fn1(snapshot) {
                // Shows progress bar of the file uploaded
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }

            // Function Fn2 is for error
            function fn2() {
                setError(error);
                setTimeout(() => {
                    setError('');
                }, 2000);
                setLoading(false);
            }
            setLoading(false);

            // Success 
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            async function fn3() {
                // Get download Url of the Uploaded file 
                let downloadUrl = await uploadTastListner.snapshot.ref.getDownloadURL();
                console.log(downloadUrl);

                // Go to collection and then user then crate a document add the details
                await database.users.doc(uid).set({
                    email: email,
                    userid: uid,
                    username: name,
                    createdAt: database.getCurrentTimeStamp(),
                    profileUrl: downloadUrl,
                    postIds: []
                })
            }
            setLoading(false);
            console.log('User has signed up')
        }
        catch (err) {
            setError(err)
            setTimeout(() => {
                setError('')
            }, 2000);
            setLoading(false);
        }
    }

    const handleFileSubmit = (e) => {
        // Gives and array of file
        // let file = e.target.files;
        let file = e.target.files[0];
        // console.log(file);
        if (file != null) {
            setFile(file);
        }
    }

    return (
        <div>
            <form onSubmit={handleSignup} >
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='profile'>Profile Image</label>
                    {/* <input type='file' accept='image/*' onChange={(e) => handleFileSubmit(e)}></input> */}
                    <input type='file' accept='image/*' onChange={handleFileSubmit}></input>
                </div>

                <button type='submit' disabled={loading}>Login</button>
            </form>
        </div>
    )
}

export default Signup