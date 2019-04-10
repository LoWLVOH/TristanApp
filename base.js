import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxVghO48QKqtLVQkXDGllKmeko7QQrRac",
    authDomain: "tristanapp-355c9.firebaseapp.com",
    databaseURL: "https://tristanapp-355c9.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base