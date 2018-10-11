
declare var firebase;

/**
 * Firebase keys and api configs
 */
export const FIREBASE_CONF = {
    apiKey: "AIzaSyD1853UjdHC6A9E9Ykfyvd936HZpGPIK6M",
    authDomain: "treasured-discoveries.firebaseapp.com",
    databaseURL: "https://treasured-discoveries.firebaseio.com",
    projectId: "treasured-discoveries",
    storageBucket: "",
    messagingSenderId: "183572056148"
}

export default !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONF) : firebase.app();