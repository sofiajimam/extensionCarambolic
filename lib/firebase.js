import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const signInWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  if (!auth || !provider) {
    console.error("Firebase auth or GoogleAuthProvider is undefined");
    return;
  }

  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("RESULT INSIDE");
      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("ERROR INSIDE");
      console.error(error);
    });
};
