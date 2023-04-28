import { authentication } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { goToRoute } from "./NavigationService";

export const createUser = (email, password) => {
  const authInstance = authentication;

  createUserWithEmailAndPassword(authInstance, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export const login = (email, password) => {
  const authInstance = authentication;

  signInWithEmailAndPassword(authInstance, "frederiklandtved@hotmail.dk", "Hej123")
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      goToRoute("/");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export const logOut = () => {
  const authInstance = authentication;

  signOut(authInstance).then(() => {
    // Sign-out successful.
    goToRoute("login");
  }).catch((error) => {
    // An error happened.
  });
}

