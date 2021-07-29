import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextFied from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddComment.css';
import { database } from '../Firebase';

const useStyles = makeStyles({
    cbtn: {
        marginRight: '1%',
        marginTop: '4%'
    }
})


function AddComment({ userData = null, postData = null }) {
    const classes = useStyles();
    const [text, setText] = useState('');
    const manageText = (e) => {
        let comment = e.target.value;
        setText(comment);
    }

    // object for adding comment in the firebase
    const handleOnEnter = () => {
        let obj = {
            text: text,
            uName: userData.username,
            uUrl: userData.profileUrl
        }
        // console.log(obj);
        // Updating the comment in the post collection
        database.comments.add(obj).then(docRef => {
            database.posts.doc(postData.postId).update({
                Comments: [...postData.Comments, docRef.id]
            })
        }).catch(e => {
            console.log(e + "");
        })
        setText('');
    }


    return (
        <div className='emojibox'>
            <TextFied value={text} fullWidth={true} label='Add a Comment' onChange={manageText} />
            <Button onClick={handleOnEnter} disabled={text == '' ? true : false} className={classes.cbtn} color='primary'>Post</Button>
        </div>
    )
}

export default AddComment
