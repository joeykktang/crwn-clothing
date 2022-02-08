import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDWdfUaUgs_eEQC_dAfQUq3UQjbduSlwmY",
    authDomain: "crwn-db-2de86.firebaseapp.com",
    projectId: "crwn-db-2de86",
    storageBucket: "crwn-db-2de86.appspot.com",
    messagingSenderId: "425902448249",
    appId: "1:425902448249:web:9b6da6cb3d700595a1fea8",
    measurementId: "G-0CRP833B43"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 