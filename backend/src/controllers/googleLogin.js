import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user);
  } catch (error) {
    console.error(error.message);
  }
};  