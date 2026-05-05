import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.js";

const login = async (email, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);

    if (!userCred.user.emailVerified) {
      throw new Error("EMAIL NOT VERIFIED");
    }

  } catch (err) {
    throw err;
  }
};

export default login;