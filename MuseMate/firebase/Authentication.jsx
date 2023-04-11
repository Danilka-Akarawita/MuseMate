import { app } from "./init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signupAuth = async (username,password,email,mobile) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      mobile
    );
    console.log(userCredentials);
    
  } catch (error) {
    console.log(error.message);
  }
};

export const signInAuth = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials.user.uid);
      return userCredentials.user.uid;
    } catch (error) {
      console.log(error);
    }
  };

  export const signOutCashier = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const googleSignIn = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };