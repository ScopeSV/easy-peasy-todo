import firebase from 'firebase'

interface IConfig {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string

}
const firebaseConfig: IConfig = {
    apiKey: "AIzaSyCj9fHPqOGVKAgyf7Oh3rcJW1scSDh3XR0",
    authDomain: "easy-peasy-e3227.firebaseapp.com",
    projectId: "easy-peasy-e3227",
    storageBucket: "easy-peasy-e3227.appspot.com",
    messagingSenderId: "914228046352",
    appId: "1:914228046352:web:dcfd1cd8904e6a6a807895"
}
try {
    firebase.initializeApp(firebaseConfig)
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const fire = firebase

export const db = fire.firestore()
export {
    fire,
}