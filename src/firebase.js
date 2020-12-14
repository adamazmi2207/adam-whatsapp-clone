import firebase from "firebase/app"
import 'firebase/firestore'
import '@firebase/auth'




// const firebaseConfig = {
//   apiKey: process.env.ADAM_WHATSAPP_REACT_CLONE_API_KEY,
//   authDomain: process.env.ADAM_WHATSAPP_REACT_CLONE_AUTH_DOMAIN,
//   projectId: process.env.ADAM_WHATSAPP_REACT_CLONE_PROJECT_ID,
//   storageBucket: process.env.ADAM_WHATSAPP_REACT_CLONE_STORAGE_BUCKET,
//   messagingSenderId: process.env.ADAM_WHATSAPP_REACT_CLONE_MESSAGING_SENDER_ID,
//   appId: process.env.ADAM_WHATSAPP_REACT_CLONE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBlkFu-rkWLY-yrhsx0C1VQ2Vf_Nb2A0lU",
  authDomain: "whatsapp-clone-ad646.firebaseapp.com",
  projectId: "whatsapp-clone-ad646",
  storageBucket: "whatsapp-clone-ad646.appspot.com",
  messagingSenderId: "1010149062905",
  appId: "1:1010149062905:web:01dcd226116c1388178a28"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestoreDb = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider }
export default firestoreDb

