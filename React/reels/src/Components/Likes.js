import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { database } from '../Firebase';

const useStyles = makeStyles({
    like: {
        color: '#e74c3c',
        cursor: 'pointer'
    },
    unlike: {
        color: 'white',
        cursor: 'pointer'
    }
})

// userData and postData are props 
function Likes({ userData = null, postData = null }) {
    // User has liked or not
    const [like, setLike] = useState(null);
    const classes = useStyles();

    // If we have use useEffect with empty array variation it will act as componentDidMount it will runs only after the first render 
    // Suppose if the user has liked the post the changes will not reflect the onSnapshot method will run as the data in post is changed
    // It will rerender the post as the post has rerendered the likes will also rerender but the like have useEffect as empty dependency it will not rerender again
    // so the post liked by the use will not be shown as liked insted if the user reload the post page it will show the post as liked post
    // useEffect(() => {

    // }, [])

    // So to overcome above problem we have use useEffect with dependency array on post as the changes in the post reflects the useEffect will run again as it
    // depends upon the posts 

    useEffect(() => {
        let check = postData.likes.includes(userData?.userId) ? true : false;
        setLike(check);
    }, [postData])

    const handleLike = async () => {
        if (like == true) {
            // Unlike
            // filter returns a new array so we don't need to do destructuring
            let uarr = postData.likes.filter(el => {
                // filtering the array to unliked posts array
                return el != userData.userId
            })
            // update the array of unlikes in the firebase database
            await database.posts.doc(postData.postId).update({
                // Here while updating the database in firebase we don't have to do the destructuring and spred the arry
                // Because the filter method gives the new array so we can update that array to the firebase database
                likes: uarr
            })

        } else {
            // Like
            // add the liked post in the liked array
            let uarr = [...postData.likes, userData.userId];
            // updating in the database
            await database.posts.doc(postData.postId).update({
                likes: uarr
            })
        }
    }

    return (
        <div>
            {
                like != null ? <>
                    {/* Styling the post dialog */}
                    {like == false ? <FavoriteIcon className={`${classes.unlike} icon-styling`} onClick={handleLike} /> :
                        <FavoriteIcon className={`${classes.like} icon-styling`} onClick={handleLike} />}
                </>
                    : <></>
            }
        </div>
    )
}

export default Likes
