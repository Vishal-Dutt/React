import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
// import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './Posts.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { database } from '../Firebase';
import Video from './Video';
// import Videoio from './Videoio'

const useStyles = makeStyles({
    root: {
        width: '100%',
        padding: '0px'
    },
    loader: {
        position: 'absolute',
        left: '50%',
        top: '50%'
    },
    typo: {
        marginLeft: '2%'
    },
    vac: {
        marginLeft: '3.5%',
        color: '#8e8e8e',
        cursor: 'pointer'
    },
    dp: {
        marginLeft: '2%'
    },
    cc: {
        height: '50vh',
        overflowY: 'auto'
    },
    seeComments: {
        height: '54vh',
        overflowY: 'auto'
    },
    ci: {

        color: 'white',
        left: '9%',
        cursor: 'pointer'
    },
    mn: {
        color: 'white',


    },
    tmn: {
        color: 'white'
    }

});

function Posts({ userData = null }) {
    const classes = useStyles();
    const [posts, setPosts] = useState(null);

    // State to handle Dialog of the post
    const [openId, setOpenId] = useState(null);

    // const [openId, setOpenId] = useState(false);
    // Reason why we have not use true and false to manage the state of dialog
    // Suppose we have 3 posts and we have used the loop to hanlde the state of the dialog it will check if the state is true it will open the model
    // then render method will be invoked then the loop will run again it will check the state of the first post dialog it will open the model but it will checks for the 
    // rest of the posts it will open the modal for the second post also and same for the rest of the posts. So to overcome this problen use posts uId to handle the state of the dialog

    // on opening modal we set the state of the setOpenId to post.pId the loop checks if the setOpenstate is set to post.pId.
    // If yes it will open the modal and checks and open the modal for that post now in the loop it will check the postid for the other posts.
    // But the postId for every post is unique it will not open the dialog for other posts.

    const handleClickOpen = (id) => {
        setOpenId(id);
    };

    const handleClose = () => {
        setOpenId(null);
    };


    const callback = entries => {
        entries.forEach(element => {
            console.log(element);
            // Child of video elements
            // Video is Async function 
            // we cannot play the video and pause if as some of the vide outside of the viewport will play
            let el = element.target.childNodes[0];
            el.play().then(() => {
                // If this video is not in viewport then Pause it 
                // Check if the video is not pause and it is intersection the viewport with the threshold value
                if (!el.paused && !element.isIntersecting) {
                    el.pause();
                }
            })
        });
    }

    // Creating observer
    const observer = new IntersectionObserver(callback, { threshold: 0.85 });
    // ComponentDidMount
    // Fetching posts from database
    useEffect(() => {
        let parr = [];
        // observing all the collection of the post if new post is added it will rerender the page
        // .onSnapshot(querySnapshot) will give the snapshot of all the posts from the firebase

        const unsub = database.posts.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
            // If we will not empty the array the older post array is get stored in the postarr
            // thus resulting in the duplicate copy of the previous posts
            parr = [];
            querySnapshot.forEach((doc) => {
                // doc.id is representing unique id created by querySnapshot
                // console.log(doc.data() + " " + doc.id);
                let data = { ...doc.data(), postId: doc.id }
                parr.push(data);
            })
            // setposts
            setPosts(parr);
        })
        // Clean Up
        // if component is unmounted the onSnapshot will try to run the post but the component is unmounted already so it will give an error
        // Good practice if we have used listners
        return unsub;
    }, []);

    // The observer is dependent on the post fetcheh by the onSnapshot if the post changes the litners will have to attach on the new post too,
    // The useeffect is dependent of the posts state
    useEffect(() => {
        let elements = document.querySelectorAll('.videos');
        elements.forEach(el => {
            observer.observe(el);
        })
        // Removing listner if new videos are adding to the posts
        // CleanUp for useEffect depends on posts
        return () => {
            observer.disconnect();
        }
    }, [posts])

    return (
        <>
            <div className='place'>

            </div>
            {posts == null ? <CircularProgress className={classes.loader} color="secondary" /> :
                <div className='video-container' id='video-container'>
                    {
                        posts.map((post) => (
                            <React.Fragment key={post.postId}>
                                <div className='videos'>
                                    <Video source={post.pUrl} id={post.pId} />
                                    <div className='fa' style={{ display: 'flex' }}>
                                        {/* Avatar is materail ui component which show avatar */}
                                        <Avatar src={post.uProfile}></Avatar>
                                        <h4>{post.uName}</h4>
                                    </div>
                                    {/* setting SetOpenId to post.pId to manage the state of the dialog */}
                                    <ChatBubbleIcon onClick={() => handleClickOpen(post.pId)} className={`${classes.ci} icon-styling`} />
                                    <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openId === post.pId}>
                                        <MuiDialogContent>
                                            <div className='dcontainer'>
                                                <div className='video-part'>
                                                    <video autoPlay={true} className='video-styles2' controls id={post.id} muted="muted" type="video/mp4" >
                                                        <source src={post.pUrl} type="video/webm" />
                                                    </video>
                                                </div>
                                                <div className='info-part'>
                                                    <Card>
                                                        <CardHeader
                                                            avatar={
                                                                <Avatar src={post?.uProfile} aria-label="recipe" className={classes.avatar}>
                                                                </Avatar>
                                                            }
                                                            action={
                                                                <IconButton aria-label="settings">
                                                                    <MoreVertIcon />
                                                                </IconButton>
                                                            }
                                                            title={post?.uName}
                                                        />

                                                        <hr style={{ border: "none", height: "1px", color: "#dfe6e9", backgroundColor: "#dfe6e9" }} />
                                                        <CardContent className={classes.seeComments}>

                                                            {/* <Comments userData={userData} postData={post} /> */}
                                                        </CardContent>

                                                    </Card>
                                                    <div className='extra'>
                                                        <div className='likes'>
                                                            <Typography className={classes.typo} variant='body2'>Liked By {post.likes.length == 0 ? 'nobody' : ` others`}</Typography>
                                                        </div>
                                                        {/* <AddComment  userData={userData} postData={post}/>  */}
                                                    </div>
                                                </div>
                                            </div>
                                        </MuiDialogContent>
                                    </Dialog>
                                </div>
                                <div className='place'></div>
                            </React.Fragment>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default Posts