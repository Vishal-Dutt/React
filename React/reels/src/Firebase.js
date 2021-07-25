import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyBw8VwzlbgTHVTvAZdnM4U47f7mbkk9CGk",
        authDomain: "reels-8c138.firebaseapp.com",
        projectId: "reels-8c138",
        storageBucket: "reels-8c138.appspot.com",
        messagingSenderId: "761964607542",
        appId: "1:761964607542:web:3f5f5d36cafada55378097"
    }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
// Exporting/exposing only requried collections
export const database = {
    // To stroe data we have to create a collection to maake collection require collection object 
    // Exporting database object in this we have already created a collection for the user
    users: firestore.collection('users'),
    // Post database
    posts: firestore.collection('posts'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp  // current time 

}

export const storage = firebase.storage();
// export default firebase;