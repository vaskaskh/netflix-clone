import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const Config = {
    apiKey: "AIzaSyC1bvpf4yePTVvqTfd5I8VLWmVpk5JalXo",
    authDomain: "netflix-clone-app1.firebaseapp.com",
    databaseURL: "https://netflix-clone-app1.firebaseio.com",
    projectId: "netflix-clone-app1",
    storageBucket: "netflix-clone-app1.appspot.com",
    messagingSenderId: "569833357800",
    appId: "1:569833357800:web:5e00e24cdf7fb75e0ee45d",
    measurementId: "G-DKFQNBVSKQ"
};


firebase.initializeApp(Config)
export default firebase;


export const auth  = firebase.auth();

