import { authentication } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { goToRoute } from "./NavigationService";

export const createUser = (email, password, name) => {
  const authInstance = authentication;

  createUserWithEmailAndPassword(authInstance, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      updateProfile(authInstance.currentUser, {
        displayName: name
      }).then(() => {
        goToRoute("/");
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export const login = (email, password) => {
  const authInstance = authentication;

  signInWithEmailAndPassword(authInstance, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user){
        goToRoute("/");
      }
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
}

export const logOut = () => {
  const authInstance = authentication;

  signOut(authInstance).then(() => {
    // Sign-out successful.
    goToRoute("auth");
  }).catch((error) => {
    // An error happened.
  });
}

