import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { v4 as uuidv4 } from 'uuid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { storage, database } from '../Firebase';

const useStyles = makeStyles((theme) => ({

}));

function UploadFile(props) {

    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Check types of file acceptable
    const type = ['video/mp4', 'video/webm', 'video/ogg'];
    const onChange = (e) => {
        // If e is null the it will not read furter and will not give an error cannot read property of undefined
        const file = e?.target?.files[0];
        console.log(file);
        if (!file) {
            setError('Please Select A File');
            setTimeout(() => {
                setError(null)
            }, 2000)
            return;
        }

        // check is video is type of video type defined array 
        if (type.indexOf(file.type) == -1) {
            setError('Please Select a Video File');
            setTimeout(() => {
                setError(null)
            }, 2000)
            return;
        }

        // Set the maximum upload size is 100MB
        // 1 Byte = 1024*1024
        if (file.size / (1024 * 1024) > 100) {
            setError('The Selected file is too big...');
            setTimeout(() => {
                setError(null)
            }, 2000)
            return;
        }

        // Ureate Unique id for Uploaded video
        // importing storage to fetch the data
        const id = uuidv4();
        // create a unique id for the post under the post collection
        const uploadTask = storage.ref(`/posts/${props.userData.userId}/${file.name}`).put(file);
        // const uploadTask = storage.ref(`/posts/${props.userData.userId}/${file.name}`).put(file);
        uploadTask.on('state_changed', fn1, fn2, fn3);
        function fn1(snapshot) {
            // Shows progress bar of the file uploaded
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }
        function fn2() {
            setError(error);
            setTimeout(() => {
                setError(null);
            }, 2000);
            setLoading(false);
        }
        setLoading(false);
        // Success 
        // Handle successful uploads on complete

        async function fn3() {
            setLoading(true);
            uploadTask.snapshot.ref.getDownloadURL().then(url => {
                // Post object creation in firestore to add the data
                let obj = {
                    Comments: [],
                    likes: [],
                    pId: id,
                    pUrl: url,
                    uName: props?.userData?.username,
                    uProfile: props?.userData?.profileUrl,
                    userId: props?.userData?.userId,
                    createdAt: database.getCurrentTimeStamp()
                }
                console.log(obj);
                console.log(props.userData);
                // Add the object in the post
                database.posts.add(obj).then(async docRef => {
                    // postarrayId 
                    console.log(docRef);
                    // docref is id from which we have to get the id
                    // let parrId = docRef.id;
                    // Update the postId in the user collectins postarray
                    let res = await database.users.doc(props.userData.userId).update({
                        // If we dont use spred operator it will delete the older data 
                        // docref is promise
                        postIds: [...props.userData.postIds, docRef.id]
                    })
                }).then(() => {
                    setLoading(false)
                }).catch(e => {
                    setError(e);
                    setTimeout(() => {
                        setError('')
                    }, 2000);
                    setLoading(false);
                })
            })
        }
    }

    return (
        <>
            {
                error != null ? <Alert severity="error">{error}</Alert> : <>
                    <input
                        color='primary'
                        type='file'
                        onChange={onChange}
                        id='icon-button-file'
                        style={{ display: 'none' }} />
                    <label htmlFor='icon-button-file'>
                        <Button disabled={loading} variant="outlined" component='span' className={classes.button} size='medium' color="secondary">
                            Upload Video
                        </Button>
                    </label>

                    {/* Loading while video is uploading */}
                    {loading ? <LinearProgress color='secondary' style={{ marginTop: '6%', width: '100%' }} /> : <></>}
                </>
            }
        </>
    )
}

export default UploadFile




// import React, { useState } from 'react'
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';
// import { v4 as uuidv4 } from 'uuid';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { storage, database } from '../Firebase'
// const useStyles = makeStyles((theme) => ({

// }));

// function UploadFile(props) {
//     const classes = useStyles();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const types = ['video/mp4', 'video/webm', 'video/ogg'];
//     const onChange = (e) => {
//         const file = e?.target?.files[0];
//         console.log(file);
//         if (!file) {
//             setError('Please select a file');
//             setTimeout(() => { setError('') }, 2000)
//             return;
//         }

//         if (types.indexOf(file.type) == -1) {
//             setError('Please select a video file');
//             setTimeout(() => { setError('') }, 2000)
//             return;
//         }

//         if (file.size / (1024 * 1024) > 100) {
//             setError('The selected file is too big');
//             setTimeout(() => { setError('') }, 2000)
//             return;
//         }
//         const id = uuidv4();
//         const uploadTask = storage.ref(`/posts/${props.userData.userId}/${file.name}`).put(file);
//         uploadTask.on('state_changed', fn1, fn2, fn3);
//         function fn1(snapshot) {
//             var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log('Upload is ' + progress + '% done');
//         }
//         function fn2(error) {
//             setError(error);
//             setTimeout(() => {
//                 setError('')
//             }, 2000);
//             setLoading(false)
//         }
//         async function fn3() {
//             setLoading(true);
//             uploadTask.snapshot.ref.getDownloadURL().then(url => {
//                 let obj = {
//                     comments: [],
//                     likes: [],
//                     pId: id,
//                     pUrl: url,
//                     uName: props?.userData?.username,
//                     uProfile: props?.userData?.profileUrl,
//                     userId: props?.userData?.userId,
//                     createdAt: database.getCurrentTimeStamp()
//                 }
//                 console.log(obj);
//                 console.log(props.userData);
//                 database.posts.add(obj).then(async docRef => {
//                     console.log(docRef);
//                     let res = await database.users.doc(props.userData.userId).update({
//                         postIds: [...props.userData.postIds, docRef.id]
//                     })
//                 }).then(() => {
//                     setLoading(false)
//                 }).catch(e => {
//                     setError(e);
//                     setTimeout(() => {
//                         setError('')
//                     }, 2000);
//                     setLoading(false)
//                 })
//             })
//         }
//     }

//     return (
//         <>
//             {
//                 error != null ? <Alert severity="error">{error}</Alert> : <>
//                     <input
//                         color='primary'
//                         type='file'
//                         onChange={onChange}
//                         id='icon-button-file'
//                         style={{ display: 'none' }}
//                     />
//                     <label htmlFor='icon-button-file'>
//                         <Button disabled={loading} variant="outlined" component='span' className={classes.button}
//                             size='medium' color="secondary">
//                             Secondary
//                         </Button>
//                     </label>
//                     {loading ? <LinearProgress color='secondary' style={{ marginTop: '6%' }} /> : <></>}
//                 </>
//             }
//         </>
//     )
// }
// export default UploadFile