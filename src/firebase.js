import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC9UuqipBkt3u3XufwY_vVeXjDbZpHx1MU",
    authDomain: "mahjongscores-3a1cb.firebaseapp.com",
    databaseURL: "https://mahjongscores-3a1cb.firebaseio.com",
    projectId: "mahjongscores-3a1cb",
    storageBucket: "mahjongscores-3a1cb.appspot.com",
    messagingSenderId: "656166531709"
};

firebase.initializeApp(config);

export default firebase;
