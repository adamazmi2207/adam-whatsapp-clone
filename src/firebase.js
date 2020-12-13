import Firebase from "firebase/app"


const firebaseConfig = {
    apiKey: process.env.ADAM_WHATSAPP_REACT_CLONE_API_KEY,
    authDomain: process.env.ADAM_WHATSAPP_REACT_CLONE_AUTH_DOMAIN,
    projectId: process.env.ADAM_WHATSAPP_REACT_CLONE_PROJECT_ID,
    storageBucket:process.env.ADAM_WHATSAPP_REACT_CLONE_STORAGE_BUCKET,
    messagingSenderId:process.env.ADAM_WHATSAPP_REACT_CLONE_MESSAGING_SENDER_ID,
    appId: process.env.ADAM_WHATSAPP_REACT_CLONE_APP_ID
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const firestore = firebaseApp.firestore()
  const auth = firebase.auth()
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  export{auth, googleProvider}
  export default firestore

